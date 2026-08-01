import assert from 'node:assert/strict';
import { isAvatarOptionUnlocked } from '../src/data/avatar.js';
import {
  applyChallengeScore,
  challengeCatalogIds,
  getChallengeIdsForCompletedIslands,
  migrateScoredChallengeIds,
} from '../src/data/challengeScoring.js';
import { challengeSets, getChallengeSetByEmotionId } from '../src/data/challenges.js';
import { initialPlayerState, normalizePlayerState } from '../src/data/player.js';
import {
  buildProgressBackup,
  parseProgressBackupText,
  progressStorageKeys,
  progressTransferVersion,
  writeProgressBackupToStorage,
} from '../src/data/progressTransfer.js';
import { getRewardCards } from '../src/data/rewards.js';
import { getPlayerLevel } from '../src/utils/progress.js';

function createLocalStorage() {
  const store = new Map();

  return {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
    key(index) {
      return [...store.keys()][index] || null;
    },
    clear() {
      store.clear();
    },
    get length() {
      return store.size;
    },
  };
}

global.window = {
  localStorage: createLocalStorage(),
};

const ternuraChallenges = getChallengeSetByEmotionId('ternura').challenges;
const admiracionChallenges = getChallengeSetByEmotionId('admiracion').challenges;
const firstChallenge = ternuraChallenges[0];
const secondChallenge = ternuraChallenges[1];
const reportedChallenge = admiracionChallenges[0];

const rawChallengeIds = Object.values(challengeSets).flatMap((challengeSet) =>
  challengeSet.challenges.map((challenge) => challenge.id),
);
assert.equal(challengeCatalogIds.length > 0, true);
assert.equal(new Set(rawChallengeIds).size, rawChallengeIds.length);
assert.equal(challengeCatalogIds.length, rawChallengeIds.length);

const basePlayer = {
  ...initialPlayerState,
  hasStarted: true,
  studentName: 'Prueba',
  points: 90,
  unlockedIslands: ['ternura', 'admiracion'],
  completedStories: ['ternura'],
};

const firstResolution = applyChallengeScore(basePlayer, firstChallenge.id, firstChallenge.points);
assert.equal(firstResolution.awarded, true);
assert.equal(firstResolution.player.points, 90 + firstChallenge.points);
assert.deepEqual(firstResolution.player.scoredChallengeIds, [firstChallenge.id]);

const immediateReplay = applyChallengeScore(
  firstResolution.player,
  firstChallenge.id,
  firstChallenge.points,
);
assert.equal(immediateReplay.awarded, false);
assert.equal(immediateReplay.player.points, firstResolution.player.points);
assert.deepEqual(immediateReplay.player.scoredChallengeIds, [firstChallenge.id]);

let rapidPlayer = { ...basePlayer, points: 40 };
let rapidAwards = 0;
for (let eventIndex = 0; eventIndex < 2; eventIndex += 1) {
  const result = applyChallengeScore(rapidPlayer, secondChallenge.id, secondChallenge.points);
  rapidPlayer = result.player;
  rapidAwards += result.awarded ? 1 : 0;
}
assert.equal(rapidAwards, 1);
assert.equal(rapidPlayer.points, 40 + secondChallenge.points);
assert.equal(
  rapidPlayer.scoredChallengeIds.filter((challengeId) => challengeId === secondChallenge.id).length,
  1,
);

const invalidChallenge = applyChallengeScore(rapidPlayer, 'reto_inexistente', 500);
assert.equal(invalidChallenge.awarded, false);
assert.equal(invalidChallenge.player.points, rapidPlayer.points);
assert.equal(invalidChallenge.player.scoredChallengeIds.includes('reto_inexistente'), false);

window.localStorage.clear();
const reloadedPlayer = normalizePlayerState(JSON.parse(JSON.stringify(firstResolution.player)));
assert.equal(reloadedPlayer.points, firstResolution.player.points);
assert.equal(reloadedPlayer.scoredChallengeIds.includes(firstChallenge.id), true);
assert.equal(
  applyChallengeScore(reloadedPlayer, firstChallenge.id, firstChallenge.points).awarded,
  false,
);

window.localStorage.clear();
window.localStorage.setItem(
  'informe_admiracion_123',
  JSON.stringify({
    id: 'informe_admiracion_123',
    emotionId: 'admiracion',
    answers: [{ id: reportedChallenge.id }, { id: 'reto_inexistente' }],
  }),
);
const historicalPoints = 777;
const migratedLegacyPlayer = normalizePlayerState({
  ...initialPlayerState,
  points: historicalPoints,
  completedChallengeIds: ['ternura'],
});
const ternuraChallengeIds = getChallengeIdsForCompletedIslands(['ternura']);
assert.equal(migratedLegacyPlayer.points, historicalPoints);
assert.equal(
  ternuraChallengeIds.every((challengeId) =>
    migratedLegacyPlayer.scoredChallengeIds.includes(challengeId),
  ),
  true,
);
assert.equal(migratedLegacyPlayer.scoredChallengeIds.includes(reportedChallenge.id), true);
assert.equal(migratedLegacyPlayer.scoredChallengeIds.includes('reto_inexistente'), false);

const directMigration = migrateScoredChallengeIds({
  scoredChallengeIds: [firstChallenge.id, 'reto_inexistente'],
  completedChallengeIds: ['admiracion'],
  challengeReports: [],
});
assert.equal(directMigration.includes('reto_inexistente'), false);
assert.equal(
  admiracionChallenges.every((challenge) => directMigration.includes(challenge.id)),
  true,
);

window.localStorage.clear();
const transferablePlayer = {
  ...basePlayer,
  points: 120,
  scoredChallengeIds: [firstChallenge.id],
};
const versionTwoBackup = buildProgressBackup(transferablePlayer);
assert.equal(versionTwoBackup.version, progressTransferVersion);
assert.equal(progressTransferVersion, 2);
assert.equal(versionTwoBackup.data.player.scoredChallengeIds.includes(firstChallenge.id), true);

const parsedVersionTwo = parseProgressBackupText(JSON.stringify(versionTwoBackup));
assert.equal(parsedVersionTwo.ok, true);
assert.equal(parsedVersionTwo.backup.data.player.scoredChallengeIds.includes(firstChallenge.id), true);
const restoredVersionTwo = writeProgressBackupToStorage(parsedVersionTwo.backup);
assert.equal(
  JSON.parse(window.localStorage.getItem(progressStorageKeys.player)).scoredChallengeIds.includes(
    firstChallenge.id,
  ),
  true,
);
assert.equal(
  applyChallengeScore(restoredVersionTwo.player, firstChallenge.id, firstChallenge.points).awarded,
  false,
);

const versionOneBackup = structuredClone(versionTwoBackup);
versionOneBackup.version = 1;
delete versionOneBackup.data.player.scoredChallengeIds;
versionOneBackup.data.player.points = 345;
versionOneBackup.data.player.completedChallengeIds = [];
versionOneBackup.data.legacy.completedChallengeIds = ['admiracion'];
versionOneBackup.data.challengeReports = [
  {
    storageKey: 'informe_ternura_456',
    value: {
      id: 'informe_ternura_456',
      emotionId: 'ternura',
      answers: [{ id: firstChallenge.id }],
    },
  },
];
const parsedVersionOne = parseProgressBackupText(JSON.stringify(versionOneBackup));
assert.equal(parsedVersionOne.ok, true);
assert.equal(parsedVersionOne.backup.version, 2);
assert.equal(parsedVersionOne.backup.data.player.points, 345);
assert.equal(parsedVersionOne.backup.data.player.scoredChallengeIds.includes(firstChallenge.id), true);
assert.equal(
  admiracionChallenges.every((challenge) =>
    parsedVersionOne.backup.data.player.scoredChallengeIds.includes(challenge.id),
  ),
  true,
);
assert.equal(
  applyChallengeScore(
    parsedVersionOne.backup.data.player,
    firstChallenge.id,
    firstChallenge.points,
  ).awarded,
  false,
);

const protectedPlayer = firstResolution.player;
const protectedSnapshot = {
  level: getPlayerLevel(protectedPlayer.points),
  rewardStates: getRewardCards(protectedPlayer).map((reward) => [reward.id, reward.unlocked]),
  avatarUnlocked: isAvatarOptionUnlocked({ requiredPoints: 100 }, protectedPlayer),
  unlockedIslands: protectedPlayer.unlockedIslands,
  completedStories: protectedPlayer.completedStories,
  achievements: protectedPlayer.achievements,
  ownedRewardIds: protectedPlayer.ownedRewardIds,
  avatar: protectedPlayer.avatar,
};
const protectedReplay = applyChallengeScore(
  protectedPlayer,
  firstChallenge.id,
  firstChallenge.points,
).player;
assert.deepEqual(
  {
    level: getPlayerLevel(protectedReplay.points),
    rewardStates: getRewardCards(protectedReplay).map((reward) => [reward.id, reward.unlocked]),
    avatarUnlocked: isAvatarOptionUnlocked({ requiredPoints: 100 }, protectedReplay),
    unlockedIslands: protectedReplay.unlockedIslands,
    completedStories: protectedReplay.completedStories,
    achievements: protectedReplay.achievements,
    ownedRewardIds: protectedReplay.ownedRewardIds,
    avatar: protectedReplay.avatar,
  },
  protectedSnapshot,
);

console.log('challenge scoring checks passed');

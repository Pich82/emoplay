import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { getChallengesByEmotionId } from '../src/data/challenges.js';
import { islandUnlockOrder } from '../src/data/islandProgression.js';
import {
  applyLoveFinaleCompletion,
  isLoveFinaleReady,
  loveCareScenario,
  loveCommitmentCatalog,
  loveFinaleAchievementId,
  loveFinaleChapters,
  loveFinalePointReward,
  loveFinaleRewardId,
  loveMessageStarters,
  loveScenarioCatalog,
  loveToolCatalog,
  normalizeLoveFinaleState,
} from '../src/data/loveFinale.js';
import { initialPlayerState } from '../src/data/player.js';
import { getStoryByEmotionId } from '../src/data/stories.js';

assert.equal(islandUnlockOrder.at(-2), 'culpa');
assert.equal(islandUnlockOrder.at(-1), 'amor');
assert.equal(loveFinaleChapters.length, 6);
assert.equal(loveScenarioCatalog.length, 4);
assert.equal(loveToolCatalog.length >= 8, true);
assert.equal(loveCommitmentCatalog.length >= 4, true);
assert.equal(loveMessageStarters.length >= 4, true);
assert.equal(getStoryByEmotionId('amor'), undefined);
assert.equal(getChallengesByEmotionId('amor').length, 0);

loveFinaleChapters.forEach((chapter) => {
  assert.equal(Boolean(chapter.title), true);
  assert.equal(Boolean(chapter.description), true);
  assert.equal(existsSync(`public${chapter.imageSrc}`), true);
});
assert.equal(existsSync('public/images/stories/amor/refugio-del-faro.jpg'), true);
assert.equal(existsSync('public/images/stories/amor/referencia-faro.jpg'), true);

loveScenarioCatalog.forEach((scenario) => {
  assert.equal(scenario.choices.length >= 3, true);
  scenario.choices.forEach((choice) => {
    assert.equal(Boolean(choice.feedback), true);
  });
});
assert.equal(loveCareScenario.choices.length >= 4, true);

const readyFinale = normalizeLoveFinaleState({
  started: true,
  chapterId: 'beacon',
  scenarioChoices: Object.fromEntries(
    loveScenarioCatalog.map((scenario) => [scenario.id, scenario.choices[0].id]),
  ),
  selectedToolIds: loveToolCatalog.slice(0, 3).map((tool) => tool.id),
  careChoiceId: loveCareScenario.choices[0].id,
  messageStarterId: loveMessageStarters[0].id,
  futureMessage: 'Puedo cuidarme y pedir ayuda.',
  careCommitmentId: loveCommitmentCatalog[0].id,
});

assert.equal(isLoveFinaleReady(readyFinale), true);
assert.equal(isLoveFinaleReady({}), false);

const invalidFinale = normalizeLoveFinaleState({
  chapterId: 'unknown',
  scenarioChoices: { space: 'unknown', unknown: 'respect-space' },
  selectedToolIds: ['unknown', ...loveToolCatalog.slice(0, 5).map((tool) => tool.id)],
  careChoiceId: 'unknown',
  messageStarterId: 'unknown',
  futureMessage: 'x'.repeat(400),
  careCommitmentId: 'unknown',
});
assert.equal(invalidFinale.chapterId, 'arrival');
assert.deepEqual(invalidFinale.scenarioChoices, {});
assert.equal(invalidFinale.selectedToolIds.length, 3);
assert.equal(invalidFinale.futureMessage.length, 280);
assert.equal(invalidFinale.careChoiceId, '');
assert.equal(invalidFinale.careCommitmentId, '');

const firstResult = applyLoveFinaleCompletion(
  {
    ...initialPlayerState,
    points: 325,
    unlockedIslands: [...islandUnlockOrder],
  },
  readyFinale,
  '2026-07-29T12:00:00.000Z',
);
assert.equal(firstResult.completed, true);
assert.equal(firstResult.firstCompletion, true);
assert.equal(firstResult.player.points, 325 + loveFinalePointReward);
assert.equal(firstResult.player.completedStories.includes('amor'), true);
assert.equal(firstResult.player.achievements.includes(loveFinaleAchievementId), true);
assert.equal(firstResult.player.ownedRewardIds.includes(loveFinaleRewardId), true);
assert.equal(firstResult.player.loveFinale.chapterId, 'refuge');

const replayResult = applyLoveFinaleCompletion(
  firstResult.player,
  {
    ...firstResult.player.loveFinale,
    chapterId: 'beacon',
  },
  '2026-07-30T12:00:00.000Z',
);
assert.equal(replayResult.completed, true);
assert.equal(replayResult.firstCompletion, false);
assert.equal(replayResult.player.points, firstResult.player.points);
assert.equal(
  replayResult.player.achievements.filter(
    (achievementId) => achievementId === loveFinaleAchievementId,
  ).length,
  1,
);
assert.equal(
  replayResult.player.ownedRewardIds.filter((rewardId) => rewardId === loveFinaleRewardId)
    .length,
  1,
);

console.log('love finale checks passed');

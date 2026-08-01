import { challengeSets } from './challenges.js';

const challengeEntries = Object.entries(challengeSets).flatMap(([islandId, challengeSet]) =>
  challengeSet.challenges.map((challenge) => ({
    challengeId: challenge.id,
    islandId,
  })),
);

const rawChallengeIds = challengeEntries.map((entry) => entry.challengeId);
const knownChallengeIds = new Set(rawChallengeIds);
const challengeIdsByIsland = new Map();

if (knownChallengeIds.size !== rawChallengeIds.length) {
  throw new Error('Los identificadores de retos deben ser unicos para proteger su puntuacion.');
}

challengeEntries.forEach(({ challengeId, islandId }) => {
  const islandChallengeIds = challengeIdsByIsland.get(islandId) || [];
  islandChallengeIds.push(challengeId);
  challengeIdsByIsland.set(islandId, islandChallengeIds);
});

function unique(values) {
  return [...new Set(values)];
}

function unwrapReport(report) {
  if (report?.value && typeof report.value === 'object' && !Array.isArray(report.value)) {
    return report.value;
  }

  return report;
}

export const challengeCatalogIds = Object.freeze([...knownChallengeIds]);

export function isKnownChallengeId(challengeId) {
  return knownChallengeIds.has(challengeId);
}

export function sanitizeScoredChallengeIds(challengeIds) {
  if (!Array.isArray(challengeIds)) {
    return [];
  }

  return unique(challengeIds.filter((challengeId) => isKnownChallengeId(challengeId)));
}

export function getChallengeIdsForCompletedIslands(completedChallengeIds) {
  if (!Array.isArray(completedChallengeIds)) {
    return [];
  }

  return unique(
    completedChallengeIds.flatMap((islandId) => challengeIdsByIsland.get(islandId) || []),
  );
}

export function getChallengeIdsFromReports(challengeReports) {
  if (!Array.isArray(challengeReports)) {
    return [];
  }

  return unique(
    challengeReports.flatMap((storedReport) => {
      const report = unwrapReport(storedReport);
      const answers = Array.isArray(report?.answers) ? report.answers : [];

      return answers
        .map((answer) => answer?.id)
        .filter((challengeId) => isKnownChallengeId(challengeId));
    }),
  );
}

export function migrateScoredChallengeIds({
  scoredChallengeIds,
  completedChallengeIds,
  challengeReports,
} = {}) {
  return unique([
    ...sanitizeScoredChallengeIds(scoredChallengeIds),
    ...getChallengeIdsFromReports(challengeReports),
    ...getChallengeIdsForCompletedIslands(completedChallengeIds),
  ]);
}

export function applyChallengeScore(player, challengeId, pointsDelta) {
  const scoredChallengeIds = migrateScoredChallengeIds({
    scoredChallengeIds: player?.scoredChallengeIds,
    completedChallengeIds: player?.completedChallengeIds,
  });
  const numericPointsDelta = pointsDelta;

  if (
    !isKnownChallengeId(challengeId) ||
    typeof numericPointsDelta !== 'number' ||
    !Number.isFinite(numericPointsDelta) ||
    scoredChallengeIds.includes(challengeId)
  ) {
    return {
      awarded: false,
      player: {
        ...player,
        scoredChallengeIds,
      },
    };
  }

  return {
    awarded: true,
    player: {
      ...player,
      points: Math.max(0, (Number(player?.points) || 0) + numericPointsDelta),
      scoredChallengeIds: [...scoredChallengeIds, challengeId],
    },
  };
}

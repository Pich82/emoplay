import { islandUnlockOrder } from './islandProgression.js';
import {
  initialLoveFinaleState,
  loveFinaleAchievementId,
  loveFinaleRewardId,
  normalizeLoveFinaleState,
} from './loveFinale.js';

export const initialPlayerState = {
  hasStarted: false,
  studentName: '',
  points: 0,
  completedChallenges: 0,
  completedChallengeIds: [],
  completedMiniGameIds: [],
  completedStories: [],
  achievements: [],
  ownedRewardIds: [],
  equippedRewardId: '',
  unlockedIslands: ['ternura'],
  className: '',
  loveFinale: initialLoveFinaleState,
  avatar: {
    face: 'sonrisa',
    color: 'coral',
    accessory: 'brujula',
  },
};

function readLegacyValue(key, fallbackValue) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

function readLegacyStories() {
  const stories = islandUnlockOrder;

  return stories.filter((storyId) => window.localStorage.getItem(`cuento_${storyId}_completado`) === 'true');
}

function readLegacyChallengeIds() {
  const challengeIds = islandUnlockOrder.filter((islandId) => islandId !== 'amor');

  return challengeIds.filter(
    (challengeId) =>
      window.localStorage.getItem(`reto_${challengeId}_completado`) === 'true' ||
      window.localStorage.getItem(`reto_demo_${challengeId}_ultimo`),
  );
}

function readLegacyMiniGameIds() {
  const miniGameIds = ['calma', 'empatia'];

  return miniGameIds.filter(
    (miniGameId) => window.localStorage.getItem(`minijuego_${miniGameId}_completado`) === 'true',
  );
}

function mergeUnique(values) {
  return [...new Set(values.filter(Boolean))];
}

export function normalizePlayerState(player) {
  const legacyPoints = readLegacyValue('emoplay_puntos', 0);
  const legacyChallenges = readLegacyValue('emoplay_retosCompletados', 0);
  const legacyCompletedIslands = readLegacyValue('islasCompletadas', []);
  const legacyStories = readLegacyStories();
  const storedStories = player?.completedStories || [];
  const hasStoredLoveFinale = Boolean(
    player?.loveFinale &&
      typeof player.loveFinale === 'object' &&
      !Array.isArray(player.loveFinale),
  );
  const storedLoveFinale = normalizeLoveFinaleState(player?.loveFinale);
  const completedChallengeIds = mergeUnique([
    ...(player?.completedChallengeIds || []),
    ...readLegacyChallengeIds(),
  ]);
  const completedMiniGameIds = mergeUnique([
    ...(player?.completedMiniGameIds || []),
    ...readLegacyMiniGameIds(),
  ]);
  const allCompletedStories = mergeUnique([
    ...storedStories,
    ...legacyStories,
    ...(storedLoveFinale.completed ? ['amor'] : []),
  ]);
  const loveFinale = {
    ...storedLoveFinale,
    completed: storedLoveFinale.completed || allCompletedStories.includes('amor'),
    started:
      storedLoveFinale.started ||
      storedLoveFinale.completed ||
      allCompletedStories.includes('amor'),
    chapterId:
      !hasStoredLoveFinale && allCompletedStories.includes('amor')
        ? 'refuge'
        : storedLoveFinale.chapterId,
  };
  const storyUnlockedIslands = islandUnlockOrder
    .slice(0, -1)
    .map((storyId, index) =>
      allCompletedStories.includes(storyId) ? islandUnlockOrder[index + 1] : null,
    );
  const unlockedIslands = mergeUnique([
    ...initialPlayerState.unlockedIslands,
    ...(player?.unlockedIslands || []),
    ...legacyCompletedIslands,
    ...storyUnlockedIslands,
  ]);
  const completedStories = allCompletedStories;
  const derivedAchievements = mergeUnique([
    ...completedStories.map((storyId) => `cuento_${storyId}`),
    ...completedChallengeIds.map((challengeId) => `reto_${challengeId}`),
    ...completedMiniGameIds.map((miniGameId) => `minijuego_${miniGameId}`),
    ...islandUnlockOrder
      .slice(1)
      .map((islandId) =>
        unlockedIslands.includes(islandId) ? `desbloqueo_${islandId}` : null,
      ),
    loveFinale.completed ? loveFinaleAchievementId : null,
  ]);

  return {
    ...initialPlayerState,
    ...player,
    points: Math.max(player?.points || 0, legacyPoints),
    completedChallengeIds,
    completedMiniGameIds,
    completedChallenges: Math.max(
      player?.completedChallenges || 0,
      legacyChallenges,
      completedChallengeIds.length,
    ),
    avatar: {
      ...initialPlayerState.avatar,
      ...(player?.avatar || {}),
    },
    achievements: mergeUnique([...(player?.achievements || []), ...derivedAchievements]),
    ownedRewardIds: mergeUnique([
      ...(player?.ownedRewardIds || []),
      loveFinale.completed ? loveFinaleRewardId : null,
    ]),
    equippedRewardId: player?.equippedRewardId || '',
    completedStories,
    unlockedIslands,
    loveFinale,
  };
}

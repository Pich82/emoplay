import { islandUnlockOrder } from './islandProgression.js';

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
  const stories = [
    'ternura',
    'admiracion',
    'afectividad',
    'alegria',
    'calma',
    'miedo',
    'enfado',
    'tristeza',
    'frustracion',
    'verguenza',
    'empatia',
    'gratitud',
  ];

  return stories.filter((storyId) => window.localStorage.getItem(`cuento_${storyId}_completado`) === 'true');
}

function readLegacyChallengeIds() {
  const challengeIds = [
    'ternura',
    'admiracion',
    'afectividad',
    'alegria',
    'calma',
    'miedo',
    'enfado',
    'tristeza',
    'frustracion',
    'verguenza',
    'empatia',
    'gratitud',
  ];

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
  const completedChallengeIds = mergeUnique([
    ...(player?.completedChallengeIds || []),
    ...readLegacyChallengeIds(),
  ]);
  const completedMiniGameIds = mergeUnique([
    ...(player?.completedMiniGameIds || []),
    ...readLegacyMiniGameIds(),
  ]);
  const allCompletedStories = mergeUnique([...storedStories, ...legacyStories]);
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
    ownedRewardIds: mergeUnique(player?.ownedRewardIds || []),
    equippedRewardId: player?.equippedRewardId || '',
    completedStories,
    unlockedIslands,
  };
}

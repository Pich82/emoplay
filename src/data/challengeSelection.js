import { getChallengeSetByEmotionId } from './challenges.js';
import { emotions } from './emotions.js';
import { getOrderedMapEmotions } from './islandProgression.js';
import { getMiniGameByEmotionId } from './miniGames.js';

function includesValue(values = [], value) {
  return Array.isArray(values) && values.includes(value);
}

function getChallengeStatus({ emotion, challengeSet, player }) {
  const isUnlocked = includesValue(player?.unlockedIslands, emotion.id);
  const storyCompleted = includesValue(player?.completedStories, emotion.id);
  const challengeCompleted = includesValue(player?.completedChallengeIds, emotion.id);
  const miniGame = getMiniGameByEmotionId(emotion.id);
  const hasMiniGame = Boolean(miniGame);
  const miniGameCompleted = includesValue(player?.completedMiniGameIds, emotion.id);

  if (!challengeSet) {
    return {
      id: 'soon',
      label: 'Próximamente',
      helper: 'Esta isla todavía no tiene retos completos.',
      canPlay: false,
      canReadStory: isUnlocked && !storyCompleted,
    };
  }

  if (!isUnlocked) {
    return {
      id: 'locked',
      label: 'Isla bloqueada',
      helper: emotion.unlockHint,
      canPlay: false,
      canReadStory: false,
    };
  }

  if (!storyCompleted) {
    return {
      id: 'story',
      label: 'Falta leer el cuento',
      helper: 'Lee el cuento de esta isla para desbloquear sus retos.',
      canPlay: false,
      canReadStory: true,
      canPlayMiniGame: false,
    };
  }

  if (hasMiniGame && !miniGameCompleted) {
    return {
      id: 'minigame',
      label: 'Falta minijuego',
      helper: miniGame.lockedHelper,
      canPlay: false,
      canReadStory: false,
      canPlayMiniGame: true,
    };
  }

  if (challengeCompleted) {
    return {
      id: 'completed',
      label: 'Completado',
      helper: 'Puedes rejugar estos retos para practicar de nuevo.',
      canPlay: true,
      canReadStory: false,
      canPlayMiniGame: false,
    };
  }

  return {
    id: 'available',
    label: 'Disponible',
    helper: 'Reto abierto para jugar ahora.',
    canPlay: true,
    canReadStory: false,
    canPlayMiniGame: false,
  };
}

export function getChallengeSelectionItems(player) {
  return getOrderedMapEmotions(emotions).map((emotion) => {
    const challengeSet = getChallengeSetByEmotionId(emotion.id);
    const status = getChallengeStatus({ emotion, challengeSet, player });

    return {
      emotion,
      challengeSet,
      status,
      totalChallenges: challengeSet?.challenges.length || 0,
      pointsAvailable:
        challengeSet?.challenges.reduce((total, challenge) => total + challenge.points, 0) || 0,
    };
  });
}

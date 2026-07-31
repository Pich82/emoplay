import { getChallengesByEmotionId } from './challenges.js';
import { getEmotionById } from './emotions.js';
import { islandUnlockOrder } from './islandProgression.js';
import { getMiniGameByEmotionId } from './miniGames.js';
import { getStoryByEmotionId } from './stories.js';

function includesValue(values = [], value) {
  return Array.isArray(values) && values.includes(value);
}

export function getAdventureNextStep(player) {
  const unlockedIslands = player?.unlockedIslands || [];
  const completedStories = player?.completedStories || [];
  const completedChallengeIds = player?.completedChallengeIds || [];
  const completedMiniGameIds = player?.completedMiniGameIds || [];

  for (const islandId of islandUnlockOrder) {
    const emotion = getEmotionById(islandId);

    if (!emotion) {
      continue;
    }

    const isUnlocked = includesValue(unlockedIslands, islandId);
    const storyCompleted = includesValue(completedStories, islandId);
    const challengeCompleted = includesValue(completedChallengeIds, islandId);
    const miniGameCompleted = includesValue(completedMiniGameIds, islandId);
    const challenges = getChallengesByEmotionId(islandId);
    const miniGame = getMiniGameByEmotionId(islandId);
    const story = getStoryByEmotionId(islandId);

    if (islandId === 'amor' && isUnlocked && !storyCompleted) {
      return {
        type: 'finale',
        tone: 'complete',
        icon: '\u{1F5FC}',
        eyebrow: 'Destino final desbloqueado',
        title: 'Encender el Faro de los Vínculos Seguros',
        description:
          'Reúne las herramientas de todo el archipiélago en una experiencia final personalizada.',
        actionLabel: 'Entrar en Isla Amor',
        helper: 'No hay respuestas castigadas: podrás explorar, reconsiderar y elegir tus recursos.',
        islandId,
        emotion,
      };
    }

    if (isUnlocked && story && !storyCompleted) {
      return {
        type: 'story',
        tone: 'story',
        icon: '\u{1F4D6}',
        eyebrow: 'Siguiente paso',
        title: `Leer el cuento de ${emotion.name}`,
        description: `Empieza por "${emotion.storyTitle}" para desbloquear los retos de esta isla.`,
        actionLabel: 'Leer cuento',
        helper: 'Cuando llegues a la ultima pagina, el progreso quedara guardado.',
        islandId,
        emotion,
      };
    }

    if (miniGame && isUnlocked && storyCompleted && !miniGameCompleted) {
      return {
        type: 'minigame',
        tone: 'minigame',
        icon: miniGame.icon,
        eyebrow: 'Minijuego desbloqueado',
        title: miniGame.title,
        description: miniGame.description,
        actionLabel: 'Jugar minijuego',
        helper: miniGame.completionHelper,
        islandId,
        emotion,
      };
    }

    if (isUnlocked && storyCompleted && challenges.length > 0 && !challengeCompleted) {
      return {
        type: 'challenge',
        tone: 'challenge',
        icon: '\u{1F3AF}',
        eyebrow: 'Reto desbloqueado',
        title: `Jugar los retos de ${emotion.name}`,
        description: `Ya puedes practicar con ${challenges.length} retos y crear un informe para el panel docente.`,
        actionLabel: 'Jugar retos',
        helper: 'Los retos ayudan a ganar puntos y desbloquear recompensas educativas.',
        islandId,
        emotion,
      };
    }
  }

  const finalEmotion = getEmotionById('amor');

  return {
    type: 'complete',
    tone: 'complete',
    icon: '\u{1F5FC}',
    eyebrow: 'Archipiélago completado',
    title: 'Tu Faro de los Vínculos Seguros está encendido',
    description:
      'El Refugio del Faro permanece abierto para recordar tus herramientas, tu compromiso y todo el recorrido.',
    actionLabel: 'Volver al refugio',
    helper: 'Puedes revisar tus elecciones sin perder el progreso ni repetir recompensas.',
    islandId: 'amor',
    emotion: finalEmotion,
  };
}

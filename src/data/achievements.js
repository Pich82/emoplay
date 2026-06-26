import { islandUnlockOrder } from './islandProgression.js';

export const achievementCatalog = [
  {
    id: 'cuento_ternura',
    emotionId: 'ternura',
    type: 'cuento',
    icon: '\u{1F496}',
    title: 'Corazón Tierno',
    description: 'Completaste el cuento de Ternura y reconoces gestos de cuidado.',
    color: '#ff7da8',
  },
  {
    id: 'desbloqueo_admiracion',
    emotionId: 'admiracion',
    type: 'mapa',
    icon: '\u2728',
    title: 'Nueva Ruta Brillante',
    description: 'Desbloqueaste la Isla Admiración desde el mapa emocional.',
    color: '#f7b731',
  },
  {
    id: 'reto_ternura',
    emotionId: 'ternura',
    type: 'reto',
    icon: '\u{1F3AF}',
    title: 'Cuidador Experto',
    description: 'Completaste los retos de Ternura y generaste tu informe.',
    color: '#ff7da8',
  },
  {
    id: 'cuento_admiracion',
    emotionId: 'admiracion',
    type: 'cuento',
    icon: '\u{1F31F}',
    title: 'Mirada Brillante',
    description: 'Completaste el cuento de Admiración y aprendiste a valorar lo especial.',
    color: '#f7b731',
  },
  {
    id: 'reto_admiracion',
    emotionId: 'admiracion',
    type: 'reto',
    icon: '\u{1F52D}',
    title: 'Explorador de Estrellas',
    description: 'Completaste los retos de Admiración y practicaste palabras de reconocimiento.',
    color: '#f7b731',
  },
  {
    id: 'desbloqueo_alegria',
    emotionId: 'alegria',
    type: 'mapa',
    icon: '\u{1F60A}',
    title: 'Ruta Sonriente',
    description: 'Desbloqueaste la Isla Alegría desde el mapa emocional.',
    color: '#ffd43b',
  },
  {
    id: 'cuento_alegria',
    emotionId: 'alegria',
    type: 'cuento',
    icon: '\u{1FA81}',
    title: 'Cometa Sonriente',
    description: 'Completaste el cuento de Alegría y aprendiste a compartir buenos momentos.',
    color: '#ffd43b',
  },
  {
    id: 'reto_alegria',
    emotionId: 'alegria',
    type: 'reto',
    icon: '\u{1F389}',
    title: 'Celebración Cuidadosa',
    description: 'Completaste los retos de Alegría y practicaste formas respetuosas de celebrar.',
    color: '#ffd43b',
  },
  {
    id: 'desbloqueo_calma',
    emotionId: 'calma',
    type: 'mapa',
    icon: '\u{1F30A}',
    title: 'Ruta Serena',
    description: 'Desbloqueaste la Isla Calma desde el mapa emocional.',
    color: '#5bd3c7',
  },
  {
    id: 'cuento_calma',
    emotionId: 'calma',
    type: 'cuento',
    icon: '\u{1F41A}',
    title: 'Bahía Serena',
    description: 'Completaste el cuento de Calma y aprendiste a hacer pausas con sentido.',
    color: '#5bd3c7',
  },
  {
    id: 'minijuego_calma',
    emotionId: 'calma',
    type: 'minijuego',
    icon: '\u{1F30A}',
    title: 'Respiración Serena',
    description: 'Completaste Respira con la ola y practicaste una pausa guiada.',
    color: '#5bd3c7',
  },
  {
    id: 'reto_calma',
    emotionId: 'calma',
    type: 'reto',
    icon: '\u{1F9D8}',
    title: 'Guía de Pausa Tranquila',
    description: 'Completaste los retos de Calma y practicaste respiración y equilibrio.',
    color: '#5bd3c7',
  },
  {
    id: 'desbloqueo_miedo',
    emotionId: 'miedo',
    type: 'mapa',
    icon: '\u{1F526}',
    title: 'Ruta de la Linterna',
    description: 'Desbloqueaste la Isla Miedo desde el mapa emocional.',
    color: '#8e7cc3',
  },
  {
    id: 'cuento_miedo',
    emotionId: 'miedo',
    type: 'cuento',
    icon: '\u{1F526}',
    title: 'Linterna Valiente',
    description: 'Completaste el cuento de Miedo y aprendiste a pedir ayuda con seguridad.',
    color: '#8e7cc3',
  },
  {
    id: 'reto_miedo',
    emotionId: 'miedo',
    type: 'reto',
    icon: '\u{1F6E1}\uFE0F',
    title: 'Plan de Seguridad',
    description: 'Completaste los retos de Miedo y practicaste señales, apoyo y pasos seguros.',
    color: '#8e7cc3',
  },
  {
    id: 'desbloqueo_enfado',
    emotionId: 'enfado',
    type: 'mapa',
    icon: '\u{1F30B}',
    title: 'Ruta del Volcán',
    description: 'Desbloqueaste la Isla Enfado desde el mapa emocional.',
    color: '#ff6b4a',
  },
  {
    id: 'cuento_enfado',
    emotionId: 'enfado',
    type: 'cuento',
    icon: '\u{1F30B}',
    title: 'Volcán que Habla',
    description: 'Completaste el cuento de Enfado y aprendiste a expresar límites sin dañar.',
    color: '#ff6b4a',
  },
  {
    id: 'reto_enfado',
    emotionId: 'enfado',
    type: 'reto',
    icon: '\u{1F6A6}',
    title: 'Semáforo del Enfado',
    description: 'Completaste los retos de Enfado y practicaste parar, nombrar y pedir ayuda.',
    color: '#ff6b4a',
  },
  {
    id: 'desbloqueo_tristeza',
    emotionId: 'tristeza',
    type: 'mapa',
    icon: '\u{1F327}\uFE0F',
    title: 'Ruta de la Lluvia',
    description: 'Desbloqueaste la Isla Tristeza desde el mapa emocional.',
    color: '#6aa7e8',
  },
  {
    id: 'cuento_tristeza',
    emotionId: 'tristeza',
    type: 'cuento',
    icon: '\u{1F327}\uFE0F',
    title: 'Lluvia que Escucha',
    description: 'Completaste el cuento de Tristeza y aprendiste a pedir consuelo.',
    color: '#6aa7e8',
  },
  {
    id: 'reto_tristeza',
    emotionId: 'tristeza',
    type: 'reto',
    icon: '\u{1F499}',
    title: 'Acompañar con Cuidado',
    description: 'Completaste los retos de Tristeza y practicaste pedir apoyo y acompañar.',
    color: '#6aa7e8',
  },
  {
    id: 'desbloqueo_frustracion',
    emotionId: 'frustracion',
    type: 'mapa',
    icon: '\u{1F9E9}',
    title: 'Ruta del Puzle',
    description: 'Desbloqueaste la Isla Frustración desde el mapa emocional.',
    color: '#f368e0',
  },
  {
    id: 'cuento_frustracion',
    emotionId: 'frustracion',
    type: 'cuento',
    icon: '\u{1F9E9}',
    title: 'Puzle Paciente',
    description: 'Completaste el cuento de Frustración y aprendiste a volver a intentarlo.',
    color: '#f368e0',
  },
  {
    id: 'reto_frustracion',
    emotionId: 'frustracion',
    type: 'reto',
    icon: '\u{1F501}',
    title: 'Otro Intento',
    description: 'Completaste los retos de Frustración y practicaste pausa, ayuda y estrategia.',
    color: '#f368e0',
  },
  {
    id: 'desbloqueo_verguenza',
    emotionId: 'verguenza',
    type: 'mapa',
    icon: '\u{1F633}',
    title: 'Ruta de la Voz Amable',
    description: 'Desbloqueaste la Isla Vergüenza desde el mapa emocional.',
    color: '#ff9f43',
  },
  {
    id: 'cuento_verguenza',
    emotionId: 'verguenza',
    type: 'cuento',
    icon: '\u{1F633}',
    title: 'Voz Pequeña',
    description: 'Completaste el cuento de Vergüenza y aprendiste a tratarte con amabilidad.',
    color: '#ff9f43',
  },
  {
    id: 'reto_verguenza',
    emotionId: 'verguenza',
    type: 'reto',
    icon: '\u{1F3AD}',
    title: 'Participar Paso a Paso',
    description: 'Completaste los retos de Vergüenza y practicaste participar sin presionarte.',
    color: '#ff9f43',
  },
  {
    id: 'desbloqueo_empatia',
    emotionId: 'empatia',
    type: 'mapa',
    icon: '\u{1F91D}',
    title: 'Ruta del Puente Amable',
    description: 'Desbloqueaste la Isla Empatía desde el mapa emocional.',
    color: '#9b59b6',
  },
  {
    id: 'cuento_empatia',
    emotionId: 'empatia',
    type: 'cuento',
    icon: '\u{1F309}',
    title: 'Puente Amable',
    description: 'Completaste el cuento de Empatía y aprendiste a mirar antes de responder.',
    color: '#9b59b6',
  },
  {
    id: 'minijuego_empatia',
    emotionId: 'empatia',
    type: 'minijuego',
    icon: '\u{1F91D}',
    title: 'Escucha y Acompaña',
    description: 'Completaste Puente de la empatía y practicaste respuestas cuidadosas.',
    color: '#9b59b6',
  },
  {
    id: 'reto_empatia',
    emotionId: 'empatia',
    type: 'reto',
    icon: '\u{1F4AC}',
    title: 'Respuesta Cuidadosa',
    description: 'Completaste los retos de Empatía y practicaste convivencia respetuosa.',
    color: '#9b59b6',
  },
];

export function getUnlockedAchievementIds(player) {
  const unlockedIds = new Set(player.achievements || []);

  (player.completedStories || []).forEach((emotionId) => {
    unlockedIds.add(`cuento_${emotionId}`);
  });

  (player.completedChallengeIds || []).forEach((emotionId) => {
    unlockedIds.add(`reto_${emotionId}`);
  });

  (player.completedMiniGameIds || []).forEach((emotionId) => {
    unlockedIds.add(`minijuego_${emotionId}`);
  });

  islandUnlockOrder.slice(1).forEach((islandId) => {
    if ((player.unlockedIslands || []).includes(islandId)) {
      unlockedIds.add(`desbloqueo_${islandId}`);
    }
  });

  return unlockedIds;
}

export function getAchievementById(achievementId) {
  return achievementCatalog.find((achievement) => achievement.id === achievementId);
}

export function getAchievementCards(player) {
  const unlockedIds = getUnlockedAchievementIds(player);

  return achievementCatalog.map((achievement) => ({
    ...achievement,
    unlocked: unlockedIds.has(achievement.id),
  }));
}

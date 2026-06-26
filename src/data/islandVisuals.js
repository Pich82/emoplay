export const defaultIslandVisual = {
  position: { x: 50, y: 50 },
  scale: 1,
  variant: 'future',
  landmark: '🏝️',
  items: ['🌿', '✨', '🪨'],
  title: 'Nueva isla emocional',
};

const futureIslandSlots = [
  { position: { x: 12, y: 88 }, scale: 0.68 },
  { position: { x: 24, y: 88 }, scale: 0.68 },
  { position: { x: 36, y: 88 }, scale: 0.68 },
  { position: { x: 48, y: 88 }, scale: 0.68 },
  { position: { x: 60, y: 88 }, scale: 0.68 },
  { position: { x: 72, y: 88 }, scale: 0.68 },
];

export const islandVisuals = {
  ternura: {
    position: { x: 16, y: 20 },
    scale: 0.98,
    variant: 'garden',
    landmark: '🏠',
    items: ['🌷', '🧸', '💗'],
    title: 'Casita del cuidado',
  },
  admiracion: {
    position: { x: 50, y: 16 },
    scale: 1,
    variant: 'observatory',
    landmark: '🔭',
    items: ['⭐', '🌙', '✨'],
    title: 'Mirador de estrellas',
  },
  alegria: {
    position: { x: 84, y: 20 },
    scale: 0.98,
    variant: 'festival',
    landmark: '🎈',
    items: ['☀️', '🎏', '😊'],
    title: 'Plaza de la risa',
  },
  calma: {
    position: { x: 84, y: 50 },
    scale: 0.98,
    variant: 'lagoon',
    landmark: '🌊',
    items: ['🪷', '☁️', '🫧'],
    title: 'Bahía tranquila',
  },
  miedo: {
    position: { x: 50, y: 48 },
    scale: 1,
    variant: 'cave',
    landmark: '🔦',
    items: ['🌫️', '🕯️', '🪨'],
    title: 'Cueva de la seguridad',
  },
  empatia: {
    position: { x: 12, y: 88 },
    scale: 0.68,
    variant: 'bridge',
    landmark: '🤝',
    items: ['🌉', '👣', '💬'],
    title: 'Puente de los demás',
  },
  gratitud: {
    position: { x: 24, y: 88 },
    scale: 0.68,
    variant: 'harvest',
    landmark: '🙏',
    items: ['📔', '🌻', '🎁'],
    title: 'Huerto de gracias',
  },
  enfado: {
    position: { x: 16, y: 50 },
    scale: 0.98,
    variant: 'volcano',
    landmark: '🌋',
    items: ['🧯', '🪧', '🔥'],
    title: 'Volcán de los límites',
  },
  confianza: {
    position: { x: 36, y: 88 },
    scale: 0.68,
    variant: 'shield',
    landmark: '🛡️',
    items: ['🪜', '⭐', '👟'],
    title: 'Fortaleza de los pasos',
  },
  tristeza: {
    position: { x: 16, y: 80 },
    scale: 0.98,
    variant: 'rain',
    landmark: '☔',
    items: ['🌧️', '💧', '🫂'],
    title: 'Lago que escucha',
  },
  sorpresa: {
    position: { x: 48, y: 88 },
    scale: 0.68,
    variant: 'portal',
    landmark: '🚪',
    items: ['⚡', '❓', '✨'],
    title: 'Puerta inesperada',
  },
  afectividad: {
    position: { x: 60, y: 88 },
    scale: 0.68,
    variant: 'ribbon',
    landmark: '💝',
    items: ['🎀', '🌸', '💞'],
    title: 'Jardín de vínculos',
  },
  frustracion: {
    position: { x: 50, y: 78 },
    scale: 1,
    variant: 'puzzle',
    landmark: '🧩',
    items: ['🔁', '🧱', '💡'],
    title: 'Taller de intentos',
  },
  amor: {
    position: { x: 72, y: 88 },
    scale: 0.68,
    variant: 'lighthouse',
    landmark: '💞',
    items: ['🗼', '🌹', '✨'],
    title: 'Faro del cuidado',
  },
  culpa: {
    position: { x: 84, y: 88 },
    scale: 0.68,
    variant: 'letter',
    landmark: '💬',
    items: ['✉️', '🛠️', '🤲'],
    title: 'Muelle de reparar',
  },
  verguenza: {
    position: { x: 84, y: 80 },
    scale: 0.98,
    variant: 'stage',
    landmark: '🎭',
    items: ['🎤', '🌟', '🪞'],
    title: 'Escenario amable',
  },
  celos: {
    position: { x: 90, y: 88 },
    scale: 0.68,
    variant: 'spyglass',
    landmark: '🔎',
    items: ['👁️', '💚', '⚖️'],
    title: 'Catalejo de comparaciones',
  },
  asco: {
    position: { x: 96, y: 88 },
    scale: 0.68,
    variant: 'leaf',
    landmark: '🍃',
    items: ['🧼', '🚫', '🌿'],
    title: 'Hoja del autocuidado',
  },
};

export function hasCustomIslandVisual(emotionId) {
  return Boolean(islandVisuals[emotionId]);
}

export function getIslandVisual(emotion, fallbackIndex = 0) {
  const emotionId = typeof emotion === 'string' ? emotion : emotion.id;
  const customVisual = islandVisuals[emotionId];

  if (customVisual) {
    return customVisual;
  }

  const fallbackSlot = futureIslandSlots[fallbackIndex % futureIslandSlots.length];
  const cycle = Math.floor(fallbackIndex / futureIslandSlots.length);
  const xOffset = cycle % 2 === 0 ? 0 : 4;
  const yOffset = Math.min(cycle * 4, 8);
  const emotionName = typeof emotion === 'string' ? 'emocional' : emotion.name;
  const emotionIcon = typeof emotion === 'string' ? defaultIslandVisual.landmark : emotion.icon;

  return {
    ...defaultIslandVisual,
    ...fallbackSlot,
    position: {
      x: Math.min(92, fallbackSlot.position.x + xOffset),
      y: Math.min(92, fallbackSlot.position.y + yOffset),
    },
    landmark: emotionIcon || defaultIslandVisual.landmark,
    title: `Nueva isla: ${emotionName}`,
  };
}

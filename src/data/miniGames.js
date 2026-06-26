export const miniGameCatalog = {
  calma: {
    emotionId: 'calma',
    title: 'Respira con la ola',
    shortTitle: 'Ola de la calma',
    routeLabel: 'Minijuego de respiración',
    description:
      'Sigue una ola animada para practicar una respiración tranquila: inspirar, hacer una pausa breve y soltar el aire despacio.',
    actionLabel: 'Jugar Respira con la ola',
    lockedHelper: 'Completa Respira con la ola para abrir los retos de Calma.',
    completionHelper: 'Completar esta práctica guarda puntos, logro y una recompensa de calma.',
    icon: '\u{1F30A}',
    points: 20,
  },
  empatia: {
    emotionId: 'empatia',
    title: 'Puente de la empatía',
    shortTitle: 'Escucha y acompaña',
    routeLabel: 'Minijuego de escucha',
    description:
      'Observa situaciones de clase, imagina qué puede sentir otra persona y elige una respuesta cuidadosa.',
    actionLabel: 'Jugar Puente de la empatía',
    lockedHelper: 'Completa Puente de la empatía para abrir los retos de Empatía.',
    completionHelper: 'Completar esta práctica guarda puntos, logro y una recompensa de convivencia.',
    icon: '\u{1F91D}',
    points: 20,
  },
};

export function getMiniGameByEmotionId(emotionId) {
  return miniGameCatalog[emotionId] || null;
}

export function hasMiniGameByEmotionId(emotionId) {
  return Boolean(getMiniGameByEmotionId(emotionId));
}

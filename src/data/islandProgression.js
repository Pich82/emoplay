export const islandUnlockOrder = [
  'ternura',
  'admiracion',
  'alegria',
  'calma',
  'miedo',
  'enfado',
  'tristeza',
  'frustracion',
  'verguenza',
  'empatia',
  'gratitud',
  'confianza',
  'sorpresa',
  'afectividad',
  'asco',
  'celos',
  'culpa',
  'amor',
];

export const islandMapOrder = [...islandUnlockOrder];

export function getIslandMapOrder(emotionList = []) {
  const orderedIslandIds = new Set(islandMapOrder);
  const futureIslandIds = emotionList
    .map((emotion) => emotion.id)
    .filter((emotionId) => !orderedIslandIds.has(emotionId));

  return [...islandMapOrder, ...futureIslandIds];
}

export function getOrderedMapEmotions(emotionList = []) {
  const fullMapOrder = getIslandMapOrder(emotionList);
  const mapOrderIndex = new Map(fullMapOrder.map((islandId, index) => [islandId, index]));

  return [...emotionList].sort(
    (firstEmotion, secondEmotion) =>
      (mapOrderIndex.get(firstEmotion.id) ?? emotionList.length) -
      (mapOrderIndex.get(secondEmotion.id) ?? emotionList.length),
  );
}

export function getNextUnlockIslandId(unlockedIslands = []) {
  return islandUnlockOrder.find((islandId) => !unlockedIslands.includes(islandId)) || '';
}

import EmotionMapIsland from './EmotionMapIsland.jsx';
import { emotions } from '../data/emotions.js';
import {
  getNextUnlockIslandId,
  getOrderedMapEmotions,
  islandUnlockOrder,
} from '../data/islandProgression.js';
import { getIslandVisual, hasCustomIslandVisual } from '../data/islandVisuals.js';

const adventureIslands = getOrderedMapEmotions(emotions);
const routeStepByIslandId = new Map(
  islandUnlockOrder.map((islandId, islandIndex) => [islandId, islandIndex + 1]),
);
let futureVisualIndex = 0;
const adventureIslandEntries = adventureIslands.map((emotion) => {
  const visual = getIslandVisual(emotion, futureVisualIndex);

  if (!hasCustomIslandVisual(emotion.id)) {
    futureVisualIndex += 1;
  }

  return { emotion, visual };
});

function getMapIslandState(emotion, isUnlocked, isCompleted, nextUnlockIslandId, isRouteIsland) {
  if (!isRouteIsland) {
    return {
      label: 'Próximamente',
      className: 'map-island--future',
    };
  }

  if (isCompleted) {
    return {
      label: 'Completada',
      className: 'map-island--completed',
    };
  }

  if (isUnlocked) {
    return {
      label: 'Abierta',
      className: 'map-island--open',
    };
  }

  if (emotion.status === 'locked' && emotion.id === nextUnlockIslandId) {
    return {
      label: 'Siguiente',
      className: 'map-island--next',
    };
  }

  return {
    label: 'Bloqueada',
    className: 'map-island--locked',
  };
}

function IslandMap({ unlockedIslands = [], completedStories = [], onOpenIsland }) {
  const nextUnlockIslandId = getNextUnlockIslandId(unlockedIslands);

  return (
    <div className="island-map island-map--adventure" aria-label="Mapa de aventura emocional">
      <div className="island-map__sea" />
      <div className="island-map__compass">
        <span>N</span>
        <strong>Mapa</strong>
      </div>
      <div className="island-map__sun" />
      <div className="island-map__cloud island-map__cloud--one" />
      <div className="island-map__cloud island-map__cloud--two" />

      <div
        className="island-map__canvas island-map__canvas--single-plane"
        aria-label="Archipiélago emocional"
      >
        {adventureIslandEntries.map(({ emotion, visual }) => {
          const isUnlocked = unlockedIslands.includes(emotion.id);
          const isCompleted = completedStories.includes(emotion.id);
          const stepLabel = routeStepByIslandId.get(emotion.id);
          const state = getMapIslandState(
            emotion,
            isUnlocked,
            isCompleted,
            nextUnlockIslandId,
            Boolean(stepLabel),
          );

          return (
            <EmotionMapIsland
              key={emotion.id}
              emotion={emotion}
              visual={visual}
              stepLabel={stepLabel}
              state={state}
              onOpen={onOpenIsland}
            />
          );
        })}
      </div>

      <div className="island-map__legend" aria-label="Leyenda del mapa">
        <span className="legend-dot legend-dot--completed">Completada</span>
        <span className="legend-dot legend-dot--open">Abierta</span>
        <span className="legend-dot legend-dot--next">Siguiente</span>
        <span className="legend-dot legend-dot--locked">Bloqueada</span>
      </div>
    </div>
  );
}

export default IslandMap;

import { useMemo } from 'react';
import IslandMap from '../components/IslandMap.jsx';
import { getChallengeSelectionItems } from '../data/challengeSelection.js';
import { emotions } from '../data/emotions.js';

function countStoredReports() {
  try {
    return Object.keys(window.localStorage).filter((key) => key.startsWith('informe_')).length;
  } catch {
    return 0;
  }
}

function MapScreen({ player, unlockedIslands, onOpenIsland, onOpenChallengesHub }) {
  const reportCount = countStoredReports();
  const completedStories = player.completedStories ?? [];
  const unlockedChallengeItems = useMemo(
    () => getChallengeSelectionItems(player).filter((item) => item.status.canPlay),
    [player],
  );

  return (
    <div className="map-screen map-screen--full">
      <section className="map-header map-header--compact">
        <div>
          <p className="eyebrow">Mapa de aventura</p>
          <h1>Islas emocionales</h1>
        </div>

        <div className="map-stats map-stats--compact">
          <article>
            <strong>{player.points}</strong>
            <span>Puntos</span>
          </article>
          <article>
            <strong>{player.completedChallenges}</strong>
            <span>Retos</span>
          </article>
          <article>
            <strong>
              {unlockedIslands.length}/{emotions.length}
            </strong>
            <span>Islas</span>
          </article>
          <article>
            <strong>{reportCount}</strong>
            <span>Informes</span>
          </article>
        </div>
      </section>

      <section className="map-quick-actions" aria-label="Accesos rápidos del mapa">
        <span>{unlockedChallengeItems.length} retos desbloqueados</span>
        <button type="button" onClick={onOpenChallengesHub}>
          Abrir retos
        </button>
      </section>

      <IslandMap
        unlockedIslands={unlockedIslands}
        completedStories={completedStories}
        onOpenIsland={onOpenIsland}
      />
    </div>
  );
}

export default MapScreen;

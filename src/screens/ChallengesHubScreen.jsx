import { getChallengeSelectionItems } from '../data/challengeSelection.js';

function ChallengesHubScreen({ player, onStartChallenges, onStartStory, onStartMiniGame, onGoMap }) {
  const items = getChallengeSelectionItems(player);
  const playableItems = items.filter((item) => item.status.canPlay);
  const lockedItems = items.filter((item) => !item.status.canPlay);

  const renderChallengeCard = (item) => {
    const { emotion, challengeSet, status, totalChallenges, pointsAvailable } = item;

    return (
      <article
        key={emotion.id}
        className={`challenge-select-card challenge-select-card--${status.id}`}
        style={{
          '--challenge-select-color': emotion.color,
          '--challenge-select-accent': emotion.accent,
        }}
      >
        <div className="challenge-select-card__top">
          <span className="challenge-select-card__icon">{emotion.icon}</span>
          <div>
            <p className="eyebrow">{status.label}</p>
            <h2>{challengeSet?.title || `Retos de ${emotion.name}`}</h2>
          </div>
        </div>

        <p>{challengeSet?.subtitle || emotion.intro}</p>

        <div className="challenge-select-card__stats">
          <span>
            <strong>{totalChallenges}</strong>
            retos
          </span>
          <span>
            <strong>{pointsAvailable}</strong>
            puntos
          </span>
        </div>

        <small>{status.helper}</small>

        <div className="challenge-select-card__actions">
          {status.canPlay && (
            <button type="button" onClick={() => onStartChallenges(emotion.id)}>
              {status.id === 'completed' ? 'Rejugar retos' : 'Jugar retos'}
            </button>
          )}

          {status.canReadStory && (
            <button type="button" onClick={() => onStartStory(emotion.id)}>
              Leer cuento
            </button>
          )}

          {status.canPlayMiniGame && (
            <button type="button" onClick={() => onStartMiniGame(emotion.id)}>
              Jugar minijuego
            </button>
          )}

          {!status.canPlay && !status.canReadStory && !status.canPlayMiniGame && (
            <button className="button-secondary" type="button" onClick={onGoMap}>
              Ver en el mapa
            </button>
          )}
        </div>
      </article>
    );
  };

  return (
    <div className="challenges-hub">
      <section className="challenges-hub__hero">
        <div>
          <p className="eyebrow">Zona de retos</p>
          <h1>Elige qué retos quieres jugar</h1>
          <p>
            Aquí aparecen todos los retos por isla. Algunos están abiertos, otros se desbloquean
            leyendo primero el cuento de su emoción.
          </p>
        </div>
        <div className="challenges-hub__summary">
          <span>{playableItems.length}</span>
          <strong>islas con retos jugables</strong>
          <small>{player.completedChallengeIds.length} completadas</small>
        </div>
      </section>

      {playableItems.length > 0 && (
        <section className="challenge-select-section">
          <h2>Retos disponibles</h2>
          <div className="challenge-select-grid">
            {playableItems.map(renderChallengeCard)}
          </div>
        </section>
      )}

      <section className="challenge-select-section">
        <h2>Retos por desbloquear</h2>
        <div className="challenge-select-grid">
          {lockedItems.map(renderChallengeCard)}
        </div>
      </section>
    </div>
  );
}

export default ChallengesHubScreen;

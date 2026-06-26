function StoryRewardPanel({
  reward,
  isNewCompletion,
  hasChallenges,
  onGoMap,
  onStartChallenges,
  nextActionLabel,
  onNextAction,
}) {
  if (!reward) {
    return null;
  }

  return (
    <section className="story-reward-panel" aria-live="polite">
      <div className="story-reward-panel__intro">
        <p className="eyebrow">Logro conseguido</p>
        <h2>{isNewCompletion ? reward.title : 'Logro ya guardado'}</h2>
        <p>{isNewCompletion ? reward.subtitle : reward.replaySubtitle}</p>
      </div>

      <div className="reward-grid">
        <article className="reward-card reward-card--points">
          <span className="reward-card__icon">+{reward.points}</span>
          <strong>Puntos de aventura</strong>
          <p>Se suman una sola vez al completar el cuento por primera vez.</p>
        </article>

        <article className="reward-card">
          <span className="reward-card__icon">{reward.badge.icon}</span>
          <strong>{reward.badge.title}</strong>
          <p>{reward.badge.description}</p>
        </article>

        {reward.unlock && (
          <article className="reward-card reward-card--unlock">
            <span className="reward-card__icon">{reward.unlock.icon}</span>
            <strong>{reward.unlock.title}</strong>
            <p>{reward.unlock.description}</p>
          </article>
        )}
      </div>

      <div className="story-reward-panel__actions">
        {hasChallenges && (
          <button type="button" onClick={onNextAction || onStartChallenges}>
            {nextActionLabel || reward.nextAction}
          </button>
        )}
        <button className="button-secondary" type="button" onClick={onGoMap}>
          Ver mapa de islas
        </button>
      </div>
    </section>
  );
}

export default StoryRewardPanel;

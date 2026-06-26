import { getAdventureNextStep } from '../data/adventureGuide.js';

function AdventureNextStep({
  player,
  onGoMap,
  onOpenIsland,
  onStartStory,
  onStartMiniGame,
  onStartChallenges,
}) {
  const nextStep = getAdventureNextStep(player);

  const handleAction = () => {
    if (nextStep.type === 'story' && onStartStory) {
      onStartStory(nextStep.islandId);
      return;
    }

    if (nextStep.type === 'challenge' && onStartChallenges) {
      onStartChallenges(nextStep.islandId);
      return;
    }

    if (nextStep.type === 'minigame' && onStartMiniGame) {
      onStartMiniGame(nextStep.islandId);
      return;
    }

    if (nextStep.islandId && onOpenIsland) {
      onOpenIsland(nextStep.islandId);
      return;
    }

    onGoMap?.();
  };
  const hasAction =
    (nextStep.type === 'story' && onStartStory) ||
    (nextStep.type === 'challenge' && onStartChallenges) ||
    (nextStep.type === 'minigame' && onStartMiniGame) ||
    (nextStep.islandId && onOpenIsland) ||
    onGoMap;

  return (
    <section
      className={`adventure-next-step adventure-next-step--${nextStep.tone}`}
      style={{
        '--next-step-color': nextStep.emotion?.color || '#667eea',
        '--next-step-accent': nextStep.emotion?.accent || '#dfe5ff',
      }}
      aria-label="Siguiente paso de la aventura"
    >
      <div className="adventure-next-step__icon" aria-hidden="true">
        {nextStep.icon}
      </div>

      <div className="adventure-next-step__copy">
        <p className="eyebrow">{nextStep.eyebrow}</p>
        <h2>{nextStep.title}</h2>
        <p>{nextStep.description}</p>
        <small>{nextStep.helper}</small>
      </div>

      {hasAction && (
        <button type="button" onClick={handleAction}>
          {nextStep.actionLabel}
        </button>
      )}
    </section>
  );
}

export default AdventureNextStep;

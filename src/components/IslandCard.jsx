import { getChallengesByEmotionId } from '../data/challenges.js';
import { emotionCategories } from '../data/emotions.js';

function getStatusCopy(emotion, isUnlocked, storyCompleted) {
  const hasChallenges = getChallengesByEmotionId(emotion.id).length > 0;

  if (isUnlocked && storyCompleted) {
    return {
      label: 'Cuento completado',
      className: 'completed',
      primaryAction: 'Releer cuento',
      secondaryAction: hasChallenges ? 'Jugar retos' : 'Retos próximamente',
      supportText: hasChallenges ? '' : 'Retos en preparación',
    };
  }

  if (isUnlocked) {
    return {
      label: 'Disponible ahora',
      className: 'available',
      primaryAction: 'Leer cuento',
      secondaryAction: 'Retos bloqueados',
      supportText: 'Completa el cuento para jugar retos',
    };
  }

  if (emotion.status === 'locked') {
    return {
      label: 'Bloqueada',
      className: 'locked',
      primaryAction: 'Ver pista',
      secondaryAction: 'Retos bloqueados',
      supportText: 'Se abrirá al avanzar',
    };
  }

  return {
    label: 'Próximamente',
    className: 'soon',
    primaryAction: 'Ver isla',
    secondaryAction: 'Retos bloqueados',
    supportText: 'Contenido en preparación',
  };
}

function IslandCard({ emotion, isUnlocked, storyCompleted, onOpen, onStartStory, onStartChallenges }) {
  const status = getStatusCopy(emotion, isUnlocked, storyCompleted);
  const category = emotionCategories.find((item) => item.id === emotion.category);
  const canPlayChallenges =
    isUnlocked && storyCompleted && getChallengesByEmotionId(emotion.id).length > 0;
  const openPrimaryAction = () => {
    if (isUnlocked) {
      onStartStory?.(emotion.id);
      return;
    }

    onOpen(emotion.id);
  };

  return (
    <article
      className={`island-card island-card--${status.className}`}
      style={{
        '--island-color': emotion.color,
        '--island-accent': emotion.accent,
        '--category-color': category?.color || emotion.color,
        '--category-accent': category?.accent || emotion.accent,
      }}
    >
      <div className="island-card__badge">{status.label}</div>

      <div className="island-card__header">
        <div className="island-card__island">
          <span>{emotion.icon}</span>
        </div>
        <div>
          <p className="eyebrow">{category?.shortName || emotion.category}</p>
          <h3>{emotion.shortName}</h3>
        </div>
      </div>

      <p className="island-card__intro">{emotion.intro}</p>

      <div className="story-chip">
        <span>Cuento</span>
        <strong>{emotion.storyTitle}</strong>
      </div>

      <p className="unlock-hint">{emotion.unlockHint}</p>

      {storyCompleted && <p className="completion-note">Cuento completado. Retos preparados.</p>}

      <div className="island-card__actions">
        <button type="button" onClick={openPrimaryAction}>
          {status.primaryAction}
        </button>
        {canPlayChallenges ? (
          <button
            className="button-secondary"
            type="button"
            onClick={() => onStartChallenges?.(emotion.id)}
          >
            {status.secondaryAction}
          </button>
        ) : (
          <span className="island-card__status-note">{status.supportText}</span>
        )}
      </div>
    </article>
  );
}

export default IslandCard;

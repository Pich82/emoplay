import { getChallengesByEmotionId } from '../data/challenges.js';
import { getMiniGameByEmotionId } from '../data/miniGames.js';
import { getStoryByEmotionId } from '../data/stories.js';

function IslandDetailScreen({
  island,
  isUnlocked,
  storyCompleted,
  miniGameCompleted,
  onStartStory,
  onStartMiniGame,
  onStartChallenges,
  onGoMap,
}) {
  if (!island) {
    return (
      <section className="screen-heading">
        <p className="eyebrow">Isla no encontrada</p>
        <h1>Vuelve al mapa</h1>
        <button type="button" onClick={onGoMap}>
          Volver al mapa
        </button>
      </section>
    );
  }

  const challenges = getChallengesByEmotionId(island.id);
  const hasChallenges = challenges.length > 0;
  const hasStory = Boolean(getStoryByEmotionId(island.id));
  const miniGame = getMiniGameByEmotionId(island.id);
  const hasMiniGame = Boolean(miniGame);
  const canPlayMiniGame = isUnlocked && storyCompleted && hasMiniGame;
  const canPlayChallenge =
    isUnlocked && storyCompleted && hasChallenges && (!hasMiniGame || miniGameCompleted);
  const storyStatus = !hasStory
    ? 'En preparación'
    : !isUnlocked
    ? 'Isla bloqueada'
    : storyCompleted
      ? 'Cuento completado'
      : 'Disponible ahora';
  const miniGameStatus = !hasMiniGame
    ? ''
    : !storyCompleted
      ? 'Bloqueado por ahora'
      : miniGameCompleted
        ? 'Práctica completada'
        : 'Disponible ahora';
  const challengeStatus = !hasChallenges
    ? 'En preparación'
    : canPlayChallenge
      ? 'Retos desbloqueados'
      : hasMiniGame && storyCompleted && !miniGameCompleted
        ? 'Minijuego pendiente'
        : 'Bloqueado por ahora';

  return (
    <div className="island-detail">
      <section className="island-detail__hero" style={{ '--island-color': island.color }}>
        <div>
          <p className="eyebrow">{isUnlocked ? 'Isla desbloqueada' : 'Isla bloqueada'}</p>
          <h1>{island.shortName}</h1>
          <p>{island.intro}</p>
          <div className={isUnlocked ? 'status-note status-note--open' : 'status-note'}>
            {isUnlocked
              ? !hasStory
                ? 'El contenido completo de esta isla se añadirá en una fase posterior.'
                : hasMiniGame
                ? `Ruta de la isla: cuento, ${miniGame.routeLabel.toLowerCase()} y después retos.`
                : 'Ruta de la isla: primero lee el cuento y después juega los retos.'
              : island.unlockHint}
          </div>
        </div>
        <div className={`detail-island ${isUnlocked ? '' : 'detail-island--locked'}`}>
          <span>{island.icon}</span>
        </div>
      </section>

      <section
        className="island-path"
        style={{ '--island-color': island.color, '--island-accent': island.accent }}
        aria-label={`Ruta de ${island.name}`}
      >
        <article
          className={[
            'island-step',
            'island-step--story',
            storyCompleted ? 'island-step--completed' : '',
            !isUnlocked ? 'island-step--locked' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div className="island-step__icon" aria-hidden="true">
            <span>{'\u{1F4D6}'}</span>
          </div>
          <div className="island-step__content">
            <div className="island-step__topline">
              <p className="eyebrow">Paso 1</p>
              <strong>{storyStatus}</strong>
            </div>
            <h2>Cuento</h2>
            <h3>{island.storyTitle}</h3>
            <p>{island.story}</p>
            <button type="button" disabled={!isUnlocked || !hasStory} onClick={() => onStartStory(island.id)}>
              {!hasStory ? 'Cuento próximamente' : storyCompleted ? 'Releer cuento' : 'Leer cuento'}
            </button>
            <small>
              {!hasStory
                ? 'El cuento de esta isla se añadirá más adelante sin perder tu progreso.'
                : storyCompleted
                ? 'Ya has terminado el cuento. Los puntos del cuento están guardados.'
                : 'Lee hasta la última página para desbloquear los retos de esta isla.'}
            </small>
          </div>
        </article>

        {hasMiniGame && (
          <article
            className={[
              'island-step',
              'island-step--minigame',
              miniGameCompleted ? 'island-step--completed' : '',
              !canPlayMiniGame ? 'island-step--locked' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div className="island-step__icon" aria-hidden="true">
              <span>{miniGame.icon}</span>
            </div>
            <div className="island-step__content">
              <div className="island-step__topline">
                <p className="eyebrow">Paso 2</p>
                <strong>{miniGameStatus}</strong>
              </div>
              <h2>Minijuego</h2>
              <h3>{miniGame.title}</h3>
              <p>{miniGame.description}</p>
              <button
                type="button"
                disabled={!canPlayMiniGame}
                onClick={() => onStartMiniGame(island.id)}
              >
                {miniGameCompleted ? 'Repetir minijuego' : 'Jugar minijuego'}
              </button>
              <small>
                {storyCompleted
                  ? miniGame.completionHelper
                  : 'Primero completa el cuento para abrir esta práctica guiada.'}
              </small>
            </div>
          </article>
        )}

        <article
          className={[
            'island-step',
            'island-step--challenge',
            canPlayChallenge ? 'island-step--ready' : '',
            !canPlayChallenge ? 'island-step--locked' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div className="island-step__icon" aria-hidden="true">
            <span>{canPlayChallenge ? '\u{1F3AF}' : '\u{1F512}'}</span>
          </div>
          <div className="island-step__content">
            <div className="island-step__topline">
              <p className="eyebrow">{hasMiniGame ? 'Paso 3' : 'Paso 2'}</p>
              <strong>{challengeStatus}</strong>
            </div>
            <h2>Reto</h2>
            <h3>{hasChallenges ? `${challenges.length} retos de ${island.name}` : 'Retos en preparación'}</h3>
            <p>
              {hasChallenges
                ? 'Responde preguntas rápidas y reflexiones para ganar puntos y crear un informe para el docente.'
                : 'Los retos de esta isla se añadirán más adelante sin perder tu progreso.'}
            </p>
            <button type="button" disabled={!canPlayChallenge} onClick={() => onStartChallenges(island.id)}>
              {canPlayChallenge
                ? 'Jugar retos'
                : hasMiniGame && storyCompleted && !miniGameCompleted
                  ? 'Completa primero el minijuego'
                : !storyCompleted
                  ? 'Bloqueado hasta leer el cuento'
                  : 'Retos próximamente'}
            </button>
            <small>
              {canPlayChallenge
                ? 'Reto abierto. Puedes jugarlo cuando quieras.'
                : hasMiniGame && storyCompleted && !miniGameCompleted
                  ? `Primero practica ${miniGame.title}. Después este botón se activará.`
                : 'Primero completa el cuento. Después este botón se activará.'}
            </small>
          </div>
        </article>
      </section>

      <button className="button-secondary" type="button" onClick={onGoMap}>
        Volver al mapa
      </button>
    </div>
  );
}

export default IslandDetailScreen;

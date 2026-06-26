import { useMemo, useState } from 'react';
import StoryRewardPanel from '../components/StoryRewardPanel.jsx';
import { getChallengesByEmotionId } from '../data/challenges.js';
import { getStoryFinalReflection } from '../data/storyFinalReflections.js';
import { getStoryIllustration } from '../data/storyIllustrations.js';
import { getStoryRewardByEmotionId } from '../data/storyRewards.js';
import { getStoryByEmotionId } from '../data/stories.js';
import { getMiniGameByEmotionId } from '../data/miniGames.js';

function StoryDrawing({ drawing }) {
  return (
    <span className={`story-drawing story-drawing--${drawing.type}`}>
      <span className="story-drawing__water" />
      <span className="story-drawing__mural" />
      <span className="story-drawing__bench" />
      <span className="story-drawing__table" />
      <span className="story-drawing__paper story-drawing__paper--one" />
      <span className="story-drawing__paper story-drawing__paper--two" />
      <span className="story-drawing__lighthouse" />
      <span className="story-drawing__backpack" />
      <span className="story-drawing__bracelet" />
      <span className="story-drawing__ball" />
      <span className="story-drawing__child story-drawing__child--noa" />
      <span className="story-drawing__child story-drawing__child--luna" />
      <span className="story-drawing__speech story-drawing__speech--one" />
      <span className="story-drawing__speech story-drawing__speech--two" />
      <span className="story-drawing__spark story-drawing__spark--one" />
      <span className="story-drawing__spark story-drawing__spark--two" />
    </span>
  );
}

function StoryIllustration({ page, story }) {
  const illustration = getStoryIllustration(story.emotionId, page.id);
  const mainIcon = illustration?.mainIcon || page.illustration;
  const supportingIcons = illustration?.supportingIcons || [];
  const theme = illustration?.theme || story.emotionId;
  const drawing = illustration?.drawing;
  const imageSrc = illustration?.imageSrc;

  return (
    <div className={`story-book__illustration story-scene story-scene--${theme}`}>
      <div
        className={[
          'story-scene__canvas',
          imageSrc ? 'story-scene__canvas--image' : '',
          drawing ? 'story-scene__canvas--drawing' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        aria-hidden={imageSrc ? undefined : 'true'}
      >
        <span className="story-scene__halo" />
        <span className="story-scene__ground" />
        {imageSrc ? (
          <img
            className="story-scene__image"
            src={imageSrc}
            alt={page.scene}
            loading="eager"
            decoding="async"
          />
        ) : drawing ? (
          <StoryDrawing drawing={drawing} />
        ) : (
          <>
            <span className="story-scene__main">{mainIcon}</span>
            {supportingIcons.map((icon, index) => (
              <span
                key={`${page.id}-${icon}-${index}`}
                className={`story-scene__item story-scene__item--${index + 1}`}
              >
                {icon}
              </span>
            ))}
          </>
        )}
      </div>
      <small>{page.scene}</small>
    </div>
  );
}

function StoryReaderScreen({
  island,
  isUnlocked,
  storyCompleted,
  miniGameCompleted,
  onCompleteStory,
  onGoIsland,
  onGoMap,
  onStartChallenges,
  onStartMiniGame,
}) {
  const story = getStoryByEmotionId(island?.id);
  const reward = getStoryRewardByEmotionId(island?.id);
  const [pageIndex, setPageIndex] = useState(0);
  const [justCompleted, setJustCompleted] = useState(false);
  const pages = story?.pages || [];
  const currentPage = pages[pageIndex];
  const hasChallenges = getChallengesByEmotionId(island?.id).length > 0;
  const miniGame = getMiniGameByEmotionId(island?.id);
  const hasMiniGame = Boolean(miniGame);
  const needsMiniGame = hasMiniGame && !miniGameCompleted;
  const hasNextAction = hasChallenges || needsMiniGame;
  const isFirstPage = pageIndex === 0;
  const isLastPage = pageIndex === pages.length - 1;
  const isFinalPage = Boolean(currentPage?.final);
  const completedNow = storyCompleted || justCompleted;
  const finalReflection =
    currentPage?.final && story ? getStoryFinalReflection(story.emotionId) : '';
  const progress = useMemo(() => {
    if (pages.length === 0) {
      return 0;
    }

    return ((pageIndex + 1) / pages.length) * 100;
  }, [pageIndex, pages.length]);

  if (!island || !story || !isUnlocked) {
    return (
      <section className="story-reader story-reader--empty">
        <p className="eyebrow">Cuento no disponible</p>
        <h1>{island?.shortName || 'Isla no encontrada'}</h1>
        <p>
          {!isUnlocked
            ? 'Esta isla sigue bloqueada. Completa el recorrido anterior para abrirla.'
            : 'El cuento completo de esta isla se añadirá en una fase posterior.'}
        </p>
        <div className="action-row">
          <button type="button" onClick={onGoIsland}>
            Volver a la isla
          </button>
          <button className="button-secondary" type="button" onClick={onGoMap}>
            Ver mapa
          </button>
        </div>
      </section>
    );
  }

  const completeCurrentStory = () => {
    if (!isLastPage || completedNow) {
      return;
    }

    onCompleteStory(island.id);
    setJustCompleted(true);
  };

  const goNextAfterStory = () => {
    if (needsMiniGame) {
      onStartMiniGame(island.id);
      return;
    }

    onStartChallenges(island.id);
  };

  const nextActionLabel = needsMiniGame ? miniGame.actionLabel : reward.nextAction;

  return (
    <div className="story-reader" style={{ '--story-color': story.color }}>
      <section className="story-reader__header">
        <button className="button-secondary" type="button" onClick={onGoIsland}>
          Volver a la isla
        </button>
        <div>
          <p className="eyebrow">Cuento de {story.emotionName}</p>
          <h1>{story.title}</h1>
          <p>
            Lee todas las páginas del cuento. La isla solo se completa al terminar la última
            página.
          </p>
        </div>
        <div className="story-reader__badge">
          <strong>
            {pageIndex + 1}/{pages.length}
          </strong>
          <span>páginas</span>
        </div>
      </section>

      <section className={`story-book ${isFinalPage ? 'story-book--final' : ''}`}>
        <article
          className={[
            'story-book__page',
            isFinalPage ? 'story-book__page--final' : '',
            isFinalPage && completedNow ? 'story-book__page--completed' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <header className="story-page__meta">
            <span>
              Página {currentPage.id} de {pages.length}
            </span>
            <strong>{currentPage.title}</strong>
          </header>

          <div className="story-page__layout">
            <StoryIllustration page={currentPage} story={story} />

            <div className="story-page__copy">
              <p className="story-page__text">{currentPage.text}</p>

              {finalReflection && (
                <aside className="story-page__reflection">
                  <span>Reflexión final</span>
                  <p>{finalReflection}</p>
                </aside>
              )}
            </div>
          </div>

          {isFinalPage && (
            <aside className={`story-final-callout ${completedNow ? 'story-final-callout--completed' : ''}`}>
              <span>{completedNow ? '\u{1F3C6}' : '\u2728'}</span>
              <div>
                <strong>{completedNow ? 'Cuento completado' : 'Última página del cuento'}</strong>
                <p>
                  {completedNow
                    ? 'Tu progreso está guardado. Ya puedes continuar con los retos cuando quieras.'
                    : 'Lee la reflexión final y pulsa completar cuento para guardar tu avance.'}
                </p>
              </div>
            </aside>
          )}

          {isFinalPage && completedNow && !reward && (
            <div className="story-complete-note">
              Cuento completado. Se han registrado los puntos y el progreso.
            </div>
          )}
        </article>
      </section>

      {currentPage.final && completedNow && (
        <StoryRewardPanel
          reward={reward}
          isNewCompletion={justCompleted}
          hasChallenges={hasNextAction}
          onGoMap={onGoMap}
          onStartChallenges={() => onStartChallenges(island.id)}
          nextActionLabel={nextActionLabel}
          onNextAction={goNextAfterStory}
        />
      )}

      <section className="story-controls">
        <div className="story-progress">
          <div className="story-progress__topline">
            <strong>
              Página {pageIndex + 1} de {pages.length}
            </strong>
            <span>{Math.round(progress)}% leído</span>
          </div>
          <div className="progress-bar story-progress__bar" aria-hidden="true">
            <div
              className="progress-fill"
              style={{ width: `${progress}%`, backgroundColor: story.color }}
            />
          </div>
          <div className="story-progress__steps" aria-label="Progreso por páginas">
            {pages.map((page, index) => (
              <span
                key={page.id}
                className={[
                  'story-progress__step',
                  index < pageIndex ? 'is-read' : '',
                  index === pageIndex ? 'is-current' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-label={`Página ${index + 1}${index === pageIndex ? ', actual' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className="story-control-buttons">
          <button
            className="button-secondary story-nav-button story-nav-button--previous"
            type="button"
            disabled={isFirstPage}
            onClick={() => setPageIndex((index) => index - 1)}
          >
            <span aria-hidden="true">←</span>
            <strong>Anterior</strong>
            <small>Volver una página</small>
          </button>

          {!isLastPage && (
            <button
              className="story-nav-button story-nav-button--next"
              type="button"
              onClick={() => setPageIndex((index) => index + 1)}
            >
              <span aria-hidden="true">→</span>
              <strong>Siguiente página</strong>
              <small>Continuar leyendo</small>
            </button>
          )}

          {isLastPage && !completedNow && (
            <button
              className="story-nav-button story-nav-button--complete"
              type="button"
              onClick={completeCurrentStory}
            >
              <span aria-hidden="true">✓</span>
              <strong>Completar cuento</strong>
              <small>Guardar progreso</small>
            </button>
          )}

          {isLastPage && completedNow && hasNextAction && (
            <button
              className="story-nav-button story-nav-button--challenge"
              type="button"
              onClick={goNextAfterStory}
            >
              <span aria-hidden="true">{needsMiniGame ? miniGame.icon : '🎯'}</span>
              <strong>{needsMiniGame ? 'Ir al minijuego' : 'Ir a los retos'}</strong>
              <small>{needsMiniGame ? miniGame.shortTitle : 'Jugar esta isla'}</small>
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

export default StoryReaderScreen;

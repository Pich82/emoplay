import { useState } from 'react';
import AvatarPreview from '../components/AvatarPreview.jsx';
import LighthouseRefuge from '../components/LighthouseRefuge.jsx';
import LoveCompassScenario from '../components/LoveCompassScenario.jsx';
import LoveToolbox from '../components/LoveToolbox.jsx';
import {
  isLoveFinaleReady,
  loveCareScenario,
  loveCommitmentCatalog,
  loveFinaleChapters,
  loveMessageStarters,
  loveRouteSymbols,
  loveScenarioCatalog,
  loveToolCatalog,
  normalizeLoveFinaleState,
} from '../data/loveFinale.js';

const previousChapterById = {
  compass: 'arrival',
  toolbox: 'compass',
  care: 'toolbox',
  message: 'care',
  beacon: 'message',
};

function LoveFinaleScreen({
  player,
  avatarConfig,
  isUnlocked,
  onUpdateProgress,
  onComplete,
  onGoIsland,
  onGoMap,
}) {
  const finale = normalizeLoveFinaleState(player.loveFinale);
  const firstPendingScenarioIndex = loveScenarioCatalog.findIndex(
    (scenario) => !finale.scenarioChoices[scenario.id],
  );
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(
    firstPendingScenarioIndex >= 0 ? firstPendingScenarioIndex : 0,
  );

  if (!isUnlocked) {
    return (
      <section className="love-finale-locked">
        <span aria-hidden="true">🗼</span>
        <p className="eyebrow">Destino final bloqueado</p>
        <h1>El faro todavía espera</h1>
        <p>Completa el cuento de Culpa para abrir la Isla Amor.</p>
        <button type="button" onClick={onGoMap}>
          Volver al mapa
        </button>
      </section>
    );
  }

  const updateFinale = (patch) => {
    onUpdateProgress({
      ...finale,
      ...patch,
      started: true,
    });
  };
  const goToChapter = (chapterId) => updateFinale({ chapterId });

  if (finale.completed && finale.chapterId === 'refuge') {
    return (
      <LighthouseRefuge
        player={player}
        avatarConfig={avatarConfig}
        finale={finale}
        onReview={() => goToChapter('arrival')}
        onGoMap={onGoMap}
      />
    );
  }

  const chapter =
    loveFinaleChapters.find((chapterItem) => chapterItem.id === finale.chapterId) ||
    loveFinaleChapters[0];
  const chapterIndex = loveFinaleChapters.findIndex(
    (chapterItem) => chapterItem.id === chapter.id,
  );
  const scenario = loveScenarioCatalog[activeScenarioIndex];
  const selectedScenarioChoiceId = finale.scenarioChoices[scenario?.id];
  const allScenariosComplete = loveScenarioCatalog.every(
    (scenarioItem) => finale.scenarioChoices[scenarioItem.id],
  );
  const selectedCareChoice = loveCareScenario.choices.find(
    (choice) => choice.id === finale.careChoiceId,
  );

  const chooseScenario = (choiceId) => {
    updateFinale({
      scenarioChoices: {
        ...finale.scenarioChoices,
        [scenario.id]: choiceId,
      },
    });
  };

  const advanceScenario = () => {
    if (activeScenarioIndex < loveScenarioCatalog.length - 1) {
      setActiveScenarioIndex((currentIndex) => currentIndex + 1);
      return;
    }

    if (!allScenariosComplete) {
      const pendingIndex = loveScenarioCatalog.findIndex(
        (scenarioItem) => !finale.scenarioChoices[scenarioItem.id],
      );
      setActiveScenarioIndex(Math.max(0, pendingIndex));
      return;
    }

    goToChapter('toolbox');
  };

  const goBack = () => {
    const previousChapterId = previousChapterById[chapter.id];

    if (previousChapterId) {
      goToChapter(previousChapterId);
      return;
    }

    onGoIsland();
  };

  return (
    <div className="love-finale">
      <header className="love-finale__header">
        <div>
          <p className="eyebrow">Isla final · Amor</p>
          <h1>El Faro de los Vínculos Seguros</h1>
        </div>
        <div className="love-finale__progress" aria-label={`Capítulo ${chapter.step} de 6`}>
          <strong>{chapter.step}/6</strong>
          <span>
            {loveFinaleChapters.map((chapterItem, index) => (
              <i
                key={chapterItem.id}
                className={index <= chapterIndex ? 'is-complete' : ''}
                aria-hidden="true"
              />
            ))}
          </span>
        </div>
      </header>

      <section className="love-finale__visual">
        <img src={chapter.imageSrc} alt={chapter.imageAlt} />
        <div className="love-finale__avatar">
          <AvatarPreview
            avatar={player.avatar}
            diceBearConfig={avatarConfig}
            frameColor={finale.completed ? '#f7c94c' : '#45b7d1'}
          />
          <span>
            <small>Protagonista</small>
            <strong>{player.studentName || 'Explorador'}</strong>
          </span>
        </div>
      </section>

      <section className="love-finale__chapter">
        <div className="love-finale__chapter-copy">
          <p className="eyebrow">{chapter.eyebrow}</p>
          <h2>{chapter.title}</h2>
          <p>{chapter.description}</p>
        </div>

        {chapter.id === 'arrival' && (
          <div className="love-arrival">
            <p>
              Has recorrido dieciocho islas. El faro se enciende porque aprendiste a escuchar
              todas las emociones, incluso las incómodas.
            </p>
            <div className="love-arrival__symbols" aria-label="Símbolos de las islas recorridas">
              {loveRouteSymbols.map((symbol) => (
                <span key={symbol.label}>
                  <span aria-hidden="true">{symbol.icon}</span>
                  <small>{symbol.label}</small>
                </span>
              ))}
            </div>
            <div className="love-finale__actions">
              <button type="button" onClick={() => goToChapter('compass')}>
                Abrir la brújula
              </button>
              <button className="button-secondary" type="button" onClick={onGoIsland}>
                Volver a la isla
              </button>
            </div>
          </div>
        )}

        {chapter.id === 'compass' && scenario && (
          <div className="love-compass">
            <div className="love-compass__counter">
              <span>
                Situación {activeScenarioIndex + 1} de {loveScenarioCatalog.length}
              </span>
              <div>
                {loveScenarioCatalog.map((scenarioItem, index) => (
                  <button
                    key={scenarioItem.id}
                    className={[
                      index === activeScenarioIndex ? 'is-current' : '',
                      finale.scenarioChoices[scenarioItem.id] ? 'is-complete' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    type="button"
                    aria-label={`Abrir situación ${index + 1}: ${scenarioItem.title}`}
                    onClick={() => setActiveScenarioIndex(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
            <LoveCompassScenario
              scenario={scenario}
              selectedChoiceId={selectedScenarioChoiceId}
              onChoose={chooseScenario}
            />
            <div className="love-finale__actions">
              <button type="button" disabled={!selectedScenarioChoiceId} onClick={advanceScenario}>
                {activeScenarioIndex === loveScenarioCatalog.length - 1
                  ? allScenariosComplete
                    ? 'Preparar mi caja'
                    : 'Revisar situaciones'
                  : 'Siguiente situación'}
              </button>
              <button className="button-secondary" type="button" onClick={goBack}>
                Anterior
              </button>
            </div>
          </div>
        )}

        {chapter.id === 'toolbox' && (
          <div>
            <LoveToolbox
              tools={loveToolCatalog}
              selectedToolIds={finale.selectedToolIds}
              onChange={(selectedToolIds) => updateFinale({ selectedToolIds })}
            />
            <div className="love-finale__actions">
              <button
                type="button"
                disabled={finale.selectedToolIds.length !== 3}
                onClick={() => goToChapter('care')}
              >
                Guardar estas tres
              </button>
              <button className="button-secondary" type="button" onClick={goBack}>
                Anterior
              </button>
            </div>
          </div>
        )}

        {chapter.id === 'care' && (
          <div>
            <LoveCompassScenario
              scenario={loveCareScenario}
              selectedChoiceId={finale.careChoiceId}
              onChoose={(careChoiceId) => updateFinale({ careChoiceId })}
            />
            <div className="love-care-principle">
              <span aria-hidden="true">🛡️</span>
              <p>
                {selectedCareChoice
                  ? 'Cuidar y cuidarte pueden formar parte de la misma decisión.'
                  : 'Puedes cambiar de camino y comparar opciones sin perder ni recibir un castigo.'}
              </p>
            </div>
            <div className="love-finale__actions">
              <button
                type="button"
                disabled={!finale.careChoiceId}
                onClick={() => goToChapter('message')}
              >
                Preparar mi mensaje
              </button>
              <button className="button-secondary" type="button" onClick={goBack}>
                Anterior
              </button>
            </div>
          </div>
        )}

        {chapter.id === 'message' && (
          <div className="love-message">
            <section className="love-message__field">
              <div>
                <p className="eyebrow">Mensaje opcional</p>
                <h3>Algo que quieras recordar</h3>
                <small>Solo se guarda en tu progreso y nunca aparece en el panel docente.</small>
              </div>
              <div className="love-message__starters">
                {loveMessageStarters.map((starter) => (
                  <button
                    key={starter.id}
                    className={finale.messageStarterId === starter.id ? 'is-selected' : ''}
                    type="button"
                    onClick={() =>
                      updateFinale({
                        messageStarterId: starter.id,
                        futureMessage: starter.text,
                      })
                    }
                  >
                    {starter.label}
                  </button>
                ))}
              </div>
              <label htmlFor="love-future-message">Mi mensaje</label>
              <textarea
                id="love-future-message"
                maxLength="280"
                rows="4"
                value={finale.futureMessage}
                placeholder="También puedes dejar este espacio vacío."
                onChange={(event) =>
                  updateFinale({
                    messageStarterId: '',
                    futureMessage: event.target.value,
                  })
                }
              />
              <div className="love-message__footer">
                <span>{finale.futureMessage.length}/280</span>
                {finale.futureMessage && (
                  <button
                    className="button-secondary"
                    type="button"
                    onClick={() =>
                      updateFinale({
                        messageStarterId: '',
                        futureMessage: '',
                      })
                    }
                  >
                    Dejar sin mensaje
                  </button>
                )}
              </div>
            </section>

            <fieldset className="love-commitments">
              <legend>Elige un compromiso pequeño</legend>
              {loveCommitmentCatalog.map((commitment) => (
                <button
                  key={commitment.id}
                  className={
                    finale.careCommitmentId === commitment.id ? 'is-selected' : ''
                  }
                  type="button"
                  aria-pressed={finale.careCommitmentId === commitment.id}
                  onClick={() => updateFinale({ careCommitmentId: commitment.id })}
                >
                  <span aria-hidden="true">{commitment.icon}</span>
                  <strong>{commitment.title}</strong>
                </button>
              ))}
            </fieldset>

            <div className="love-finale__actions">
              <button
                type="button"
                disabled={!finale.careCommitmentId}
                onClick={() => goToChapter('beacon')}
              >
                Ir al faro
              </button>
              <button className="button-secondary" type="button" onClick={goBack}>
                Anterior
              </button>
            </div>
          </div>
        )}

        {chapter.id === 'beacon' && (
          <div className="love-beacon">
            <div className="love-beacon__summary">
              <span aria-hidden="true">🗼</span>
              <div>
                <p className="eyebrow">Recompensa final</p>
                <h3>Faro de los Vínculos Seguros</h3>
                <p>
                  Recibirás 50 puntos una sola vez, la insignia final, el Marco del Archipiélago y
                  acceso permanente al refugio.
                </p>
              </div>
            </div>
            <p className="love-beacon__principle">
              El amor seguro no es posesión, obediencia ni presión. Incluye cuidado, escucha,
              libertad, límites y ayuda cuando hace falta.
            </p>
            <div className="love-finale__actions">
              <button
                type="button"
                disabled={!isLoveFinaleReady(finale)}
                onClick={() => onComplete(finale)}
              >
                {finale.completed ? 'Volver a encender el faro' : 'Encender el faro'}
              </button>
              <button className="button-secondary" type="button" onClick={goBack}>
                Revisar
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default LoveFinaleScreen;

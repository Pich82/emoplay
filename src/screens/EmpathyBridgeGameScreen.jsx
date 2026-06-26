import { useMemo, useState } from 'react';
import { getMiniGameByEmotionId } from '../data/miniGames.js';

const empathyScenes = [
  {
    id: 'dibujo-roto',
    place: 'Aula de arte',
    character: 'Leo',
    icon: '\u{1F5BC}\uFE0F',
    situation:
      'Leo mira su dibujo roto. No habla, tiene los hombros bajos y aprieta los colores en la mano.',
    signals: ['Silencio', 'Hombros bajos', 'Mira el dibujo'],
    feelingQuestion: '¿Qué puede estar sintiendo Leo?',
    feelingOptions: [
      {
        id: 'frustracion',
        label: 'Frustración',
        helper: 'Algo que le importaba se ha estropeado.',
      },
      {
        id: 'alegria',
        label: 'Alegría',
        helper: 'No parece una situación alegre.',
      },
      {
        id: 'calma',
        label: 'Calma',
        helper: 'Su cuerpo muestra tensión, no tranquilidad.',
      },
    ],
    correctFeelingId: 'frustracion',
    responseQuestion: '¿Qué respuesta sería más empática?',
    responseOptions: [
      {
        id: 'arreglar-juntos',
        label: 'Preguntar y ofrecer ayuda',
        text: '¿Quieres que busquemos una forma de arreglarlo juntos?',
      },
      {
        id: 'no-pasa-nada',
        label: 'Quitar importancia',
        text: 'No pasa nada, haz otro y ya está.',
      },
      {
        id: 'reir',
        label: 'Reírse del dibujo',
        text: '¡Qué dibujo tan raro te quedó!',
      },
    ],
    correctResponseId: 'arreglar-juntos',
  },
  {
    id: 'alumna-nueva',
    place: 'Patio',
    character: 'Mara',
    icon: '\u{1F392}',
    situation:
      'Mara es nueva en clase. Se queda cerca de la pared mirando cómo juegan los demás, pero no se acerca.',
    signals: ['Observa lejos', 'No se acerca', 'Busca su sitio'],
    feelingQuestion: '¿Qué puede estar sintiendo Mara?',
    feelingOptions: [
      {
        id: 'verguenza',
        label: 'Vergüenza o nervios',
        helper: 'Puede necesitar un paso pequeño para participar.',
      },
      {
        id: 'enfado',
        label: 'Enfado',
        helper: 'No vemos señales claras de enfado.',
      },
      {
        id: 'sorpresa',
        label: 'Sorpresa',
        helper: 'Puede haber sorpresa, pero la señal principal es inseguridad.',
      },
    ],
    correctFeelingId: 'verguenza',
    responseQuestion: '¿Qué respuesta sería más empática?',
    responseOptions: [
      {
        id: 'invitar-sin-presionar',
        label: 'Invitar sin presionar',
        text: 'Si quieres, puedes venir con nosotros. También podemos explicarte el juego.',
      },
      {
        id: 'obligar',
        label: 'Obligarla a jugar',
        text: 'Tienes que venir ahora mismo.',
      },
      {
        id: 'ignorar',
        label: 'Seguir sin mirarla',
        text: 'Mejor no decir nada y que se apañe.',
      },
    ],
    correctResponseId: 'invitar-sin-presionar',
  },
  {
    id: 'fuera-del-juego',
    place: 'Juego de equipo',
    character: 'Izan',
    icon: '\u{26BD}',
    situation:
      'Izan se queda sin equipo. Dice "da igual", pero se sienta solo y deja de mirar la pelota.',
    signals: ['Se aparta', 'Dice poco', 'Deja de mirar'],
    feelingQuestion: '¿Qué puede estar sintiendo Izan?',
    feelingOptions: [
      {
        id: 'tristeza',
        label: 'Tristeza',
        helper: 'Puede sentirse apartado o poco tenido en cuenta.',
      },
      {
        id: 'admiracion',
        label: 'Admiración',
        helper: 'No está mirando algo que le inspire.',
      },
      {
        id: 'calma',
        label: 'Calma',
        helper: 'Apartarse no siempre significa calma.',
      },
    ],
    correctFeelingId: 'tristeza',
    responseQuestion: '¿Qué respuesta sería más empática?',
    responseOptions: [
      {
        id: 'incluir',
        label: 'Incluir o acompañar',
        text: '¿Quieres jugar con nosotros o prefieres que me siente un momento contigo?',
      },
      {
        id: 'broma',
        label: 'Hacer una broma',
        text: 'Pues quédate ahí, seguro que estás mejor solo.',
      },
      {
        id: 'mandar',
        label: 'Mandar sin escuchar',
        text: 'Levántate y juega, no seas así.',
      },
    ],
    correctResponseId: 'incluir',
  },
  {
    id: 'turno-perdido',
    place: 'Asamblea',
    character: 'Sofía',
    icon: '\u{1F4AC}',
    situation:
      'Sofía levantó la mano varias veces, pero no le tocó hablar. Cruza los brazos y mira hacia otro lado.',
    signals: ['Brazos cruzados', 'Mirada apartada', 'Quería hablar'],
    feelingQuestion: '¿Qué puede estar sintiendo Sofía?',
    feelingOptions: [
      {
        id: 'enfado',
        label: 'Enfado',
        helper: 'Puede sentir que algo no ha sido justo para ella.',
      },
      {
        id: 'ternura',
        label: 'Ternura',
        helper: 'No parece una señal de cuidado o dulzura.',
      },
      {
        id: 'gratitud',
        label: 'Gratitud',
        helper: 'No está mostrando agradecimiento en esta escena.',
      },
    ],
    correctFeelingId: 'enfado',
    responseQuestion: '¿Qué respuesta sería más empática?',
    responseOptions: [
      {
        id: 'validar-turno',
        label: 'Reconocer y buscar turno',
        text: 'Veo que querías hablar. ¿Te ayudo a pedir turno para la siguiente?',
      },
      {
        id: 'callar',
        label: 'Mandarla callar',
        text: 'No te enfades, cállate y espera.',
      },
      {
        id: 'culpar',
        label: 'Culparla',
        text: 'Seguro que no te tocó porque no lo hiciste bien.',
      },
    ],
    correctResponseId: 'validar-turno',
  },
];

function getOptionShuffleValue(seed, optionId, index) {
  const text = `${seed}-${optionId}-${index}`;
  let hash = 0;

  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }

  return hash;
}

function shuffleOptions(options, seed) {
  return [...options]
    .map((option, index) => ({
      option,
      order: getOptionShuffleValue(seed, option.id, index),
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ option }) => option);
}

function EmpathyBridgeGameScreen({
  island,
  gameCompleted,
  onCompleteMiniGame,
  onGoIsland,
  onStartChallenges,
}) {
  const miniGame = getMiniGameByEmotionId('empatia');
  const [sceneIndex, setSceneIndex] = useState(0);
  const [selectedFeelingId, setSelectedFeelingId] = useState('');
  const [selectedResponseId, setSelectedResponseId] = useState('');
  const [feelingFeedback, setFeelingFeedback] = useState(null);
  const [responseFeedback, setResponseFeedback] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [earnedThisRun, setEarnedThisRun] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [optionSeed, setOptionSeed] = useState(() => `${Date.now()}-${Math.random()}`);
  const currentScene = empathyScenes[sceneIndex];
  const visibleFeelingOptions = useMemo(
    () => shuffleOptions(currentScene.feelingOptions, `${optionSeed}-${currentScene.id}-feeling`),
    [currentScene, optionSeed],
  );
  const visibleResponseOptions = useMemo(
    () => shuffleOptions(currentScene.responseOptions, `${optionSeed}-${currentScene.id}-response`),
    [currentScene, optionSeed],
  );
  const progress = useMemo(
    () => ((sceneIndex + (responseFeedback?.correct ? 1 : 0)) / empathyScenes.length) * 100,
    [responseFeedback, sceneIndex],
  );

  if (!island || !miniGame) {
    return (
      <section className="screen-heading">
        <p className="eyebrow">Minijuego no encontrado</p>
        <h1>Vuelve al mapa</h1>
        <button type="button" onClick={onGoIsland}>
          Volver
        </button>
      </section>
    );
  }

  const resetScene = () => {
    setSelectedFeelingId('');
    setSelectedResponseId('');
    setFeelingFeedback(null);
    setResponseFeedback(null);
  };

  const chooseFeeling = (option) => {
    const correct = option.id === currentScene.correctFeelingId;

    setSelectedFeelingId(option.id);
    setFeelingFeedback({
      correct,
      text: correct
        ? 'Buena observación. Has usado las señales antes de responder.'
        : option.helper,
    });

    if (!correct) {
      setMistakes((currentMistakes) => currentMistakes + 1);
    }
  };

  const chooseResponse = (option) => {
    const correct = option.id === currentScene.correctResponseId;

    setSelectedResponseId(option.id);
    setResponseFeedback({
      correct,
      text: correct
        ? 'Respuesta cuidadosa: escucha, respeta y ofrece ayuda posible.'
        : 'Prueba otra vez. La empatía no impone, no se burla y no quita importancia.',
    });

    if (!correct) {
      setMistakes((currentMistakes) => currentMistakes + 1);
    }
  };

  const finishGame = () => {
    setCompleted(true);
    setEarnedThisRun(!gameCompleted);
    onCompleteMiniGame('empatia');
  };

  const goNextScene = () => {
    if (sceneIndex >= empathyScenes.length - 1) {
      finishGame();
      return;
    }

    setSceneIndex((currentIndex) => currentIndex + 1);
    resetScene();
  };

  const restartGame = () => {
    setSceneIndex(0);
    setMistakes(0);
    setCompleted(false);
    setEarnedThisRun(false);
    setOptionSeed(`${Date.now()}-${Math.random()}`);
    resetScene();
  };

  return (
    <div className="empathy-game-screen">
      <section className="empathy-game-hero">
        <div>
          <p className="eyebrow">Minijuego de Empatía</p>
          <h1>{miniGame.title}</h1>
          <p>{miniGame.description}</p>
        </div>
        <div className="empathy-game-hero__badge">
          <strong>{gameCompleted ? 'Guardado' : `+${miniGame.points}`}</strong>
          <span>{gameCompleted ? 'puedes rejugar' : 'puntos al completar'}</span>
        </div>
      </section>

      {!completed && (
        <>
          <section
            className="empathy-game-stage"
            style={{ '--empathy-progress': `${progress}%` }}
            aria-label="Puente visual de empatía"
          >
            <div className="empathy-game-stage__sky" />
            <div className="empathy-game-stage__island empathy-game-stage__island--left">
              <span>{'\u{1F9D2}'}</span>
              <strong>Yo observo</strong>
            </div>
            <div className="empathy-game-stage__bridge">
              <span className="empathy-game-stage__bridge-light" />
              <span className="empathy-game-stage__walker">{currentScene.icon}</span>
            </div>
            <div className="empathy-game-stage__island empathy-game-stage__island--right">
              <span>{'\u{1F91D}'}</span>
              <strong>Acompaño</strong>
            </div>
            <div className="empathy-game-stage__caption">
              <span>{currentScene.place}</span>
              <strong>{currentScene.character}</strong>
            </div>
            <div className="empathy-game-stage__progress">
              <span />
            </div>
          </section>

          <section className="empathy-scene-card">
            <div className="empathy-scene-card__top">
              <span>{currentScene.icon}</span>
              <div>
                <p className="eyebrow">
                  Escena {sceneIndex + 1}/{empathyScenes.length} · {currentScene.place}
                </p>
                <h2>{currentScene.character}</h2>
              </div>
            </div>
            <div className="empathy-scene-card__body">
              <p>{currentScene.situation}</p>
              <div className="empathy-signal-row" aria-label="Señales observadas">
                {currentScene.signals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="empathy-choice-grid" aria-label="Decisiones de empatía">
            <article className="empathy-choice-panel">
              <p className="eyebrow">Paso 1</p>
              <h2>{currentScene.feelingQuestion}</h2>
              <div className="empathy-options">
                {visibleFeelingOptions.map((option) => (
                  <button
                    key={option.id}
                    className={selectedFeelingId === option.id ? 'is-selected' : ''}
                    type="button"
                    onClick={() => chooseFeeling(option)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {feelingFeedback && (
                <div
                  className={[
                    'empathy-feedback',
                    feelingFeedback.correct ? 'empathy-feedback--ok' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {feelingFeedback.text}
                </div>
              )}
            </article>

            <article
              className={[
                'empathy-choice-panel',
                !feelingFeedback?.correct ? 'empathy-choice-panel--locked' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <p className="eyebrow">Paso 2</p>
              <h2>{currentScene.responseQuestion}</h2>
              <div className="empathy-options empathy-options--responses">
                {visibleResponseOptions.map((option) => (
                  <button
                    key={option.id}
                    className={selectedResponseId === option.id ? 'is-selected' : ''}
                    type="button"
                    disabled={!feelingFeedback?.correct}
                    onClick={() => chooseResponse(option)}
                  >
                    <strong>{option.label}</strong>
                    <small>{option.text}</small>
                  </button>
                ))}
              </div>
              {responseFeedback && (
                <div
                  className={[
                    'empathy-feedback',
                    responseFeedback.correct ? 'empathy-feedback--ok' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {responseFeedback.text}
                </div>
              )}
            </article>
          </section>

          <section className="empathy-game-actions">
            <button
              type="button"
              disabled={!responseFeedback?.correct}
              onClick={goNextScene}
            >
              {sceneIndex >= empathyScenes.length - 1 ? 'Completar minijuego' : 'Siguiente escena'}
            </button>
            <button className="button-secondary" type="button" onClick={restartGame}>
              Reiniciar
            </button>
            <button className="button-secondary" type="button" onClick={onGoIsland}>
              Volver a Empatía
            </button>
          </section>
        </>
      )}

      {completed && (
        <section className="empathy-game-complete">
          <div>
            <p className="eyebrow">Práctica completada</p>
            <h2>{earnedThisRun ? 'Has construido el Puente Amable' : 'Has vuelto a practicar empatía'}</h2>
            <p>
              {earnedThisRun
                ? `Has sumado ${miniGame.points} puntos, un logro y una recompensa de convivencia.`
                : 'Tu progreso ya estaba guardado. Puedes repetir este minijuego para practicar nuevas respuestas.'}
            </p>
            <small>Intentos a revisar durante la práctica: {mistakes}</small>
          </div>
          <div className="empathy-game-complete__actions">
            <button type="button" onClick={restartGame}>
              Repetir puente
            </button>
            <button type="button" onClick={() => onStartChallenges('empatia')}>
              Ir a retos
            </button>
            <button className="button-secondary" type="button" onClick={onGoIsland}>
              Volver a Empatía
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default EmpathyBridgeGameScreen;

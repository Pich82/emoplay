import { useEffect, useMemo, useRef, useState } from 'react';
import { audioAssets } from '../data/audioAssets.js';

const breathingPhases = [
  {
    id: 'inhale',
    label: 'Inspira',
    shortLabel: 'Toma aire',
    instruction: 'La ola sube despacio. Llena la barriga como si fuera una burbuja suave.',
    duration: 4000,
  },
  {
    id: 'hold',
    label: 'Pausa',
    shortLabel: 'Quédate aquí',
    instruction: 'La ola brilla un instante. Mantén el aire sin apretar el cuerpo.',
    duration: 2000,
  },
  {
    id: 'exhale',
    label: 'Suelta',
    shortLabel: 'Deja salir',
    instruction: 'La ola baja lentamente. Suelta el aire como si empañaras un cristal.',
    duration: 5000,
  },
  {
    id: 'rest',
    label: 'Descansa',
    shortLabel: 'Sonríe suave',
    instruction: 'Observa cómo se queda el cuerpo antes de la siguiente ola.',
    duration: 1400,
  },
];

const totalRounds = 3;
const completionPoints = 20;
const seaWavesAudio = audioAssets.calmSeaWaves;

function CalmBreathingGameScreen({
  island,
  gameCompleted,
  onCompleteMiniGame,
  onGoIsland,
  onStartChallenges,
}) {
  const [isRunning, setRunning] = useState(false);
  const [isFinished, setFinished] = useState(false);
  const [earnedThisRun, setEarnedThisRun] = useState(false);
  const [round, setRound] = useState(1);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [phaseStartedAt, setPhaseStartedAt] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const seaAudioRef = useRef(null);

  const currentPhase = breathingPhases[phaseIndex];
  const progress = Math.min(1, elapsed / currentPhase.duration);
  const totalProgress = useMemo(() => {
    const completedRounds = round - 1;
    const completedPhases = phaseIndex;
    const stepProgress = progress;

    return ((completedRounds * breathingPhases.length + completedPhases + stepProgress) /
      (totalRounds * breathingPhases.length)) *
      100;
  }, [phaseIndex, progress, round]);

  const stopSeaSound = ({ reset = false } = {}) => {
    const audio = seaAudioRef.current;

    if (!audio) {
      return;
    }

    audio.pause();

    if (reset) {
      try {
        audio.currentTime = 0;
      } catch {
        // Some browsers do not allow seeking until the audio metadata is ready.
      }
    }
  };

  const playSeaSound = async () => {
    const audio = seaAudioRef.current;

    if (!audio) {
      return false;
    }

    try {
      audio.volume = 0.28;
      audio.loop = true;
      await audio.play();
      setAudioError(false);
      return true;
    } catch {
      setAudioError(true);
      setSoundEnabled(false);
      return false;
    }
  };

  const toggleSeaSound = async () => {
    if (soundEnabled) {
      stopSeaSound();
      setSoundEnabled(false);
      return;
    }

    const started = await playSeaSound();

    if (started) {
      setSoundEnabled(true);
    }
  };

  const finishGame = () => {
    setRunning(false);
    setFinished(true);
    setEarnedThisRun(!gameCompleted);
    stopSeaSound({ reset: true });
    setSoundEnabled(false);
    onCompleteMiniGame('calma');
  };

  const startGame = () => {
    const startAt = performance.now();
    setRound(1);
    setPhaseIndex(0);
    setElapsed(0);
    setEarnedThisRun(false);
    setFinished(false);
    setPhaseStartedAt(startAt);
    setRunning(true);
  };

  const pauseGame = () => {
    setRunning(false);
    stopSeaSound();
    setSoundEnabled(false);
  };

  const resetGame = () => {
    setRunning(false);
    setFinished(false);
    setEarnedThisRun(false);
    setRound(1);
    setPhaseIndex(0);
    setElapsed(0);
    setPhaseStartedAt(0);
    stopSeaSound({ reset: true });
    setSoundEnabled(false);
  };

  useEffect(() => {
    if (!isRunning || isFinished) {
      return undefined;
    }

    let frameId = 0;

    const tick = (now) => {
      const nextElapsed = now - phaseStartedAt;

      if (nextElapsed >= currentPhase.duration) {
        if (phaseIndex >= breathingPhases.length - 1) {
          if (round >= totalRounds) {
            finishGame();
            return;
          }

          const nextStart = performance.now();
          setRound((currentRound) => currentRound + 1);
          setPhaseIndex(0);
          setElapsed(0);
          setPhaseStartedAt(nextStart);
          return;
        }

        const nextPhaseIndex = phaseIndex + 1;
        const nextStart = performance.now();
        setPhaseIndex(nextPhaseIndex);
        setElapsed(0);
        setPhaseStartedAt(nextStart);
        return;
      }

      setElapsed(nextElapsed);
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frameId);
  }, [currentPhase, isFinished, isRunning, phaseIndex, phaseStartedAt, round]);

  useEffect(
    () => () => {
      stopSeaSound({ reset: true });
    },
    [],
  );

  if (!island) {
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

  return (
    <div className="calm-game-screen">
      <audio ref={seaAudioRef} src={seaWavesAudio.filePath} preload="none" loop />

      <section className="calm-game-hero">
        <div>
          <p className="eyebrow">Minijuego de Calma</p>
          <h1>Respira con la ola</h1>
          <p>
            Sigue el movimiento del mar: inspira cuando la ola sube, espera un momento y suelta el
            aire cuando baja. El objetivo no es correr, es encontrar ritmo.
          </p>
        </div>
        <div className="calm-game-hero__badge">
          <strong>{gameCompleted ? 'Guardado' : `+${completionPoints}`}</strong>
          <span>{gameCompleted ? 'puedes rejugar' : 'puntos al completar'}</span>
        </div>
      </section>

      <section
        className={`calm-game-stage calm-game-stage--${currentPhase.id} ${
          isRunning ? 'is-running' : ''
        } ${isFinished ? 'is-finished' : ''}`}
        style={{
          '--calm-progress': progress,
          '--calm-total-progress': `${totalProgress}%`,
        }}
        aria-label="Respiración guiada con ola"
      >
        <div className="calm-game-stage__sky" />
        <div className="calm-game-stage__spark calm-game-stage__spark--one" />
        <div className="calm-game-stage__spark calm-game-stage__spark--two" />
        <div className="calm-game-stage__spark calm-game-stage__spark--three" />

        <div className="calm-game-orb" aria-live="polite">
          <span className="calm-game-orb__ring calm-game-orb__ring--outer" />
          <span className="calm-game-orb__ring calm-game-orb__ring--inner" />
          <span className="calm-game-orb__pearl">
            <strong>{currentPhase.label}</strong>
            <small>{currentPhase.shortLabel}</small>
          </span>
        </div>

        <div className="calm-game-wave calm-game-wave--back" />
        <div className="calm-game-wave calm-game-wave--middle" />
        <div className="calm-game-wave calm-game-wave--front" />

        <div className="calm-game-instruction">
          <span>
            Ola {round}/{totalRounds}
          </span>
          <h2>{currentPhase.instruction}</h2>
          <div className="calm-game-progress" aria-hidden="true">
            <span />
          </div>
        </div>
      </section>

      <section className="calm-game-controls">
        <div className="calm-game-controls__buttons">
          {!isRunning && !isFinished && (
            <button type="button" onClick={startGame}>
              Empezar
            </button>
          )}
          {isRunning && (
            <button type="button" onClick={pauseGame}>
              Pausar
            </button>
          )}
          {!isRunning && elapsed > 0 && !isFinished && (
            <button type="button" onClick={startGame}>
              Empezar de nuevo
            </button>
          )}
          <button className="button-secondary" type="button" onClick={resetGame}>
            Reiniciar
          </button>
          <button
            className={`button-secondary calm-game-audio-button ${
              soundEnabled ? 'is-audio-on' : ''
            }`}
            type="button"
            aria-pressed={soundEnabled}
            onClick={toggleSeaSound}
          >
            {soundEnabled ? 'Parar olas reales' : 'Activar olas reales'}
          </button>
        </div>

        <div className="calm-game-steps" aria-label="Pasos de respiración">
          {breathingPhases.slice(0, 3).map((phase, index) => (
            <article key={phase.id} className={currentPhase.id === phase.id ? 'is-current' : ''}>
              <span>{index + 1}</span>
              <strong>{phase.label}</strong>
              <small>{phase.shortLabel}</small>
            </article>
          ))}
        </div>

        {audioError && (
          <p className="calm-game-audio-error">
            El navegador no pudo iniciar el sonido. Prueba a pulsar otra vez el botón.
          </p>
        )}

        <p className="calm-game-audio-credit">
          Sonido:{' '}
          <a href={seaWavesAudio.sourceUrl} target="_blank" rel="noreferrer">
            {seaWavesAudio.title}
          </a>{' '}
          de {seaWavesAudio.author}, licencia{' '}
          <a href={seaWavesAudio.licenseUrl} target="_blank" rel="noreferrer">
            {seaWavesAudio.licenseName}
          </a>
          .
        </p>
      </section>

      {isFinished && (
        <section className="calm-game-complete">
          <div>
            <p className="eyebrow">Práctica completada</p>
            <h2>{earnedThisRun ? 'Has ganado Respiración Serena' : 'Has vuelto a practicar la calma'}</h2>
            <p>
              {earnedThisRun
                ? `Has sumado ${completionPoints} puntos, un logro y una recompensa de respiración para el aula.`
                : 'Tu progreso ya estaba guardado. Puedes repetir este minijuego cuando necesites una pausa.'}
            </p>
          </div>
          <div className="calm-game-complete__actions">
            <button type="button" onClick={resetGame}>
              Repetir ola
            </button>
            <button type="button" onClick={() => onStartChallenges('calma')}>
              Ir a retos
            </button>
            <button className="button-secondary" type="button" onClick={onGoIsland}>
              Volver a Calma
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default CalmBreathingGameScreen;

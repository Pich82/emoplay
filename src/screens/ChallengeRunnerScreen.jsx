import { useMemo, useState } from 'react';
import { getAchievementById } from '../data/achievements.js';
import { getChallengeSetByEmotionId } from '../data/challenges.js';
import { getMiniGameByEmotionId } from '../data/miniGames.js';
import { getRewardsByAchievementId } from '../data/rewards.js';

function createReport({ island, challengeSet, answers, sessionPoints, correctCount }) {
  const now = new Date();
  const trueFalseAnswers = answers.filter((answer) => answer.type === 'trueFalse');
  const reflections = answers.filter((answer) => answer.type === 'reflection');
  const percentage = Math.round((correctCount / challengeSet.challenges.length) * 100);
  const trueFalseCorrect = trueFalseAnswers.filter((answer) => answer.correct).length;
  const strengths = [];
  const development = [];

  if (trueFalseAnswers.length > 0 && trueFalseCorrect / trueFalseAnswers.length >= 0.7) {
    strengths.push(`Comprende bien ideas importantes sobre ${island.name.toLowerCase()}.`);
  }

  if (reflections.length > 0) {
    strengths.push('Ha completado reflexiones personales sobre situaciones emocionales.');
  }

  if (trueFalseAnswers.filter((answer) => !answer.correct).length > Math.ceil(trueFalseAnswers.length * 0.3)) {
    development.push(`Conviene reforzar algunas ideas clave sobre ${island.name.toLowerCase()}.`);
  }

  if (reflections.some((answer) => answer.userAnswer.length < 45)) {
    development.push('Puede ampliar sus respuestas con ejemplos más concretos.');
  }

  return {
    id: `informe_${island.id}_${Date.now()}`,
    emotionId: island.id,
    emotionName: island.name,
    title: `Informe de ${island.name}`,
    date: now.toLocaleDateString('es-ES'),
    time: now.toLocaleTimeString('es-ES'),
    points: sessionPoints,
    correctCount,
    totalChallenges: challengeSet.challenges.length,
    percentage,
    answers,
    strengths:
      strengths.length > 0
        ? strengths
        : ['Ha participado activamente en la exploración emocional.'],
    development:
      development.length > 0
        ? development
        : ['Seguir practicando la emoción en situaciones cotidianas.'],
  };
}

function buildReportText(report) {
  return `
${report.title.toUpperCase()} - EMOPLAY
========================================

Fecha: ${report.date}
Hora: ${report.time}

RESUMEN
- Puntos obtenidos: ${report.points}
- Retos correctos: ${report.correctCount}/${report.totalChallenges}
- Porcentaje de acierto: ${report.percentage}%

RESPUESTAS
${report.answers
  .map((answer, index) => {
    if (answer.type === 'reflection') {
      return `${index + 1}. ${answer.question}
   Reflexión del alumno: ${answer.userAnswer}`;
    }

    return `${index + 1}. ${answer.question}
   Respuesta del alumno: ${answer.userAnswer}
   Respuesta correcta: ${answer.correctAnswer}
   Resultado: ${answer.correct ? 'Correcto' : 'A revisar'}`;
  })
  .join('\n\n')}

FORTALEZAS
${report.strengths.map((item) => `- ${item}`).join('\n')}

PROPUESTAS DE REFUERZO
${report.development.map((item) => `- ${item}`).join('\n')}
`;
}

function readCompletedIslands() {
  try {
    const storedValue = JSON.parse(window.localStorage.getItem('islasCompletadas'));
    return Array.isArray(storedValue) ? storedValue : [];
  } catch {
    return [];
  }
}

function getStarRating(percentage) {
  if (percentage >= 90) {
    return 3;
  }

  if (percentage >= 65) {
    return 2;
  }

  return 1;
}

function ChallengeRunnerScreen({
  island,
  isUnlocked,
  storyCompleted,
  miniGameCompleted,
  challengeCompleted,
  scoredChallengeIds,
  onAwardPoints,
  onCompleteChallengeSet,
  onGoIsland,
  onGoMap,
  onOpenRewards,
}) {
  const challengeSet = getChallengeSetByEmotionId(island?.id);
  const miniGame = getMiniGameByEmotionId(island?.id);
  const challenges = challengeSet?.challenges || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [reflectionText, setReflectionText] = useState('');
  const [sessionPoints, setSessionPoints] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [report, setReport] = useState(null);

  const currentChallenge = challenges[currentIndex];
  const currentChallengeScored = scoredChallengeIds.includes(currentChallenge?.id);
  const progress = useMemo(() => {
    if (challenges.length === 0) {
      return 0;
    }

    return ((currentIndex + 1) / challenges.length) * 100;
  }, [challenges.length, currentIndex]);
  const currentStreak = useMemo(() => {
    let streak = 0;

    for (let index = answers.length - 1; index >= 0; index -= 1) {
      if (!answers[index].correct) {
        break;
      }

      streak += 1;
    }

    return streak;
  }, [answers]);
  const challengeAchievement = island ? getAchievementById(`reto_${island.id}`) : null;
  const unlockedRewards = challengeAchievement
    ? getRewardsByAchievementId(challengeAchievement.id)
    : [];

  if (!island) {
    return (
      <section className="screen-heading">
        <p className="eyebrow">Retos no encontrados</p>
        <h1>Vuelve al mapa</h1>
        <button type="button" onClick={onGoMap}>
          Volver al mapa
        </button>
      </section>
    );
  }

  if (!isUnlocked || !storyCompleted || (miniGame && !miniGameCompleted) || !challengeSet) {
    return (
      <section className="challenge-locked-panel">
        <div className="challenge-lock-icon">{island.icon}</div>
        <p className="eyebrow">Retos no disponibles</p>
        <h1>{island.shortName}</h1>
        <p>
          {!isUnlocked
            ? 'Esta isla sigue bloqueada.'
            : !storyCompleted
              ? 'Primero completa el cuento introductorio.'
              : miniGame && !miniGameCompleted
                ? `Primero completa ${miniGame.title}.`
              : 'Los retos completos de esta isla se prepararán en una fase posterior.'}
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

  const finishChallengeSet = (answersForReport) => {
    const nextReport = createReport({
      island,
      challengeSet,
      answers: answersForReport,
      sessionPoints,
      correctCount,
    });

    window.localStorage.setItem(nextReport.id, JSON.stringify(nextReport));
    window.localStorage.setItem(`reto_${island.id}_completado`, 'true');

    const completedIslands = readCompletedIslands();
    if (!completedIslands.includes(island.id)) {
      completedIslands.push(island.id);
      window.localStorage.setItem('islasCompletadas', JSON.stringify(completedIslands));
    }

    onCompleteChallengeSet(island.id);
    setReport(nextReport);
  };

  const registerAnswer = ({ correct, userAnswer, correctAnswer, pointsDelta }) => {
    const pointsAwarded = !scoredChallengeIds.includes(currentChallenge.id);
    const nextAnswer = {
      id: currentChallenge.id,
      number: currentIndex + 1,
      type: currentChallenge.type,
      question: currentChallenge.question,
      userAnswer,
      correctAnswer,
      correct,
      pointsDelta: pointsAwarded ? pointsDelta : 0,
      timestamp: new Date().toISOString(),
    };

    setAnswers((currentAnswers) => [...currentAnswers, nextAnswer]);
    setFeedback({
      correct,
      pointsDelta,
      explanation: currentChallenge.explanation,
      isReflection: currentChallenge.type === 'reflection',
      pointsAwarded,
    });

    onAwardPoints(currentChallenge.id, pointsDelta);
    if (pointsAwarded) {
      setSessionPoints((currentPoints) => Math.max(0, currentPoints + pointsDelta));
    }

    if (correct) {
      setCorrectCount((currentCount) => currentCount + 1);
    }
  };

  const answerTrueFalse = (value) => {
    if (feedback) {
      return;
    }

    const correct = value === currentChallenge.answer;
    registerAnswer({
      correct,
      userAnswer: value ? 'Verdadero' : 'Falso',
      correctAnswer: currentChallenge.answer ? 'Verdadero' : 'Falso',
      pointsDelta: correct ? currentChallenge.points : -currentChallenge.penalty,
    });
  };

  const answerReflection = () => {
    if (feedback) {
      return;
    }

    const cleanText = reflectionText.trim();
    if (cleanText.length < currentChallenge.minLength) {
      return;
    }

    registerAnswer({
      correct: true,
      userAnswer: cleanText,
      correctAnswer: 'Reflexión completada',
      pointsDelta: currentChallenge.points,
    });
  };

  const goNext = () => {
    const latestAnswers = answers;

    if (currentIndex >= challenges.length - 1) {
      finishChallengeSet(latestAnswers);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setFeedback(null);
    setReflectionText('');
  };

  const downloadReport = () => {
    const blob = new Blob([buildReportText(report)], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${report.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (report) {
    const starRating = getStarRating(report.percentage);

    return (
      <div className="challenge-report challenge-report--complete">
        <section className="challenge-completion-panel" style={{ '--challenge-color': challengeSet.color }}>
          <div className="challenge-completion-panel__summary">
            <p className="eyebrow">Misión completada</p>
            <h1>{challengeSet.mission || `Retos de ${island.name}`}</h1>
            <p>
              Has terminado los retos de {island.name}. El informe se ha guardado y tu progreso
              ya cuenta para logros y recompensas.
            </p>
            <div className="challenge-stars" aria-label={`${starRating} estrellas conseguidas`}>
              {[1, 2, 3].map((star) => (
                <span
                  key={star}
                  className={star <= starRating ? 'challenge-star challenge-star--filled' : 'challenge-star'}
                >
                  {'\u2B50'}
                </span>
              ))}
            </div>
          </div>

          <div className="challenge-completion-panel__badge">
            <span>{challengeAchievement?.icon || island.icon}</span>
            <strong>{challengeAchievement?.title || 'Insignia conseguida'}</strong>
            <small>{challengeAchievement?.description || 'Has completado una misión emocional.'}</small>
          </div>
        </section>

        <section className="challenge-report__stats">
          <article>
            <strong>{report.points}</strong>
            <span>Puntos conseguidos</span>
          </article>
          <article>
            <strong>
              {report.correctCount}/{report.totalChallenges}
            </strong>
            <span>Retos completados</span>
          </article>
          <article>
            <strong>{report.percentage}%</strong>
            <span>Acierto</span>
          </article>
        </section>

        {unlockedRewards.length > 0 && (
          <section className="challenge-unlock-panel">
            <div>
              <p className="eyebrow">Recompensas relacionadas</p>
              <h2>Ahora puedes revisar estos premios</h2>
            </div>
            <div className="challenge-unlock-grid">
              {unlockedRewards.map((reward) => (
                <article key={reward.id} style={{ '--reward-color': reward.color }}>
                  <span>{reward.icon}</span>
                  <strong>{reward.title}</strong>
                  <small>{reward.category}</small>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="challenge-report__list">
          <h2>Fortalezas</h2>
          {report.strengths.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </section>

        <section className="challenge-report__list">
          <h2>Para seguir practicando</h2>
          {report.development.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </section>

        <div className="challenge-report-actions">
          <button type="button" onClick={onOpenRewards}>
            Ver recompensas
          </button>
          <button className="button-secondary" type="button" onClick={downloadReport}>
            Descargar informe
          </button>
          <button className="button-secondary" type="button" onClick={onGoMap}>
            Volver al mapa
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="challenge-runner">
      <section className="challenge-header" style={{ '--challenge-color': challengeSet.color }}>
        <button className="button-secondary" type="button" onClick={onGoIsland}>
          Volver a la isla
        </button>
        <div>
          <p className="eyebrow">{challengeCompleted ? 'Puedes rejugar' : challengeSet.mission}</p>
          <h1>{challengeSet.title}</h1>
          <p>{challengeSet.subtitle}</p>
        </div>
        <div className="challenge-score">
          <strong>{sessionPoints}</strong>
          <span>puntos de esta partida</span>
          <small>Racha x{currentStreak}</small>
        </div>
      </section>

      <section className="challenge-trail" aria-label="Ruta de retos">
        {challenges.map((challenge, index) => {
          const isDone = index < answers.length;
          const isCurrent = index === currentIndex;

          return (
            <span
              key={challenge.id}
              className={[
                'challenge-trail__step',
                isDone ? 'is-done' : '',
                isCurrent ? 'is-current' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {isDone ? '\u2713' : index + 1}
            </span>
          );
        })}
      </section>

      <section className="challenge-progress-panel">
        <div>
          <strong>
            Reto {currentIndex + 1} de {challenges.length}
          </strong>
          <span>{currentChallenge.type === 'trueFalse' ? 'Verdadero o falso' : 'Reflexión'}</span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%`, backgroundColor: challengeSet.color }}
          />
        </div>
      </section>

      <section className="challenge-card" style={{ '--challenge-color': challengeSet.color }}>
        <div className="challenge-card__icon">{currentChallenge.icon}</div>
        <div className="challenge-card__meta">
          <span>{currentChallenge.type === 'trueFalse' ? 'Reto rápido' : 'Reto de reflexión'}</span>
          <strong>
            {currentChallengeScored
              ? 'Sin puntos adicionales'
              : `+${currentChallenge.points} puntos`}
          </strong>
        </div>
        <p className="eyebrow">
          {currentChallenge.type === 'trueFalse' ? 'Pregunta' : 'Escribe y piensa'}
        </p>
        <h2>{currentChallenge.question}</h2>

        {currentChallenge.type === 'trueFalse' && !feedback && (
          <div className="truth-buttons">
            <button type="button" onClick={() => answerTrueFalse(true)}>
              <span>{'\u2714\uFE0F'}</span>
              Verdadero
            </button>
            <button className="truth-buttons__false" type="button" onClick={() => answerTrueFalse(false)}>
              <span>{'\u274C'}</span>
              Falso
            </button>
          </div>
        )}

        {currentChallenge.type === 'reflection' && !feedback && (
          <div className="reflection-box">
            <textarea
              value={reflectionText}
              maxLength={500}
              placeholder={currentChallenge.placeholder}
              onChange={(event) => setReflectionText(event.target.value)}
            />
            <div className="reflection-box__footer">
              <span>{reflectionText.trim().length}/500 caracteres</span>
              <button
                type="button"
                disabled={reflectionText.trim().length < currentChallenge.minLength}
                onClick={answerReflection}
              >
                Guardar reflexión
              </button>
            </div>
          </div>
        )}

        {feedback && (
          <div className={feedback.correct ? 'feedback-box feedback-box--ok' : 'feedback-box'}>
            <span className="feedback-box__icon">
              {feedback.correct ? '\u2B50' : '\u{1F9ED}'}
            </span>
            <div>
              <strong>
                {!feedback.pointsAwarded
                  ? feedback.isReflection
                    ? 'Reflexión completada. Sin puntos adicionales.'
                    : feedback.correct
                      ? 'Correcto. Este reto ya estaba puntuado.'
                      : 'A revisar. Sin cambios en tus puntos.'
                  : feedback.isReflection
                    ? `Reflexión completada. +${currentChallenge.points} puntos`
                    : feedback.correct
                      ? `Correcto. +${currentChallenge.points} puntos`
                      : `A revisar. -${currentChallenge.penalty} puntos`}
              </strong>
              {feedback.explanation && <p>{feedback.explanation}</p>}
              {!feedback.correct && (
                <p>Respira, revisa la explicación y sigue con el siguiente reto.</p>
              )}
            </div>
            <button type="button" onClick={goNext}>
              {currentIndex >= challenges.length - 1 ? 'Ver misión completada' : 'Siguiente reto'}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default ChallengeRunnerScreen;

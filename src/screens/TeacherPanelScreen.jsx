import { useMemo, useState } from 'react';
import AvatarPreview from '../components/AvatarPreview.jsx';
import { getAchievementCards } from '../data/achievements.js';
import { getDiaryIntensityByValue, getDiaryMoodById } from '../data/diary.js';
import { emotions, getEmotionById } from '../data/emotions.js';
import {
  getDiarySummary,
  getReportSummary,
  readLocalChallengeReports,
  readLocalDiaryEntries,
} from '../data/teacherPanel.js';
import { getLevelProgress, getPlayerLevel } from '../utils/progress.js';

function formatDateTime(dateValue) {
  if (!dateValue) {
    return 'Fecha no disponible';
  }

  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateValue));
}

function getEmotionList(ids) {
  return ids
    .map((emotionId) => getEmotionById(emotionId))
    .filter(Boolean)
    .map((emotion) => emotion.name);
}

function TeacherPanelScreen({ player, avatarConfig, onGoMap, onOpenDiary, onLockPanel }) {
  const [refreshKey, setRefreshKey] = useState(0);
  const reports = useMemo(() => readLocalChallengeReports(), [refreshKey]);
  const diaryEntries = useMemo(() => readLocalDiaryEntries(), [refreshKey]);
  const reportSummary = useMemo(() => getReportSummary(reports), [reports]);
  const diarySummary = useMemo(() => getDiarySummary(diaryEntries), [diaryEntries]);
  const level = getPlayerLevel(player.points);
  const levelProgress = getLevelProgress(player.points);
  const achievements = getAchievementCards(player).filter((achievement) => achievement.unlocked);
  const completedStories = getEmotionList(player.completedStories);
  const completedMiniGames = getEmotionList(player.completedMiniGameIds);
  const completedChallenges = getEmotionList(player.completedChallengeIds);
  const latestDiaryMood = diarySummary.latestMoodId
    ? getDiaryMoodById(diarySummary.latestMoodId).name
    : 'Sin entradas';

  return (
    <div className="teacher-screen">
      <section className="teacher-hero">
        <div>
          <p className="eyebrow">Vista local para el docente</p>
          <h1>Panel docente</h1>
          <p>
            Consulta el progreso, los informes de retos y el Diario Emo guardados en este navegador.
            Todavía no hay base de datos externa ni sincronización entre dispositivos.
          </p>
          <div className="teacher-hero__actions">
            <button type="button" onClick={() => setRefreshKey((key) => key + 1)}>
              Actualizar datos
            </button>
            <button className="button-secondary" type="button" onClick={onGoMap}>
              Ver mapa
            </button>
            <button className="button-secondary" type="button" onClick={onLockPanel}>
              Cerrar panel docente
            </button>
          </div>
        </div>
        <div className="teacher-hero__student">
          <AvatarPreview avatar={player.avatar} diceBearConfig={avatarConfig} />
          <strong>{player.studentName || 'Alumno sin nombre'}</strong>
          <small>{player.className || 'Clase no indicada'}</small>
        </div>
      </section>

      <section className="teacher-local-note">
        <span>{'\u{1F4BE}'}</span>
        <p>
          Estos datos viven solo en el almacenamiento local del navegador. Si se cambia de equipo o
          se borra el historial, el panel no podrá recuperarlos.
        </p>
      </section>

      <section className="teacher-summary-grid" aria-label="Resumen docente">
        <article>
          <span>Puntos</span>
          <strong>{player.points}</strong>
          <small>Nivel {level.level}: {level.name}</small>
        </article>
        <article>
          <span>Islas abiertas</span>
          <strong>
            {player.unlockedIslands.length}/{emotions.length}
          </strong>
          <small>{Math.round(levelProgress)}% al siguiente nivel</small>
        </article>
        <article>
          <span>Informes</span>
          <strong>{reports.length}</strong>
          <small>{reportSummary.averagePercentage}% de media</small>
        </article>
        <article>
          <span>Diario Emo</span>
          <strong>{diaryEntries.length}</strong>
          <small>{diarySummary.averageIntensity} intensidad media</small>
        </article>
      </section>

      <section className="teacher-progress-panel">
        <div>
          <p className="eyebrow">Progreso del alumno</p>
          <h2>Resumen de aventura</h2>
        </div>
        <div className="teacher-progress-grid">
          <article>
            <span>Cuentos completados</span>
            <strong>{completedStories.length}</strong>
            <p>{completedStories.length ? completedStories.join(', ') : 'Todavía no hay cuentos completados.'}</p>
          </article>
          <article>
            <span>Retos completados</span>
            <strong>{completedChallenges.length}</strong>
            <p>{completedChallenges.length ? completedChallenges.join(', ') : 'Todavía no hay retos completados.'}</p>
          </article>
          <article>
            <span>Minijuegos completados</span>
            <strong>{completedMiniGames.length}</strong>
            <p>{completedMiniGames.length ? completedMiniGames.join(', ') : 'Todavía no hay minijuegos completados.'}</p>
          </article>
          <article>
            <span>Logros conseguidos</span>
            <strong>{achievements.length}</strong>
            <p>{achievements.length ? achievements.map((item) => item.title).join(', ') : 'Sin logros todavía.'}</p>
          </article>
        </div>
      </section>

      <section className="teacher-layout">
        <section className="teacher-section">
          <div className="teacher-section__header">
            <div>
              <p className="eyebrow">Informes de retos</p>
              <h2>Resultados guardados</h2>
            </div>
            <span>{reportSummary.latestEmotion}</span>
          </div>

          {reports.length === 0 ? (
            <div className="teacher-empty">
              <span>{'\u{1F4CB}'}</span>
              <p>Aún no hay informes. Se crearán al completar retos de una isla.</p>
            </div>
          ) : (
            <div className="teacher-report-list">
              {reports.map((report) => {
                const reflectionCount = report.answers.filter((answer) => answer.type === 'reflection').length;
                const reviewCount = report.answers.filter((answer) => answer.correct === false).length;

                return (
                  <article key={report.id} className="teacher-report-card">
                    <div className="teacher-report-card__meta">
                      <div className="teacher-report-icon">{getEmotionById(report.emotionId)?.icon || '\u{1F4CB}'}</div>
                      <div>
                        <h3>{report.title}</h3>
                        <span>
                          {report.createdAt ? formatDateTime(report.createdAt) : `${report.date} ${report.time}`}
                        </span>
                      </div>
                      <strong>{report.percentage}%</strong>
                    </div>
                    <div className="teacher-report-card__stats">
                      <span>{report.points} puntos</span>
                      <span>
                        {report.correctCount}/{report.totalChallenges} retos
                      </span>
                      <span>{reflectionCount} reflexiones</span>
                      <span>{reviewCount} a revisar</span>
                    </div>
                    <div className="teacher-report-card__notes">
                      <div>
                        <h4>Fortalezas</h4>
                        {(report.strengths.length ? report.strengths : ['Sin fortalezas registradas.']).map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                      <div>
                        <h4>Refuerzo</h4>
                        {(report.development.length ? report.development : ['Sin propuestas registradas.']).map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section className="teacher-section">
          <div className="teacher-section__header">
            <div>
              <p className="eyebrow">Diario Emo</p>
              <h2>Entradas emocionales</h2>
            </div>
            <span>{latestDiaryMood}</span>
          </div>

          {diaryEntries.length === 0 ? (
            <div className="teacher-empty">
              <span>{'\u{1F4D8}'}</span>
              <p>Aún no hay entradas del diario. El alumno puede crearlas desde Diario Emo.</p>
              <button type="button" onClick={onOpenDiary}>
                Abrir Diario Emo
              </button>
            </div>
          ) : (
            <div className="teacher-diary-list">
              {diaryEntries.map((entry) => {
                const mood = getDiaryMoodById(entry.moodId);
                const intensity = getDiaryIntensityByValue(entry.intensity);

                return (
                  <article
                    key={entry.id}
                    className="teacher-diary-card"
                    style={{ '--mood-color': mood.color, '--mood-accent': mood.accent }}
                  >
                    <div className="teacher-diary-card__header">
                      <div className="teacher-diary-icon">{mood.icon}</div>
                      <div>
                        <h3>{mood.name}</h3>
                        <span>{formatDateTime(entry.createdAt)}</span>
                      </div>
                      <strong>{entry.intensity}/5</strong>
                    </div>
                    <p>{entry.note}</p>
                    <small>
                      {intensity.label}
                      {entry.intensity >= 4 ? ' · Conviene acompañar o revisar con calma.' : ''}
                    </small>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </section>
    </div>
  );
}

export default TeacherPanelScreen;

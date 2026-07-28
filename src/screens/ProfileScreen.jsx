import { useRef, useState } from 'react';
import AvatarPreview from '../components/AvatarPreview.jsx';
import { getAchievementCards } from '../data/achievements.js';
import { emotions } from '../data/emotions.js';
import { getLevelProgress, getPlayerLevel } from '../utils/progress.js';

function ProfileScreen({
  player,
  avatarConfig,
  onSaveProfile,
  onGoAvatar,
  onGoMap,
  onExportProgress,
  onReviewProgressImport,
  pendingProgressImport,
  progressTransferStatus,
  onCancelProgressImport,
  onConfirmProgressImport,
}) {
  const [studentName, setStudentName] = useState(player.studentName || '');
  const [className, setClassName] = useState(player.className || '');
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);
  const level = getPlayerLevel(player.points);
  const levelProgress = getLevelProgress(player.points);
  const unlockedAchievements = getAchievementCards(player).filter((achievement) => achievement.unlocked);
  const pendingSummary = pendingProgressImport?.summary;

  const saveProfile = (event) => {
    event.preventDefault();

    const cleanName = studentName.trim();
    const cleanClassName = className.trim();

    if (cleanName.length < 2) {
      setMessage('Escribe un nombre de al menos 2 letras.');
      return;
    }

    onSaveProfile({
      studentName: cleanName,
      className: cleanClassName,
    });
    setMessage('Perfil actualizado correctamente.');
  };

  const readProgressFile = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (file.size > 2_000_000) {
      onReviewProgressImport({
        fileName: file.name,
        text: null,
      });
      event.target.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      onReviewProgressImport({
        fileName: file.name,
        text: String(reader.result || ''),
      });
      event.target.value = '';
    };

    reader.onerror = () => {
      onReviewProgressImport({
        fileName: file.name,
        text: null,
      });
      event.target.value = '';
    };

    reader.readAsText(file);
  };

  return (
    <div className="profile-edit-screen">
      <section className="profile-edit-hero">
        <div>
          <p className="eyebrow">Datos del alumno</p>
          <h1>Mi perfil</h1>
          <p>
            Cambia tu nombre o añade tu clase sin perder puntos, logros, cuentos ni retos.
          </p>
        </div>
        <div className="profile-edit-avatar">
          <AvatarPreview avatar={player.avatar} diceBearConfig={avatarConfig} />
          <button className="button-secondary" type="button" onClick={onGoAvatar}>
            Editar avatar
          </button>
        </div>
      </section>

      <section className="profile-edit-layout">
        <form className="profile-form-panel" onSubmit={saveProfile}>
          <label htmlFor="profile-name">Nombre del alumno</label>
          <input
            id="profile-name"
            type="text"
            value={studentName}
            maxLength={32}
            placeholder="Escribe tu nombre"
            onChange={(event) => setStudentName(event.target.value)}
          />

          <label htmlFor="profile-class">Clase o grupo</label>
          <input
            id="profile-class"
            type="text"
            value={className}
            maxLength={32}
            placeholder="Por ejemplo: 4º A"
            onChange={(event) => setClassName(event.target.value)}
          />

          <div className="profile-form-actions">
            <button type="submit">Guardar cambios</button>
            <button className="button-secondary" type="button" onClick={onGoMap}>
              Ver mapa
            </button>
          </div>

          {message && <div className="profile-message">{message}</div>}
        </form>

        <section className="profile-summary-panel">
          <p className="eyebrow">Resumen de aventura</p>
          <div className="profile-summary-grid">
            <article>
              <span>Nivel</span>
              <strong>{level.level}</strong>
              <small>{level.name}</small>
            </article>
            <article>
              <span>Puntos</span>
              <strong>{player.points}</strong>
              <small>acumulados</small>
            </article>
            <article>
              <span>Islas</span>
              <strong>
                {player.unlockedIslands.length}/{emotions.length}
              </strong>
              <small>abiertas</small>
            </article>
            <article>
              <span>Logros</span>
              <strong>{unlockedAchievements.length}</strong>
              <small>conseguidos</small>
            </article>
          </div>

          <div className="profile-level-progress">
            <div className="progress-label">
              <span>Progreso al siguiente nivel</span>
              <strong>{Math.round(levelProgress)}%</strong>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${levelProgress}%`, backgroundColor: level.color }}
              />
            </div>
          </div>
        </section>
      </section>

      <section className="profile-transfer-panel">
        <div className="profile-transfer-panel__header">
          <div>
            <p className="eyebrow">Mover progreso</p>
            <h2>Copias para otro dispositivo</h2>
            <p>
              Exporta una copia JSON o importa una copia creada en otro navegador.
              Antes de importar, EMOPLAY guarda una copia local del progreso actual.
            </p>
          </div>
          <div className="profile-transfer-panel__actions">
            <button type="button" onClick={onExportProgress}>
              Exportar progreso
            </button>
            <button
              className="button-secondary"
              type="button"
              onClick={() => fileInputRef.current?.click()}
            >
              Importar copia JSON
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json,.json"
              className="profile-transfer-panel__file"
              onChange={readProgressFile}
            />
          </div>
        </div>

        {progressTransferStatus && (
          <div
            className={[
              'profile-transfer-message',
              `profile-transfer-message--${progressTransferStatus.type}`,
            ].join(' ')}
          >
            {progressTransferStatus.text}
          </div>
        )}

        {pendingSummary && (
          <div className="profile-import-review">
            <div>
              <p className="eyebrow">Copia seleccionada</p>
              <h3>{pendingProgressImport.fileName}</h3>
              <p>
                Se restaurara este progreso y se sustituira el progreso actual de este navegador.
              </p>
            </div>
            <dl>
              <div>
                <dt>Alumno</dt>
                <dd>{pendingSummary.studentName}</dd>
              </div>
              <div>
                <dt>Puntos</dt>
                <dd>{pendingSummary.points}</dd>
              </div>
              <div>
                <dt>Islas abiertas</dt>
                <dd>{pendingSummary.unlockedIslands}</dd>
              </div>
              <div>
                <dt>Cuentos</dt>
                <dd>{pendingSummary.completedStories}</dd>
              </div>
              <div>
                <dt>Retos</dt>
                <dd>{pendingSummary.completedChallenges}</dd>
              </div>
              <div>
                <dt>Diario</dt>
                <dd>{pendingSummary.diaryEntries}</dd>
              </div>
            </dl>
            <div className="profile-import-review__actions">
              <button type="button" onClick={onConfirmProgressImport}>
                Importar y sustituir progreso
              </button>
              <button className="button-secondary" type="button" onClick={onCancelProgressImport}>
                Cancelar
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default ProfileScreen;

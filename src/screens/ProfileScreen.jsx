import { useState } from 'react';
import AvatarPreview from '../components/AvatarPreview.jsx';
import { getAchievementCards } from '../data/achievements.js';
import { emotions } from '../data/emotions.js';
import { getLevelProgress, getPlayerLevel } from '../utils/progress.js';

function ProfileScreen({ player, avatarConfig, onSaveProfile, onGoAvatar, onGoMap }) {
  const [studentName, setStudentName] = useState(player.studentName || '');
  const [className, setClassName] = useState(player.className || '');
  const [message, setMessage] = useState('');
  const level = getPlayerLevel(player.points);
  const levelProgress = getLevelProgress(player.points);
  const unlockedAchievements = getAchievementCards(player).filter((achievement) => achievement.unlocked);

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
    </div>
  );
}

export default ProfileScreen;

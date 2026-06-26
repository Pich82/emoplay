import AvatarPreview from '../components/AvatarPreview.jsx';
import { getLevelProgress, getPlayerLevel } from '../utils/progress.js';

function FutureSectionScreen({ section, player, avatarConfig }) {
  const level = getPlayerLevel(player.points);
  const progress = getLevelProgress(player.points);

  return (
    <div className="future-screen">
      <section className="future-panel">
        <div>
          <p className="eyebrow">{section.eyebrow}</p>
          <h1>{section.title}</h1>
          <p>{section.description}</p>
        </div>
        <AvatarPreview avatar={player.avatar} diceBearConfig={avatarConfig} />
      </section>

      <section className="profile-mini-grid">
        <article>
          <span>Nivel {level.level}</span>
          <strong>{level.name}</strong>
        </article>
        <article>
          <span>Puntos</span>
          <strong>{player.points}</strong>
        </article>
        <article>
          <span>Progreso</span>
          <strong>{Math.round(progress)}%</strong>
        </article>
      </section>
    </div>
  );
}

export default FutureSectionScreen;

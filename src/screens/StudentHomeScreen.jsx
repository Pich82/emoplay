import AvatarPreview from '../components/AvatarPreview.jsx';
import { homeNavigationItems } from '../data/navigation.js';
import { emotions } from '../data/emotions.js';
import { getRewardById } from '../data/rewards.js';
import { getLevelProgress, getPlayerLevel } from '../utils/progress.js';

function StudentHomeScreen({
  player,
  avatarConfig,
  onGoMap,
  onGoAvatar,
  onOpenSection,
}) {
  const level = getPlayerLevel(player.points);
  const levelProgress = getLevelProgress(player.points);
  const unlockedCount = player.unlockedIslands.length;
  const equippedReward = getRewardById(player.equippedRewardId);

  const openNavigationItem = (itemId) => {
    if (itemId === 'avatar') {
      onGoAvatar();
      return;
    }

    onOpenSection(itemId);
  };

  return (
    <div className="student-dashboard">
      <header className="dashboard-hero">
        <div className="dashboard-hero__copy">
          <p className="eyebrow">Tu aventura en inteligencia emocional</p>
          <h1>EMOPLAY</h1>
          <p>
            Explora islas, lee cuentos breves, supera retos emocionales y desbloquea nuevas zonas
            del mapa.
          </p>
        </div>
        <div className="dashboard-hero__badge">
          <span>Nivel {level.level}</span>
          <strong>{level.name}</strong>
        </div>
      </header>

      <section className="profile-section">
        <div className="avatar-zone">
          <AvatarPreview avatar={player.avatar} diceBearConfig={avatarConfig} />
          <div className="avatar-badge" style={{ color: level.color }}>
            {level.name}
          </div>
          {equippedReward && (
            <div className="equipped-mini-badge">
              <span>{equippedReward.icon}</span>
              <strong>{equippedReward.title}</strong>
            </div>
          )}
        </div>

        <div className="profile-info">
          <div className="student-name-card">
            <span>Explorador</span>
            <strong>{player.studentName || 'Sin nombre'}</strong>
          </div>

          <div className="stats-container">
            <article className="stat-card">
              <span className="stat-icon stat-icon--points">{'\u{1F48E}'}</span>
              <div>
                <strong>{player.points}</strong>
                <span>Puntos</span>
              </div>
            </article>
            <article className="stat-card">
              <span className="stat-icon stat-icon--challenges">{'\u{1F3AF}'}</span>
              <div>
                <strong>{player.completedChallenges}</strong>
                <span>Retos</span>
              </div>
            </article>
            <article className="stat-card">
              <span className="stat-icon stat-icon--islands">{'\u{1F3DD}\uFE0F'}</span>
              <div>
                <strong>
                  {unlockedCount}/{emotions.length}
                </strong>
                <span>Islas</span>
              </div>
            </article>
          </div>

          <div className="progress-container">
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
        </div>

        <button className="diary-button" type="button" onClick={() => onOpenSection('diary')}>
          <span>{'\u{1F4D8}'}</span>
          <strong>Diario Emo</strong>
          <small>¿Cómo te sientes hoy?</small>
        </button>
      </section>

      <section className="main-game-section">
        <button className="main-game-button" type="button" onClick={onGoMap}>
          <span className="main-game-icon">{'\u{1F3DD}\uFE0F'}</span>
          <span className="main-game-text">
            <strong>Explorar islas emocionales</strong>
            <small>Entra al mapa para continuar cuentos, rutas y nuevas islas.</small>
          </span>
          <span className="play-arrow">{'\u25B6\uFE0F'}</span>
          <span className="shimmer" />
        </button>
      </section>

      <section className="navigation-section">
        <h2>Otras opciones</h2>
        <div className="nav-grid">
          {homeNavigationItems.map((item, index) => (
            <button
              key={item.id}
              className={`nav-button nav-button--${item.tone}`}
              type="button"
              style={{ animationDelay: `${index * 80}ms` }}
              onClick={() => openNavigationItem(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>
                <strong>{item.label}</strong>
                <small>{item.description}</small>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="motivation-card">
        <span>{'\u2728'}</span>
        <p>Cada emoción es una oportunidad de crecimiento. Sigue explorando paso a paso.</p>
      </section>
    </div>
  );
}

export default StudentHomeScreen;

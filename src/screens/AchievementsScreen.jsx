import { getAchievementCards } from '../data/achievements.js';

function AchievementsScreen({ player, onGoMap }) {
  const achievements = getAchievementCards(player);
  const unlockedAchievements = achievements.filter((achievement) => achievement.unlocked);
  const nextAchievement = achievements.find((achievement) => !achievement.unlocked);

  return (
    <div className="achievements-screen">
      <section className="achievements-hero">
        <div>
          <p className="eyebrow">Insignias emocionales</p>
          <h1>Mis logros</h1>
          <p>
            Aquí se guardan las insignias conseguidas al completar cuentos, minijuegos, retos y
            nuevas rutas del mapa.
          </p>
        </div>
        <div className="achievements-counter">
          <strong>
            {unlockedAchievements.length}/{achievements.length}
          </strong>
          <span>logros</span>
        </div>
      </section>

      <section className="achievements-grid" aria-label="Listado de logros">
        {achievements.map((achievement) => (
          <article
            key={achievement.id}
            className={`achievement-card ${achievement.unlocked ? 'achievement-card--unlocked' : ''}`}
            style={{ '--achievement-color': achievement.color }}
          >
            <div className="achievement-card__icon">{achievement.icon}</div>
            <div>
              <p className="eyebrow">{achievement.type}</p>
              <h2>{achievement.title}</h2>
              <p>{achievement.description}</p>
            </div>
            <span className="achievement-card__status">
              {achievement.unlocked ? 'Conseguido' : 'Pendiente'}
            </span>
          </article>
        ))}
      </section>

      <section className="achievement-next-panel">
        <div>
          <p className="eyebrow">Siguiente objetivo</p>
          <h2>{nextAchievement ? nextAchievement.title : 'Colección completa'}</h2>
          <p>
            {nextAchievement
              ? nextAchievement.description
              : 'Has conseguido todos los logros preparados para esta fase.'}
          </p>
        </div>
        <button type="button" onClick={onGoMap}>
          Ir al mapa
        </button>
      </section>
    </div>
  );
}

export default AchievementsScreen;

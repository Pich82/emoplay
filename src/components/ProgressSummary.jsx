function ProgressSummary({ points, achievements, unlockedCount, totalCount }) {
  return (
    <section className="progress-summary" aria-label="Resumen de progreso">
      <div>
        <strong>{points}</strong>
        <span>Puntos</span>
      </div>
      <div>
        <strong>{achievements.length}</strong>
        <span>Logros</span>
      </div>
      <div>
        <strong>
          {unlockedCount}/{totalCount}
        </strong>
        <span>Islas</span>
      </div>
    </section>
  );
}

export default ProgressSummary;

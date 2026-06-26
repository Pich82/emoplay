import { getRewardCards } from '../data/rewards.js';

function RewardsScreen({ player, onClaimReward, onEquipReward, onGoMap }) {
  const rewards = getRewardCards(player);
  const ownedRewards = rewards.filter((reward) => reward.owned);
  const unlockedRewards = rewards.filter((reward) => reward.unlocked);
  const equippedReward = rewards.find((reward) => reward.equipped);
  const classBenefits = rewards.filter((reward) => reward.rewardType === 'benefit');
  const avatarRewards = rewards.filter((reward) => reward.rewardType === 'avatar');

  return (
    <div className="rewards-screen">
      <section className="rewards-hero">
        <div>
          <p className="eyebrow">Beneficios y distintivos</p>
          <h1>Recompensas</h1>
          <p>
            Reclama beneficios prácticos para el aula y distintivos visuales para tu avatar. Los
            beneficios de clase necesitan siempre la validación del docente.
          </p>
        </div>
        <div className="rewards-counter">
          <strong>
            {ownedRewards.length}/{rewards.length}
          </strong>
          <span>reclamadas</span>
        </div>
      </section>

      <section className="equipped-reward-panel">
        <div className="equipped-reward-panel__icon">
          {equippedReward ? equippedReward.icon : '\u{1F392}'}
        </div>
        <div>
          <p className="eyebrow">Distintivo destacado</p>
          <h2>{equippedReward ? equippedReward.title : 'Aún no has elegido recompensa'}</h2>
          <p>
            {equippedReward
              ? equippedReward.description
              : 'Reclama un distintivo de avatar desbloqueado y pulsa Usar para destacarlo en tu colección.'}
          </p>
        </div>
      </section>

      <section className="reward-shop-summary">
        <article>
          <span>Puntos</span>
          <strong>{player.points}</strong>
        </article>
        <article>
          <span>Disponibles</span>
          <strong>{unlockedRewards.length}</strong>
        </article>
        <article>
          <span>Beneficios</span>
          <strong>{classBenefits.length}</strong>
        </article>
        <article>
          <span>Distintivos</span>
          <strong>{avatarRewards.length}</strong>
        </article>
        <article>
          <span>Reclamadas</span>
          <strong>{ownedRewards.length}</strong>
        </article>
      </section>

      <section className="reward-policy-panel">
        <p className="eyebrow">Uso educativo</p>
        <h2>Las recompensas prácticas se acuerdan con el profesor</h2>
        <p>
          EMOPLAY propone beneficios adecuados para el aula, pero el docente decide cuándo y cómo
          aplicarlos según las normas del centro.
        </p>
      </section>

      <section className="rewards-grid" aria-label="Listado de recompensas">
        {rewards.map((reward) => (
          <article
            key={reward.id}
            className={[
              'reward-shop-card',
              reward.unlocked ? 'reward-shop-card--unlocked' : '',
              reward.owned ? 'reward-shop-card--owned' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ '--reward-color': reward.color }}
          >
            <div className="reward-shop-card__icon">{reward.icon}</div>
            <div>
              <span className="reward-shop-card__category">{reward.category}</span>
              <h2>{reward.title}</h2>
              <p>{reward.description}</p>
            </div>
            <div className="reward-shop-card__footer">
              <small>{reward.requirementLabel}</small>
              <small>{reward.practicalNote}</small>
              {!reward.unlocked && <span className="reward-state">Bloqueada</span>}
              {reward.unlocked && !reward.owned && (
                <button type="button" onClick={() => onClaimReward(reward.id)}>
                  Reclamar
                </button>
              )}
              {reward.owned && !reward.canEquip && (
                <span className="reward-state reward-state--owned">Reclamada</span>
              )}
              {reward.owned && reward.canEquip && (
                <button
                  className={reward.equipped ? 'button-secondary' : ''}
                  type="button"
                  disabled={reward.equipped}
                  onClick={() => onEquipReward(reward.id)}
                >
                  {reward.equipped ? 'En uso' : 'Usar'}
                </button>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="reward-next-panel">
        <div>
          <p className="eyebrow">Siguiente paso</p>
          <h2>Sigue explorando para abrir recompensas relevantes</h2>
          <p>Los puntos y logros desbloquean beneficios educativos y distintivos de avatar.</p>
        </div>
        <button type="button" onClick={onGoMap}>
          Ir al mapa
        </button>
      </section>
    </div>
  );
}

export default RewardsScreen;

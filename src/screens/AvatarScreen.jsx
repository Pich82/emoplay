import { useEffect, useMemo, useState } from 'react';
import AvatarPreview from '../components/AvatarPreview.jsx';
import {
  avatarOptionGroups,
  buildAvatarOptionPreviewUrl,
  buildDiceBearAvatarUrl,
  defaultAvatarConfig,
  isAvatarOptionUnlocked,
  normalizeAvatarConfig,
} from '../data/avatar.js';
import {
  avatarWardrobeSlots,
  getAvatarWardrobeSections,
  getAvatarWardrobeStats,
  getEquippedAvatarVisuals,
} from '../data/avatarWardrobe.js';

function AvatarScreen({ avatarConfig, onAvatarChange, player, onClaimReward }) {
  const [activeTab, setActiveTab] = useState('Pelo');
  const [message, setMessage] = useState('');
  const [celebration, setCelebration] = useState(null);
  const [imageFallback, setImageFallback] = useState(false);
  const config = normalizeAvatarConfig(avatarConfig);
  const avatarUrl = useMemo(() => buildDiceBearAvatarUrl(config), [config]);
  const tabNames = useMemo(() => Object.keys(avatarOptionGroups), []);
  const activeGroup = avatarOptionGroups[activeTab];
  const wardrobeSections = useMemo(() => getAvatarWardrobeSections(player), [player]);
  const wardrobeStats = useMemo(() => getAvatarWardrobeStats(player), [player]);
  const equippedVisuals = useMemo(() => getEquippedAvatarVisuals(config), [config]);
  const equippedItems = avatarWardrobeSlots
    .filter((slot) => slot.id !== 'frame')
    .map((slot) => equippedVisuals[slot.id])
    .filter(Boolean);

  useEffect(() => {
    setImageFallback(false);
  }, [avatarUrl]);

  const showMessage = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(''), 1400);
  };

  const showCelebration = (item, text = 'Objeto equipado') => {
    setCelebration({ icon: item.icon, title: item.title, text });
    window.setTimeout(() => setCelebration(null), 2000);
  };

  const updateConfig = (key, value, successMessage = 'Avatar guardado') => {
    onAvatarChange(
      normalizeAvatarConfig({
        ...config,
        [key]: value,
      }),
    );
    showMessage(successMessage);
  };

  const randomizeAvatar = () => {
    const nextConfig = { ...config, seed: `Emoplay${Date.now()}` };

    Object.values(avatarOptionGroups).forEach((group) => {
      const availableOptions = group.options.filter((option) =>
        isAvatarOptionUnlocked(option, player),
      );
      const randomOption =
        availableOptions[Math.floor(Math.random() * availableOptions.length)] || group.options[0];
      nextConfig[group.key] = randomOption.value;
    });

    onAvatarChange(normalizeAvatarConfig(nextConfig));
    showMessage('Avatar aleatorio');
  };

  const resetAvatar = () => {
    onAvatarChange(defaultAvatarConfig);
    showMessage('Avatar restablecido');
  };

  const equipEmptyWardrobeSlot = (slot) => {
    updateConfig(slot.configKey, slot.emptyValue, 'Objeto quitado');
  };

  const equipWardrobeItem = (slot, item) => {
    if (!item.unlocked) {
      return;
    }

    if (!item.owned) {
      onClaimReward?.(item.id);
    }

    updateConfig(slot.configKey, item.avatarValue, 'Objeto equipado');
    showCelebration(item, item.owned ? 'Equipado' : 'Nuevo premio');
  };

  return (
    <div className="dice-avatar-screen">
      <section className="dice-avatar-hero dice-avatar-hero--compact">
        <div className="dice-avatar-preview-card">
          <div className="avatar-preview-title">
            <p className="eyebrow">Avatar</p>
            <h1>Mi explorador emocional</h1>
          </div>
          <div className="avatar-showcase">
            <AvatarPreview
              diceBearConfig={config}
              size="editor"
              frameColor={equippedVisuals.frame?.color}
              onImageError={() => setImageFallback(true)}
            />
            <div className="avatar-insignia-rack" aria-label="Trofeos equipados">
              <strong>Trofeos</strong>
              <div className="avatar-insignia-list">
                {equippedItems.length > 0 ? (
                  equippedItems.map((item) => (
                    <span key={item.id} style={{ '--insignia-color': item.color }}>
                      <em>{item.icon}</em>
                      <small>{item.title}</small>
                    </span>
                  ))
                ) : (
                  <p>Sin trofeos equipados</p>
                )}
              </div>
            </div>
          </div>
          {imageFallback && (
            <small className="avatar-fallback-note">Vista local del avatar activa.</small>
          )}
          <div className="dice-avatar-actions">
            <button type="button" onClick={randomizeAvatar}>
              Aleatorio
            </button>
            <button className="button-secondary" type="button" onClick={resetAvatar}>
              Resetear
            </button>
          </div>
          {message && <div className="avatar-message">{message}</div>}
        </div>
      </section>

      {celebration && (
        <section className="avatar-celebration" aria-live="polite">
          <span>{celebration.icon}</span>
          <div>
            <strong>{celebration.title}</strong>
            <small>{celebration.text}</small>
          </div>
        </section>
      )}

      <section className="dice-editor-panel">
        <div className="avatar-panel-title">
          <div>
            <p className="eyebrow">Apariencia libre</p>
            <h2>Rasgos y colores</h2>
          </div>
        </div>

        <div className="avatar-tabs" role="tablist" aria-label="Opciones del avatar">
          {tabNames.map((tabName) => (
            <button
              key={tabName}
              className={activeTab === tabName ? 'is-active' : ''}
              type="button"
              onClick={() => setActiveTab(tabName)}
            >
              <span>{avatarOptionGroups[tabName].icon}</span>
              {tabName}
            </button>
          ))}
        </div>

        <div className="avatar-options-grid">
          {activeGroup.options.map((option) => {
            const isSelected = config[activeGroup.key] === option.value;
            const isLocked = !isAvatarOptionUnlocked(option, player);
            const previewUrl = buildAvatarOptionPreviewUrl(config, activeGroup.key, option.value);

            return (
              <button
                key={option.value}
                className={[isSelected ? 'is-selected' : '', isLocked ? 'is-locked' : '']
                  .filter(Boolean)
                  .join(' ')}
                type="button"
                disabled={isLocked}
                title={isLocked ? `Se desbloquea con ${option.unlockLabel}` : option.label}
                onClick={() => updateConfig(activeGroup.key, option.value)}
              >
                <span className="avatar-option-thumb" aria-hidden="true">
                  <img src={previewUrl} alt="" loading="lazy" />
                  {option.color && (
                    <span className="avatar-option-color" style={{ backgroundColor: option.color }} />
                  )}
                  {isLocked && <span className="avatar-option-lock-icon">{'\u{1F512}'}</span>}
                </span>
                <span className="avatar-option-label">{option.label}</span>
                {isLocked && <small className="avatar-option-lock">{option.unlockLabel}</small>}
                {isSelected && <strong>{'\u2713'}</strong>}
              </button>
            );
          })}
        </div>
      </section>

      <section className="avatar-wardrobe-panel">
        <div className="avatar-wardrobe-header">
          <div>
            <p className="eyebrow">Armario</p>
            <h2>Premios equipables</h2>
          </div>
          <div className="avatar-wardrobe-counter">
            <strong>{wardrobeStats.unlocked}</strong>
            <span>desbloqueados</span>
          </div>
        </div>

        <div className="avatar-wardrobe-sections">
          {wardrobeSections.map((slot) => {
            const isEmptySelected = config[slot.configKey] === slot.emptyValue;

            return (
              <article key={slot.id} className="avatar-wardrobe-section">
                <header>
                  <span>{slot.icon}</span>
                  <h3>{slot.name}</h3>
                </header>

                <div className="avatar-wardrobe-grid">
                  <button
                    className={[
                      'avatar-wardrobe-item',
                      'avatar-wardrobe-item--empty',
                      isEmptySelected ? 'is-selected' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    type="button"
                    disabled={isEmptySelected}
                    onClick={() => equipEmptyWardrobeSlot(slot)}
                  >
                    <span>{slot.icon}</span>
                    <strong>{slot.emptyLabel}</strong>
                    <small>{isEmptySelected ? 'En uso' : 'Quitar'}</small>
                  </button>

                  {slot.items.map((item) => {
                    const isEquipped = config[slot.configKey] === item.avatarValue;
                    const actionLabel = !item.unlocked
                      ? 'Bloqueado'
                      : !item.owned
                        ? 'Reclamar'
                        : isEquipped
                          ? 'En uso'
                          : 'Usar';

                    return (
                      <button
                        key={item.id}
                        className={[
                          'avatar-wardrobe-item',
                          item.unlocked ? 'is-unlocked' : 'is-locked',
                          item.owned ? 'is-owned' : '',
                          !item.owned && item.unlocked ? 'is-ready' : '',
                          isEquipped ? 'is-selected' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        style={{ '--wardrobe-color': item.color }}
                        type="button"
                        disabled={!item.unlocked || isEquipped}
                        title={!item.unlocked ? item.lockedReason : item.title}
                        onClick={() => equipWardrobeItem(slot, item)}
                      >
                        <span>{item.icon}</span>
                        <strong>{item.title}</strong>
                        <small>{item.unlocked ? actionLabel : item.lockedReason}</small>
                        {!item.unlocked && <em>{'\u{1F512}'}</em>}
                      </button>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="avatar-seed-panel">
        <label htmlFor="avatar-seed">Nombre del avatar</label>
        <input
          id="avatar-seed"
          type="text"
          value={config.seed}
          maxLength={24}
          placeholder="Escribe un nombre"
          onChange={(event) => updateConfig('seed', event.target.value)}
        />
      </section>

      <section className="avatar-explorer-panel">
        <div>
          <p className="eyebrow">Información</p>
          <h2>{player.studentName || 'Sin nombre'}</h2>
        </div>

        <div className="avatar-explorer-stats">
          <article>
            <strong>{player.points}</strong>
            <span>Puntos</span>
          </article>
          <article>
            <strong>
              {wardrobeStats.owned}/{wardrobeStats.total}
            </strong>
            <span>Objetos</span>
          </article>
          <article>
            <strong>{wardrobeStats.pendingToClaim}</strong>
            <span>Por reclamar</span>
          </article>
        </div>

      </section>
    </div>
  );
}

export default AvatarScreen;


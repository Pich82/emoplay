function EmotionMapIsland({ emotion, visual, stepLabel, state, onOpen }) {
  const stepText = stepLabel ? `, paso ${stepLabel}` : ', isla futura';

  return (
    <button
      className={`emotion-map-island emotion-map-island--${visual.variant} ${state.className}`}
      type="button"
      style={{
        '--map-x': visual.position.x,
        '--map-y': visual.position.y,
        '--island-scale': visual.scale,
        '--island-color': emotion.color,
        '--island-accent': emotion.accent,
      }}
      title={visual.title}
      onClick={() => onOpen(emotion.id)}
      aria-label={`${emotion.shortName}, ${state.label.toLowerCase()}${stepText}`}
    >
      {stepLabel ? <span className="emotion-map-island__step">{stepLabel}</span> : null}
      <span className="emotion-map-island__scene" aria-hidden="true">
        <span className="emotion-map-island__water-ring" />
        <span className="emotion-map-island__base" />
        <span className="emotion-map-island__plateau" />
        <span className="emotion-map-island__landmark">{visual.landmark}</span>
        {visual.items.map((item, itemIndex) => (
          <span
            key={`${emotion.id}-${item}`}
            className={`emotion-map-island__item emotion-map-island__item--${itemIndex + 1}`}
          >
            {item}
          </span>
        ))}
        <span className="emotion-map-island__lock">🔒</span>
      </span>
      <span className="emotion-map-island__name">{emotion.name}</span>
      <span className="emotion-map-island__state">{state.label}</span>
    </button>
  );
}

export default EmotionMapIsland;

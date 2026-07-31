function LoveCompassScenario({ scenario, selectedChoiceId, onChoose }) {
  const selectedChoice = scenario.choices.find((choice) => choice.id === selectedChoiceId);

  return (
    <fieldset className="love-scenario">
      <legend>
        <span aria-hidden="true">{scenario.icon}</span>
        <span>{scenario.title}</span>
      </legend>
      <p className="love-scenario__prompt">{scenario.prompt}</p>

      <div className="love-choice-grid">
        {scenario.choices.map((choice) => {
          const isSelected = choice.id === selectedChoiceId;

          return (
            <button
              key={choice.id}
              className={`love-choice ${isSelected ? 'love-choice--selected' : ''}`}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onChoose(choice.id)}
            >
              <span aria-hidden="true">{choice.icon}</span>
              <strong>{choice.label}</strong>
            </button>
          );
        })}
      </div>

      {selectedChoice && (
        <div className="love-choice-feedback" role="status">
          <span aria-hidden="true">🧭</span>
          <p>{selectedChoice.feedback}</p>
        </div>
      )}
    </fieldset>
  );
}

export default LoveCompassScenario;

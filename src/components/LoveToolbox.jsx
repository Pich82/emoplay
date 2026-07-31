function LoveToolbox({ tools, selectedToolIds, onChange, limit = 3 }) {
  const toggleTool = (toolId) => {
    if (selectedToolIds.includes(toolId)) {
      onChange(selectedToolIds.filter((selectedId) => selectedId !== toolId));
      return;
    }

    if (selectedToolIds.length < limit) {
      onChange([...selectedToolIds, toolId]);
    }
  };

  return (
    <div className="love-toolbox">
      <div className="love-toolbox__counter" aria-live="polite">
        <strong>
          {selectedToolIds.length}/{limit}
        </strong>
        <span>herramientas elegidas</span>
      </div>

      <div className="love-tool-grid">
        {tools.map((tool) => {
          const isSelected = selectedToolIds.includes(tool.id);
          const isDisabled = !isSelected && selectedToolIds.length >= limit;

          return (
            <button
              key={tool.id}
              className={`love-tool ${isSelected ? 'love-tool--selected' : ''}`}
              type="button"
              disabled={isDisabled}
              aria-pressed={isSelected}
              onClick={() => toggleTool(tool.id)}
            >
              <span className="love-tool__icon" aria-hidden="true">
                {tool.icon}
              </span>
              <span>
                <strong>{tool.title}</strong>
                <small>{tool.origin}</small>
                <span>{tool.description}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default LoveToolbox;

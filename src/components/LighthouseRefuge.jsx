import AvatarPreview from './AvatarPreview.jsx';
import {
  getLoveCommitmentById,
  getLoveToolById,
  loveRouteSymbols,
} from '../data/loveFinale.js';

function LighthouseRefuge({
  player,
  avatarConfig,
  finale,
  onReview,
  onGoMap,
}) {
  const selectedTools = finale.selectedToolIds.map(getLoveToolById).filter(Boolean);
  const commitment = getLoveCommitmentById(finale.careCommitmentId);

  return (
    <div className="lighthouse-refuge">
      <section className="love-finale__visual love-finale__visual--refuge">
        <img
          src="/images/stories/amor/refugio-del-faro.jpg"
          alt="Refugio abierto junto al faro, con jardín, banco, brújula y vistas al archipiélago."
        />
        <div className="love-finale__avatar love-finale__avatar--refuge">
          <AvatarPreview
            avatar={player.avatar}
            diceBearConfig={avatarConfig}
            frameColor="#f7c94c"
          />
          <strong>{player.studentName || 'Explorador'}</strong>
        </div>
      </section>

      <header className="lighthouse-refuge__header">
        <div>
          <p className="eyebrow">Refugio permanente</p>
          <h1>El Faro de los Vínculos Seguros</h1>
          <p>
            El faro queda abierto para recordar que cuidar también significa escuchar,
            respetar límites, pedir ayuda y reparar con calma.
          </p>
        </div>
        <div className="lighthouse-refuge__badge" aria-label="Insignia final conseguida">
          <span aria-hidden="true">🗼</span>
          <strong>Faro encendido</strong>
          <small>Ruta emocional completada</small>
        </div>
      </header>

      <section className="lighthouse-refuge__summary" aria-label="Resumen de la experiencia final">
        <div className="lighthouse-refuge__tools">
          <p className="eyebrow">Tus herramientas</p>
          <h2>La caja que elegiste</h2>
          <div>
            {selectedTools.map((tool) => (
              <span key={tool.id}>
                <span aria-hidden="true">{tool.icon}</span>
                {tool.title}
              </span>
            ))}
          </div>
        </div>

        <div className="lighthouse-refuge__commitment">
          <p className="eyebrow">Tu compromiso</p>
          <h2>{commitment?.title || 'Seguir cuidándote y cuidando con respeto.'}</h2>
        </div>
      </section>

      {finale.futureMessage && (
        <section className="lighthouse-refuge__message">
          <p className="eyebrow">Mensaje privado para tu yo futuro</p>
          <blockquote>{finale.futureMessage}</blockquote>
          <small>Este mensaje queda en tu progreso local y no aparece en el panel docente.</small>
        </section>
      )}

      <section className="lighthouse-refuge__islands" aria-label="Símbolos del recorrido">
        {loveRouteSymbols.map((symbol) => (
          <span key={symbol.label} title={symbol.label}>
            <span aria-hidden="true">{symbol.icon}</span>
            <small>{symbol.label}</small>
          </span>
        ))}
      </section>

      <div className="love-finale__actions">
        <button type="button" onClick={onGoMap}>
          Volver al mapa
        </button>
        <button className="button-secondary" type="button" onClick={onReview}>
          Revisar mis elecciones
        </button>
      </div>
    </div>
  );
}

export default LighthouseRefuge;

import AvatarPreview from './AvatarPreview.jsx';
import HomeButton from './HomeButton.jsx';

function AppShell({ children, player, avatarConfig, onGoHome, onOpenTeacherPanel }) {
  return (
    <div className="app">
      <header className="top-bar">
        <div className="top-bar__main">
          <button className="brand-button" type="button" onClick={onGoHome} aria-label="Volver al inicio">
            <span className="brand-mark">E</span>
            <span>
              <strong>EMOPLAY</strong>
              <small>Mapa emocional</small>
            </span>
          </button>

          <button
            className="teacher-top-access"
            type="button"
            onClick={onOpenTeacherPanel}
            aria-label="Abrir acceso al panel docente"
          >
            <span>{'\u{1F512}'}</span>
            <span>
              <strong>Panel docente</strong>
              <small>Acceso con código</small>
            </span>
          </button>
        </div>

        <div className="player-pill" aria-label="Datos del alumno">
          <AvatarPreview avatar={player.avatar} diceBearConfig={avatarConfig} size="small" />
          <span>{player.studentName || 'Explorador'}</span>
          <strong>{player.points} puntos</strong>
        </div>
      </header>

      <main className="screen">{children}</main>

      <HomeButton onClick={onGoHome} />
    </div>
  );
}

export default AppShell;

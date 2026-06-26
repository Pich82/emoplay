import { useState } from 'react';

function WelcomeScreen({ onStart, savedName }) {
  const [name, setName] = useState(savedName || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onStart(name.trim() || 'Explorador');
  };

  return (
    <main className="welcome-screen">
      <section className="welcome-hero">
        <div className="welcome-hero__content">
          <p className="eyebrow">Aventura emocional para Primaria</p>
          <h1>EMOPLAY</h1>
          <p>
            Explora islas, descubre cuentos y aprende a reconocer emociones paso a paso.
          </p>

          <form className="welcome-form" onSubmit={handleSubmit}>
            <label htmlFor="student-name">Nombre del alumno</label>
            <div>
              <input
                id="student-name"
                type="text"
                value={name}
                maxLength={24}
                placeholder="Escribe tu nombre"
                onChange={(event) => setName(event.target.value)}
              />
              <button type="submit">Entrar</button>
            </div>
          </form>
        </div>

        <div className="welcome-hero__scene" aria-hidden="true">
          <span className="sun" />
          <span className="cloud cloud-one" />
          <span className="cloud cloud-two" />
          <span className="hero-island hero-island-one" />
          <span className="hero-island hero-island-two" />
          <span className="boat">E</span>
        </div>
      </section>
    </main>
  );
}

export default WelcomeScreen;

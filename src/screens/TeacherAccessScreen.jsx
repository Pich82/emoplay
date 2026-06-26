import { useState } from 'react';
import { verifyTeacherAccessCode } from '../data/teacherAccess.js';

function TeacherAccessScreen({ onAccessGranted, onGoHome }) {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const submitAccessCode = (event) => {
    event.preventDefault();

    if (verifyTeacherAccessCode(code)) {
      setCode('');
      setMessage('');
      onAccessGranted();
      return;
    }

    setMessage('Código incorrecto. Pide el código docente antes de entrar.');
  };

  return (
    <div className="teacher-access-screen">
      <section className="teacher-access-card">
        <div className="teacher-access-card__icon">
          <span>{'\u{1F512}'}</span>
        </div>
        <p className="eyebrow">Acceso docente</p>
        <h1>Panel protegido</h1>
        <p>
          Esta zona muestra informes, progreso y entradas del Diario Emo. Para evitar que el
          alumnado entre por accidente, pide el código docente local.
        </p>

        <form className="teacher-access-form" onSubmit={submitAccessCode}>
          <label htmlFor="teacher-access-code">Código docente</label>
          <input
            id="teacher-access-code"
            type="password"
            value={code}
            maxLength={20}
            placeholder="Introduce el código"
            autoComplete="off"
            onChange={(event) => setCode(event.target.value)}
          />
          <div className="teacher-access-actions">
            <button type="submit">Entrar al panel</button>
            <button className="button-secondary" type="button" onClick={onGoHome}>
              Volver al inicio
            </button>
          </div>
        </form>

        {message && <div className="teacher-access-message">{message}</div>}

        <div className="teacher-access-note">
          <strong>Protección provisional</strong>
          <span>
            En esta fase no hay cuentas reales ni base de datos. Más adelante se podrá sustituir
            por usuario y contraseña docente.
          </span>
        </div>
      </section>
    </div>
  );
}

export default TeacherAccessScreen;

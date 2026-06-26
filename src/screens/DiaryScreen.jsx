import { useMemo, useState } from 'react';
import {
  buildDiaryEntry,
  diaryIntensityLevels,
  diaryMoodOptions,
  diaryReflectionIdeas,
  diaryStorageKey,
  getDiaryIntensityByValue,
  getDiaryMoodById,
  normalizeDiaryEntries,
} from '../data/diary.js';
import useLocalStorage from '../hooks/useLocalStorage.js';

const maxNoteLength = 240;

function formatDiaryDate(dateValue) {
  return new Intl.DateTimeFormat('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(new Date(dateValue));
}

function formatDiaryTime(dateValue) {
  return new Intl.DateTimeFormat('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateValue));
}

function getSupportMessage(intensity) {
  if (Number(intensity) >= 5) {
    return 'Cuando la intensidad es muy alta, es buena idea contárselo a un adulto de confianza.';
  }

  if (Number(intensity) >= 4) {
    return 'Puedes hacer una pausa, respirar despacio y pedir ayuda si la necesitas.';
  }

  return 'Nombrar la emoción ya es un paso importante para entenderla mejor.';
}

function getDiaryStats(entries) {
  if (entries.length === 0) {
    return {
      total: 0,
      lastMood: 'Sin entradas',
      repeatedMood: 'Aún no',
      averageIntensity: '0/5',
    };
  }

  const moodCount = entries.reduce((counts, entry) => {
    counts[entry.moodId] = (counts[entry.moodId] || 0) + 1;
    return counts;
  }, {});
  const repeatedMoodId = Object.entries(moodCount).sort((first, second) => second[1] - first[1])[0][0];
  const totalIntensity = entries.reduce((sum, entry) => sum + entry.intensity, 0);

  return {
    total: entries.length,
    lastMood: getDiaryMoodById(entries[0].moodId).name,
    repeatedMood: getDiaryMoodById(repeatedMoodId).name,
    averageIntensity: `${(totalIntensity / entries.length).toFixed(1)}/5`,
  };
}

function DiaryScreen({ player, onGoMap }) {
  const [storedEntries, setStoredEntries] = useLocalStorage(diaryStorageKey, []);
  const entries = useMemo(() => normalizeDiaryEntries(storedEntries), [storedEntries]);
  const stats = useMemo(() => getDiaryStats(entries), [entries]);
  const [selectedMoodId, setSelectedMoodId] = useState('');
  const [intensity, setIntensity] = useState(3);
  const [note, setNote] = useState('');
  const [message, setMessage] = useState('');
  const selectedMood = selectedMoodId ? getDiaryMoodById(selectedMoodId) : null;
  const selectedIntensity = getDiaryIntensityByValue(intensity);
  const cleanNote = note.trim();
  const canSave = selectedMoodId && cleanNote.length >= 5;

  const saveEntry = (event) => {
    event.preventDefault();

    if (!selectedMoodId) {
      setMessage('Elige primero cómo te sientes hoy.');
      return;
    }

    if (cleanNote.length < 5) {
      setMessage('Escribe una nota breve para recordar qué ha pasado.');
      return;
    }

    const nextEntry = buildDiaryEntry({
      moodId: selectedMoodId,
      intensity,
      note: cleanNote,
    });

    setStoredEntries((currentEntries) =>
      normalizeDiaryEntries([nextEntry, ...normalizeDiaryEntries(currentEntries)]),
    );
    setNote('');
    setSelectedMoodId('');
    setIntensity(3);
    setMessage('Entrada guardada en tu Diario Emo.');
  };

  const clearForm = () => {
    setSelectedMoodId('');
    setIntensity(3);
    setNote('');
    setMessage('');
  };

  const deleteEntry = (entryId) => {
    setStoredEntries((currentEntries) =>
      normalizeDiaryEntries(currentEntries).filter((entry) => entry.id !== entryId),
    );
  };

  const useIdea = (idea) => {
    setNote((currentNote) => {
      const separator = currentNote.trim() ? '\n' : '';
      return `${currentNote}${separator}${idea} `.slice(0, maxNoteLength);
    });
  };

  return (
    <div className="diary-screen">
      <section className="diary-hero">
        <div>
          <p className="eyebrow">Registro emocional</p>
          <h1>Diario Emo</h1>
          <p>
            Hola, {player.studentName || 'explorador'}. Elige una emoción, marca su intensidad y
            escribe una nota breve para entender mejor cómo te sientes hoy.
          </p>
        </div>
        <div className="diary-hero__summary">
          <span>{'\u{1F4D8}'}</span>
          <strong>{stats.total}</strong>
          <small>entradas guardadas</small>
        </div>
      </section>

      <section className="diary-stats-grid" aria-label="Resumen del diario">
        <article>
          <span>Última emoción</span>
          <strong>{stats.lastMood}</strong>
        </article>
        <article>
          <span>Más repetida</span>
          <strong>{stats.repeatedMood}</strong>
        </article>
        <article>
          <span>Intensidad media</span>
          <strong>{stats.averageIntensity}</strong>
        </article>
      </section>

      <section className="diary-layout">
        <form className="diary-form-panel" onSubmit={saveEntry}>
          <div className="diary-field">
            <div>
              <p className="eyebrow">Paso 1</p>
              <h2>¿Cómo te sientes hoy?</h2>
            </div>
            <div className="diary-mood-grid">
              {diaryMoodOptions.map((mood) => (
                <button
                  key={mood.id}
                  className={[
                    'diary-mood-button',
                    selectedMoodId === mood.id ? 'diary-mood-button--selected' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  type="button"
                  style={{ '--mood-color': mood.color, '--mood-accent': mood.accent }}
                  onClick={() => setSelectedMoodId(mood.id)}
                >
                  <span>{mood.icon}</span>
                  <strong>{mood.name}</strong>
                </button>
              ))}
            </div>
            {selectedMood && (
              <div className="diary-selected-mood" style={{ '--mood-color': selectedMood.color }}>
                <span>{selectedMood.icon}</span>
                <p>{selectedMood.helper}</p>
              </div>
            )}
          </div>

          <div className="diary-field">
            <div>
              <p className="eyebrow">Paso 2</p>
              <h2>¿Con qué intensidad?</h2>
            </div>
            <div className="diary-intensity-grid">
              {diaryIntensityLevels.map((level) => (
                <button
                  key={level.value}
                  className={[
                    'diary-intensity-button',
                    Number(intensity) === level.value ? 'diary-intensity-button--selected' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  type="button"
                  onClick={() => setIntensity(level.value)}
                >
                  <strong>{level.value}</strong>
                  <span>{level.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="diary-field">
            <div>
              <p className="eyebrow">Paso 3</p>
              <h2>Nota breve</h2>
            </div>
            <textarea
              value={note}
              maxLength={maxNoteLength}
              placeholder="Escribe una frase sobre lo que ha pasado o lo que necesitas."
              onChange={(event) => setNote(event.target.value)}
            />
            <div className="diary-note-footer">
              <span>{cleanNote.length}/{maxNoteLength} caracteres</span>
              <span>{selectedIntensity.description}</span>
            </div>
            <div className="diary-idea-row" aria-label="Ideas para escribir">
              {diaryReflectionIdeas.map((idea) => (
                <button key={idea} className="button-secondary" type="button" onClick={() => useIdea(idea)}>
                  {idea}
                </button>
              ))}
            </div>
          </div>

          <div className="diary-form-actions">
            <button type="submit" disabled={!canSave}>
              Guardar entrada
            </button>
            <button className="button-secondary" type="button" onClick={clearForm}>
              Limpiar
            </button>
            <button className="button-secondary" type="button" onClick={onGoMap}>
              Ver mapa
            </button>
          </div>

          {message && <div className="diary-message">{message}</div>}
        </form>

        <aside className="diary-support-panel">
          <p className="eyebrow">Pequeña brújula</p>
          <h2>{selectedMood ? selectedMood.name : 'Elige una emoción'}</h2>
          <p>{getSupportMessage(intensity)}</p>
          <div className="diary-support-card">
            <span>{selectedMood ? selectedMood.icon : '\u{1F9ED}'}</span>
            <strong>{selectedIntensity.label}</strong>
            <small>Intensidad {selectedIntensity.value}/5</small>
          </div>
        </aside>
      </section>

      <section className="diary-history">
        <div className="diary-history__header">
          <div>
            <p className="eyebrow">Historial</p>
            <h2>Mis entradas guardadas</h2>
          </div>
          <span>{entries.length} registros</span>
        </div>

        {entries.length === 0 ? (
          <div className="diary-empty-panel">
            <span>{'\u{1F4DD}'}</span>
            <p>Aún no hay entradas. Guarda la primera para empezar a ver tu camino emocional.</p>
          </div>
        ) : (
          <div className="diary-history-list">
            {entries.map((entry) => {
              const mood = getDiaryMoodById(entry.moodId);
              const entryIntensity = getDiaryIntensityByValue(entry.intensity);

              return (
                <article
                  key={entry.id}
                  className="diary-entry-card"
                  style={{ '--mood-color': mood.color, '--mood-accent': mood.accent }}
                >
                  <div className="diary-entry-card__header">
                    <div className="diary-entry-icon">{mood.icon}</div>
                    <div className="diary-entry-meta">
                      <strong>{mood.name}</strong>
                      <span>
                        {formatDiaryDate(entry.createdAt)} · {formatDiaryTime(entry.createdAt)}
                      </span>
                    </div>
                    <div className="diary-entry-intensity">
                      <strong>{entry.intensity}/5</strong>
                      <span>{entryIntensity.label}</span>
                    </div>
                  </div>
                  <p>{entry.note}</p>
                  <button className="button-secondary" type="button" onClick={() => deleteEntry(entry.id)}>
                    Borrar entrada
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default DiaryScreen;

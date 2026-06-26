import { emotions, getEmotionById } from './emotions.js';

export const diaryStorageKey = 'emoplay:diaryEntries';

const moodHelpers = {
  ternura: 'Me apetece cuidar o sentirme acompañado.',
  admiracion: 'Algo o alguien me inspira.',
  alegria: 'Tengo ganas de compartir algo bueno.',
  calma: 'Me siento tranquilo y con el cuerpo sereno.',
  miedo: 'Necesito seguridad o ayuda para entender lo que pasa.',
  enfado: 'Algo me ha molestado y necesito expresarlo bien.',
  tristeza: 'Necesito consuelo, tiempo o compañía.',
  afectividad: 'Estoy pensando en mis vínculos y personas cercanas.',
  empatia: 'Estoy intentando comprender cómo se siente otra persona.',
  gratitud: 'Quiero agradecer algo que he recibido.',
  verguenza: 'Me cuesta mostrarme o hablar de algo.',
  amor: 'Siento cariño, cuidado o confianza.',
  sorpresa: 'Algo inesperado me ha movido por dentro.',
  confianza: 'Me siento capaz o quiero dar un paso.',
  frustracion: 'Algo no sale como esperaba y necesito volver a intentarlo.',
  culpa: 'Quiero reparar o pensar en lo que puedo hacer mejor.',
  celos: 'Me estoy comparando o necesito sentirme seguro.',
  asco: 'Algo me produce rechazo o necesito poner un límite.',
};

export const diaryMoodOptions = emotions.map((emotion) => ({
  id: emotion.id,
  name: emotion.name,
  icon: emotion.icon,
  color: emotion.color,
  accent: emotion.accent,
  helper: moodHelpers[emotion.id] || emotion.intro,
}));

export const diaryIntensityLevels = [
  {
    value: 1,
    label: 'Muy suave',
    description: 'Lo noto un poquito.',
  },
  {
    value: 2,
    label: 'Suave',
    description: 'Está presente, pero puedo seguir.',
  },
  {
    value: 3,
    label: 'Media',
    description: 'Lo noto bastante.',
  },
  {
    value: 4,
    label: 'Alta',
    description: 'Me ocupa mucho.',
  },
  {
    value: 5,
    label: 'Muy alta',
    description: 'Necesito parar o pedir ayuda.',
  },
];

export const diaryReflectionIdeas = [
  '¿Qué ha pasado?',
  '¿Dónde lo notas en el cuerpo?',
  '¿Qué necesitas ahora?',
  '¿Quién podría ayudarte?',
];

export function getDiaryMoodById(moodId) {
  return diaryMoodOptions.find((mood) => mood.id === moodId) || diaryMoodOptions[0];
}

export function getDiaryIntensityByValue(value) {
  return (
    diaryIntensityLevels.find((level) => level.value === Number(value)) ||
    diaryIntensityLevels[2]
  );
}

function normalizeDiaryDate(dateValue) {
  const date = new Date(dateValue);

  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

export function normalizeDiaryEntries(entries) {
  if (!Array.isArray(entries)) {
    return [];
  }

  return entries
    .filter((entry) => entry && getEmotionById(entry.moodId))
    .map((entry) => ({
      id: String(entry.id || `diary_${Date.now()}`),
      moodId: entry.moodId,
      intensity: Math.min(5, Math.max(1, Number(entry.intensity) || 3)),
      note: String(entry.note || '').slice(0, 240),
      createdAt: normalizeDiaryDate(entry.createdAt),
    }))
    .sort((firstEntry, secondEntry) => new Date(secondEntry.createdAt) - new Date(firstEntry.createdAt));
}

export function buildDiaryEntry({ moodId, intensity, note }) {
  return {
    id: `diary_${Date.now()}`,
    moodId,
    intensity: Math.min(5, Math.max(1, Number(intensity) || 3)),
    note: note.trim().slice(0, 240),
    createdAt: new Date().toISOString(),
  };
}

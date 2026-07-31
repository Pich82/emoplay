export const loveFinaleVersion = 1;
export const loveFinalePointReward = 50;
export const loveFinaleAchievementId = 'final_amor';
export const loveFinaleRewardId = 'marco_archipielago';

export const loveFinaleChapters = [
  {
    id: 'arrival',
    step: 1,
    eyebrow: 'Capítulo 1',
    title: 'El archipiélago responde',
    description:
      'Todas las emociones traen una señal al faro. Ninguna sobra: cada una enseñó una forma distinta de comprenderte y cuidarte.',
    imageSrc: '/images/stories/amor/capitulo-1-archipielago.jpg',
    imageAlt:
      'Objetos y luces de las islas emocionales viajan sobre el mar hacia un faro acogedor.',
  },
  {
    id: 'compass',
    step: 2,
    eyebrow: 'Capítulo 2',
    title: 'La brújula de los vínculos seguros',
    description:
      'Explora situaciones cotidianas y descubre varias formas de cuidar un vínculo sin dejar de respetar tus límites.',
    imageSrc: '/images/stories/amor/capitulo-2-brujula.jpg',
    imageAlt:
      'Sala luminosa con una brújula central y cuatro caminos representados mediante objetos.',
  },
  {
    id: 'toolbox',
    step: 3,
    eyebrow: 'Capítulo 3',
    title: 'Mi caja de herramientas',
    description:
      'Elige tres recursos emocionales que quieras recordar cuando una situación se vuelva difícil.',
    imageSrc: '/images/stories/amor/capitulo-3-herramientas.jpg',
    imageAlt:
      'Mesa del faro con herramientas emocionales representadas mediante objetos simbólicos.',
  },
  {
    id: 'care',
    step: 4,
    eyebrow: 'Capítulo 4',
    title: 'Cuidarme y cuidar',
    description:
      'Cuidar a otra persona nunca exige ignorar tu seguridad, aceptar presión o renunciar a pedir ayuda.',
    imageSrc: '/images/stories/amor/capitulo-4-cuidarnos.jpg',
    imageAlt:
      'Terraza segura con varios caminos de cuidado, escucha, ayuda y reparación.',
  },
  {
    id: 'message',
    step: 5,
    eyebrow: 'Capítulo 5',
    title: 'Mensaje a mi yo futuro',
    description:
      'Guarda una frase opcional y elige un compromiso pequeño que dependa de ti.',
    imageSrc: '/images/stories/amor/capitulo-5-mensaje.jpg',
    imageAlt:
      'Rincón tranquilo del faro con un cuaderno en blanco, lápices, brújula y un sobre.',
  },
  {
    id: 'beacon',
    step: 6,
    eyebrow: 'Capítulo 6',
    title: 'El faro encendido',
    description:
      'Tu recorrido no termina con una respuesta perfecta. Termina con herramientas para seguir escuchando, eligiendo y reparando.',
    imageSrc: '/images/stories/amor/capitulo-6-faro-encendido.jpg',
    imageAlt:
      'Faro iluminado y conectado mediante haces de colores con todo el archipiélago.',
  },
];

export const loveScenarioCatalog = [
  {
    id: 'space',
    icon: '🪑',
    title: 'Alguien pide espacio',
    prompt: 'Una persona cercana dice que ahora necesita estar un rato a solas. ¿Qué puedes hacer?',
    choices: [
      {
        id: 'respect-space',
        icon: '🌿',
        label: 'Respetar su espacio y decir que puede buscarme después',
        feedback:
          'Respetar un límite también es cuidar. La otra persona puede acercarse cuando esté preparada.',
      },
      {
        id: 'agree-time',
        icon: '🕰️',
        label: 'Preguntar si prefiere hablar en otro momento',
        feedback:
          'Preguntar sin presionar permite aclarar cuándo sería más cómodo volver a hablar.',
      },
      {
        id: 'offer-support',
        icon: '🏮',
        label: 'Ofrecer ayuda y aceptar un no',
        feedback:
          'Ofrecer apoyo es útil cuando la respuesta, incluso si es no, se escucha y se respeta.',
      },
    ],
  },
  {
    id: 'attention',
    icon: '🔔',
    title: 'Necesitas atención',
    prompt: 'Te sientes apartado y necesitas que alguien te escuche. ¿Cómo puedes pedirlo?',
    choices: [
      {
        id: 'clear-request',
        icon: '💬',
        label: 'Explicar con calma qué necesito y preguntar cuándo puede escucharme',
        feedback:
          'Una petición clara ayuda a la otra persona a entenderte sin convertir tu necesidad en una obligación inmediata.',
      },
      {
        id: 'safe-adult',
        icon: '🏮',
        label: 'Buscar a una persona adulta segura si lo necesito ahora',
        feedback:
          'Pedir apoyo a otra persona segura es una buena opción cuando alguien no puede ayudarte en ese momento.',
      },
      {
        id: 'pause-first',
        icon: '🐚',
        label: 'Hacer una pausa y ordenar lo que quiero decir',
        feedback:
          'Una pausa puede ayudarte a expresar tu necesidad con más claridad. Después todavía puedes pedir compañía.',
      },
    ],
  },
  {
    id: 'comparison',
    icon: '🪁',
    title: 'Un amigo consigue algo',
    prompt: 'Te alegras por un amigo, pero también notas comparación o celos. ¿Qué podrías elegir?',
    choices: [
      {
        id: 'two-feelings',
        icon: '🌤️',
        label: 'Reconocer las dos emociones sin tratarme mal',
        feedback:
          'Puedes alegrarte por otra persona y sentir comparación a la vez. Una emoción no borra la otra.',
      },
      {
        id: 'own-path',
        icon: '🧭',
        label: 'Recordar mi propio camino y mi siguiente paso',
        feedback:
          'Volver a tu recorrido evita que el logro de otra persona se convierta en una medida de tu valor.',
      },
      {
        id: 'honest-request',
        icon: '🌱',
        label: 'Felicitarle y pedir también el apoyo que necesito',
        feedback:
          'Celebrar y pedir apoyo pueden convivir cuando ninguna de las dos cosas se usa para competir.',
      },
    ],
  },
  {
    id: 'repair',
    icon: '⛵',
    title: 'Una acción hizo daño',
    prompt: 'Descubres que algo que hiciste afectó a otra persona. ¿Qué puedes hacer?',
    choices: [
      {
        id: 'acknowledge-impact',
        icon: '👂',
        label: 'Reconocer lo que ocurrió y escuchar su impacto',
        feedback:
          'Escuchar sin esconderte detrás de excusas permite comprender mejor qué necesita atención.',
      },
      {
        id: 'offer-repair',
        icon: '🛠️',
        label: 'Disculparme y ofrecer una reparación posible',
        feedback:
          'Reparar es ofrecer una acción responsable. La otra persona no está obligada a perdonar ni a acercarse.',
      },
      {
        id: 'ask-support',
        icon: '🤝',
        label: 'Pedir ayuda segura para reparar sin empeorar la situación',
        feedback:
          'Buscar apoyo es responsable cuando la situación es compleja, desigual o no sabes cómo actuar con seguridad.',
      },
    ],
  },
];

export const loveToolCatalog = [
  {
    id: 'breathe',
    icon: '🐚',
    title: 'Pausar y respirar',
    origin: 'Calma',
    description: 'Dar espacio al cuerpo antes de elegir.',
  },
  {
    id: 'name-feeling',
    icon: '🗂️',
    title: 'Nombrar lo que siento',
    origin: 'Todas las islas',
    description: 'Poner palabras sin juzgar la emoción.',
  },
  {
    id: 'safe-adult',
    icon: '🏮',
    title: 'Pedir ayuda segura',
    origin: 'Miedo y Confianza',
    description: 'Buscar a una persona adulta que pueda proteger y acompañar.',
  },
  {
    id: 'set-boundary',
    icon: '🚪',
    title: 'Decir «no, gracias»',
    origin: 'Enfado, Afectividad y Asco',
    description: 'Marcar un límite claro sin hacer daño.',
  },
  {
    id: 'check-facts',
    icon: '🔭',
    title: 'Comprobar antes de suponer',
    origin: 'Celos',
    description: 'Separar lo ocurrido de lo que estoy imaginando.',
  },
  {
    id: 'listen',
    icon: '👂',
    title: 'Escuchar antes de responder',
    origin: 'Empatía',
    description: 'Preguntar qué necesita la otra persona.',
  },
  {
    id: 'new-strategy',
    icon: '🧩',
    title: 'Probar otra estrategia',
    origin: 'Frustración',
    description: 'Cambiar el plan sin tratarme mal.',
  },
  {
    id: 'repair',
    icon: '🛠️',
    title: 'Disculparme y reparar',
    origin: 'Culpa',
    description: 'Reconocer el impacto y ofrecer una acción posible.',
  },
  {
    id: 'self-worth',
    icon: '🪞',
    title: 'Recordar mi valor',
    origin: 'Vergüenza y Celos',
    description: 'Mi valor no depende de hacerlo todo perfecto.',
  },
  {
    id: 'notice-good',
    icon: '🌱',
    title: 'Notar el cuidado recibido',
    origin: 'Ternura y Gratitud',
    description: 'Reconocer apoyos y expresarlos con detalle.',
  },
];

export const loveCareScenario = {
  id: 'care-choice',
  icon: '🧭',
  title: 'Una situación que necesita cuidado',
  prompt:
    'Una persona importante está alterada y te pide algo que te hace sentir inseguro o incómodo. ¿Qué camino puedes elegir?',
  choices: [
    {
      id: 'protective-boundary',
      icon: '🛡️',
      label: 'Poner un límite y alejarme si necesito seguridad',
      feedback:
        'Cuidar un vínculo nunca exige quedarte en una situación insegura. Protegerte es una decisión válida.',
    },
    {
      id: 'ask-what-helps',
      icon: '👂',
      label: 'Preguntar qué ayudaría, sin aceptar algo que me haga daño',
      feedback:
        'Puedes escuchar y ofrecer opciones mientras mantienes tus propios límites.',
    },
    {
      id: 'bring-support',
      icon: '🏮',
      label: 'Buscar a una persona adulta segura',
      feedback:
        'No tienes que resolver a solas una situación intensa, desigual o preocupante.',
    },
    {
      id: 'repair-later',
      icon: '🛠️',
      label: 'Pausar ahora y retomar una reparación cuando sea seguro',
      feedback:
        'No todo debe resolverse de inmediato. Esperar un momento seguro puede proteger a todas las personas.',
    },
  ],
};

export const loveMessageStarters = [
  {
    id: 'listen-inside',
    label: 'Cuando algo me importe...',
    text: 'Cuando algo me importe, escucharé también lo que siento y necesito.',
  },
  {
    id: 'safe-no',
    label: 'Un no puede...',
    text: 'Un no puede cuidar un límite y no cambia el valor de ninguna persona.',
  },
  {
    id: 'ask-help',
    label: 'Si no sé qué hacer...',
    text: 'Si no sé qué hacer, puedo pausar y pedir ayuda a una persona segura.',
  },
  {
    id: 'repair-grow',
    label: 'Cuando me equivoque...',
    text: 'Cuando me equivoque, puedo responsabilizarme, reparar y seguir creciendo.',
  },
];

export const loveCommitmentCatalog = [
  {
    id: 'pause',
    icon: '🐚',
    title: 'Haré una pausa antes de responder cuando lo necesite.',
  },
  {
    id: 'respect-no',
    icon: '🚪',
    title: 'Respetaré un no, también cuando no sea la respuesta que esperaba.',
  },
  {
    id: 'ask-help',
    icon: '🏮',
    title: 'Pediré ayuda segura cuando una situación me supere.',
  },
  {
    id: 'speak-clearly',
    icon: '💬',
    title: 'Expresaré con claridad lo que siento o necesito.',
  },
  {
    id: 'repair',
    icon: '🛠️',
    title: 'Intentaré reparar con calma cuando una acción cause daño.',
  },
];

export const loveRouteSymbols = [
  ['🧸', 'Ternura'],
  ['🔭', 'Admiración'],
  ['☀️', 'Alegría'],
  ['🐚', 'Calma'],
  ['🏮', 'Miedo'],
  ['🚦', 'Enfado'],
  ['☂️', 'Tristeza'],
  ['🧩', 'Frustración'],
  ['🎭', 'Vergüenza'],
  ['🌉', 'Empatía'],
  ['🌱', 'Gratitud'],
  ['🗝️', 'Confianza'],
  ['🚪', 'Sorpresa'],
  ['💝', 'Afectividad'],
  ['🍃', 'Asco'],
  ['🧭', 'Celos'],
  ['✉️', 'Culpa'],
  ['🗼', 'Amor'],
].map(([icon, label]) => ({ icon, label }));

export const initialLoveFinaleState = {
  version: loveFinaleVersion,
  started: false,
  completed: false,
  completedAt: '',
  chapterId: 'arrival',
  scenarioChoices: {},
  selectedToolIds: [],
  careChoiceId: '',
  messageStarterId: '',
  futureMessage: '',
  careCommitmentId: '',
};

const knownChapterIds = new Set([...loveFinaleChapters.map((chapter) => chapter.id), 'refuge']);
const knownScenarioChoiceIds = new Map(
  loveScenarioCatalog.map((scenario) => [
    scenario.id,
    new Set(scenario.choices.map((choice) => choice.id)),
  ]),
);
const knownToolIds = new Set(loveToolCatalog.map((tool) => tool.id));
const knownCareChoiceIds = new Set(loveCareScenario.choices.map((choice) => choice.id));
const knownMessageStarterIds = new Set(loveMessageStarters.map((starter) => starter.id));
const knownCommitmentIds = new Set(
  loveCommitmentCatalog.map((commitment) => commitment.id),
);

function cleanString(value, maxLength = 280) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function cleanFreeText(value, maxLength = 280) {
  return typeof value === 'string' ? value.slice(0, maxLength) : '';
}

function cleanChoiceMap(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value).filter(
      ([scenarioId, choiceId]) =>
        knownScenarioChoiceIds.has(scenarioId) &&
        knownScenarioChoiceIds.get(scenarioId).has(choiceId),
    ),
  );
}

export function normalizeLoveFinaleState(value) {
  const source = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
  const selectedToolIds = Array.isArray(source.selectedToolIds)
    ? [...new Set(source.selectedToolIds.filter((toolId) => knownToolIds.has(toolId)))].slice(0, 3)
    : [];
  const chapterId = knownChapterIds.has(source.chapterId)
    ? source.chapterId
    : initialLoveFinaleState.chapterId;

  return {
    ...initialLoveFinaleState,
    version: loveFinaleVersion,
    started: Boolean(source.started || source.completed),
    completed: Boolean(source.completed),
    completedAt: cleanString(source.completedAt, 40),
    chapterId,
    scenarioChoices: cleanChoiceMap(source.scenarioChoices),
    selectedToolIds,
    careChoiceId: knownCareChoiceIds.has(source.careChoiceId) ? source.careChoiceId : '',
    messageStarterId: knownMessageStarterIds.has(source.messageStarterId)
      ? source.messageStarterId
      : '',
    futureMessage: cleanFreeText(source.futureMessage, 280),
    careCommitmentId: knownCommitmentIds.has(source.careCommitmentId)
      ? source.careCommitmentId
      : '',
  };
}

export function isLoveFinaleReady(value) {
  const finale = normalizeLoveFinaleState(value);

  return (
    loveScenarioCatalog.every((scenario) => Boolean(finale.scenarioChoices[scenario.id])) &&
    finale.selectedToolIds.length === 3 &&
    Boolean(finale.careChoiceId) &&
    Boolean(finale.careCommitmentId)
  );
}

function addUnique(values = [], value) {
  return values.includes(value) ? values : [...values, value];
}

export function applyLoveFinaleCompletion(player, value, completedAt = new Date().toISOString()) {
  const finale = normalizeLoveFinaleState(value);

  if (!isLoveFinaleReady(finale)) {
    return {
      completed: false,
      player,
      reason: 'La experiencia final todavía tiene pasos pendientes.',
    };
  }

  const alreadyCompleted = Boolean(
    player?.loveFinale?.completed || player?.completedStories?.includes('amor'),
  );
  const nextFinale = {
    ...finale,
    started: true,
    completed: true,
    completedAt: finale.completedAt || completedAt,
    chapterId: 'refuge',
  };

  return {
    completed: true,
    firstCompletion: !alreadyCompleted,
    player: {
      ...player,
      points: Math.max(0, Number(player?.points) || 0) + (alreadyCompleted ? 0 : loveFinalePointReward),
      completedStories: addUnique(player?.completedStories || [], 'amor'),
      achievements: addUnique(player?.achievements || [], loveFinaleAchievementId),
      ownedRewardIds: addUnique(player?.ownedRewardIds || [], loveFinaleRewardId),
      loveFinale: nextFinale,
    },
  };
}

export function getLoveToolById(toolId) {
  return loveToolCatalog.find((tool) => tool.id === toolId);
}

export function getLoveCommitmentById(commitmentId) {
  return loveCommitmentCatalog.find((commitment) => commitment.id === commitmentId);
}

const defaultStoryReward = {
  title: 'Cuento completado',
  subtitle: 'Has terminado el cuento y tu progreso se ha guardado.',
  replaySubtitle: 'Este cuento ya está completado y el logro sigue guardado.',
  points: 25,
  nextAction: 'Continuar',
  badge: {
    icon: '\u2B50',
    title: 'Insignia de exploración',
    description: 'Una señal de que has leído el cuento con atención.',
  },
};

export const storyRewards = {
  ternura: {
    title: '¡Ternura completada!',
    subtitle: 'Has leído el cuento completo y has ganado una nueva insignia emocional.',
    replaySubtitle: 'Ya tienes la insignia de Ternura. Puedes releer el cuento cuando quieras.',
    points: 25,
    nextAction: 'Jugar retos de Ternura',
    badge: {
      icon: '\uD83D\uDC96',
      title: 'Insignia Corazón Tierno',
      description: 'Reconoces los gestos de cuidado, cariño y protección.',
    },
    unlock: {
      icon: '\u2728',
      title: 'Admiración desbloqueada',
      description: 'Una nueva isla aparece en el mapa para seguir explorando emociones.',
    },
  },
  admiracion: {
    title: '¡Admiración completada!',
    subtitle: 'Has descubierto cómo mirar con curiosidad y respeto lo que te sorprende.',
    replaySubtitle: 'Ya tienes la insignia de Admiración. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Admiración',
    badge: {
      icon: '\uD83C\uDF1F',
      title: 'Insignia Mirada Brillante',
      description: 'Reconoces aquello que te inspira y te ayuda a aprender.',
    },
  },
  alegria: {
    title: '¡Alegría completada!',
    subtitle: 'Has descubierto cómo reconocer y compartir momentos alegres con respeto.',
    replaySubtitle: 'Ya tienes la insignia de Alegría. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Alegría',
    badge: {
      icon: '\u{1F60A}',
      title: 'Insignia Cometa Sonriente',
      description: 'Reconoces la alegría y sabes compartirla cuidando a los demás.',
    },
    unlock: {
      icon: '\u{1F30A}',
      title: 'Calma desbloqueada',
      description: 'La bahía tranquila aparece en el mapa para practicar pausas y respiración.',
    },
  },
  calma: {
    title: '¡Calma completada!',
    subtitle: 'Has aprendido a hacer pausas, respirar y escuchar lo que necesita tu cuerpo.',
    replaySubtitle: 'Ya tienes la insignia de Calma. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Calma',
    badge: {
      icon: '\u{1F41A}',
      title: 'Insignia Bahía Serena',
      description: 'Reconoces la calma y practicas formas de recuperar equilibrio.',
    },
    unlock: {
      icon: '\u{1F526}',
      title: 'Miedo desbloqueado',
      description: 'La cueva suave aparece en el mapa para practicar seguridad y pedir ayuda.',
    },
  },
  miedo: {
    title: '¡Miedo completado!',
    subtitle: 'Has descubierto que el miedo puede avisar, proteger y pedir compañía.',
    replaySubtitle: 'Ya tienes la insignia de Miedo. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Miedo',
    badge: {
      icon: '\u{1F526}',
      title: 'Insignia Linterna Valiente',
      description: 'Reconoces señales de miedo y practicas pedir ayuda con seguridad.',
    },
    unlock: {
      icon: '\u{1F30B}',
      title: 'Enfado desbloqueado',
      description: 'El volcán de los límites aparece en el mapa para practicar autocontrol.',
    },
  },
  enfado: {
    title: '¡Enfado completado!',
    subtitle: 'Has aprendido a notar la energía del enfado y expresarla sin hacer daño.',
    replaySubtitle: 'Ya tienes la insignia de Enfado. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Enfado',
    badge: {
      icon: '\u{1F30B}',
      title: 'Insignia Volcán que Habla',
      description: 'Reconoces el enfado y practicas límites seguros.',
    },
    unlock: {
      icon: '\u{1F327}\uFE0F',
      title: 'Tristeza desbloqueada',
      description: 'La lluvia que escucha aparece en el mapa para trabajar consuelo.',
    },
  },
  tristeza: {
    title: '¡Tristeza completada!',
    subtitle: 'Has descubierto que la tristeza puede pedir escucha, tiempo y compañía.',
    replaySubtitle: 'Ya tienes la insignia de Tristeza. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Tristeza',
    badge: {
      icon: '\u{1F327}\uFE0F',
      title: 'Insignia Lluvia que Escucha',
      description: 'Reconoces la tristeza y practicas pedir apoyo.',
    },
    unlock: {
      icon: '\u{1F9E9}',
      title: 'Frustración desbloqueada',
      description: 'El taller de intentos aparece en el mapa para practicar nuevas estrategias.',
    },
  },
  frustracion: {
    title: '¡Frustración completada!',
    subtitle: 'Has aprendido a parar, cambiar de estrategia y volver a intentarlo.',
    replaySubtitle: 'Ya tienes la insignia de Frustración. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Frustración',
    badge: {
      icon: '\u{1F9E9}',
      title: 'Insignia Puzle Paciente',
      description: 'Reconoces la frustración y practicas intentos seguros.',
    },
    unlock: {
      icon: '\u{1F633}',
      title: 'Vergüenza desbloqueada',
      description: 'El escenario amable aparece en el mapa para practicar participación segura.',
    },
  },
  verguenza: {
    title: '¡Vergüenza completada!',
    subtitle: 'Has aprendido a participar poco a poco y a tratarte con respeto.',
    replaySubtitle: 'Ya tienes la insignia de Vergüenza. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Vergüenza',
    badge: {
      icon: '\u{1F633}',
      title: 'Insignia Voz Amable',
      description: 'Reconoces la vergüenza y practicas pasos pequeños para participar.',
    },
    unlock: {
      icon: '\u{1F91D}',
      title: 'Empatía desbloqueada',
      description:
        'El puente de los zapatos distintos aparece en el mapa para practicar escucha y convivencia.',
    },
  },
  empatia: {
    title: '¡Empatía completada!',
    subtitle: 'Has aprendido a mirar, imaginar, preguntar y acompañar con respeto.',
    replaySubtitle: 'Ya tienes la insignia de Empatía. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar Puente de la empatía',
    badge: {
      icon: '\u{1F91D}',
      title: 'Insignia Puente Amable',
      description: 'Reconoces señales en otras personas y practicas respuestas cuidadosas.',
    },
    unlock: {
      icon: '\u{1F64F}',
      title: 'Gratitud desbloqueada',
      description:
        'El huerto de las pequeñas gracias aparece en el mapa para practicar reconocimiento y cuidado.',
    },
  },
  gratitud: {
    title: '¡Gratitud completada!',
    subtitle: 'Has aprendido a notar ayudas pequeñas y agradecer con palabras concretas.',
    replaySubtitle: 'Ya tienes la insignia de Gratitud. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Gratitud',
    badge: {
      icon: '\u{1F4D7}',
      title: 'Insignia Libreta Verde',
      description: 'Reconoces gestos de ayuda y practicas dar las gracias con detalle.',
    },
    unlock: {
      icon: '\u{1F6E1}\uFE0F',
      title: 'Confianza desbloqueada',
      description:
        'El escudo de los pasos valientes queda marcado en el mapa para la siguiente fase.',
    },
  },
  confianza: {
    title: '¡Confianza completada!',
    subtitle: 'Has practicado pedir apoyo, cumplir acuerdos pequeños y respetar tus límites.',
    replaySubtitle: 'Ya tienes la insignia de Confianza. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Confianza',
    badge: {
      icon: '\u{1F6E1}\uFE0F',
      title: 'Insignia Faro Azul',
      description: 'Construyes confianza con pasos seguros, apoyo y respeto.',
    },
    unlock: {
      icon: '\u{1F632}',
      title: 'Sorpresa desbloqueada',
      description:
        'La puerta inesperada aparece en el mapa como la próxima fase de la aventura.',
    },
  },
  sorpresa: {
    title: '¡Sorpresa completada!',
    subtitle: 'Has aprendido a notar cambios, buscar información y elegir tu propio ritmo.',
    replaySubtitle: 'Ya tienes la insignia de Sorpresa. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Sorpresa',
    badge: {
      icon: '\u{1F6AA}',
      title: 'Insignia Puerta Curiosa',
      description: 'Observas lo inesperado y respondes con pausa, preguntas y seguridad.',
    },
    unlock: {
      icon: '\u{1F49D}',
      title: 'Afectividad desbloqueada',
      description:
        'La caja de cintas de colores aparece en el mapa como la próxima fase futura.',
    },
  },
  afectividad: {
    title: '¡Afectividad completada!',
    subtitle: 'Has practicado formas de cuidar que respetan la elección y el espacio de cada persona.',
    replaySubtitle: 'Ya tienes la insignia de Afectividad. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Afectividad',
    badge: {
      icon: '\u{1F49D}',
      title: 'Insignia Cintas de Cuidado',
      description: 'Expresas cariño y cuidado con respeto, escucha y elección.',
    },
    unlock: {
      icon: '\u{1F343}',
      title: 'Asco desbloqueado',
      description:
        'La gran hoja protectora aparece en el mapa como la próxima fase futura.',
    },
  },
  asco: {
    title: '¡Asco completado!',
    subtitle: 'Has aprendido a escuchar una señal protectora, comprobar el riesgo y expresarte con respeto.',
    replaySubtitle: 'Ya tienes la insignia de Asco. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Asco',
    badge: {
      icon: '\u{1F343}',
      title: 'Insignia Hoja Protectora',
      description: 'Escuchas tu cuerpo, pides ayuda y cuidas tus límites sin despreciar.',
    },
    unlock: {
      icon: '\u{1F441}\uFE0F',
      title: 'Isla Celos desbloqueada',
      description:
        'El catalejo de las comparaciones aparece en el mapa como la próxima fase de la aventura.',
    },
  },
  celos: {
    title: '¡Celos completada!',
    subtitle: 'Has aprendido a reconocer la comparación, revisar tus suposiciones y pedir lo que necesitas.',
    replaySubtitle: 'Ya tienes la insignia de Celos. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Celos',
    badge: {
      icon: '\u{1F52D}',
      title: 'Insignia Catalejo Claro',
      description: 'Distingues hechos y suposiciones sin perder de vista tu propio camino.',
    },
    unlock: {
      icon: '\u{1F4AC}',
      title: 'Culpa desbloqueada',
      description:
        'La carta para reparar aparece en el mapa como la próxima fase de la aventura.',
    },
  },
  culpa: {
    title: '¡Culpa completada!',
    subtitle: 'Has aprendido a reconocer el impacto, ofrecer una reparación y seguir creciendo sin convertir un error en tu identidad.',
    replaySubtitle: 'Ya tienes la insignia de Culpa. Puedes volver a leer el cuento.',
    points: 25,
    nextAction: 'Jugar retos de Culpa',
    badge: {
      icon: '\u{2709}\uFE0F',
      title: 'Insignia Carta de Reparación',
      description: 'Reconoces una acción, escuchas su impacto y reparas con respeto y límites.',
    },
    unlock: {
      icon: '\u{1F5FC}',
      title: 'Isla Amor desbloqueada',
      description:
        'El Faro de los Vínculos Seguros aparece como la experiencia final del archipiélago.',
    },
  },
};

export function getStoryRewardByEmotionId(emotionId) {
  return storyRewards[emotionId] || defaultStoryReward;
}

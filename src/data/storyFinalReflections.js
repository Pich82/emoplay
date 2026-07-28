export const storyFinalReflections = {
  ternura:
    'Piensa en una persona, recuerdo u objeto que quieras cuidar. ¿Qué gesto pequeño podrías hacer hoy para mostrar ternura con respeto?',
  admiracion:
    'Recuerda a alguien de tu entorno a quien admires. ¿Qué podrías decirle para reconocer algo valioso que hace?',
  alegria:
    'Busca un momento alegre que puedas compartir sin molestar ni dejar a nadie fuera. ¿Cómo lo harías en clase?',
  calma:
    'Elige una pausa tranquila que puedas usar cuando notes prisa por dentro. ¿Qué señal de tu cuerpo te avisará de que la necesitas?',
  miedo:
    'Recuerda una situación en la que sentiste miedo o preocupación. ¿Qué señal te dio tu cuerpo y a quién podrías pedir ayuda si vuelve a pasar?',
  enfado:
    'Piensa en una situación en la que sentiste enfado. ¿Qué señal notaste en tu cuerpo y qué frase respetuosa podrías usar para poner un límite?',
  tristeza:
    'Recuerda un momento de tristeza. ¿Qué necesitabas: compañía, silencio, consuelo, tiempo o ayuda de una persona adulta?',
  frustracion:
    'Piensa en algo que te costó. ¿Qué pausa o nueva estrategia podrías probar antes de rendirte o enfadarte contigo?',
  verguenza:
    'Recuerda una situación en la que sentiste vergüenza. ¿Qué paso pequeño y amable podrías pedir para participar con más seguridad?',
  empatia:
    'Si ves a alguien solo o preocupado, ¿cómo podrías acercarte, escuchar y hacerle sentir que no está solo?',
  gratitud:
    'Piensa en una ayuda pequeña que hayas recibido hoy o esta semana. ¿Cómo podrías dar las gracias con detalle o devolver cuidado de alguna forma posible?',
};

export const getStoryFinalReflection = (emotionId) => storyFinalReflections[emotionId] || '';

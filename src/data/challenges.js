export const challengeSets = {
  ternura: {
    emotionId: 'ternura',
    title: 'Retos de Ternura',
    subtitle: 'Practica gestos de cuidado, cariño y consuelo.',
    mission: 'Misión Corazón Tierno',
    color: '#ff7da8',
    challenges: [
      {
        id: 'ternura-vf-1',
        type: 'trueFalse',
        icon: '\u{1F917}',
        question: '¿La ternura solo se puede expresar con palabras?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'La ternura también se expresa con gestos suaves, miradas amables, abrazos, cuidado y atención.',
      },
      {
        id: 'ternura-vf-2',
        type: 'trueFalse',
        icon: '\u{1FAC2}',
        question: '¿Un abrazo puede expresar ternura?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Un abrazo puede transmitir cariño, protección y cercanía cuando la otra persona lo desea.',
      },
      {
        id: 'ternura-vf-3',
        type: 'trueFalse',
        icon: '\u{1F476}',
        question: '¿La ternura es solo para los bebés?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'La ternura puede aparecer con personas de cualquier edad y también con recuerdos, objetos o seres queridos.',
      },
      {
        id: 'ternura-vf-4',
        type: 'trueFalse',
        icon: '\u{1F91D}',
        question: '¿Cuidar a alguien con delicadeza muestra ternura?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Cuidar con delicadeza y respeto es una forma clara de expresar ternura.',
      },
      {
        id: 'ternura-vf-5',
        type: 'trueFalse',
        icon: '\u{1F436}',
        question: '¿Los animales pueden despertarnos ternura?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'A veces sentimos ternura al ver fragilidad, dulzura o necesidad de cuidado.',
      },
      {
        id: 'ternura-vf-6',
        type: 'trueFalse',
        icon: '\u{1F4AA}',
        question: '¿Ser tierno significa ser débil?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'La ternura también requiere valentía: permite cuidar, acompañar y mostrar afecto con respeto.',
      },
      {
        id: 'ternura-vf-7',
        type: 'trueFalse',
        icon: '\u{1F497}',
        question: '¿La ternura nos ayuda a crear vínculos especiales?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'La ternura fortalece los lazos afectivos y ayuda a que las personas se sientan cuidadas.',
      },
      {
        id: 'ternura-reflexion-1',
        type: 'reflection',
        icon: '\u{1F4AD}',
        question:
          'Piensa en un momento en que sentiste mucha ternura por alguien o algo. ¿Qué pasó y cómo la expresaste?',
        placeholder:
          'Por ejemplo: sentí ternura cuando vi a alguien que necesitaba ayuda y...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'ternura-reflexion-2',
        type: 'reflection',
        icon: '\u{1F496}',
        question:
          '¿Qué gestos tiernos haces tú para demostrar cariño a personas importantes?',
        placeholder:
          'Escribe varios gestos: palabras, abrazos, ayuda, escuchar, cuidar...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'ternura-reflexion-3',
        type: 'reflection',
        icon: '\u{1F91D}',
        question:
          'Imagina que un amigo está triste porque se hizo daño jugando. ¿Cómo le mostrarías ternura?',
        placeholder:
          'Explica qué le dirías, qué harías y cómo respetarías lo que necesita.',
        points: 15,
        minLength: 18,
      },
    ],
  },
  admiracion: {
    emotionId: 'admiracion',
    title: 'Retos de Admiración',
    subtitle: 'Aprende a reconocer lo valioso, lo bello y lo inspirador.',
    mission: 'Misión Mirada Brillante',
    color: '#f7b731',
    challenges: [
      {
        id: 'admiracion-vf-1',
        type: 'trueFalse',
        icon: '\u2728',
        question: '¿La admiración aparece cuando reconocemos algo valioso o especial?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Admirar es darse cuenta de que algo o alguien tiene un valor que nos inspira.',
      },
      {
        id: 'admiracion-vf-2',
        type: 'trueFalse',
        icon: '\u{1F441}\uFE0F',
        question: '¿Admirar significa copiar exactamente a otra persona?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'Podemos aprender de alguien sin dejar de ser nosotros mismos.',
      },
      {
        id: 'admiracion-vf-3',
        type: 'trueFalse',
        icon: '\u{1F331}',
        question: '¿La admiración puede ayudarnos a aprender y mejorar?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Cuando algo nos inspira, puede despertar curiosidad, esfuerzo y ganas de crecer.',
      },
      {
        id: 'admiracion-vf-4',
        type: 'trueFalse',
        icon: '\u{1F4AC}',
        question: '¿Decir algo bonito que admiramos puede animar a otra persona?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Expresar admiración con respeto puede hacer que alguien se sienta valorado.',
      },
      {
        id: 'admiracion-vf-5',
        type: 'trueFalse',
        icon: '\u{1F9ED}',
        question: '¿Solo se puede admirar a personas famosas?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'También podemos admirar a compañeros, familiares, docentes, la naturaleza o pequeñas acciones cotidianas.',
      },
      {
        id: 'admiracion-reflexion-1',
        type: 'reflection',
        icon: '\u{1F31F}',
        question:
          'Piensa en alguien de tu entorno a quien admires. ¿Qué hace que te parezca especial?',
        placeholder:
          'Por ejemplo: admiro a alguien porque ayuda, se esfuerza, escucha o crea cosas bonitas...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'admiracion-reflexion-2',
        type: 'reflection',
        icon: '\u{1F3A8}',
        question:
          'Recuerda algo de la naturaleza, un libro, una canción o una obra que te haya sorprendido. ¿Qué admiraste?',
        placeholder:
          'Explica qué viste, escuchaste o sentiste y por qué te llamó la atención.',
        points: 15,
        minLength: 18,
      },
      {
        id: 'admiracion-reflexion-3',
        type: 'reflection',
        icon: '\u{1F48C}',
        question:
          'Escribe una frase respetuosa para decirle a alguien algo que admiras de él o de ella.',
        placeholder:
          'Por ejemplo: admiro de ti que...',
        points: 15,
        minLength: 18,
      },
    ],
  },
  alegria: {
    emotionId: 'alegria',
    title: 'Retos de Alegría',
    subtitle: 'Practica cómo reconocer, compartir y cuidar la alegría.',
    mission: 'Misión Cometa Sonriente',
    color: '#ffd43b',
    challenges: [
      {
        id: 'alegria-vf-1',
        type: 'trueFalse',
        icon: '\u{1F60A}',
        question: '¿La alegría puede aparecer por cosas pequeñas del día a día?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'La alegría no siempre necesita algo enorme: puede aparecer con una ayuda, una risa, un juego o un logro pequeño.',
      },
      {
        id: 'alegria-vf-2',
        type: 'trueFalse',
        icon: '\u{1F389}',
        question: '¿Celebrar con alegría significa que podemos molestar a los demás?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'La alegría se comparte mejor cuando también cuidamos el espacio y los sentimientos de los demás.',
      },
      {
        id: 'alegria-vf-3',
        type: 'trueFalse',
        icon: '\u{1F91D}',
        question: '¿Compartir una buena noticia puede hacer crecer la alegría?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Compartir algo bueno con respeto puede aumentar la alegría y acercarnos a otras personas.',
      },
      {
        id: 'alegria-vf-4',
        type: 'trueFalse',
        icon: '\u{1F9ED}',
        question: '¿Todas las personas sienten alegría por las mismas cosas?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'Cada persona puede sentir alegría por motivos diferentes. Escuchar ayuda a conocer mejor a los demás.',
      },
      {
        id: 'alegria-vf-5',
        type: 'trueFalse',
        icon: '\u{1F31E}',
        question: '¿La alegría puede darnos energía para participar y aprender?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Cuando nos sentimos alegres, a veces tenemos más ganas de jugar, participar, crear o probar cosas nuevas.',
      },
      {
        id: 'alegria-reflexion-1',
        type: 'reflection',
        icon: '\u{1F4AD}',
        question:
          'Recuerda un momento reciente en que sentiste alegría. ¿Qué pasó y con quién lo compartiste?',
        placeholder:
          'Por ejemplo: sentí alegría cuando conseguí..., jugué con..., o alguien me dijo...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'alegria-reflexion-2',
        type: 'reflection',
        icon: '\u{1F49B}',
        question:
          'Imagina que un compañero está solo mientras otros celebran. ¿Cómo podrías compartir la alegría sin dejarle fuera?',
        placeholder:
          'Explica qué le dirías, cómo le invitarías o qué harías para incluirle.',
        points: 15,
        minLength: 18,
      },
      {
        id: 'alegria-reflexion-3',
        type: 'reflection',
        icon: '\u{1F3B5}',
        question:
          'Escribe una idea para crear un momento alegre en clase respetando las normas y a tus compañeros.',
        placeholder:
          'Puede ser una dinámica breve, una frase amable, una canción tranquila o una ayuda.',
        points: 15,
        minLength: 18,
      },
    ],
  },
  calma: {
    emotionId: 'calma',
    title: 'Retos de Calma',
    subtitle: 'Practica pausas, respiración y formas de recuperar equilibrio.',
    mission: 'Misión Bahía Serena',
    color: '#5bd3c7',
    challenges: [
      {
        id: 'calma-vf-1',
        type: 'trueFalse',
        icon: '\u{1F30A}',
        question: '¿La calma puede ayudarnos a pensar antes de actuar?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'La calma nos ayuda a bajar la velocidad, mirar mejor la situación y elegir una respuesta más cuidada.',
      },
      {
        id: 'calma-vf-2',
        type: 'trueFalse',
        icon: '\u{1F4A8}',
        question: '¿Respirar despacio puede ayudar cuando sentimos mucha prisa por dentro?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Una respiración lenta puede ayudar al cuerpo a relajarse y dar tiempo a la mente para ordenarse.',
      },
      {
        id: 'calma-vf-3',
        type: 'trueFalse',
        icon: '\u{1F6A6}',
        question: '¿Estar en calma significa no sentir nunca nervios?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'La calma no borra todas las emociones. Nos ayuda a acompañarlas y manejarlas mejor.',
      },
      {
        id: 'calma-vf-4',
        type: 'trueFalse',
        icon: '\u{1F91D}',
        question: '¿Pedir una pausa breve puede ser una forma respetuosa de cuidarnos?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Pedir una pausa con respeto puede ayudar a volver a la actividad con más atención.',
      },
      {
        id: 'calma-vf-5',
        type: 'trueFalse',
        icon: '\u{1F3EB}',
        question: '¿La calma también puede ayudar al grupo de clase?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Cuando una clase aprende a hacer pausas tranquilas, puede escuchar mejor y convivir con más cuidado.',
      },
      {
        id: 'calma-reflexion-1',
        type: 'reflection',
        icon: '\u{1F4AD}',
        question:
          'Recuerda un momento en que necesitaste calmarte. ¿Qué notaste en tu cuerpo y qué te ayudó?',
        placeholder:
          'Por ejemplo: noté que respiraba rápido, me movía mucho o necesitaba silencio, y me ayudó...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'calma-reflexion-2',
        type: 'reflection',
        icon: '\u{1F9D8}',
        question:
          'Escribe una pausa tranquila que podrías hacer en clase sin molestar a nadie.',
        placeholder:
          'Puede ser respirar tres veces, beber agua, cerrar los ojos unos segundos o pedir ayuda.',
        points: 15,
        minLength: 18,
      },
      {
        id: 'calma-reflexion-3',
        type: 'reflection',
        icon: '\u{1F4AC}',
        question:
          'Imagina que un compañero está muy nervioso antes de una actividad. ¿Qué le podrías decir con calma?',
        placeholder:
          'Escribe una frase amable y una acción sencilla para acompañarle sin presionarle.',
        points: 15,
        minLength: 18,
      },
    ],
  },
  miedo: {
    emotionId: 'miedo',
    title: 'Retos de Miedo',
    subtitle: 'Practica señales de seguridad, pedir ayuda y avanzar paso a paso.',
    mission: 'Misión Linterna Valiente',
    color: '#8e7cc3',
    challenges: [
      {
        id: 'miedo-vf-1',
        type: 'trueFalse',
        icon: '\u{1F526}',
        question: '¿El miedo puede avisarnos de que necesitamos cuidado o seguridad?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'El miedo puede ser una señal útil del cuerpo para mirar mejor, protegernos o pedir ayuda.',
      },
      {
        id: 'miedo-vf-2',
        type: 'trueFalse',
        icon: '\u{1F4AA}',
        question: '¿Sentir miedo significa que somos débiles?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'Sentir miedo no es debilidad. Es una emoción humana que puede ayudarnos a cuidarnos.',
      },
      {
        id: 'miedo-vf-3',
        type: 'trueFalse',
        icon: '\u{1FAC0}',
        question: '¿El cuerpo puede dar señales de miedo, como corazón rápido o tensión?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'El cuerpo suele avisar: respiración rápida, barriga apretada, manos tensas o ganas de alejarse.',
      },
      {
        id: 'miedo-vf-4',
        type: 'trueFalse',
        icon: '\u{1F91D}',
        question: '¿Pedir ayuda a una persona de confianza puede ser una respuesta valiente?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Pedir ayuda permite no enfrentarnos solos a algo que nos preocupa o no entendemos.',
      },
      {
        id: 'miedo-vf-5',
        type: 'trueFalse',
        icon: '\u{1F9ED}',
        question: '¿Siempre hay que hacer de golpe aquello que nos da miedo?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'Muchas veces ayuda avanzar paso a paso, con información, calma y apoyo.',
      },
      {
        id: 'miedo-reflexion-1',
        type: 'reflection',
        icon: '\u{1F4AD}',
        question:
          'Recuerda una situación en la que sentiste miedo o preocupación. ¿Qué señales notaste en tu cuerpo?',
        placeholder:
          'Por ejemplo: corazón rápido, barriga apretada, ganas de esconderme, manos tensas...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'miedo-reflexion-2',
        type: 'reflection',
        icon: '\u{1F4AC}',
        question:
          'Escribe una frase que podrías decir para pedir ayuda cuando algo te da miedo.',
        placeholder:
          'Por ejemplo: necesito ir despacio, ¿puedes acompañarme?, no entiendo si esto es seguro...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'miedo-reflexion-3',
        type: 'reflection',
        icon: '\u{1F6E1}\uFE0F',
        question:
          'Imagina que un compañero tiene miedo antes de una actividad. ¿Cómo podrías acompañarle sin burlarte ni presionarle?',
        placeholder:
          'Explica qué le dirías, cómo respetarías su ritmo y cuándo avisarías a un adulto.',
        points: 15,
        minLength: 18,
      },
    ],
  },
  enfado: {
    emotionId: 'enfado',
    title: 'Retos de Enfado',
    subtitle: 'Practica señales del cuerpo, límites y formas seguras de expresarte.',
    mission: 'Misión Semáforo del Enfado',
    color: '#ff6b4a',
    challenges: [
      {
        id: 'enfado-vf-1',
        type: 'trueFalse',
        icon: '\u{1F30B}',
        question: '¿El enfado puede avisarnos de que algo nos importa o nos parece injusto?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'El enfado puede señalar que necesitamos un límite, ayuda o una forma más justa de resolver algo.',
      },
      {
        id: 'enfado-vf-2',
        type: 'trueFalse',
        icon: '\u{1F6A6}',
        question: '¿Cuando estoy muy enfadado siempre debo responder al instante?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'Cuando el enfado está muy alto, parar unos segundos puede evitar gritos, empujones o palabras que dañan.',
      },
      {
        id: 'enfado-vf-3',
        type: 'trueFalse',
        icon: '\u{1FAC0}',
        question: '¿El cuerpo puede dar señales de enfado, como calor, tensión o ganas de gritar?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'El cuerpo suele avisar. Reconocer esas señales ayuda a actuar antes de perder el control.',
      },
      {
        id: 'enfado-vf-4',
        type: 'trueFalse',
        icon: '\u{1F4AC}',
        question: '¿Poner un límite con respeto puede ser una forma sana de expresar enfado?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Podemos decir “no me gusta”, “necesito espacio” o “para, por favor” sin insultar ni hacer daño.',
      },
      {
        id: 'enfado-vf-5',
        type: 'trueFalse',
        icon: '\u{1F91D}',
        question: '¿Pedir ayuda a un adulto puede servir cuando un conflicto se complica?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Pedir ayuda no es chivarse cuando buscamos resolver con seguridad y respeto.',
      },
      {
        id: 'enfado-reflexion-1',
        type: 'reflection',
        icon: '\u{1F4AD}',
        question:
          'Recuerda un momento de enfado. ¿Qué señales notaste en tu cuerpo antes de actuar?',
        placeholder:
          'Por ejemplo: calor en la cara, puños apretados, ganas de gritar, respiración rápida...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'enfado-reflexion-2',
        type: 'reflection',
        icon: '\u{1F6A6}',
        question:
          'Escribe tu semáforo del enfado: ¿qué puedes hacer en rojo, amarillo y verde?',
        placeholder:
          'Rojo: paro. Amarillo: respiro y nombro. Verde: hablo o pido ayuda...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'enfado-reflexion-3',
        type: 'reflection',
        icon: '\u{1F91A}',
        question:
          'Imagina que alguien no respeta tu turno. ¿Qué frase de límite podrías decir sin dañar?',
        placeholder:
          'Por ejemplo: no me gusta que me quites el turno, necesito que esperes...',
        points: 15,
        minLength: 18,
      },
    ],
  },
  tristeza: {
    emotionId: 'tristeza',
    title: 'Retos de Tristeza',
    subtitle: 'Practica pedir consuelo, nombrar pérdidas y acompañar con cuidado.',
    mission: 'Misión Lluvia que Escucha',
    color: '#6aa7e8',
    challenges: [
      {
        id: 'tristeza-vf-1',
        type: 'trueFalse',
        icon: '\u{1F327}\uFE0F',
        question: '¿La tristeza puede aparecer cuando echamos de menos a alguien o algo?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'La tristeza puede aparecer ante pérdidas, cambios, despedidas o momentos en que necesitamos consuelo.',
      },
      {
        id: 'tristeza-vf-2',
        type: 'trueFalse',
        icon: '\u{1F4A7}',
        question: '¿Llorar siempre significa portarse mal?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'Llorar puede ser una forma natural de expresar que algo duele o que necesitamos apoyo.',
      },
      {
        id: 'tristeza-vf-3',
        type: 'trueFalse',
        icon: '\u{1F91D}',
        question: '¿Pedir compañía puede ayudar cuando sentimos tristeza?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'A veces la tristeza necesita escucha, compañía tranquila o ayuda de una persona de confianza.',
      },
      {
        id: 'tristeza-vf-4',
        type: 'trueFalse',
        icon: '\u{1F5E3}\uFE0F',
        question: '¿Decir “no pasa nada” siempre ayuda a una persona triste?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'Acompañar suele ayudar más que quitar importancia. Podemos decir: “estoy aquí” o “te escucho”.',
      },
      {
        id: 'tristeza-vf-5',
        type: 'trueFalse',
        icon: '\u{1F331}',
        question: '¿La tristeza puede ir bajando poco a poco cuando la cuidamos?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'La tristeza necesita tiempo. Hablarla, descansar o recibir apoyo puede hacerla más llevadera.',
      },
      {
        id: 'tristeza-reflexion-1',
        type: 'reflection',
        icon: '\u{1F4AD}',
        question:
          'Recuerda un momento en que sentiste tristeza. ¿Qué necesitabas en ese momento?',
        placeholder:
          'Por ejemplo: un abrazo, silencio, hablar, jugar despacio, estar cerca de alguien...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'tristeza-reflexion-2',
        type: 'reflection',
        icon: '\u{1F499}',
        question:
          'Escribe una frase amable para acompañar a alguien que está triste.',
        placeholder:
          'Por ejemplo: estoy contigo, puedo escucharte, ¿quieres que avisemos a alguien?...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'tristeza-reflexion-3',
        type: 'reflection',
        icon: '\u{1F4D8}',
        question:
          'Piensa en una actividad tranquila que podría ayudarte cuando estás triste.',
        placeholder:
          'Puede ser dibujar, respirar, escribir, sentarte cerca de alguien, leer o pedir ayuda.',
        points: 15,
        minLength: 18,
      },
    ],
  },
  frustracion: {
    emotionId: 'frustracion',
    title: 'Retos de Frustración',
    subtitle: 'Practica pausa, estrategia y ayuda cuando algo no sale a la primera.',
    mission: 'Misión Puzle Paciente',
    color: '#f368e0',
    challenges: [
      {
        id: 'frustracion-vf-1',
        type: 'trueFalse',
        icon: '\u{1F9E9}',
        question: '¿La frustración puede aparecer cuando algo no sale como esperábamos?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'La frustración aparece muchas veces cuando nos esforzamos y el resultado tarda o cuesta.',
      },
      {
        id: 'frustracion-vf-2',
        type: 'trueFalse',
        icon: '\u{1F501}',
        question: '¿Equivocarse significa que ya no podemos aprender?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'El error puede mostrar qué probar de otra forma. Aprender casi siempre incluye intentos.',
      },
      {
        id: 'frustracion-vf-3',
        type: 'trueFalse',
        icon: '\u{23F8}\uFE0F',
        question: '¿Hacer una pausa breve puede ayudar cuando estamos bloqueados?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Una pausa puede bajar la tensión y permitir mirar el problema con más claridad.',
      },
      {
        id: 'frustracion-vf-4',
        type: 'trueFalse',
        icon: '\u{1F4A1}',
        question: '¿Cambiar de estrategia puede ser mejor que repetir lo mismo enfadados?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Si algo no funciona, podemos probar otra forma, pedir una pista o dividirlo en pasos.',
      },
      {
        id: 'frustracion-vf-5',
        type: 'trueFalse',
        icon: '\u{1F4AA}',
        question: '¿Pedir ayuda cuando algo cuesta es rendirse?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'Pedir ayuda puede ser una estrategia inteligente para seguir aprendiendo.',
      },
      {
        id: 'frustracion-reflexion-1',
        type: 'reflection',
        icon: '\u{1F4AD}',
        question:
          'Recuerda algo que te costó aprender. ¿Qué sentiste y qué te ayudó a seguir?',
        placeholder:
          'Por ejemplo: me ayudó pedir una pista, practicar más despacio o descansar un momento...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'frustracion-reflexion-2',
        type: 'reflection',
        icon: '\u{1F9ED}',
        question:
          'Escribe tres estrategias para cuando una tarea no sale a la primera.',
        placeholder:
          'Por ejemplo: respirar, mirar el ejemplo, pedir ayuda, dividirlo en pasos...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'frustracion-reflexion-3',
        type: 'reflection',
        icon: '\u{1F4AC}',
        question:
          'Escribe una frase amable para decirte cuando te equivocas.',
        placeholder:
          'Por ejemplo: estoy aprendiendo, puedo probar otra vez, necesito una pausa...',
        points: 15,
        minLength: 18,
      },
    ],
  },
  verguenza: {
    emotionId: 'verguenza',
    title: 'Retos de Vergüenza',
    subtitle: 'Practica participar poco a poco y hablarte con respeto.',
    mission: 'Misión Voz Amable',
    color: '#ff9f43',
    challenges: [
      {
        id: 'verguenza-vf-1',
        type: 'trueFalse',
        icon: '\u{1F633}',
        question: '¿La vergüenza puede aparecer cuando sentimos que todos nos miran?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'La vergüenza puede aparecer al participar, equivocarnos o sentirnos observados.',
      },
      {
        id: 'verguenza-vf-2',
        type: 'trueFalse',
        icon: '\u{1F3AD}',
        question: '¿Sentir vergüenza significa que no podemos participar nunca?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'Podemos participar con pasos pequeños: leer con apoyo, practicar antes o pedir una forma más segura.',
      },
      {
        id: 'verguenza-vf-3',
        type: 'trueFalse',
        icon: '\u{1F49B}',
        question: '¿Hablarse con amabilidad puede ayudar cuando nos equivocamos?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Una frase amable ayuda más que insultarnos. Equivocarse forma parte de aprender.',
      },
      {
        id: 'verguenza-vf-4',
        type: 'trueFalse',
        icon: '\u{1F91D}',
        question: '¿Burlarse de alguien que siente vergüenza ayuda a que participe?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'La burla aumenta la vergüenza. El respeto y la paciencia ayudan a sentirse seguro.',
      },
      {
        id: 'verguenza-vf-5',
        type: 'trueFalse',
        icon: '\u{1F463}',
        question: '¿Pedir un paso más pequeño puede ser una forma válida de avanzar?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Un paso pequeño sigue siendo avance: practicar, pedir apoyo o intentarlo de forma gradual.',
      },
      {
        id: 'verguenza-reflexion-1',
        type: 'reflection',
        icon: '\u{1F4AD}',
        question:
          'Recuerda una situación en la que sentiste vergüenza. ¿Qué pensaste y qué necesitabas?',
        placeholder:
          'Por ejemplo: pensé que se reirían, necesitaba apoyo, practicar antes o más tiempo...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'verguenza-reflexion-2',
        type: 'reflection',
        icon: '\u{1F4DD}',
        question:
          'Escribe un paso pequeño para participar cuando algo te da vergüenza.',
        placeholder:
          'Por ejemplo: leer una frase, hacerlo con alguien, practicar primero, pedir turno después...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'verguenza-reflexion-3',
        type: 'reflection',
        icon: '\u{1F4AC}',
        question:
          'Escribe una frase respetuosa para animar a alguien que siente vergüenza.',
        placeholder:
          'Por ejemplo: puedes hacerlo a tu ritmo, no pasa nada si te equivocas, estoy contigo...',
        points: 15,
        minLength: 18,
      },
    ],
  },
  empatia: {
    emotionId: 'empatia',
    title: 'Retos de Empatía',
    subtitle: 'Practica observar, escuchar y responder con cuidado.',
    mission: 'Misión Puente Amable',
    color: '#9b59b6',
    challenges: [
      {
        id: 'empatia-vf-1',
        type: 'trueFalse',
        icon: '\u{1F441}\uFE0F',
        question: '¿La empatía empieza muchas veces observando cómo puede estar la otra persona?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Observar la cara, el cuerpo, las palabras y el silencio puede ayudar a comprender mejor.',
      },
      {
        id: 'empatia-vf-2',
        type: 'trueFalse',
        icon: '\u{1F52E}',
        question: '¿Tener empatía significa adivinar siempre exactamente lo que siente alguien?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'No tenemos que adivinarlo todo. Podemos imaginar, preguntar con respeto y escuchar la respuesta.',
      },
      {
        id: 'empatia-vf-3',
        type: 'trueFalse',
        icon: '\u{1F4AC}',
        question: '¿Preguntar "¿quieres que te escuche?" puede ser una forma cuidadosa de ayudar?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Preguntar permite acompañar sin imponer y deja que la otra persona diga lo que necesita.',
      },
      {
        id: 'empatia-vf-4',
        type: 'trueFalse',
        icon: '\u{1F91D}',
        question: '¿Ayudar con empatía significa hacer todo por la otra persona aunque no quiera?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'La empatía también respeta límites. A veces la otra persona necesita espacio, tiempo o decidir por sí misma.',
      },
      {
        id: 'empatia-vf-5',
        type: 'trueFalse',
        icon: '\u{1F3EB}',
        question: '¿La empatía puede mejorar la convivencia en clase?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Cuando escuchamos y respondemos con cuidado, el grupo se siente más seguro y respetado.',
      },
      {
        id: 'empatia-reflexion-1',
        type: 'reflection',
        icon: '\u{1F4AD}',
        question:
          'Recuerda una vez en que alguien necesitó ayuda o escucha. ¿Qué señales viste en esa persona?',
        placeholder:
          'Por ejemplo: estaba callado, miraba al suelo, parecía nervioso, tenía ganas de llorar...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'empatia-reflexion-2',
        type: 'reflection',
        icon: '\u{1F4AC}',
        question:
          'Escribe una pregunta amable para saber cómo se siente alguien sin presionarle.',
        placeholder:
          'Por ejemplo: ¿quieres contarme qué ha pasado?, ¿prefieres que me quede cerca?...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'empatia-reflexion-3',
        type: 'reflection',
        icon: '\u{1F91D}',
        question:
          'Imagina que un compañero se equivoca y se queda triste. ¿Cómo podrías acompañarle con respeto?',
        placeholder:
          'Explica qué dirías, qué harías y cómo respetarías lo que necesita.',
        points: 15,
        minLength: 18,
      },
    ],
  },
  gratitud: {
    emotionId: 'gratitud',
    title: 'Retos de Gratitud',
    subtitle: 'Practica notar, nombrar y devolver cuidado con agradecimiento.',
    mission: 'Misión Libreta Verde',
    color: '#2ecc71',
    challenges: [
      {
        id: 'gratitud-vf-1',
        type: 'trueFalse',
        icon: '\u{1F64F}',
        question: '¿La gratitud puede aparecer al reconocer una ayuda pequeña?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'La gratitud muchas veces empieza al notar gestos sencillos que nos cuidan o facilitan el día.',
      },
      {
        id: 'gratitud-vf-2',
        type: 'trueFalse',
        icon: '\u{1F4AC}',
        question: '¿Decir gracias con detalle ayuda a que la otra persona se sienta valorada?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Un gracias concreto muestra qué gesto hemos visto y por qué nos ha ayudado.',
      },
      {
        id: 'gratitud-vf-3',
        type: 'trueFalse',
        icon: '\u{1F31F}',
        question: '¿Sentir gratitud significa que todo tiene que estar perfecto?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'Podemos agradecer algo bueno aunque el día tenga partes difíciles. No hace falta fingir alegría.',
      },
      {
        id: 'gratitud-vf-4',
        type: 'trueFalse',
        icon: '\u{1F91D}',
        question: '¿La gratitud puede expresarse también con acciones amables?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Además de palabras, podemos agradecer ayudando, cuidando materiales o teniendo un gesto amable.',
      },
      {
        id: 'gratitud-vf-5',
        type: 'trueFalse',
        icon: '\u{1F4DD}',
        question: '¿Agradecer es lo mismo que quedar obligado a devolver exactamente lo recibido?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'La gratitud no es una deuda. Es reconocer el cuidado y responder de una forma posible y libre.',
      },
      {
        id: 'gratitud-reflexion-1',
        type: 'reflection',
        icon: '\u{1F4AD}',
        question:
          'Recuerda una ayuda pequeña que hayas recibido hoy o esta semana. ¿Qué pasó y cómo te ayudó?',
        placeholder:
          'Por ejemplo: alguien me prestó algo, me explicó una tarea, me esperó o me escuchó...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'gratitud-reflexion-2',
        type: 'reflection',
        icon: '\u{1F4AC}',
        question:
          'Escribe una frase de gracias con detalle para una persona de tu entorno.',
        placeholder:
          'Por ejemplo: gracias por..., me ayudó porque..., me hizo sentir...',
        points: 15,
        minLength: 18,
      },
      {
        id: 'gratitud-reflexion-3',
        type: 'reflection',
        icon: '\u{1F331}',
        question:
          'Piensa en una forma posible de devolver cuidado al grupo o a alguien que te ayudó.',
        placeholder:
          'Puede ser ordenar, escuchar, compartir material, escribir una nota o ayudar en una tarea.',
        points: 15,
        minLength: 18,
      },
    ],
  },
  confianza: {
    emotionId: 'confianza',
    title: 'Retos de Confianza',
    subtitle: 'Practica pedir apoyo, cumplir acuerdos y respetar tus límites.',
    mission: 'Misión Faro Azul',
    color: '#45b7d1',
    challenges: [
      {
        id: 'confianza-vf-1',
        type: 'trueFalse',
        icon: '\u{1F91D}',
        question: '¿Pedir ayuda a una persona segura puede ayudarte a avanzar paso a paso?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Pedir apoyo no es hacer menos. Puede darte calma, información y compañía para probar un paso posible.',
      },
      {
        id: 'confianza-vf-2',
        type: 'trueFalse',
        icon: '\u{1F4AC}',
        question: '¿Confiar significa aceptar cualquier cosa aunque te haga sentir incómodo?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'La confianza también escucha los límites. Puedes parar, decir no con respeto y hablar con una persona adulta segura.',
      },
      {
        id: 'confianza-vf-3',
        type: 'trueFalse',
        icon: '\u{1F4CC}',
        question: '¿Cumplir acuerdos pequeños ayuda a que las personas sepan qué esperar?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'Los acuerdos claros y posibles hacen que la convivencia sea más predecible y segura.',
      },
      {
        id: 'confianza-vf-4',
        type: 'trueFalse',
        icon: '\u{1F6E1}\uFE0F',
        question: '¿Tienes que guardar un secreto que te preocupa para demostrar confianza?',
        answer: false,
        points: 10,
        penalty: 5,
        explanation:
          'Si algo te preocupa, te asusta o te hace sentir mal, es importante contarlo a una persona adulta de confianza.',
      },
      {
        id: 'confianza-vf-5',
        type: 'trueFalse',
        icon: '\u{1F6B6}',
        question: '¿La confianza puede construirse con pasos pequeños y tiempo?',
        answer: true,
        points: 10,
        penalty: 5,
        explanation:
          'No hace falta confiar de golpe. Observar, hablar y probar acuerdos pequeños puede ayudar.',
      },
      {
        id: 'confianza-reflexion-1',
        type: 'reflection',
        icon: '\u{1F4AD}',
        question:
          'Piensa en una persona adulta con la que puedas hablar cuando necesitas ayuda. ¿Qué hace que te resulte segura?',
        placeholder:
          'Puede ser alguien que escucha, explica con calma, respeta tus palabras o busca ayuda contigo.',
        points: 15,
        minLength: 18,
      },
      {
        id: 'confianza-reflexion-2',
        type: 'reflection',
        icon: '\u{1F4AC}',
        question:
          'Escribe una frase clara que podrías usar para pedir apoyo o una pausa.',
        placeholder:
          'Por ejemplo: necesito ayuda con..., ¿puedes quedarte cerca?, necesito una pausa para pensar.',
        points: 15,
        minLength: 18,
      },
      {
        id: 'confianza-reflexion-3',
        type: 'reflection',
        icon: '\u{1F6E1}\uFE0F',
        question:
          'Describe un acuerdo pequeño que ayudaría a que una actividad de clase se sintiera más segura para el grupo.',
        placeholder:
          'Puede ser respetar turnos, explicar las reglas, poder pedir una pausa o escuchar antes de responder.',
        points: 15,
        minLength: 18,
      },
    ],
  },
};

export const getChallengeSetByEmotionId = (emotionId) => challengeSets[emotionId];

export const getChallengesByEmotionId = (emotionId) =>
  getChallengeSetByEmotionId(emotionId)?.challenges || [];

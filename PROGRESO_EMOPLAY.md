# Progreso EMOPLAY

Fecha de guardado inicial: 2 de junio de 2026

## Estado actual

La app EMOPLAY está funcionando en React y Vite, con una estética visual tipo videojuego infantil de exploración por islas.

Pantallas principales actuales:

- Bienvenida.
- Inicio del alumno.
- Mapa visual de islas emocionales.
- Ficha de isla.
- Lector de cuentos por páginas.
- Retos de Ternura, Admiración, Alegría y Calma.
- Editor de avatar.
- Diario Emo.
- Mis logros.
- Recompensas.
- Mi perfil.
- Panel docente local con código.

## Correcciones importantes ya realizadas

- Se recuperó una versión más visual y completa, evitando volver a la versión básica.
- El avatar vuelve a funcionar con vista previa y guardado.
- Los iconos de botones y miniaturas se ajustaron para verse mejor.
- El cuento ya no se completa desde la ficha de la isla.
- Se creó un lector de cuento por páginas.
- El botón `Completar cuento` solo aparece al llegar a la última página.
- El progreso del cuento y los puntos se guarda con `localStorage`.
- Se corrigieron textos visibles con tildes y caracteres como `ñ`.
- Ternura, Admiración, Alegría y Calma tienen cuento completo, retos y recompensas asociadas.
- El recorrido jugable actual es Ternura -> Admiración -> Alegría -> Calma.

## Estado de islas

- Ternura: desbloqueada, con cuento completo y retos.
- Admiración: bloqueada inicialmente, se desbloquea tras completar el cuento de Ternura, con cuento completo y retos.
- Alegría: bloqueada inicialmente, se desbloquea tras completar el cuento de Admiración, con cuento completo y retos.
- Calma: bloqueada inicialmente, se desbloquea tras completar el cuento de Alegría, con cuento completo y retos.
- Miedo, Enfado, Tristeza, Afectividad, Empatía, Gratitud, Vergüenza, Amor, Sorpresa, Confianza, Frustración, Culpa, Celos y Asco: visibles como próximas islas, bloqueadas.

## Comprobaciones hechas

- La compilación de la app pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- Se revisó que no quedaran textos con errores de codificación en los archivos principales de la app.

## Avance del 3 de junio de 2026: recompensa de cuento

- Se añadió una recompensa visual al completar el cuento de Ternura.
- Se creó un panel reutilizable de recompensa para cuentos.
- Se separaron los datos de recompensas en `src/data/storyRewards.js`.
- Al completar un cuento se guarda también un logro interno en `achievements`.
- La recompensa muestra puntos, insignia y desbloqueo de Admiración.
- La compilación volvió a pasar correctamente con `npm run build`.

## Avance del 3 de junio de 2026: catálogo de islas

- Se amplió el mapa hasta 18 islas emocionales.
- Se añadieron como próximas islas: Amor, Sorpresa, Confianza, Frustración, Culpa, Celos y Asco.
- Las nuevas islas quedan visibles y bloqueadas para fases futuras.
- Ternura y Admiración mantienen su flujo actual, sin romper el progreso guardado.
- El mapa ganó más altura y más rutas para acomodar mejor el archipiélago.

## Tarea secundaria registrada

Rediseñar el fondo del mapa para que parezca un archipiélago más rico: mar con zonas, rutas más claras, elementos decorativos y sensación de exploración.

## Avance del 4 de junio de 2026: mapa simplificado

- Se corrigió el solapamiento de islas en el mapa.
- El mapa dejó de pintar las islas con coordenadas fijas.
- Se creó una vista de archipiélago ordenado en cuadrícula, más simple y responsive.
- Se mantuvo una estética infantil con mar, sol, nubes y rutas suaves.
- Las 18 islas siguen visibles y navegables.

## Avance del 5 de junio de 2026: mapa por zonas emocionales

- El mapa visual se reorganizó en tres zonas pedagógicas: emociones positivas, complejas y sociales.
- Cada zona muestra icono, nombre, descripción breve y contador de islas abiertas.
- Las 18 islas quedan repartidas en 6 positivas, 6 complejas y 6 sociales.
- Se diferencia visualmente entre isla abierta, siguiente desbloqueo y bloqueada.
- Las tarjetas de isla muestran ahora nombres de categoría más claros.
- La versión móvil coloca las zonas una debajo de otra para evitar solapamientos.

## Ajuste del 5 de junio de 2026: tarjetas de Próximamente

- Se pulieron las tarjetas de la sección `Próximamente`.
- Se sustituyó el botón desactivado de retos por una etiqueta informativa más acabada.
- La insignia de estado dejó de superponerse al encabezado de la tarjeta.
- Se ajustaron fondos, bordes, alturas internas y versión móvil para evitar aspecto inacabado.

## Avance del 5 de junio de 2026: panel docente básico local

- Se creó una pantalla real de `Panel docente`.
- El acceso del inicio que antes era `Unirse a clase` ahora abre el panel docente local.
- El panel muestra progreso del alumno, puntos, nivel, islas abiertas, cuentos, retos y logros.
- Lee informes de retos guardados en `localStorage` con claves `informe_...`.
- Lee entradas del `Diario Emo` guardadas con la clave `emoplay:diaryEntries`.
- Muestra fortalezas, propuestas de refuerzo, porcentaje, puntos, reflexiones y entradas emocionales.
- Se añadió un aviso claro: los datos solo viven en este navegador y todavía no hay base de datos externa.

## Ajuste del 5 de junio de 2026: acceso docente con código

- El `Panel docente` ya no se abre directamente.
- Antes de ver informes o entradas del Diario Emo se pide un código docente local.
- Se añadió una pantalla de `Panel protegido`.
- El panel incluye un botón `Cerrar panel docente` para volver a bloquear el acceso.
- Código local provisional actual: `EMO2026`.
- Esta protección evita accesos accidentales del alumnado, pero no sustituye una autenticación real con base de datos.

## Ajuste del 5 de junio de 2026: acceso docente separado

- El acceso a `Panel docente` se retiró de `Otras opciones`.
- Ahora aparece en la barra superior, junto a EMOPLAY y `Mapa emocional`.
- El botón se muestra como acceso adulto diferenciado con candado y texto `Acceso con código`.
- Se mantiene todo el panel docente creado anteriormente y su protección con código.
- La zona de opciones del alumno queda reservada para funciones jugables o personales del alumnado.

## Avance del 5 de junio de 2026: Alegría completa

- Se completó la Isla Alegría como tercera isla jugable.
- Alegría se desbloquea al completar el cuento de Admiración.
- Se añadió el cuento `La fiesta de las cometas`, con 6 páginas.
- El cuento de Alegría incluye ilustraciones de escena por página.
- Se añadieron 8 retos de Alegría: verdadero/falso y reflexión.
- Se añadieron logros de desbloqueo, cuento y retos de Alegría.
- Se añadió recompensa propia: `Celebración amable de aula`.
- Se añadió distintivo de avatar: `Marco Sonrisa Compartida`.
- El progreso local antiguo también desbloquea Alegría si Admiración ya estaba completada.

## Mejora del 5 de junio de 2026: ilustraciones de cuentos por página

- El lector de cuentos ahora muestra una ilustración grande por cada página.
- Se retiraron las tarjetas de viñetas con ideas separadas.
- La mejora se aplica a los cuentos de Ternura, Admiración y Alegría.
- Los datos visuales de las escenas quedan separados en `src/data/storyIllustrations.js`.
- Cada cuento actual tiene 6 escenas ilustradas, una por página.

## Avance del 4 de junio de 2026: retos, logros y Admiración

- Se mejoró la experiencia de retos con ruta de misión, racha, puntos visibles, tarjetas y feedback más visual.
- Ternura mantiene sus 10 retos, ahora con aspecto más gamificado.
- Admiración ya tiene 8 retos base preparados.
- Se creó una pantalla real de `Mis logros`.
- Se añadió un catálogo de 5 logros: cuento de Ternura, desbloqueo de Admiración, retos de Ternura, cuento de Admiración y retos de Admiración.
- El progreso antiguo se adapta automáticamente para mostrar logros ya conseguidos.
- Al completar retos también se guarda una insignia interna.

## Avance del 4 de junio de 2026: perfil editable

- `Mi perfil` dejó de ser una pantalla provisional.
- Ahora permite cambiar el nombre del alumno después de la bienvenida.
- También permite añadir o modificar la clase/grupo.
- El cambio se guarda en el mismo progreso local, sin perder puntos, islas, logros, cuentos ni retos.
- La pantalla muestra avatar, nivel, puntos, islas abiertas y logros conseguidos.

## Avance del 4 de junio de 2026: recompensas reales

- `Recompensas` dejó de ser una pantalla provisional.
- Se creó un catálogo de recompensas desbloqueables.
- Las recompensas se desbloquean por puntos o por logros conseguidos.
- El alumno puede reclamar recompensas desbloqueadas.
- El alumno puede elegir una recompensa como objeto destacado.
- Las recompensas reclamadas y el objeto en uso se guardan en el progreso local.
- El objeto destacado aparece también en la pantalla inicial del alumno.

## Ajuste del 4 de junio de 2026: criterio educativo de recompensas

- Las recompensas decorativas sin significado se sustituyeron por beneficios prácticos de aula/colegio.
- Se añadieron recompensas como ayudante del profesor, elegir lectura breve, líder de rutina tranquila, dinámica emocional y mensaje positivo del día.
- Los beneficios prácticos quedan marcados como recompensas que requieren validación del docente y respeto a las normas del centro.
- Se mantienen algunos reconocimientos visuales para el avatar, como corona o marcos especiales.
- El catálogo actual combina 6 beneficios educativos y 3 distintivos de avatar.

## Ajuste del 4 de junio de 2026: fondo dorado del avatar

- Se añadió el fondo dorado como recompensa visual del avatar.
- No aparece como opción libre desde el inicio.
- Se desbloquea al alcanzar 150 puntos o al reclamar la recompensa correspondiente.
- El editor de avatar muestra el fondo dorado bloqueado con su requisito de puntos.

## Ajuste del 4 de junio de 2026: miniaturas del avatar

- Las opciones del editor de avatar ahora se muestran con miniaturas visuales.
- Pelo, ojos, cejas, boca, gafas, pendientes, colores y fondos se previsualizan antes de elegir.
- El texto queda como apoyo, pero la selección principal es visual.
- Las opciones bloqueadas, como el fondo dorado, conservan su candado y requisito de puntos.

## Avance del 4 de junio de 2026: final de retos más emocionante

- El cierre de los retos ahora muestra una pantalla de misión completada.
- Se añadieron estrellas según el resultado conseguido.
- Se muestra una insignia vinculada al logro de la isla.
- El informe mantiene fortalezas, puntos, aciertos y propuestas para seguir practicando.
- Se añadió un bloque de recompensas relacionadas para que el alumno vea qué premios puede revisar.
- Desde el final de los retos se puede ir directamente a `Recompensas`.

## Avance del 4 de junio de 2026: Diario Emo real

- `Diario Emo` dejó de ser una pantalla provisional.
- El alumno puede elegir cómo se siente hoy entre las emociones del mapa.
- Se añadió selección de intensidad del 1 al 5.
- Se añadió una nota breve con ideas guía para ayudar a escribir.
- Las entradas se guardan en `localStorage` con la clave `emoplay:diaryEntries`.
- La pantalla muestra resumen, última emoción, emoción más repetida e intensidad media.
- El historial permite revisar y borrar entradas guardadas.
- Se mantienen mensajes educativos: si la intensidad es muy alta, se recomienda hablar con un adulto de confianza.

## Guardado del 7 de junio de 2026

- Estado guardado tras sustituir las viñetas de cuento por ilustraciones de escena por página.
- Los cuentos actuales con ilustraciones son Ternura, Admiración, Alegría y Calma.
- La app compila correctamente y responde en `http://127.0.0.1:5173/`.
- Mantener como prioridad no simplificar la interfaz ni volver a una versión básica.
- Al retomar, continuar con mejoras incrementales sobre la versión visual actual.

## Avance del 7 de junio de 2026: Calma jugable

- Se completó la Isla Calma como cuarta isla jugable del recorrido.
- Calma queda bloqueada inicialmente y se desbloquea al completar el cuento de Alegría.
- Se añadió el cuento `La bahía que respiraba despacio`, con 6 páginas.
- Cada página del cuento de Calma tiene su propia escena ilustrada.
- Se añadieron 8 retos de Calma: verdadero/falso y reflexión.
- Se añadieron logros de desbloqueo, cuento y retos de Calma.
- Se añadió recompensa práctica: `Pausa consciente de aula`.
- Se añadió distintivo de avatar: `Marco Ola Serena`.
- El progreso local antiguo también desbloquea Calma si Alegría ya estaba completada.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual con el navegador integrado no pudo completarse por un fallo del entorno del conector, no por la app.

## Mejora del 7 de junio de 2026: lector de cuentos más narrativo

- Se redujo el protagonismo del título grande en cada página del cuento.
- Cada página muestra ahora el título como una etiqueta pequeña junto al número de página.
- El espacio principal se dedica a la lectura y la ilustración.
- La reflexión educativa se reserva para el cierre del cuento.
- Ternura, Admiración, Alegría y Calma mantienen el formato de lectura ilustrada.
- El nuevo formato busca que cada página parezca más una lectura ilustrada y menos una ficha con encabezado grande.
- La compilación pasó correctamente con `npm run build`.

## Ajuste del 7 de junio de 2026: lectura prioritaria y escena única

- Se retiraron las pistas emocionales de las páginas normales del cuento.
- La reflexión educativa queda solo en la página final de cada cuento.
- Se sustituyó `src/data/storyPageNotes.js` por `src/data/storyFinalReflections.js`.
- Se eliminó la tira de tres viñetas porque competía con la lectura.
- Se eliminó `src/data/storyPageVignettes.js`.
- La ilustración principal se hizo más amplia y con más detalles integrados en la propia escena.
- El área de lectura ganó más espacio, mejor línea de lectura y letra inicial destacada.
- El lector queda más cerca de un libro infantil interactivo: una escena clara, texto protagonista y reflexión final.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.

## Prueba visual del 8 de junio de 2026: flujo hasta Calma

- Se probó el flujo real con botones: Ternura -> Admiración -> Alegría -> Calma.
- Se completó el cuento de Ternura y se comprobó que abre Admiración.
- Se completó el cuento de Admiración y se comprobó que abre Alegría.
- Se completó el cuento de Alegría y se comprobó que abre Calma.
- El mapa terminó mostrando `4/18` islas abiertas.
- Se corrigió un problema visual: varias islas preparadas aparecían como `Siguiente` a la vez.
- Ahora solo aparece como `Siguiente` la próxima isla real del recorrido.
- Se creó `src/data/islandProgression.js` para centralizar el orden de desbloqueo.
- Se guardaron capturas de comprobación en `visual-checks`.
- La compilación pasó correctamente con `npm run build`.

## Ajuste del 8 de junio de 2026: lectura por encima de la imagen

- Se revisó el equilibrio del lector de cuentos para que el texto mande sobre la ilustración.
- La columna de la ilustración se hizo más contenida y la columna de lectura ganó más presencia.
- El texto conserva letra grande, línea amplia y un separador visual suave para destacar la lectura.
- En pantallas estrechas la escena se reduce para que no empuje demasiado el texto hacia abajo.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.

## Ajuste del 8 de junio de 2026: responsive móvil y tablet

- Se añadió una capa responsive específica para tablet.
- El mapa por zonas pasa antes a una disposición vertical para evitar columnas apretadas.
- Diario, panel docente, editor de avatar, retos y perfil se adaptan mejor en pantallas medianas.
- En móvil pequeño se compactan escenas, tarjetas, botones, pestañas del avatar y el lector de cuentos.
- Se protegieron las imágenes para que no desborden sus contenedores.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.

## Prueba del 8 de junio de 2026: Calma de principio a fin

- Se comprobó el flujo funcional completo de Calma con un alumno de prueba.
- Calma aparece desbloqueada después de Alegría.
- El cuento de Calma tiene 6 páginas y la última página permite completar el cuento.
- Al completar el cuento se registra `cuento_calma`, suma 25 puntos y desbloquea la recompensa `Pausa consciente de aula`.
- Los retos de Calma tienen 8 actividades: verdadero/falso y reflexión.
- Al completar los retos se registra `reto_calma`, se genera informe local y se desbloquea `Marco Ola Serena`.
- El panel docente lee correctamente el informe de Calma, con 8 respuestas y porcentaje de acierto.
- Se revisó que existan capas responsive para tablet, móvil/tablet y móvil pequeño.
- La comprobación visual con el navegador integrado no pudo completarse por un fallo del entorno del conector, no por la app.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.

## Ajuste del 8 de junio de 2026: menú interno de cada isla

- Se rediseñó la ficha interna de cada isla para que el camino sea más claro.
- Ahora aparecen dos bloques grandes y separados: `Cuento` arriba y `Reto` debajo.
- El bloque del cuento muestra estado, título, explicación sencilla y botón principal para leer o releer.
- El bloque del reto muestra estado, explicación sencilla y botón de juego.
- El botón de retos queda bloqueado hasta completar el cuento.
- El diseño se adaptó a móvil y tablet para mantener los dos pasos legibles.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.

## Ajuste del 8 de junio de 2026: mapa de aventura sin categorías emocionales

- Se retiró la división visual por emociones positivas, complejas y sociales.
- El mapa ahora refuerza la idea pedagógica de que todas las emociones enseñan algo.
- Las islas se muestran como una ruta única de aventura, más simple, mezclada y fácil de seguir.
- Se mantiene el desbloqueo secuencial: completar una isla abre la siguiente del recorrido.
- Se añadieron estados visuales más claros: `Completada`, `Abierta`, `Siguiente` y `Bloqueada`.
- Los filtros del mapa ya no son por tipo de emoción, sino por estado de avance.
- Se centralizó el orden visual del mapa en `src/data/islandProgression.js`.
- Se ajustó el responsive para que la ruta no se superponga en tablet ni móvil.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por un fallo del conector del entorno, no por la app.

## Ajuste del 8 de junio de 2026: archipiélago visual con islas caracterizadas

- Se rediseñó el mapa para acercarlo a un archipiélago más libre y visual.
- Las islas ahora aparecen como escenas individuales sobre el mar, no como botones simples en cuadrícula.
- Cada emoción tiene una isla con objeto principal y detalles propios: casa, telescopio, globos, ola, linterna, volcán, paraguas, puente, etc.
- Se creó `src/data/islandVisuals.js` para separar los datos visuales de cada emoción.
- Se creó `src/components/EmotionMapIsland.jsx` como componente reutilizable para pintar cada isla.
- Se añadieron líneas discontinuas entre islas para mostrar el recorrido del mapa.
- El camino activo se resalta para indicar cuál es la siguiente isla que se va a desbloquear.
- Las islas mantienen estados claros: `Completada`, `Abierta`, `Siguiente` y `Bloqueada`.
- En móvil y tablet el mapa pasa a una vista ordenada para evitar solapes.
- Se validó que las 18 emociones tienen isla visual, posición y orden de mapa.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por un fallo del conector del entorno, no por la app.

## Pulido del 8 de junio de 2026: fondo del mapa más limpio

- Se retiraron las líneas diagonales blancas del fondo del mar.
- Se sustituyeron por brillos y manchas suaves de agua para no confundirlas con el camino entre islas.
- El camino discontinuo entre islas queda visualmente más claro.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por un fallo del conector del entorno, no por la app.

## Mejora del 8 de junio de 2026: puerta abierta para futuras islas

- Se preparó el mapa para aceptar nuevas emociones sin dejar islas superpuestas en el centro.
- Se añadió una lógica de orden flexible en `src/data/islandProgression.js`.
- Si una emoción nueva no está en `islandMapOrder`, aparecerá automáticamente al final del recorrido.
- Se añadieron posiciones provisionales para islas futuras en `src/data/islandVisuals.js`.
- Si una emoción nueva todavía no tiene diseño propio, usará una isla provisional con su icono.
- `IslandMap.jsx` y `MapScreen.jsx` ahora usan el mismo sistema flexible de orden.
- Se creó `GUIA_AMPLIAR_ISLAS.md` con los pasos para añadir nuevas emociones.
- Se probó una emoción ficticia llamada `Esperanza`: entró como isla 19, con posición e icono propios.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por un fallo del conector del entorno, no por la app.

## Avance del 8 de junio de 2026: Isla Miedo jugable

- Se añadió `Miedo` al recorrido principal después de `Calma`.
- `Miedo` deja de ser próximamente y pasa a ser una isla desbloqueable.
- Completar el cuento de `Calma` desbloquea `Miedo` y registra `desbloqueo_miedo`.
- Se creó el cuento completo `La linterna de la cueva suave`, con 6 páginas.
- El cuento trabaja el miedo como señal de seguridad, escucha del cuerpo, ayuda y avance paso a paso.
- Se añadieron escenas visuales para cada página del cuento de Miedo.
- Se añadió la reflexión final del cuento de Miedo.
- Se crearon 8 retos de Miedo: 5 de verdadero/falso y 3 de reflexión.
- Se añadieron los logros `desbloqueo_miedo`, `cuento_miedo` y `reto_miedo`.
- Se añadieron recompensas conectadas:
  - `Ayudante de seguridad de aula`, como beneficio práctico supervisado por el docente.
  - `Marco Linterna Valiente`, como distintivo visual para el avatar.
- Se actualizó la recuperación de progreso guardado para reconocer Miedo.
- Se validó que Miedo tiene 6 páginas, 8 retos, logros y recompensas conectadas.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por un fallo del conector del entorno, no por la app.

## Pulido del 9 de junio de 2026: cuento de Miedo más concreto

- Se revisó el cuento `La linterna de la cueva suave`.
- Se sustituyó la frase abstracta de la linterna por una explicación más clara para Primaria.
- La linterna ahora ayuda de forma concreta: ilumina el suelo, muestra dónde poner el pie y permite avanzar sin correr.
- Se ajustó la petición de ayuda de Leo para que sea más natural: `Necesito ir despacio. ¿Puedes acompañarme?`.
- Se cambió `vencer el miedo de golpe` por una idea más comprensible: no hacerlo todo de golpe y avanzar con un paso pequeño.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.

## Pulido del 9 de junio de 2026: lectura uniforme en cuentos

- Se eliminó la letra inicial gigante del texto de los cuentos.
- El texto queda ahora uniforme en todas las páginas para mejorar la lectura en pantalla.
- Se retiró también la variante móvil de esa letra inicial.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por un fallo del conector del entorno, no por la app.

## Prueba del 9 de junio de 2026: flujo Calma -> Miedo

- Se intentó la prueba visual con el navegador integrado, pero el conector volvió a fallar por el entorno.
- Se hizo una validación funcional del flujo completo con la lógica real de la app.
- Antes de completar `Calma`, `Miedo` no aparece desbloqueada.
- Después de completar el cuento de `Calma`, `Miedo` queda desbloqueada y se registra `desbloqueo_miedo`.
- La Isla Miedo tiene cuento completo: 6 páginas y página final marcada.
- Completar el cuento de Miedo concede 25 puntos y el logro `cuento_miedo`.
- La recompensa `Ayudante de seguridad de aula` se desbloquea al completar el cuento de Miedo.
- Los retos de Miedo están conectados: 8 retos, con 5 verdadero/falso y 3 reflexiones.
- Completar los retos desbloquea `Marco Linterna Valiente`.
- Se simuló un informe de Miedo y el Panel docente lo leyó como `Informe de Miedo`, con 8 respuestas y 100% de resultado en la prueba.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.

## Pulido del 9 de junio de 2026: lector de cuentos más claro

- Se mejoraron los controles de lectura de todos los cuentos.
- Los botones `Anterior`, `Siguiente página`, `Completar cuento` e `Ir a los retos` ahora tienen icono, texto principal y una explicación breve.
- La barra de progreso muestra de forma más clara `Página X de Y` y porcentaje leído.
- Se añadieron indicadores por página para ver el avance del cuento de un vistazo.
- La página final del cuento queda más destacada con un aviso de `Última página del cuento`.
- Al completar el cuento, el aviso cambia a `Cuento completado` y refuerza que el progreso está guardado.
- Se ajustó el equilibrio texto/ilustración para dar más espacio a la lectura.
- Se añadieron ajustes responsive para móvil y tablet.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por un fallo del conector del entorno, no por la app.

## Próximo paso recomendado

1. Probar visualmente `Recompensas`: reclamar un beneficio de aula y un distintivo de avatar.
2. Probar visualmente `Diario Emo`: guardar una entrada, revisar el historial y borrar una entrada.
3. Probar el `Panel docente`: revisar informes, progreso y entradas del diario.
4. Ampliar el perfil con estadísticas por isla y último logro conseguido.
5. Completar la siguiente isla jugable, preferiblemente Miedo o Gratitud.

## Nota para retomar

No simplificar ni sustituir la app por una versión básica. Mantener siempre la versión visual actual y hacer cambios encima de ella, de forma incremental.

## Preparación del 9 de junio de 2026: demo externa compartible

- Se preparó EMOPLAY para poder publicarse como demo externa sin depender de `localhost`.
- Se añadieron metadatos de demo en `index.html` para mejorar el título y la descripción al compartir la app.
- Se añadió `netlify.toml` con el comando de construcción `npm run build`, carpeta publicada `dist` y redirección de SPA.
- Se añadió `vercel.json` para dejar preparada una publicación alternativa en Vercel.
- Se creó `PUBLICAR_DEMO.md` con instrucciones sencillas para publicar la demo en Netlify o Vercel.
- La compilación pasó correctamente con `npm run build`.
- Se creó un paquete comprimido de la demo: `EMOPLAY-demo-externa-20260609-105212.zip`.
- Se probó la demo construida con vista previa local y respondió correctamente con código 200.
- Pendiente: generar el enlace público desde una cuenta de Netlify/Vercel o mediante subida manual del paquete demo.

## Corrección del 9 de junio de 2026: pantalla blanca en demo Netlify

- Se revisó el primer enlace temporal de Netlify compartido por el usuario.
- El conector del navegador integrado no pudo abrir el sitio por fallo del entorno, y la conexión externa desde consola tampoco pudo acceder al servidor remoto.
- Se preparó una versión más compatible para Netlify Drop usando rutas relativas en la demo construida.
- Se añadió `base: './'` en `vite.config.js`.
- Se cambió el favicon de `index.html` para cargar como `./favicon.svg`.
- Se recompiló la app con `npm run build`.
- Se confirmó que `dist/index.html` carga `./assets/index-...js` y `./assets/index-...css`.
- Se creó una nueva carpeta lista para arrastrar a Netlify: `EMOPLAY-DEMO-NETLIFY-20260609-110722`.
- Se creó un nuevo paquete compatible: `EMOPLAY-demo-netlify-compatible-20260609-110722.zip`.
- Se probó la vista previa local de la demo corregida y respondió correctamente con código 200.

## Pulido del 10 de junio de 2026: compatibilidad móvil Android

- Se reforzaron los estilos responsive para móviles Android.
- Se añadió protección contra desplazamientos horizontales y escalados inesperados de texto.
- Se compactó la cabecera superior en pantallas pequeñas.
- Se ajustó el botón flotante de inicio para respetar zonas seguras del móvil.
- Se hizo el mapa de islas más estable en móvil, con islas más compactas y menos elementos decorativos que puedan estorbar.
- En cuentos, la lectura pasa delante de la ilustración en pantallas pequeñas para dar prioridad al texto.
- Se redujo el tamaño visual de ilustraciones en móvil para evitar pantallas demasiado largas.
- Se compactaron pestañas y miniaturas del editor de avatar en móvil.
- Se creó `ANDROID_EMOPLAY.md` con instrucciones para abrir la app correctamente en Android.
- Se recompiló la app con `npm run build` y pasó correctamente.
- Se probó la vista previa local de la demo construida y respondió correctamente con código 200.
- El conector visual del navegador integrado volvió a fallar por el entorno, no por la app.
- Se creó la carpeta de demo móvil `EMOPLAY-DEMO-ANDROID-20260610-221928`.
- Se creó el paquete `EMOPLAY-demo-android-compatible-20260610-221928.zip`.

## Pulido del 15 de junio de 2026: guía de siguiente paso

- Se añadió una guía visual reutilizable para indicar al alumno qué debe hacer ahora.
- La guía detecta el progreso real guardado: cuento pendiente, reto desbloqueado o ruta inicial completada.
- Se creó `src/data/adventureGuide.js` para mantener la lógica separada de las pantallas visuales.
- Se creó `src/components/AdventureNextStep.jsx` como componente reutilizable.
- Se integró la guía en la pantalla de inicio del alumno.
- Se integró la guía en la pantalla del mapa de islas.
- Desde la guía se puede abrir directamente el cuento pendiente o jugar los retos desbloqueados.
- Cuando la ruta jugable actual está completada, la guía anticipa la siguiente ampliación recomendada: Enfado.
- Se limpió el orden interno del mapa eliminando una repetición de `miedo` en `islandProgression.js`.
- Se añadieron estilos responsive para que la guía se vea bien también en móvil.
- La compilación pasó correctamente con `npm run build`.
- La vista previa local de la versión final respondió correctamente con código 200.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Pulido del 15 de junio de 2026: selector de retos por isla

- Se aclaró que la guía de inicio muestra solo el siguiente paso recomendado, no todos los retos de la app.
- Se añadió una pantalla nueva de `Retos` para elegir qué retos jugar por isla.
- Se creó `src/data/challengeSelection.js` para calcular el estado de cada reto: disponible, completado, falta leer cuento, isla bloqueada o próximamente.
- Se creó `src/screens/ChallengesHubScreen.jsx` con tarjetas visuales por emoción.
- La pantalla de retos muestra los retos disponibles y los retos por desbloquear.
- Desde cada tarjeta se puede jugar, rejugar, leer el cuento necesario o volver al mapa.
- Se añadió el acceso `Retos` al menú principal del alumno.
- Se conectó la nueva pantalla en `App.jsx`.
- Se añadieron estilos responsive para que el selector funcione en móvil.
- La compilación pasó correctamente con `npm run build`.
- La lógica se comprobó con progresos simulados: Ternura aparece disponible y Admiración pide leer el cuento cuando corresponde.
- La vista previa local respondió correctamente con código 200.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Ajuste del 15 de junio de 2026: inicio sin reto recomendado único

- Se retiró la guía de siguiente paso de la pantalla principal del alumno.
- El inicio ya no muestra un bloque específico como `Jugar los retos de Admiración`.
- La guía de siguiente paso se mantiene dentro del mapa, donde funciona como orientación de ruta.
- El menú principal conserva el acceso general `Retos`, que lleva al selector por isla.
- Se actualizó el texto del botón principal del mapa para que no diga `Comienza por Ternura` cuando el alumno ya va avanzado.
- La compilación pasó correctamente con `npm run build`.
- La vista previa local respondió correctamente con código 200.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Ajuste del 15 de junio de 2026: mapa con retos desbloqueados e intento de sonido de mar

- Se retiró de la pantalla de islas el bloque de recomendación única que podía mostrar solo `Jugar los retos de Admiración`.
- Se añadió en el mapa una sección nueva: `Retos desbloqueados`.
- La sección muestra únicamente retos realmente jugables o rejugables según el progreso del alumno.
- Si hay varios retos desbloqueados, aparecen varias tarjetas para elegir.
- Si no hay retos desbloqueados, se muestra un aviso indicando que primero hay que leer cuentos.
- Calma no aparece como reto jugable hasta completar el minijuego `Respira con la ola`.
- Se mantuvo el selector general de `Retos` del menú principal.
- Se probó un ambiente de mar generado con ruido filtrado y oleaje suave.
- Se eliminaron los tonos por fase y se probaron pequeños cambios de oleaje.
- Este intento de audio quedó reemplazado después por una versión silenciosa para evitar zumbidos.
- La integración de sonido queda pendiente hasta usar un archivo real de mar/olas.
- Se añadieron ajustes responsive para las tarjetas de retos desbloqueados en móvil.
- La compilación pasó correctamente con `npm run build`.
- La vista previa local respondió correctamente con código 200.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Avance del 15 de junio de 2026: minijuego Respira con la ola

- Se creó el primer minijuego de EMOPLAY: `Respira con la ola`, asociado a la Isla Calma.
- El minijuego aparece como paso propio dentro de Calma, después del cuento y antes de los retos.
- Se creó la pantalla `src/screens/CalmBreathingGameScreen.jsx`.
- El juego guía 3 olas de respiración con fases: inspira, pausa, suelta y descansa.
- Se añadieron olas animadas, esfera de respiración, brillos y progreso visual.
- Se añadió inicialmente sonido mediante Web Audio API, después retirado para evitar zumbidos molestos.
- Completar el minijuego guarda progreso en `completedMiniGameIds`.
- La primera finalización suma 20 puntos, desbloquea el logro `minijuego_calma` y guarda `minijuego_calma_completado`.
- Se añadió el logro `Respiración Serena`.
- Se añadió la recompensa práctica `Guía de respiración de 1 minuto`, validada por el docente.
- Los retos de Calma ahora se recomiendan/desbloquean después de completar el minijuego.
- El selector de Retos muestra `Falta minijuego` cuando Calma tiene cuento completado pero aún no se ha jugado `Respira con la ola`.
- La guía del mapa recomienda el minijuego de Calma en el momento correspondiente.
- Se añadieron estilos responsive para móvil y tablet.
- La lógica se validó con estados simulados: antes del minijuego Calma pide `Falta minijuego`; después aparece como reto disponible.
- La compilación pasó correctamente con `npm run build`.
- La vista previa local respondió correctamente con código 200.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Corrección del 15 de junio de 2026: Calma sin zumbido y mapa con retos secundarios

- Se eliminó por completo el audio generado por código del minijuego `Respira con la ola`.
- El minijuego queda silencioso y visual para evitar pitidos, zumbidos o sonidos artificiales molestos.
- Se deja preparada la decisión de integrar más adelante un archivo real de mar/olas si se añade un `.mp3` o `.wav` natural.
- En la pantalla de islas emocionales, el mapa vuelve a aparecer antes que cualquier acceso a retos.
- Se retiró la previsualización grande de retos desbloqueados dentro del mapa.
- Se añadió un panel compacto `Zona de retos`, situado debajo del mapa, con contador y botón para abrir el selector general.
- El selector general de retos se mantiene como pantalla propia, donde sí se puede elegir qué reto jugar.

## Avance del 15 de junio de 2026: sonido real de olas en Calma

- Se descargó un MP3 real de olas: `Sea Waves`, de Mike Koenig, desde SoundBible.
- El archivo se guardó en `public/audio/sea-waves-mike-koenig.mp3`.
- Se creó `src/data/audioAssets.js` para mantener separados los metadatos del audio: título, autor, licencia, fuente y ruta local.
- El minijuego `Respira con la ola` vuelve a tener sonido, pero ahora es un audio real y no sonido generado por código.
- El sonido empieza apagado y solo se activa con el botón `Activar olas reales`.
- El audio se detiene al pausar, reiniciar, completar el minijuego o salir de la pantalla.
- Se añadió una nota de atribución visible en el minijuego para respetar la licencia Attribution 3.0.
- La compilación pasó correctamente con `npm run build`.
- La vista previa local sirvió el archivo MP3 con tipo `audio/mpeg` y código 200.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Avance del 15 de junio de 2026: armario motivador del avatar

- Se transformó la pantalla de Avatar en una experiencia más motivadora con la vista `Mi explorador emocional`.
- Se separó la apariencia libre del avatar de los objetos ganados por progreso.
- Se añadieron ranuras de armario: marcos, coronas, medallas, accesorios y fondos premio.
- Se ampliaron los datos del avatar con `avatarFrame`, `avatarHead`, `avatarBadge` y `avatarAccessory`.
- Se creó `src/data/avatarWardrobe.js` para mantener la lógica del armario separada de la interfaz visual.
- Se conectaron recompensas visuales existentes con ranuras del avatar: corona, fondo dorado y marcos emocionales.
- Se añadieron nuevas recompensas visuales: medallas de calma/alegría y accesorios de admiración/miedo.
- Los objetos bloqueados muestran requisitos claros, por ejemplo `Completa los retos de Miedo`.
- Los objetos desbloqueados pueden reclamarse y usarse desde el propio armario del avatar.
- Se añadió una pequeña celebración visual al reclamar/equipar un objeto.
- `AvatarPreview` ahora muestra objetos ganados encima del avatar: marco, corona, medalla y accesorio.
- La compilación pasó correctamente con `npm run build`.
- La lógica del armario se validó con un alumno sin progreso y otro avanzado.

## Ajuste del 15 de junio de 2026: avatar más limpio y visual

- Se redujo el texto visible de la pantalla de Avatar para hacerla más directa.
- Se mantuvieron todas las funciones nuevas: armario, objetos bloqueados, reclamación, equipar premios y celebración.
- Se simplificaron los encabezados: `Apariencia libre`, `Armario` y `Premios equipables`.
- Se quitaron descripciones largas dentro del armario.
- Los marcos equipados ahora se ven más gruesos y destacados.
- Las medallas y accesorios equipados se muestran más grandes sobre el avatar.
- Las tarjetas del armario son más compactas y accesibles.
- La compilación pasó correctamente con `npm run build`.

## Corrección del 15 de junio de 2026: avatar limpio fuera del editor

- Se detectó que los objetos equipados saturaban el avatar en la pantalla principal.
- La miniatura superior del avatar se veía colapsada al mostrar corona, medalla y accesorios.
- `AvatarPreview` ahora muestra el avatar limpio por defecto.
- Los objetos ganados solo se dibujan cuando la pantalla los solicita expresamente.
- El editor de Avatar mantiene la vista con objetos equipados usando `showEarnedItems`.
- En la pantalla principal, perfil, panel docente y miniatura superior el avatar vuelve a verse sencillo.
- Se suavizó el tamaño de corona, medalla, accesorio y marco dentro del editor para evitar saturación.
- La compilación pasó correctamente con `npm run build`.

## Ajuste del 16 de junio de 2026: Avatar reordenado y sin panel superior

- Se quitó el panel informativo superior de la pantalla de Avatar.
- La pantalla ahora empieza con la foto del avatar y sus acciones básicas.
- Debajo de la foto aparecen directamente las opciones de selección de apariencia.
- El armario de premios queda después de la apariencia.
- La información del avatar se trasladó al final de la pantalla.
- Se eliminó el texto largo de propuesta para que la pantalla sea más accesible.
- La compilación pasó correctamente con `npm run build`.

## Avance del 16 de junio de 2026: más variedad en el avatar

- Se amplió la personalización libre del avatar: 45 peinados, 26 tipos de ojos, 15 cejas y 30 bocas.
- Se añadieron más colores de pelo: violeta, verde, coral y blanco.
- Se mantuvieron gafas y pendientes dentro del límite real del generador visual usado por la app.
- Se amplió el armario hasta 21 premios visuales de avatar.
- Se añadieron nuevos objetos ganables: lazo de alegría, gorra de calma, mapa de islas y llave de nuevas islas.
- La ranura `Coronas` pasó a llamarse `Cabeza`, para permitir coronas, diademas, gorras y otros objetos superiores.
- El editor de apariencia ahora queda contenido en una zona desplazable para que muchas miniaturas no saturen la pantalla.
- La pantalla principal y la miniatura superior siguen mostrando el avatar limpio, sin objetos superpuestos.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Rediseño del 16 de junio de 2026: composición nueva del mapa

- Se rehízo la distribución visual del mapa para que el orden de la ruta coincida con la posición de las islas.
- La ruta jugable ahora forma un recorrido más claro: `1 -> 2 -> 3 -> 4 -> 5`, baja a `6` y vuelve hacia `7 -> 8 -> 9`.
- Las islas futuras se movieron a una franja inferior y se redujeron de tamaño para que no parezca que la ruta se las salta.
- Sorpresa, Empatía, Gratitud y Confianza ya no quedan por encima de Enfado dentro del recorrido principal.
- Se redujo el aire superior del mapa y el alto del lienzo para aprovechar mejor el espacio.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Corrección del 16 de junio de 2026: ruta de islas coherente

- Se corrigió la numeración del mapa para que solo las islas de la ruta jugable tengan número de paso.
- Las islas futuras ya no aparecen como pasos 10, 11 o superiores, evitando confusión con el recorrido principal.
- La ruta visual se reorganizó de forma más lógica: avanza por la fila superior, baja hacia Miedo y Enfado, y continúa hacia Tristeza, Frustración y Vergüenza.
- Las islas futuras quedan visibles como contenido próximo, más pequeñas y diferenciadas.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Corrección del 16 de junio de 2026: premios equipables dentro del avatar

- Se redujo el tamaño de los objetos equipados sobre el avatar.
- Corona/objeto de cabeza, medalla y accesorio ahora quedan dentro del círculo del avatar.
- La versión pequeña del avatar tiene tamaños propios para evitar objetos descolocados.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.

## Ajuste del 16 de junio de 2026: marco y accesorio alineados

- El marco equipable dejó de dibujarse como aro independiente superpuesto.
- Ahora el marco usa el propio borde circular del avatar, evitando desfases con la imagen.
- El accesorio se movió hacia una zona interior del círculo para que no parezca fuera de sitio.
- La miniatura pequeña mantiene el marco alineado y el accesorio dentro de una zona segura.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.

## Cambio del 16 de junio de 2026: premios como insignias externas

- Se retiraron los premios equipables de encima del círculo del avatar.
- El avatar vuelve a quedar limpio, sin marco, accesorio, medalla ni objeto de cabeza superpuesto.
- Los premios equipados ahora aparecen junto al avatar como insignias externas.
- Cada insignia muestra su icono y su nombre para que se entienda mejor qué se ha ganado.
- En móvil, las insignias bajan debajo del avatar y se ordenan en tarjetas.
- La sección inferior de información ya no repite la lista de objetos equipados.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.

## Ajuste del 16 de junio de 2026: marco integrado y trofeos externos

- Se recuperó el marco como borde integrado en la foto circular del avatar.
- El marco ya no aparece en la lista externa, porque funciona mejor como parte visual del avatar.
- Los demás premios equipados se muestran como `Trofeos` junto al avatar.
- Las tarjetas de trofeos son más grandes y legibles.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.

## Corrección del 16 de junio de 2026: contadores de inicio adaptables

- Se corrigieron los contadores de la pantalla principal: puntos, retos e islas.
- Las tarjetas de números ahora usan una estructura estable con icono fijo y texto adaptable.
- Los números usan anchura visual más regular para evitar saltos o cortes.
- La cápsula superior de puntos del alumno ya no se coloca en vertical en pantallas muy estrechas.
- En móvil, los contadores se muestran en una columna limpia y legible.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Avance del 16 de junio de 2026: nueva ruta jugable de emociones

- Se definió el plan de ampliación antes de añadir otra emoción futura: Enfado, Tristeza, Frustración y Vergüenza.
- Se amplió el orden de desbloqueo: `Ternura -> Admiración -> Alegría -> Calma -> Miedo -> Enfado -> Tristeza -> Frustración -> Vergüenza`.
- El desbloqueo de islas se hizo genérico desde `islandUnlockOrder`, para facilitar futuras ampliaciones.
- La migración del progreso local ahora reconoce las nuevas islas, cuentos, retos y desbloqueos.
- Enfado dejó de ser `Próximamente` y ahora es una isla bloqueada real después de Miedo.
- Se añadió el cuento completo `El volcán que aprendió a hablar`, con 6 páginas e ilustraciones internas.
- Se añadieron 8 retos de Enfado y sus logros: `desbloqueo_enfado`, `cuento_enfado` y `reto_enfado`.
- Tristeza dejó de ser `Próximamente` y ahora es una isla bloqueada real después de Enfado.
- Se añadió el cuento completo `La lluvia que sabía escuchar`, con 6 páginas e ilustraciones internas.
- Se añadieron 8 retos de Tristeza y sus logros: `desbloqueo_tristeza`, `cuento_tristeza` y `reto_tristeza`.
- Frustración dejó de ser `Próximamente` y ahora es una isla bloqueada real después de Tristeza.
- Se añadió el cuento completo `El puzle que no encajaba`, con 6 páginas e ilustraciones internas.
- Se añadieron 8 retos de Frustración y sus logros: `desbloqueo_frustracion`, `cuento_frustracion` y `reto_frustracion`.
- Vergüenza dejó de ser `Próximamente` y ahora es una isla bloqueada real después de Frustración.
- Se añadió el cuento completo `El escenario de la voz pequeña`, con 6 páginas e ilustraciones internas.
- Se añadieron 8 retos de Vergüenza y sus logros: `desbloqueo_verguenza`, `cuento_verguenza` y `reto_verguenza`.
- Se añadieron recompensas prácticas de aula: pausa respetuosa, rincón de escucha, estrategia del segundo intento y participación protegida.
- Se añadieron marcos integrados y trofeos visuales para las nuevas islas.
- La guía de siguiente paso queda preparada para recomendar `Empatía` como futura ampliación, sin hacerla jugable todavía.
- La validación de datos confirmó 6 páginas de cuento, 8 retos, 3 logros y 3 recompensas por cada nueva isla.
- La simulación de progreso confirmó que la cadena de desbloqueo llega correctamente hasta Vergüenza.
- La compilación pasó correctamente con `npm run build`.
- El arranque normal con `npm run dev` mostró correctamente `http://127.0.0.1:5173/`.

## Ajuste del 16 de junio de 2026: mapa emocional más limpio

- Se retiró el bloque superior `Ruta emocional` para dar más espacio real a las islas.
- El mapa ahora dibuja caminos solo entre las islas de la ruta jugable, no entre todas las islas futuras.
- Los caminos pasan a ser curvos y discontinuos para guiar el avance con menos ruido visual.
- Se redistribuyeron las islas por el mar para evitar solapes y mantener un orden de juego más claro.
- Las islas futuras quedan visibles como archipiélago ampliable, pero sin competir con la ruta principal.
- Se ajustó el tamaño base de las islas y el alto del lienzo para que el mapa respire mejor.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Rediseño del 16 de junio de 2026: mapa con composición de videojuego

- Se rehizo la distribución de islas para evitar que el centro quedara vacío y la parte inferior sobrecargada.
- La ruta principal ahora ocupa el centro del mapa con una forma de recorrido jugable: sube, cruza, baja y vuelve hacia la izquierda.
- Las islas jugables son más grandes y protagonistas para que el alumnado siga mejor los pasos numerados.
- Las islas futuras se repartieron por los bordes como islas lejanas, más pequeñas y sin etiqueta secundaria de estado.
- Se añadió una estela visual bajo los caminos para que la ruta tenga más presencia de videojuego.
- Se añadió una textura suave central del mar para que el espacio vacío parezca intencional y no un hueco.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Reconstrucción del 16 de junio de 2026: mapa de escritorio sin solapes

- Se reconstruyó la distribución de escritorio con una cuadrícula clara para evitar islas superpuestas.
- La ruta principal queda organizada como tablero: `1-2-3-4` arriba, `7-6-5` en la fila central y `9-8` en la parte inferior izquierda.
- Empatía, Gratitud, Confianza, Sorpresa y el resto de futuras ya no aparecen por encima de las primeras islas.
- Las islas futuras se colocaron en una única banda inferior pequeña y uniforme, separada de la ruta jugable.
- Se redujeron las etiquetas de las futuras para evitar choques de texto y mejorar la lectura.
- La comprobación geométrica de escritorio no detectó solapes aproximados entre islas.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Reconstrucción del 16 de junio de 2026: mapa principal tipo videojuego

- Se rehizo por completo la pantalla visual del mapa, inspirándose en referencias de islas grandes sobre el mar.
- El océano principal ahora muestra solo las islas jugables de la ruta, grandes y separadas.
- Las próximas islas se sacaron del mapa principal y se colocaron en un panel inferior independiente llamado `Próximas islas`.
- Se mantuvieron intactos cuentos, retos, minijuegos, logros, desbloqueos y recompensas.
- La ruta principal se conserva en el orden de progreso: Ternura, Admiración, Alegría, Calma, Miedo, Enfado, Tristeza, Frustración y Vergüenza.
- La comprobación geométrica de escritorio no detectó solapes aproximados entre las islas principales.
- La primera compilación falló por el error intermitente conocido de Vite/Rolldown con rutas de OneDrive, pero la repetición limpia pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.

## Ajuste del 17 de junio de 2026: mapa completo en una sola pantalla

- Se eliminó de la pantalla de islas el panel de nivel `Sabio Emocional`, integrando la información útil en contadores compactos.
- El contador de `Informes` pasó a la cabecera compacta del mapa.
- Se retiraron los bloques grandes de `Siguiente isla`, `Por descubrir`, filtros y tarjetas repetidas para liberar espacio visual.
- El acceso a retos quedó como una barra pequeña de acciones rápidas.
- Todas las islas se muestran ahora en el mismo plano del océano, usando una cuadrícula estable de 6 columnas para evitar solapes.
- Las futuras islas siguen visibles, pero ya no aparecen en un panel separado ni compiten con información redundante.
- Se mantuvieron intactos cuentos, retos, minijuegos, logros, recompensas y desbloqueos.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente en `http://127.0.0.1:5173/`.
- La comprobación visual automática con el navegador integrado no pudo completarse por el fallo conocido del conector del entorno.
## Ajuste del 17 de junio de 2026: Isla Empatía jugable y minijuego Puente de la empatía

- Empatía pasa de isla futura a isla jugable dentro de la ruta, colocada después de Vergüenza.
- Se añadió cuento completo de Empatía: `El puente de los zapatos distintos`, con 6 páginas e ilustraciones por escena.
- Se añadieron 8 retos de Empatía centrados en observar señales, preguntar con cuidado, escuchar y acompañar sin imponer.
- Se creó el minijuego `Puente de la empatía`, con cuatro escenas de aula/patio donde el alumno identifica una emoción posible y elige una respuesta respetuosa.
- El flujo queda ordenado así: cuento de Empatía, minijuego de Empatía y después retos de Empatía.
- Se generalizó la lógica de minijuegos para que no dependa solo de Calma y quede preparada para futuras islas.
- Se añadieron logros de desbloqueo, cuento, minijuego y reto de Empatía.
- Se añadieron recompensas educativas: `Ayudante de escucha respetuosa` y `Pregunta amable del día`.
- Se añadieron recompensas visuales: `Marco Puente Amable` y `Medalla Puente Empático`, respetando que los trofeos se muestren fuera del círculo del avatar.
- Verificación realizada: compilación correcta, servidor local responde y comprobación de datos correcta. La comprobación visual con navegador integrado no pudo completarse por el fallo conocido del conector en Windows.

## Ajuste del 17 de junio de 2026: prueba y pulido de Empatía

- Se revisó el flujo completo previsto de Empatía: desbloqueo tras Vergüenza, cuento, minijuego, retos, logros, puntos y recompensas.
- Se mejoró visualmente el minijuego `Puente de la empatía`: las pistas ahora aparecen como señales visuales separadas y el puente muestra mejor el recorrido de observar a acompañar.
- Se redujo la sensación de texto en el minijuego usando chips de señales, cartela de escena y etiquetas dentro de las islas del puente.
- Se destacó la isla de Empatía en el mapa con un estilo propio de isla-puente.
- Se corrigió el responsive del mapa nuevo para escritorio, tablet y móvil, evitando que reglas antiguas recuperen una altura fija.
- El Panel docente ahora muestra explícitamente `Minijuegos completados`, por lo que Empatía aparece de forma clara cuando se completa su minijuego.
- Verificación realizada: prueba de datos correcta, codificación UTF-8 correcta en archivos modificados, compilación correcta y servidor local activo. La comprobación visual automática volvió a fallar por el conector del navegador en Windows.

## Ajuste del 17 de junio de 2026: cuento e ilustraciones de Empatía más claros

- Se sustituyó el cuento de Empatía por `El faro de Leo`, una historia más lineal y cotidiana para Primaria.
- La idea pedagógica queda más concreta: mirar señales, preguntar con respeto, escuchar y ayudar sin decidir por la otra persona.
- El minijuego `Puente de la empatía` ahora mezcla las posiciones de respuesta entre escenas y al reiniciar.
- El lector de cuentos queda preparado para usar escenas dibujadas además de iconos de respaldo.
- Empatía estrena escenas visuales dibujadas con banco, mural, hojas rotas, mesa de reparación, personajes y faro final.

## Ajuste del 17 de junio de 2026: nuevo enfoque narrativo para Empatía

- El cuento de Empatía se reescribió de nuevo como `El primer recreo de Luna`.
- La historia utiliza una situación cercana para Primaria: una alumna nueva que echa de menos a su amiga y se queda sola durante el recreo.
- Noa practica la empatía observando, recordando una experiencia parecida, preguntando y escuchando sin obligar a Luna a animarse.
- El final evita soluciones mágicas: Luna sigue echando de menos a su amiga, pero deja de sentirse sola.
- Las seis escenas visuales se adaptaron al nuevo relato con banco, mochila, pulsera azul, pelota y acercamiento final al juego.
- La reflexión final se simplificó para relacionarla directamente con acompañar a alguien que está solo o preocupado.

## Ajuste del 18 de junio de 2026: ilustraciones IA reales para Empatía

- Empatía se utiliza como cuento piloto para sustituir las composiciones CSS por ilustraciones narrativas reales.
- Se creó una ficha visual común para mantener coherentes a Luna y Noa en todas las páginas.
- Se generaron seis ilustraciones detalladas con estilo de álbum infantil, una para cada página de `El primer recreo de Luna`.
- Las imágenes muestran el recorrido completo: Luna sola, Noa observando, el recuerdo de Noa, la escucha, la compañía y la incorporación al juego.
- Los siete recursos se guardaron dentro de `public/images/stories/empatia`, incluida la referencia de personajes.
- Las imágenes se optimizaron a 900 × 900 píxeles para mantener detalle con un peso aproximado de 250 KB por página.
- El lector de cuentos ahora admite imágenes reales por página y conserva los iconos provisionales para el resto de emociones.
- Las ilustraciones de Empatía mantienen el tamaño actual del lector y se adaptan automáticamente en ordenador, tableta y móvil.

## Decisión del 18 de junio de 2026: línea visual permanente de los cuentos

- El estilo estrenado en Empatía queda aprobado como línea visual oficial de EMOPLAY.
- Todos los cuentos nuevos tendrán una ficha visual de personajes y una ilustración narrativa detallada por página.
- Los cuentos existentes se renovarán progresivamente con este mismo sistema.
- Las ilustraciones provisionales actuales se conservarán hasta que cada reemplazo esté terminado y comprobado.
- Se evitarán emojis, iconos y composiciones CSS como resultado final de los cuentos.
- Las imágenes se generarán con estilo de álbum infantil contemporáneo, manteniendo continuidad de personajes y fidelidad al texto.
- Los recursos se guardarán dentro del proyecto, optimizados a `900 × 900 px` y preparados para ordenador, tableta y móvil.
- Se creó `GUIA_VISUAL_CUENTOS.md` como referencia obligatoria para futuras ampliaciones.

## Ajuste del 20 de junio de 2026: ilustraciones IA para Ternura

- La primera isla, Ternura, se convierte en el segundo cuento renovado con la línea visual oficial.
- Se creó una ficha visual estable para Emma y su oso Bruno.
- Emma conserva en todas las páginas su ropa rosa y verde, el pelo castaño ondulado y la pinza rosa.
- Bruno conserva su pelaje color miel, la cinta azul verdosa, una oreja gastada y la reparación cosida de una pata.
- Se generaron seis ilustraciones narrativas para `El abrazo del oso Peluche`.
- Las escenas muestran a Bruno olvidado, el hallazgo bajo las mantas, el reencuentro, el cuidado delicado, su nuevo lugar especial y la ternura compartida con otra persona.
- Las ilustraciones se guardaron y optimizaron a `900 × 900 px` dentro de `public/images/stories/ternura/`.
- Los iconos provisionales de Ternura permanecen únicamente como respaldo técnico.
- Se corrigió la continuidad de la pinza rosa de Emma antes de integrar la tercera página.
- Verificación realizada: compilación correcta, aplicación local responde y las seis ilustraciones se descargan correctamente desde el lector.

## Ajuste del 20 de junio de 2026: ilustraciones IA para Admiración

- Admiración se convierte en el tercer cuento renovado con la línea visual oficial.
- Se creó una ficha visual estable para Lucas y su abuelo Mateo.
- Lucas mantiene el pelo castaño ondulado, el jersey amarillo, la camisa azul, el pantalón oscuro y las zapatillas rojizas.
- Mateo mantiene el pelo y bigote grises, la chaqueta verde y sus prismáticos antiguos, sin gafas.
- Se generaron seis ilustraciones narrativas para `El niño que descubrió las estrellas`.
- Las escenas muestran la salida al jardín, el cielo estrellado, el descubrimiento de la admiración, ejemplos de naturaleza, arte y generosidad, el dibujo de constelaciones y el reconocimiento del trabajo de una compañera.
- Las imágenes se optimizaron a `900 × 900 px` y se guardaron en `public/images/stories/admiracion/`.
- Los iconos provisionales se conservan únicamente como respaldo técnico.
- Se corrigió la aparición accidental de gafas en Mateo para mantener la ficha visual.
- Verificación realizada: compilación correcta, aplicación local responde y las seis ilustraciones se descargan correctamente desde el lector.

## Punto de guardado del 20 de junio de 2026

- Progreso guardado después de completar las ilustraciones de Admiración.
- Cuentos renovados con la línea visual definitiva: Empatía, Ternura y Admiración.
- Cada uno conserva su ficha de personajes y seis ilustraciones narrativas dentro del proyecto.
- La aplicación compila correctamente y las imágenes han sido comprobadas desde Vite.
- Los cuentos restantes mantienen sus ilustraciones provisionales sin perder ninguna funcionalidad.
- Próximo cuento previsto para renovar: Alegría.

## Ajuste del 22 de junio de 2026: ilustraciones IA para Alegría

- Alegría se convierte en el cuarto cuento renovado con la línea visual oficial.
- Se creó una ficha visual estable para Nora, Leo y Sara.
- Nora mantiene su camiseta amarilla, peto corto turquesa, zapatillas coral y pelo castaño rizado con detalle amarillo.
- Leo mantiene su sudadera azul, camiseta blanca, pantalón corto arena y pelo negro rizado.
- Sara mantiene su camiseta coral, falda lila, zapatillas verdes y trenza pelirroja con lazo lila.
- La cometa principal conserva su forma amarilla, borde naranja y cola de cintas turquesas, coral y lilas.
- Se generaron seis ilustraciones narrativas para `La fiesta de las cometas`.
- Las escenas muestran la plaza tranquila, la idea de Nora, el primer vuelo, la alegría compartida, la celebración respetuosa y el camino final de cometas.
- Las imágenes se optimizaron a `900 × 900 px` y se guardaron en `public/images/stories/alegria/`.
- Los iconos provisionales se conservan únicamente como respaldo técnico.
- La revisión conjunta de las seis escenas confirmó continuidad de personajes, vestuario, cometa y escenario.
- La compilación pasó correctamente con `npm run build`.
- El servidor local respondió correctamente y los siete recursos de Alegría se descargaron con estado `200`.
- La comprobación visual interactiva no pudo completarse porque el conector del navegador integrado volvió a fallar al iniciarse; la revisión de la lámina conjunta y de los archivos finales sí se completó.
- Próximo cuento previsto para renovar: Calma.

## Ajuste del 24 de junio de 2026: ilustraciones IA para Calma y prueba de Spec Kit

- Se utilizó Calma como primer piloto real del flujo Spec Kit dentro de EMOPLAY.
- Se crearon los artefactos de trabajo en `specs/001-calma-illustrations/`: especificación, checklist, plan, investigación, modelo de datos, guía de validación, tareas y evaluación final.
- Calma se convierte en el quinto cuento renovado con la línea visual oficial.
- Se creó una ficha visual estable para Vega.
- Vega mantiene pelo castaño oscuro ondulado, chaqueta turquesa, camiseta crema, prenda coral, zapatillas y pulsera azul de concha.
- Se generaron seis ilustraciones narrativas para `La bahía que respiraba despacio`.
- Las escenas muestran la llegada con ruido interno, la concha de la pausa, la respiración como olas, el cuerpo más ligero, la pausa compartida de clase y el camino sereno final.
- Las imágenes se optimizaron a `900 × 900 px` y se guardaron en `public/images/stories/calma/`.
- Los iconos provisionales de Calma se conservan únicamente como respaldo técnico.
- Se integraron las rutas en `src/data/storyIllustrations.js`.
- La lámina de revisión quedó guardada en `visual-checks/calma-contact-sheet.jpg`.
- Verificación realizada: compilación correcta, los siete recursos de Calma responden con estado `200`, y el lector real muestra las seis imágenes de Calma a `900 × 900 px`.
- Se probó el flujo desde la interfaz: Ternura, Admiración y Alegría desbloquean Calma; el cuento de Calma se completa, suma puntos y mantiene el acceso al minijuego.
- Evaluación de Spec Kit: mejora el control de alcance y reduce olvidos en cambios medianos, aunque añade documentación extra para tareas pequeñas.

## Ajuste del 26 de junio de 2026: ilustraciones IA para Miedo y primer repositorio Git

- Se creó una copia de seguridad previa y se inicializó un repositorio Git local para EMOPLAY.
- El primer hito de Git conserva el estado completo anterior a esta renovación visual.
- Miedo se convierte en el sexto cuento renovado con la línea visual oficial.
- Se aplicó Spec Kit en `specs/002-miedo-illustrations/` para fijar alcance, tono educativo, ficha de Leo, escenas y validaciones.
- Se creó una ficha visual estable para Leo: pelo negro rizado, sudadera azul marino con franja turquesa, pantalón mostaza, zapatillas blancas, mochila verde salvia y linterna amarilla.
- Las seis escenas de `La linterna de la cueva suave` muestran una progresión segura: niebla suave, luz para el siguiente paso, señales del cuerpo, acompañamiento, plan prudente y salida serena.
- Las imágenes se optimizaron a `900 × 900 px` y se guardaron en `public/images/stories/miedo/`.
- Los iconos provisionales se conservan únicamente como respaldo técnico.
- La lámina de revisión quedó guardada en `visual-checks/miedo-contact-sheet.jpg`.
- Verificación realizada: compilación correcta, siete recursos de Miedo con respuesta `200` y recorrido real de las seis páginas en el lector.
- La prueba completa confirmó la recompensa de 25 puntos, la insignia Linterna Valiente y el desbloqueo posterior de Enfado.

## Ajuste del 6 de julio de 2026: ilustraciones IA para Enfado

- Se creo una copia de seguridad previa antes de modificar la app:
  `_backups/emoplay-before-enfado-illustrations-20260706-010811.zip`.
- Enfado se convierte en el septimo cuento renovado con la linea visual oficial.
- Se aplico Spec Kit en `specs/003-enfado-illustrations/` para fijar alcance, tono educativo, ficha de Marco, escenas y validaciones.
- Se definio el tono visual de Enfado como energia, limite, respiracion y reparacion, sin agresividad ni escenas intimidantes.
- Se creo una ficha visual estable para Marco: piel morena clara, pelo castano oscuro corto y ondulado, sudadera rojo ladrillo con franja crema, pantalon verde azulado, zapatillas rojas y pulsera azul.
- Se creo una companera visual estable: pelo negro rizado en dos recogidos, chaqueta menta, pantalon lavanda y zapatillas amarillas.
- Las seis escenas de `El volcan que aprendio a hablar` muestran una progresion segura: torre caida, senal roja para parar, nombrar el enfado, pedir un minuto, volver a construir con un plan y camino final sereno.
- Las imagenes se optimizaron a `900 x 900 px` y se guardaron en `public/images/stories/enfado/`.
- Los iconos provisionales se conservan unicamente como respaldo tecnico.
- La lamina de revision quedo guardada en `visual-checks/enfado-contact-sheet.jpg`.
- Verificacion realizada: compilacion correcta, siete recursos de Enfado con respuesta `200` y recorrido real de las seis paginas en el lector.
- La prueba completa confirmo la recompensa de 25 puntos, la insignia Volcan que Habla y el desbloqueo posterior de Tristeza.
- Estado del repositorio remoto: GitHub ya quedo conectado como `origin` en `https://github.com/Pich82/emoplay.git`. La rama `master` quedo subida y sincronizada con `origin/master`, por lo que el proyecto ya no depende solo del ordenador ni de copias `.zip`.

## Ajuste del 15 de julio de 2026: ilustraciones IA para Tristeza

- Se actualizo el registro de progreso para reflejar que GitHub ya esta conectado como remoto `origin`.
- Se creo una copia de seguridad previa antes de modificar la isla:
  `_backups/emoplay-before-tristeza-illustrations-20260715-114248.zip`.
- Tristeza se convierte en el octavo cuento renovado con la linea visual oficial.
- Se aplico Spec Kit en `specs/004-tristeza-illustrations/` para fijar alcance, tono educativo, ficha de Alba, escenas y validaciones.
- Se definio el tono visual de Tristeza como consuelo, escucha, compania, recuerdo amable y vuelta gradual, sin abandono ni dramatismo excesivo.
- Se creo una ficha visual estable para Alba: piel clara oliva, pelo castano oscuro largo y ondulado, dos horquillas azules, impermeable amarillo suave, vestido o falda azul petroleo, botas rojas, mochila azul y libreta azul.
- Se creo una profesora visual estable: pelo castano recogido, cardigan verde salvia, pantalon azul oscuro y bufanda crema.
- Las seis escenas de `La lluvia que sabia escuchar` muestran una progresion segura: patio con lluvia suave, lagrimas permitidas, pedir compania, escribir un recuerdo, volver poco a poco al juego y sendero azul final.
- Las imagenes se optimizaron a `900 x 900 px` y se guardaron en `public/images/stories/tristeza/`.
- Los iconos provisionales se conservan unicamente como respaldo tecnico.
- La lamina de revision quedo guardada en `visual-checks/tristeza-contact-sheet.jpg`.
- Verificacion realizada: compilacion correcta, siete recursos de Tristeza con respuesta `200` y recorrido real de las seis paginas en el lector.
- La prueba completa confirmo la recompensa de 25 puntos, la insignia Lluvia que Escucha y el desbloqueo posterior de Frustracion.

## Ajuste del 15 de julio de 2026: ilustraciones IA para Frustracion

- Se creo una copia de seguridad previa antes de modificar la isla:
  `_backups/emoplay-before-frustracion-illustrations-20260715-132100.zip`.
- Frustracion se convierte en el noveno cuento renovado con la linea visual oficial.
- Se aplico Spec Kit en `specs/005-frustracion-illustrations/` para fijar alcance, tono educativo, ficha de Dani, escenas y validaciones.
- Se definio el tono visual de Frustracion como dificultad, pausa, estrategia, pista respetuosa y vuelta al intento, sin fracaso definitivo ni bloqueo angustioso.
- Se creo una ficha visual estable para Dani: piel morena clara, pelo negro corto y liso, gafas redondas azul oscuro, sudadera verde azulada, camiseta naranja, pantalon gris y zapatillas azules.
- Se creo una persona de apoyo visual estable: pelo castano corto, camisa crema y peto azul.
- Las seis escenas de `El puzle que no encajaba` muestran una progresion segura: pieza dificil, mesa iluminada cuando algo cuesta, pausa con agua y respiracion, nueva estrategia, pieza encajada y camino naranja final.
- Las imagenes se optimizaron a `900 x 900 px` y se guardaron en `public/images/stories/frustracion/`.
- Los iconos provisionales se conservan unicamente como respaldo tecnico.
- La lamina de revision quedo guardada en `visual-checks/frustracion-contact-sheet.jpg`.
- Verificacion realizada: compilacion correcta, siete recursos de Frustracion con respuesta `200` y recorrido real de las seis paginas en el lector.
- La prueba completa confirmo la recompensa de 25 puntos, la insignia Puzle Paciente y el desbloqueo posterior de Verguenza.

## Ajuste del 15 de julio de 2026: ilustraciones IA para Verguenza

- Se creo una copia de seguridad previa antes de modificar la isla:
  `_backups/emoplay-before-verguenza-illustrations-20260715-152925.zip`.
- Verguenza se convierte en el decimo cuento renovado con la linea visual oficial.
- Se aplico Spec Kit en `specs/006-verguenza-illustrations/` para fijar alcance, tono educativo, ficha de Vera, escenas y validaciones.
- Se definio el tono visual de Verguenza como participacion segura, rubor amable, paso pequeno, apoyo cercano y voz interna respetuosa, sin burla ni exposicion intimidante.
- Se creo una ficha visual estable para Vera: piel morena clara, pelo castano oscuro ondulado en melena corta, diadema naranja fina, jersey amarillo suave, falda azul verdosa, calcetines crema y zapatos marrones.
- Se creo una companera visual estable: piel clara, pelo negro liso en dos coletas bajas, peto verde, camiseta blanca y zapatillas rojas.
- Las seis escenas de `El escenario de la voz pequena` muestran una progresion segura: escenario con luz suave, senales corporales de verguenza, forma mas pequena de participar, voz respetuosa tras una equivocacion, aplauso tranquilo y luz amable final.
- Las imagenes se optimizaron a `900 x 900 px` y se guardaron en `public/images/stories/verguenza/`.
- Los iconos provisionales se conservan unicamente como respaldo tecnico.
- La lamina de revision quedo guardada en `visual-checks/verguenza-contact-sheet.jpg`.
- Verificacion realizada: compilacion correcta, siete recursos de Verguenza con respuesta `200` y recorrido real de las seis paginas en el lector.
- La prueba completa confirmo la recompensa de 25 puntos, la insignia Voz Amable y el desbloqueo posterior de Empatia.

## Ajuste del 28 de julio de 2026: exportar e importar progreso sin servidor

- Se creo una copia de seguridad previa antes de modificar la app:
  `_backups/emoplay-before-progress-transfer-20260728-132510.zip`.
- Se aplico Spec Kit en `specs/007-progress-transfer/` para definir el alcance de mover progreso entre dispositivos sin servidor.
- Se anadio el modulo `src/data/progressTransfer.js` para crear copias JSON, validar importaciones, normalizar datos y sincronizar claves modernas y legacy.
- La copia incluye jugador, avatar, Diario Emo, informes locales de retos y claves legacy de cuentos, retos, minijuegos, puntos e islas completadas.
- `Mi perfil` ahora permite exportar progreso e importar una copia JSON con resumen previo antes de sustituir los datos actuales.
- Antes de confirmar una importacion, EMOPLAY guarda una copia local previa en `emoplay:progressImportBackup:last`.
- Se anadio la comprobacion `npm run test:progress-transfer` para validar exportacion, rechazo de archivos incompatibles, restauracion y limpieza de claves legacy antiguas.
- Verificacion realizada: `npm run test:progress-transfer` correcto y `npm run build` correcto.
- No se modifico contenido de islas, cuentos, retos ni recursos visuales.

# Especificacion: Ilustraciones del cuento de Tristeza

**Feature**: `004-tristeza-illustrations`  
**Creada**: 2026-07-15  
**Estado**: Completada

## Objetivo

Renovar las seis paginas de `La lluvia que sabia escuchar` con ilustraciones narrativas reales, coherentes y adecuadas para alumnado de Primaria. El cuento debe mostrar la tristeza como una emocion que puede aparecer al echar de menos, perder algo o necesitar consuelo, y ensenar que llorar, pedir compania, recordar con carino y volver poco a poco son respuestas seguras.

## Historias de usuario

### US1 - Leer el cuento con escenas narrativas (P1)

Como alumno, quiero ver una ilustracion propia en cada pagina del cuento de Tristeza para entender que siente Alba y como puede pedir apoyo sin sentirse sola.

**Prueba independiente**: abrir las seis paginas de Tristeza y verificar que cada una carga una imagen narrativa local relacionada con el texto.

**Criterios de aceptacion**:

1. La primera pagina muestra a Alba en un patio con lluvia suave, echando de menos a su amiga.
2. La segunda pagina muestra que las lagrimas pueden salir sin verguenza ni prisa.
3. Las paginas tres a cinco representan pedir compania, escribir una nota-recuerdo y volver al juego poco a poco.
4. La ultima pagina muestra la lluvia como camino azul sereno hacia la siguiente isla.
5. Si una imagen no carga, el lector conserva la composicion de iconos existente como respaldo.

### US2 - Mantener continuidad de Alba (P2)

Como docente o creador de contenido, quiero reconocer a Alba en todas las paginas para que el cuento se sienta como un album ilustrado continuo.

**Prueba independiente**: comparar la ficha de personaje y las seis imagenes como conjunto.

**Criterios de aceptacion**:

1. Alba conserva edad aproximada, pelo, ropa, mochila y expresividad general en las seis escenas.
2. La lluvia suave, la libreta azul y el banco del patio aparecen como elementos visuales recurrentes.
3. La profesora aparece como presencia tranquila y respetuosa, sin resolver la emocion por Alba ni meter prisa.

### US3 - Conservar la experiencia existente (P3)

Como alumno, quiero completar el cuento igual que antes para que esta mejora visual no afecte mis avances ni las actividades posteriores.

**Prueba independiente**: avanzar por las seis paginas, completar el cuento y comprobar el siguiente paso disponible.

**Criterios de aceptacion**:

1. No cambia el texto, los retos, el minijuego, las recompensas ni el orden de desbloqueo.
2. La compilacion de la aplicacion finaliza correctamente.
3. Todas las rutas de imagen responden desde el servidor local.

## Requisitos funcionales

- **RF-001**: Cada una de las seis paginas de Tristeza debe tener una ilustracion JPG cuadrada local.
- **RF-002**: Debe crearse una referencia visual de Alba y su profesora en la carpeta de recursos de Tristeza.
- **RF-003**: Las imagenes deben seguir `GUIA_VISUAL_CUENTOS.md`: gouache y lapiz de color, editorial infantil contemporaneo, sin texto, logos, marcas, emojis, anime, 3D plastico ni realismo fotografico.
- **RF-004**: La representacion de la tristeza debe mostrar consuelo, escucha y compania; nunca abandono, desesperacion, aislamiento intenso ni dramatismo adulto.
- **RF-005**: `src/data/storyIllustrations.js` debe aportar `imageSrc` para las paginas 1 a 6 de Tristeza y conservar los datos de respaldo actuales.
- **RF-006**: Los recursos deben estar en `public/images/stories/tristeza/` y estar centrados para el recorte cuadrado actual.
- **RF-007**: No se modificaran datos de progreso, almacenamiento local, retos, recompensas ni navegacion.

## Tono visual

- Lluvia suave, luz azul tranquila y refugios pequenos: banco, porche, paraguas y plantas.
- Tristeza visible pero cuidada: ojos humedos, postura recogida, respiracion tranquila.
- Consuelo sin prisa: profesora cercana, espacio seguro y gestos de escucha.
- Recuerdo amable: libreta azul, nota para la amiga, pequenos dibujos sin texto legible.
- Vuelta gradual: juego compartido, cuidado presente y camino final de lluvia serena.

## Escenas

1. Alba mira el patio bajo lluvia suave y echa de menos a su amiga.
2. Una nube azul acompana a Alba mientras deja salir unas lagrimas.
3. Alba pide sentarse cerca de su profesora y encuentra un lugar seguro.
4. Alba escribe una nota para su amiga y guarda un recuerdo bonito.
5. Alba vuelve al juego poco a poco, acompanada.
6. La lluvia deja un sendero azul hacia la siguiente isla.

## Criterios de exito

- Las seis paginas muestran imagenes narrativas reales al abrirse en el lector.
- Existen siete nuevos recursos de Tristeza: una referencia y seis escenas de 900 x 900 px aproximadamente.
- Las imagenes cargan desde la aplicacion local y no tienen texto integrado, logotipos ni marcas.
- `npm run build` termina sin errores.
- El recorrido y finalizacion del cuento siguen funcionando con el progreso existente.
- El cambio queda guardado en Git con un commit dedicado y subido a GitHub.

## Limites

- Esta mejora no anade una isla, no reescribe el cuento y no modifica el flujo de juego.
- No se representara la tristeza como abandono extremo, peligro, castigo ni perdida dramatica.

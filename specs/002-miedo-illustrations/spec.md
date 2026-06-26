# Especificacion: Ilustraciones del cuento de Miedo

**Feature**: `002-miedo-illustrations`  
**Creada**: 2026-06-26  
**Estado**: Completada

## Objetivo

Renovar las seis paginas de `La linterna de la cueva suave` con ilustraciones narrativas reales, coherentes y adecuadas para alumnado de Primaria. El cuento debe mostrar que el miedo puede avisar y que pedir apoyo, mirar el entorno y avanzar despacio son respuestas seguras.

## Historias de usuario

### US1 - Leer el cuento con escenas narrativas (P1)

Como alumno, quiero ver una ilustracion propia en cada pagina del cuento de Miedo para entender lo que siente Leo y los pasos que puede seguir.

**Prueba independiente**: abrir las seis paginas de Miedo y verificar que cada una carga una imagen narrativa local relacionada con el texto.

**Criterios de aceptacion**:

1. La primera pagina muestra a Leo y su grupo ante un sendero con niebla suave, sin criaturas, peligros ni oscuridad intensa.
2. La segunda pagina muestra una linterna que ilumina solo el siguiente paso, no una solucion magica.
3. Las paginas tres a cinco representan las señales del cuerpo, el acompañamiento de una guia y un plan prudente de parar, mirar y pedir ayuda.
4. La ultima pagina muestra el camino seguro iluminado y un cierre sereno.
5. Al no poder cargar una imagen, el lector conserva la composicion de iconos existente como respaldo.

### US2 - Mantener continuidad de Leo (P2)

Como docente o creador de contenido, quiero reconocer a Leo en todas las paginas para que el cuento se sienta como un album ilustrado continuo.

**Prueba independiente**: comparar la ficha de personaje y las seis imagenes como conjunto.

**Criterios de aceptacion**:

1. Leo conserva edad aproximada, pelo, ropa, mochila y expresividad general en las seis escenas.
2. La linterna amarilla y el sendero de piedra se usan como elementos visuales recurrentes.
3. La guia adulta aparece como presencia tranquila y respetuosa, sin ocupar el papel principal de Leo.

### US3 - Conservar la experiencia existente (P3)

Como alumno, quiero completar el cuento igual que antes para que esta mejora visual no afecte a mis avances ni a las actividades posteriores.

**Prueba independiente**: avanzar por las seis paginas, completar el cuento y comprobar el siguiente paso disponible.

**Criterios de aceptacion**:

1. No cambia el texto, los retos, el minijuego, las recompensas ni el orden de desbloqueo.
2. La compilacion de la aplicacion finaliza correctamente.
3. Todas las rutas de imagen responden desde el servidor local.

## Requisitos funcionales

- **RF-001**: Cada una de las seis paginas de Miedo debe tener una ilustracion JPG cuadrada local.
- **RF-002**: Debe crearse una referencia visual de Leo en la carpeta de recursos de Miedo.
- **RF-003**: Las imagenes deben seguir `GUIA_VISUAL_CUENTOS.md`: gouache y lapiz de color, editorial infantil contemporaneo, sin texto, logos, marcas, emojis, anime, 3D plastico ni realismo fotografico.
- **RF-004**: La representacion del miedo debe ser serena, comprensible y no aterradora para alumnado de 6 a 10 años.
- **RF-005**: `src/data/storyIllustrations.js` debe aportar `imageSrc` para las paginas 1 a 6 de Miedo y conservar los datos de respaldo actuales.
- **RF-006**: Los recursos deben estar en `public/images/stories/miedo/` y estar centrados para el recorte cuadrado actual.
- **RF-007**: No se modificaran datos de progreso, almacenamiento local, retos, recompensas ni navegacion.

## Escenas

1. Leo y su grupo se detienen ante la niebla suave del sendero.
2. Leo encuentra una pequeña linterna junto a una roca y mira una piedra iluminada.
3. Leo reconoce manos tensas y respiracion rapida mientras escucha a la guia.
4. Leo pide ir despacio y el grupo se acerca para mirar el camino juntos.
5. La guia propone parar, mirar y pedir ayuda; Leo da un paso pequeño acompañado.
6. La cueva suave y el sendero quedan iluminados, con Leo tranquilo y el camino abierto.

## Criterios de exito

- Las seis paginas muestran imagenes narrativas reales al abrirse en el lector.
- Existen siete nuevos recursos de Miedo: una referencia y seis escenas de 900 x 900 px aproximadamente.
- Las imagenes cargan desde la aplicacion local y no tienen texto integrado, logotipos ni marcas.
- `npm run build` termina sin errores.
- El recorrido y finalizacion del cuento siguen funcionando con el progreso existente.

## Limites

- Esta mejora no añade una isla, no reescribe el cuento y no modifica el flujo de juego.
- Git conserva dos hitos: el estado base anterior y el resultado de esta mejora, para permitir una vuelta atras limpia.

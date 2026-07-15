# Especificacion: Ilustraciones del cuento de Verguenza

**Feature**: `006-verguenza-illustrations`  
**Creada**: 2026-07-15  
**Estado**: Completada

## Objetivo

Renovar las seis paginas de `El escenario de la voz pequena` con ilustraciones narrativas reales, coherentes y adecuadas para alumnado de Primaria. El cuento debe mostrar la verguenza como una senal corporal de proteccion, no como defecto personal, y ensenar que pedir un paso mas pequeno, equivocarse con respeto y participar poco a poco son respuestas seguras.

## Historias de usuario

### US1 - Leer el cuento con escenas narrativas (P1)

Como alumno, quiero ver una ilustracion propia en cada pagina del cuento de Verguenza para entender que siente Vera cuando tiene que participar delante del grupo y que opciones tiene para hacerlo con seguridad.

**Prueba independiente**: abrir las seis paginas de Verguenza y verificar que cada una carga una imagen narrativa local relacionada con el texto.

**Criterios de aceptacion**:

1. La primera pagina muestra a Vera ante un escenario pequeno con luces suaves y ganas de esconderse.
2. La segunda pagina muestra las senales corporales de la verguenza con una cortina naranja protectora.
3. Las paginas tres a cinco representan un paso mas pequeno, apoyo cercano, una equivocacion tratada con respeto y un aplauso tranquilo.
4. La ultima pagina muestra el escenario iluminado con una luz amable y continuidad hacia la siguiente isla.
5. Si una imagen no carga, el lector conserva la composicion de iconos existente como respaldo.

### US2 - Mantener continuidad de Vera (P2)

Como docente o creador de contenido, quiero reconocer a Vera en todas las paginas para que el cuento se sienta como un album ilustrado continuo.

**Prueba independiente**: comparar la ficha de personaje y las seis imagenes como conjunto.

**Criterios de aceptacion**:

1. Vera conserva edad aproximada, pelo, ropa, postura corporal y expresividad en todas las escenas.
2. La cortina naranja, el librito de lectura, las luces suaves y el escenario pequeno aparecen como elementos visuales recurrentes.
3. La companera de apoyo y el grupo aparecen de forma respetuosa, sin mirar de manera intimidante ni reirse.

### US3 - Conservar la experiencia existente (P3)

Como alumno, quiero completar el cuento igual que antes para que esta mejora visual no afecte mis avances ni las actividades posteriores.

**Prueba independiente**: avanzar por las seis paginas, completar el cuento y comprobar el siguiente paso disponible.

**Criterios de aceptacion**:

1. No cambia el texto, los retos, el minijuego, las recompensas ni el orden de desbloqueo.
2. La compilacion de la aplicacion finaliza correctamente.
3. Todas las rutas de imagen responden desde el servidor local.

## Requisitos funcionales

- **RF-001**: Cada una de las seis paginas de Verguenza debe tener una ilustracion JPG cuadrada local.
- **RF-002**: Debe crearse una referencia visual de Vera y su companera de apoyo en la carpeta de recursos de Verguenza.
- **RF-003**: Las imagenes deben seguir `GUIA_VISUAL_CUENTOS.md`: gouache y lapiz de color, editorial infantil contemporaneo, sin texto, logos, marcas, emojis, anime, 3D plastico ni realismo fotografico.
- **RF-004**: La representacion de la verguenza debe mostrar rubor, prudencia, paso pequeno y apoyo; nunca burla, humillacion, foco agresivo, juicio del grupo ni exposicion intimidante.
- **RF-005**: `src/data/storyIllustrations.js` debe aportar `imageSrc` para las paginas 1 a 6 de Verguenza y conservar los datos de respaldo actuales.
- **RF-006**: Los recursos deben estar en `public/images/stories/verguenza/` y estar centrados para el recorte cuadrado actual.
- **RF-007**: No se modificaran datos de progreso, almacenamiento local, retos, recompensas ni navegacion.

## Tono visual

- Escenario amable: tarima pequena, cortinas naranjas, luces calidas bajas, aula acogedora.
- Verguenza segura: mejillas rosadas, mirada baja, manos sujetando un librito, sin dramatismo ni miedo intenso.
- Paso pequeno: Vera sentada, companera cerca, participacion gradual.
- Voz amable: equivocacion tratada como aprendizaje; gestos calmados, no risas.
- Cierre: aplauso tranquilo, luz amable y camino hacia Empatia.

## Escenas

1. Vera esta ante un escenario pequeno con luces suaves.
2. Vera reconoce las senales de verguenza en su cuerpo junto a una cortina naranja protectora.
3. Vera busca una forma de participar poco a poco, sentada y con una companera cerca.
4. Vera se habla con amabilidad tras una equivocacion.
5. El grupo reconoce el esfuerzo de Vera de forma respetuosa.
6. El escenario queda iluminado con una luz amable y abre camino hacia la siguiente isla.

## Criterios de exito

- Las seis paginas muestran imagenes narrativas reales al abrirse en el lector.
- Existen siete nuevos recursos de Verguenza: una referencia y seis escenas de 900 x 900 px aproximadamente.
- Las imagenes cargan desde la aplicacion local y no tienen texto integrado, logotipos ni marcas.
- `npm run build` termina sin errores.
- El recorrido y finalizacion del cuento siguen funcionando con el progreso existente.
- El cambio queda guardado en Git con un commit dedicado y subido a GitHub.

## Limites

- Esta mejora no anade una isla, no reescribe el cuento y no modifica el flujo de juego.
- No se representara la verguenza como castigo, ridiculo publico, risa del grupo, paralisis extrema ni defecto de caracter.

# Especificacion: Ilustraciones del cuento de Frustracion

**Feature**: `005-frustracion-illustrations`  
**Creada**: 2026-07-15  
**Estado**: Completada

## Objetivo

Renovar las seis paginas de `El puzle que no encajaba` con ilustraciones narrativas reales, coherentes y adecuadas para alumnado de Primaria. El cuento debe mostrar la frustracion como una senal de que algo cuesta, y ensenar que pausar, beber agua, respirar, cambiar de estrategia, pedir pista y volver a intentarlo son respuestas seguras.

## Historias de usuario

### US1 - Leer el cuento con escenas narrativas (P1)

Como alumno, quiero ver una ilustracion propia en cada pagina del cuento de Frustracion para entender que siente Dani cuando algo no sale y que opciones tiene antes de rendirse.

**Prueba independiente**: abrir las seis paginas de Frustracion y verificar que cada una carga una imagen narrativa local relacionada con el texto.

**Criterios de aceptacion**:

1. La primera pagina muestra a Dani ante un puzle con una pieza dificil que no encaja.
2. La segunda pagina muestra tension y descubrimiento de que frustrarse no significa fallar.
3. Las paginas tres a cinco representan pausa, agua, respiracion, cambio de estrategia, pista respetuosa y aprendizaje del error.
4. La ultima pagina muestra el taller de intentos con un camino naranja hacia la siguiente isla.
5. Si una imagen no carga, el lector conserva la composicion de iconos existente como respaldo.

### US2 - Mantener continuidad de Dani (P2)

Como docente o creador de contenido, quiero reconocer a Dani en todas las paginas para que el cuento se sienta como un album ilustrado continuo.

**Prueba independiente**: comparar la ficha de personaje y las seis imagenes como conjunto.

**Criterios de aceptacion**:

1. Dani conserva edad aproximada, pelo, ropa, gafas opcionales, expresividad y postura general en las seis escenas.
2. La pieza azul irregular, el tablero del puzle, el vaso de agua y la mesa de trabajo aparecen como elementos visuales recurrentes.
3. La persona que ofrece una pista aparece como apoyo respetuoso, sin resolver el problema por Dani.

### US3 - Conservar la experiencia existente (P3)

Como alumno, quiero completar el cuento igual que antes para que esta mejora visual no afecte mis avances ni las actividades posteriores.

**Prueba independiente**: avanzar por las seis paginas, completar el cuento y comprobar el siguiente paso disponible.

**Criterios de aceptacion**:

1. No cambia el texto, los retos, el minijuego, las recompensas ni el orden de desbloqueo.
2. La compilacion de la aplicacion finaliza correctamente.
3. Todas las rutas de imagen responden desde el servidor local.

## Requisitos funcionales

- **RF-001**: Cada una de las seis paginas de Frustracion debe tener una ilustracion JPG cuadrada local.
- **RF-002**: Debe crearse una referencia visual de Dani y su persona de apoyo en la carpeta de recursos de Frustracion.
- **RF-003**: Las imagenes deben seguir `GUIA_VISUAL_CUENTOS.md`: gouache y lapiz de color, editorial infantil contemporaneo, sin texto, logos, marcas, emojis, anime, 3D plastico ni realismo fotografico.
- **RF-004**: La representacion de la frustracion debe mostrar dificultad, pausa, estrategia y perseverancia; nunca humillacion, fracaso definitivo, bloqueo angustioso ni enfado contra si mismo.
- **RF-005**: `src/data/storyIllustrations.js` debe aportar `imageSrc` para las paginas 1 a 6 de Frustracion y conservar los datos de respaldo actuales.
- **RF-006**: Los recursos deben estar en `public/images/stories/frustracion/` y estar centrados para el recorte cuadrado actual.
- **RF-007**: No se modificaran datos de progreso, almacenamiento local, retos, recompensas ni navegacion.

## Tono visual

- Taller de intentos: mesa baja, piezas de puzle, lapices, reloj de arena suave y luz naranja.
- Dificultad amable: labios apretados, cejas concentradas, pieza que no encaja, sin derrota.
- Pausa segura: vaso de agua, respiracion lenta y distancia momentanea del puzle.
- Estrategia: girar la pieza, mirar colores, pedir pista, lupa o lampara suave.
- Cierre: pieza encajada y camino naranja; celebrar esfuerzo, no perfeccion.

## Escenas

1. Dani mira una pieza que no entra en el puzle.
2. Dani nota tension ante la mesa iluminada y descubre que algo esta costando.
3. Dani deja la pieza, bebe agua y respira junto al puzle.
4. Dani gira la pieza, mira colores y pide una pista respetuosa.
5. La pieza encaja y Dani celebra el esfuerzo aprendido.
6. El taller de intentos abre un camino naranja hacia la siguiente isla.

## Criterios de exito

- Las seis paginas muestran imagenes narrativas reales al abrirse en el lector.
- Existen siete nuevos recursos de Frustracion: una referencia y seis escenas de 900 x 900 px aproximadamente.
- Las imagenes cargan desde la aplicacion local y no tienen texto integrado, logotipos ni marcas.
- `npm run build` termina sin errores.
- El recorrido y finalizacion del cuento siguen funcionando con el progreso existente.
- El cambio queda guardado en Git con un commit dedicado y subido a GitHub.

## Limites

- Esta mejora no anade una isla, no reescribe el cuento y no modifica el flujo de juego.
- No se representara la frustracion como fracaso permanente, castigo, burla ni autocrítica dura.

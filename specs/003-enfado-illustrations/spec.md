# Especificacion: Ilustraciones del cuento de Enfado

**Feature**: `003-enfado-illustrations`  
**Creada**: 2026-07-06  
**Estado**: Completada

## Objetivo

Renovar las seis paginas de `El volcan que aprendio a hablar` con ilustraciones narrativas reales, coherentes y adecuadas para alumnado de Primaria. El cuento debe mostrar el enfado como energia que avisa de un limite o una injusticia, y ensenar que parar, respirar, nombrar lo que pasa, pedir espacio y reparar son respuestas seguras.

## Historias de usuario

### US1 - Leer el cuento con escenas narrativas (P1)

Como alumno, quiero ver una ilustracion propia en cada pagina del cuento de Enfado para entender que siente Marco y como puede expresar su limite sin hacer dano.

**Prueba independiente**: abrir las seis paginas de Enfado y verificar que cada una carga una imagen narrativa local relacionada con el texto.

**Criterios de aceptacion**:

1. La primera pagina muestra a Marco con su torre de piezas caida y mucha energia corporal, sin violencia ni amenaza.
2. La segunda pagina muestra una senal roja que invita a parar antes de actuar.
3. Las paginas tres a cinco representan respiracion, palabras para nombrar el enfado, un limite respetuoso y un plan de volver a intentarlo.
4. La ultima pagina muestra el volcan como energia integrada y un camino seguro hacia la siguiente isla.
5. Si una imagen no carga, el lector conserva la composicion de iconos existente como respaldo.

### US2 - Mantener continuidad de Marco (P2)

Como docente o creador de contenido, quiero reconocer a Marco en todas las paginas para que el cuento se sienta como un album ilustrado continuo.

**Prueba independiente**: comparar la ficha de personaje y las seis imagenes como conjunto.

**Criterios de aceptacion**:

1. Marco conserva edad aproximada, pelo, ropa, pulsera y expresividad general en las seis escenas.
2. La torre de piezas, el pequeno volcan de la isla y el semaforo rojo aparecen como elementos visuales recurrentes.
3. La companera aparece como presencia cuidadosa cuando el texto la necesita, sin desplazar el protagonismo de Marco.

### US3 - Conservar la experiencia existente (P3)

Como alumno, quiero completar el cuento igual que antes para que esta mejora visual no afecte mis avances ni las actividades posteriores.

**Prueba independiente**: avanzar por las seis paginas, completar el cuento y comprobar el siguiente paso disponible.

**Criterios de aceptacion**:

1. No cambia el texto, los retos, el minijuego, las recompensas ni el orden de desbloqueo.
2. La compilacion de la aplicacion finaliza correctamente.
3. Todas las rutas de imagen responden desde el servidor local.

## Requisitos funcionales

- **RF-001**: Cada una de las seis paginas de Enfado debe tener una ilustracion JPG cuadrada local.
- **RF-002**: Debe crearse una referencia visual de Marco en la carpeta de recursos de Enfado.
- **RF-003**: Las imagenes deben seguir `GUIA_VISUAL_CUENTOS.md`: gouache y lapiz de color, editorial infantil contemporaneo, sin texto, logos, marcas, emojis, anime, 3D plastico ni realismo fotografico.
- **RF-004**: La representacion del enfado debe mostrar energia, limite, respiracion y reparacion; nunca agresion fisica, intimidacion, gritos visualmente violentos ni objetos lanzados.
- **RF-005**: `src/data/storyIllustrations.js` debe aportar `imageSrc` para las paginas 1 a 6 de Enfado y conservar los datos de respaldo actuales.
- **RF-006**: Los recursos deben estar en `public/images/stories/enfado/` y estar centrados para el recorte cuadrado actual.
- **RF-007**: No se modificaran datos de progreso, almacenamiento local, retos, recompensas ni navegacion.

## Tono visual

- Energia visible: calor en mejillas, postura tensa, piezas desordenadas y volcan pequeno de fondo.
- Limites seguros: manos abiertas, distancia respetuosa, companera esperando, ningun gesto amenazante.
- Respiracion: aire suave, hombros bajando, color pasando de rojo intenso a coral y dorado.
- Reparacion: volver a construir, pedir una idea, cooperar sin exigir perfeccion.
- Escena base: isla infantil con suelo de piedra calida, rincón de construccion, piezas de madera y un volcan amable como simbolo emocional.

## Escenas

1. Marco mira una torre de piezas caida y nota un volcan pequeno en la barriga.
2. Marco ve una senal roja junto al camino que le invita a parar.
3. Marco respira y nombra lo que siente; la energia baja sin desaparecer.
4. Marco pide un minuto a una companera con respeto y conserva la amistad.
5. Marco vuelve a construir usando tres pasos: parar, respirar y pedir una idea.
6. El volcan de la isla queda sereno e ilumina un camino seguro hacia la siguiente isla.

## Criterios de exito

- Las seis paginas muestran imagenes narrativas reales al abrirse en el lector.
- Existen siete nuevos recursos de Enfado: una referencia y seis escenas de 900 x 900 px aproximadamente.
- Las imagenes cargan desde la aplicacion local y no tienen texto integrado, logotipos ni marcas.
- `npm run build` termina sin errores.
- El recorrido y finalizacion del cuento siguen funcionando con el progreso existente.
- El cambio queda guardado en Git con un commit dedicado.

## Limites

- Esta mejora no anade una isla, no reescribe el cuento y no modifica el flujo de juego.
- No se resuelve en este paso la publicacion remota si falta autenticacion o destino de GitHub; se deja preparado el diagnostico y la recomendacion.

# Guía visual de los cuentos de EMOPLAY

## Decisión permanente

Desde el 18 de junio de 2026, todos los cuentos nuevos de EMOPLAY y todas las
renovaciones de cuentos existentes utilizarán ilustraciones narrativas detalladas
generadas con IA.

El cuento de referencia es `El primer recreo de Luna`, de la Isla Empatía.

Las composiciones con emojis, iconos o dibujos CSS se mantienen únicamente como
solución provisional en los cuentos que todavía no hayan sido renovados. No se
eliminarán hasta que sus nuevas ilustraciones estén terminadas, integradas y
comprobadas.

## Estilo visual

- Álbum infantil contemporáneo para alumnado de Primaria, de 6 a 10 años.
- Ilustración digital con aspecto de gouache y lápiz de color.
- Escenarios luminosos, cálidos, detallados y fáciles de comprender.
- Formas suaves y expresiones naturales, sin exageraciones.
- Personajes infantiles con proporciones coherentes y apropiadas para su edad.
- Colores vivos pero equilibrados, evitando imágenes oscuras o sobrecargadas.
- Calidad editorial: la imagen debe parecer parte de un cuento ilustrado real.
- No usar texto, letras, bocadillos, logotipos ni marcas dentro de las imágenes.
- No usar emojis, iconos, estilo vectorial plano, anime, 3D plástico ni realismo
  fotográfico.

## Función narrativa

Cada página debe tener una ilustración propia que represente exactamente lo que
ocurre en ese fragmento del cuento.

La imagen debe:

- ayudar a comprender el texto sin sustituir la lectura;
- mostrar con claridad el lugar, los personajes y la acción principal;
- reflejar las emociones mediante postura, mirada, distancia y gestos;
- evitar soluciones mágicas o cambios emocionales poco creíbles;
- mantener una progresión visual clara entre el inicio, el conflicto, el
  acompañamiento y el cierre;
- permitir que un niño entienda la escena incluso antes de leerla.

## Continuidad de personajes

Antes de ilustrar un cuento se creará una ficha visual de sus personajes
principales.

La ficha debe fijar:

- edad aproximada;
- tono de piel;
- forma y color del pelo;
- ojos y rasgos reconocibles;
- ropa y calzado;
- accesorios importantes para la historia;
- personalidad y forma habitual de expresarse.

Todas las páginas deben mantener esos mismos rasgos. La ficha se guardará dentro
de la carpeta del cuento para poder reutilizarla en futuras correcciones.

## Formato técnico

- Una imagen cuadrada por página.
- Tamaño final recomendado: `900 × 900 px`.
- Formato: JPG optimizado, normalmente entre 200 y 350 KB.
- Sin texto integrado en la imagen.
- Recorte seguro para ordenador, tableta y móvil.
- El personaje o acción principal debe permanecer dentro de la zona central.
- Las imágenes se guardarán en:
  `public/images/stories/<emocion>/`

Nombres recomendados:

- `personajes-referencia.jpg`
- `pagina-1-<escena>.jpg`
- `pagina-2-<escena>.jpg`
- `pagina-3-<escena>.jpg`

## Proceso para cada cuento

1. Revisar el texto completo y confirmar que es claro para Primaria.
2. Dividir el relato en páginas con una acción concreta por página.
3. Crear la ficha visual de personajes.
4. Definir una ficha de escena para cada página.
5. Generar las ilustraciones manteniendo personajes, ropa y estilo.
6. Revisar las imágenes juntas para comprobar continuidad narrativa.
7. Optimizar y guardar los archivos dentro del proyecto.
8. Integrar las rutas en `src/data/storyIllustrations.js`.
9. Comprobar el lector en ordenador, tableta y móvil.
10. Mantener la ilustración provisional anterior hasta superar las comprobaciones.

## Referencia de Empatía

Carpeta:
`public/images/stories/empatia/`

Recursos:

- `personajes-referencia.jpg`
- `pagina-1-companera-nueva.jpg`
- `pagina-2-noa-la-ve.jpg`
- `pagina-3-un-recuerdo.jpg`
- `pagina-4-sentarse-escuchar.jpg`
- `pagina-5-no-estar-sola.jpg`
- `pagina-6-jugar-juntas.jpg`

Esta carpeta y su integración sirven como modelo técnico y visual para los
próximos cuentos.

## Segundo cuento renovado: Ternura

Carpeta:
`public/images/stories/ternura/`

Recursos:

- `personajes-referencia.jpg`
- `pagina-1-emma-y-bruno.jpg`
- `pagina-2-dia-lluvioso.jpg`
- `pagina-3-reencuentro.jpg`
- `pagina-4-cuidar-con-delicadeza.jpg`
- `pagina-5-lugar-especial.jpg`
- `pagina-6-ternura-compartida.jpg`

La continuidad de Emma y Bruno debe conservarse si vuelven a aparecer en una
ampliación o en una revisión futura.

## Tercer cuento renovado: Admiración

Carpeta:
`public/images/stories/admiracion/`

Recursos:

- `personajes-referencia.jpg`
- `pagina-1-salida-al-jardin.jpg`
- `pagina-2-cielo-especial.jpg`
- `pagina-3-descubrir-admiracion.jpg`
- `pagina-4-admirar-y-aprender.jpg`
- `pagina-5-dibujar-constelaciones.jpg`
- `pagina-6-reconocer-lo-especial.jpg`

Lucas y su abuelo Mateo quedan definidos como personajes estables. Mateo no usa
gafas y conserva sus prismáticos antiguos como objeto reconocible.

## Cuarto cuento renovado: Alegría

Carpeta:
`public/images/stories/alegria/`

Recursos:

- `personajes-referencia.jpg`
- `pagina-1-plaza-sin-colores.jpg`
- `pagina-2-idea-de-nora.jpg`
- `pagina-3-primer-vuelo.jpg`
- `pagina-4-alegria-compartida.jpg`
- `pagina-5-celebrar-con-respeto.jpg`
- `pagina-6-camino-de-cometas.jpg`

Nora, Leo y Sara quedan definidos como personajes estables. La cometa principal
es amarilla, con borde naranja y una cola de cintas turquesas, coral y lilas.
La progresión visual debe conservar el paso de una plaza tranquila a una alegría
compartida, inclusiva y respetuosa.

## Quinto cuento renovado: Calma

Carpeta:
`public/images/stories/calma/`

Recursos:

- `personajes-referencia.jpg`
- `pagina-1-bahia-despacio.jpg`
- `pagina-2-concha-pausa.jpg`
- `pagina-3-respirar-olas.jpg`
- `pagina-4-cuerpo-ligero.jpg`
- `pagina-5-pausa-clase.jpg`
- `pagina-6-camino-sereno.jpg`

Vega queda definida como personaje estable de la Isla Calma: pelo castaño oscuro
ondulado a la altura de la mandíbula, chaqueta turquesa, camiseta crema,
pantalón o falda coral, zapatillas y pulsera azul de concha. La progresión visual
debe conservar el paso de sobreestimulación y ruido interno a pausa, respiración,
equilibrio corporal, pausa compartida de aula y camino sereno.

## Sexto cuento renovado: Miedo

Carpeta:
`public/images/stories/miedo/`

Recursos:

- `personajes-referencia.jpg`
- `pagina-1-niebla-del-camino.jpg`
- `pagina-2-linterna-pequena.jpg`
- `pagina-3-cuerpo-avisa.jpg`
- `pagina-4-pedir-ayuda.jpg`
- `pagina-5-plan-seguro.jpg`
- `pagina-6-camino-iluminado.jpg`

Leo queda definido como personaje estable de la Isla Miedo: piel morena clara,
pelo negro corto y rizado, sudadera azul marino con franja turquesa, pantalón
corto mostaza, zapatillas blancas, mochila verde salvia y linterna amarilla. La
guía conserva pelo negro recogido, chaqueta ciruela, pantalón oliva y mochila. La
progresión visual debe mostrar una cautela cotidiana: niebla suave, una luz para
el siguiente paso, reconocimiento de señales, petición de compañía, un paso
seguro y una salida serena; nunca terror ni amenaza.

## Septimo cuento renovado: Enfado

Carpeta:
`public/images/stories/enfado/`

Recursos:

- `personajes-referencia.jpg`
- `pagina-1-torre-caida.jpg`
- `pagina-2-senal-roja.jpg`
- `pagina-3-nombrar-enfado.jpg`
- `pagina-4-limite-respetuoso.jpg`
- `pagina-5-plan-seguro.jpg`
- `pagina-6-volcan-sereno.jpg`

Marco queda definido como personaje estable de la Isla Enfado: piel morena
clara, pelo castano oscuro corto y ondulado, sudadera rojo ladrillo con franja
crema, pantalon verde azulado, zapatillas rojas y pulsera azul. La companera
conserva pelo negro rizado en dos recogidos, chaqueta menta, pantalon lavanda y
zapatillas amarillas. La progresion visual debe mostrar el paso de energia
intensa a limite seguro, respiracion, reparacion y camino sereno; nunca agresion,
intimidacion, objetos lanzados ni enfado tratado como castigo.

## Octavo cuento renovado: Tristeza

Carpeta:
`public/images/stories/tristeza/`

Recursos:

- `personajes-referencia.jpg`
- `pagina-1-lluvia-suave.jpg`
- `pagina-2-gotas-permitidas.jpg`
- `pagina-3-pedir-compania.jpg`
- `pagina-4-recuerdo-carino.jpg`
- `pagina-5-volver-poco-a-poco.jpg`
- `pagina-6-sendero-azul.jpg`

Alba queda definida como personaje estable de la Isla Tristeza: piel clara
oliva, pelo castano oscuro largo y ondulado, dos horquillas azules, impermeable
amarillo suave, vestido o falda azul petroleo, botas de lluvia rojas, mochila
azul y libreta azul. La profesora conserva pelo castano recogido, cardigan verde
salvia, pantalon azul oscuro y bufanda crema. La progresion visual debe mostrar
tristeza acompanada: lluvia suave, lagrimas permitidas, peticion de compania,
recuerdo con carino, vuelta gradual al juego y sendero azul sereno; nunca
abandono, desesperacion ni dramatismo excesivo.

## Noveno cuento renovado: Frustracion

Carpeta:
`public/images/stories/frustracion/`

Recursos:

- `personajes-referencia.jpg`
- `pagina-1-pieza-dificil.jpg`
- `pagina-2-algo-cuesta.jpg`
- `pagina-3-pausa-intento.jpg`
- `pagina-4-otra-estrategia.jpg`
- `pagina-5-aprender-error.jpg`
- `pagina-6-camino-naranja.jpg`

Dani queda definido como personaje estable de la Isla Frustracion: piel morena
clara, pelo negro corto y liso, gafas redondas azul oscuro, sudadera verde
azulada, camiseta naranja, pantalon gris y zapatillas azules. La persona de
apoyo conserva pelo castano corto, camisa crema y peto azul. La progresion visual
debe mostrar dificultad amable, pausa, agua, respiracion, nueva estrategia,
peticion de pista y celebracion del esfuerzo; nunca humillacion, fracaso
definitivo, autocritica dura ni bloqueo angustioso.

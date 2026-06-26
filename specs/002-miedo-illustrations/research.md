# Investigacion y decisiones

## Decisiones

### Estilo y tono

Se usara ilustracion de album infantil contemporaneo, con gouache y lapiz de color. La niebla sera lila clara y el entorno tendra luz de tarde; no habra monstruos, ojos en la oscuridad, precipicios, fuego ni expresiones de panico.

### Referencia de Leo

Leo tiene unos ocho años, piel morena clara, pelo negro corto y rizado, ojos oscuros, sudadera azul marino con una banda turquesa, pantalon corto color mostaza, zapatillas blancas y una pequeña mochila verde salvia. Se muestra curioso y sensible, con reacciones naturales: primero cautela, despues escucha y finalmente seguridad tranquila.

### Elementos recurrentes

- Linterna pequeña amarilla con luz calida.
- Sendero de piedras redondeadas dentro de una cueva amplia y luminosa.
- Niebla lila suave, nunca opaca.
- Guia adulta con chaqueta ciruela y mochila; figura secundaria, calmada y accesible.
- Grupo de dos o tres niños al fondo, acompañante y nunca amenazante.

### Integracion

`StoryReaderScreen.jsx` ya carga `imageSrc` cuando esta disponible y muestra los iconos si falla. No necesita modificacion. La unica integracion de codigo sera añadir seis rutas en `storyIllustrations.js`.

### Formato y rendimiento

Se generaran imagenes cuadradas y se normalizaran a 900 x 900 px JPG. Se evitara dependencia de servicios externos y se conservaran archivos de tamaño razonable para navegacion fluida.

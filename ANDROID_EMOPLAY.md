# Uso recomendado de EMOPLAY en Android

## Forma recomendada

Abrir EMOPLAY desde el enlace web publicado en Netlify.

Ejemplo:

`https://tu-sitio-emoplay.netlify.app/`

Esta es la opcion mas estable para moviles y tablets Android.

## Evitar

No enviar solo el archivo `index.html` al movil.

La app necesita tambien:

- `index.html`
- `favicon.svg`
- carpeta `assets`

Si falta alguno de esos archivos, Android puede mostrar la pantalla en blanco o cargar la app sin estilos.

## Si se sube a Netlify

Sube la carpeta completa generada para Android:

`EMOPLAY-DEMO-ANDROID-20260610-221928`

No subas la carpeta completa del proyecto de desarrollo.

## Que se ha ajustado para movil

- Menos riesgo de desplazamiento horizontal.
- Textos y botones mas adaptados a pantallas estrechas.
- Mapa de islas mas compacto en Android.
- Cuentos con prioridad de lectura en movil.
- Editor de avatar mas estable en pantallas pequeñas.

# Publicar demo externa de EMOPLAY

Esta version permite compartir EMOPLAY con un enlace publico sin depender de `localhost`.

## Opcion rapida con Netlify

1. Entra en https://app.netlify.com/drop
2. Arrastra la carpeta `dist`.
3. Si usas un archivo `.zip`, comprueba que `index.html`, `favicon.svg` y la carpeta `assets` estén en la raíz del ZIP, no dentro de otra carpeta intermedia.
4. Netlify generara un enlace publico de prueba.
5. Puedes cambiar el nombre del sitio desde la configuracion de Netlify.

## Opcion con repositorio

Si mas adelante subes el proyecto a GitHub, Netlify o Vercel pueden publicarlo automaticamente.

- Comando de construccion: `npm run build`
- Carpeta publicada: `dist`

## Aviso importante

En esta demo, el progreso se guarda en el navegador de cada persona mediante `localStorage`.
Eso sirve para pruebas y presentaciones, pero no centraliza datos de varios alumnos.

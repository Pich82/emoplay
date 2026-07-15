# Plan: Ilustraciones del cuento de Frustracion

## Alcance

Renovar solamente los recursos visuales del cuento de Frustracion y sus rutas de carga en el lector.

## Entradas

- Cuento existente: `src/data/stories.js`, bloque `frustracion`.
- Respaldo actual: `src/data/storyIllustrations.js`, bloque `frustracion`.
- Guia visual: `GUIA_VISUAL_CUENTOS.md`.
- Referencias de proceso: `specs/003-enfado-illustrations/` y `specs/004-tristeza-illustrations/`.

## Salidas esperadas

- `public/images/stories/frustracion/personajes-referencia.jpg`
- `public/images/stories/frustracion/pagina-1-pieza-dificil.jpg`
- `public/images/stories/frustracion/pagina-2-algo-cuesta.jpg`
- `public/images/stories/frustracion/pagina-3-pausa-intento.jpg`
- `public/images/stories/frustracion/pagina-4-otra-estrategia.jpg`
- `public/images/stories/frustracion/pagina-5-aprender-error.jpg`
- `public/images/stories/frustracion/pagina-6-camino-naranja.jpg`
- `visual-checks/frustracion-contact-sheet.jpg`

## Estrategia

1. Crear referencia visual de Dani y una persona de apoyo.
2. Generar una escena por pagina usando la referencia como base narrativa.
3. Optimizar cada imagen final a JPG cuadrado de 900 x 900 px.
4. Integrar `imageSrc` sin tocar textos, recompensas ni desbloqueos.
5. Validar compilacion, recursos estaticos y recorrido real del cuento.
6. Documentar el resultado, crear commit Git y subirlo a GitHub.

## Riesgos y mitigacion

- **Frustracion demasiado angustiosa**: prompts con concentracion, pausa y estrategia, sin llanto intenso ni derrota.
- **Inconsistencia de personaje**: referencia inicial y revision conjunta en lamina de control.
- **Cambio funcional accidental**: editar solo recursos visuales, documentacion y rutas `imageSrc`.
- **Texto accidental en piezas o notas**: pedir superficies sin texto ni numeros legibles.

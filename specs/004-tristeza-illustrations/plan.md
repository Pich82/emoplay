# Plan: Ilustraciones del cuento de Tristeza

## Alcance

Renovar solamente los recursos visuales del cuento de Tristeza y sus rutas de carga en el lector.

## Entradas

- Cuento existente: `src/data/stories.js`, bloque `tristeza`.
- Respaldo actual: `src/data/storyIllustrations.js`, bloque `tristeza`.
- Guia visual: `GUIA_VISUAL_CUENTOS.md`.
- Referencias de proceso: `specs/001-calma-illustrations/`, `specs/002-miedo-illustrations/` y `specs/003-enfado-illustrations/`.

## Salidas esperadas

- `public/images/stories/tristeza/personajes-referencia.jpg`
- `public/images/stories/tristeza/pagina-1-lluvia-suave.jpg`
- `public/images/stories/tristeza/pagina-2-gotas-permitidas.jpg`
- `public/images/stories/tristeza/pagina-3-pedir-compania.jpg`
- `public/images/stories/tristeza/pagina-4-recuerdo-carino.jpg`
- `public/images/stories/tristeza/pagina-5-volver-poco-a-poco.jpg`
- `public/images/stories/tristeza/pagina-6-sendero-azul.jpg`
- `visual-checks/tristeza-contact-sheet.jpg`

## Estrategia

1. Crear referencia visual de Alba y su profesora.
2. Generar una escena por pagina usando la referencia como base narrativa.
3. Optimizar cada imagen final a JPG cuadrado de 900 x 900 px.
4. Integrar `imageSrc` sin tocar textos, recompensas ni desbloqueos.
5. Validar compilacion, recursos estaticos y recorrido real del cuento.
6. Documentar el resultado, crear commit Git y subirlo a GitHub.

## Riesgos y mitigacion

- **Tristeza demasiado intensa**: prompts con lluvia suave, consuelo, postura cuidada y ausencia de abandono o dramatismo.
- **Inconsistencia de personaje**: referencia inicial y revision conjunta en lamina de control.
- **Cambio funcional accidental**: editar solo recursos visuales, documentacion y rutas `imageSrc`.
- **Texto accidental en notas**: pedir notas sin texto legible, solo marcas o dibujos suaves.

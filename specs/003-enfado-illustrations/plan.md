# Plan: Ilustraciones del cuento de Enfado

## Alcance

Renovar solamente los recursos visuales del cuento de Enfado y sus rutas de carga en el lector.

## Entradas

- Cuento existente: `src/data/stories.js`, bloque `enfado`.
- Respaldo actual: `src/data/storyIllustrations.js`, bloque `enfado`.
- Guia visual: `GUIA_VISUAL_CUENTOS.md`.
- Referencias de proceso: `specs/001-calma-illustrations/` y `specs/002-miedo-illustrations/`.

## Salidas esperadas

- `public/images/stories/enfado/personajes-referencia.jpg`
- `public/images/stories/enfado/pagina-1-torre-caida.jpg`
- `public/images/stories/enfado/pagina-2-senal-roja.jpg`
- `public/images/stories/enfado/pagina-3-nombrar-enfado.jpg`
- `public/images/stories/enfado/pagina-4-limite-respetuoso.jpg`
- `public/images/stories/enfado/pagina-5-plan-seguro.jpg`
- `public/images/stories/enfado/pagina-6-volcan-sereno.jpg`
- `visual-checks/enfado-contact-sheet.jpg`

## Estrategia

1. Crear referencia visual de Marco y su companera.
2. Generar una escena por pagina usando la referencia como base.
3. Optimizar cada imagen final a JPG cuadrado de 900 x 900 px.
4. Integrar `imageSrc` sin tocar textos, recompensas ni desbloqueos.
5. Validar compilacion, recursos estaticos y recorrido real del cuento.
6. Documentar el resultado y crear commit Git.

## Riesgos y mitigacion

- **Enfado demasiado agresivo**: prompts con manos abiertas, distancia segura y ausencia de gritos visuales, golpes u objetos lanzados.
- **Inconsistencia de personaje**: referencia inicial y revision conjunta en lamina de control.
- **Cambio funcional accidental**: editar solo recursos visuales, documentacion y rutas `imageSrc`.
- **Repositorio remoto no disponible**: comprobar herramientas y autenticacion; si falta acceso, dejar instrucciones concretas.

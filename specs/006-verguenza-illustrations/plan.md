# Plan: Ilustraciones del cuento de Verguenza

## Alcance

Renovar solamente los recursos visuales del cuento de Verguenza y sus rutas de carga en el lector.

## Entradas

- Cuento existente: `src/data/stories.js`, bloque `verguenza`.
- Respaldo actual: `src/data/storyIllustrations.js`, bloque `verguenza`.
- Guia visual: `GUIA_VISUAL_CUENTOS.md`.
- Referencias de proceso: `specs/004-tristeza-illustrations/` y `specs/005-frustracion-illustrations/`.

## Salidas esperadas

- `public/images/stories/verguenza/personajes-referencia.jpg`
- `public/images/stories/verguenza/pagina-1-luz-grande.jpg`
- `public/images/stories/verguenza/pagina-2-cuerpo-protege.jpg`
- `public/images/stories/verguenza/pagina-3-forma-pequena.jpg`
- `public/images/stories/verguenza/pagina-4-voz-respeto.jpg`
- `public/images/stories/verguenza/pagina-5-aplauso-tranquilo.jpg`
- `public/images/stories/verguenza/pagina-6-luz-amable.jpg`
- `visual-checks/verguenza-contact-sheet.jpg`

## Estrategia

1. Crear referencia visual de Vera y una companera de apoyo.
2. Generar una escena por pagina usando la referencia como base narrativa.
3. Optimizar cada imagen final a JPG cuadrado de 900 x 900 px.
4. Integrar `imageSrc` sin tocar textos, recompensas ni desbloqueos.
5. Validar compilacion, recursos estaticos y recorrido real del cuento.
6. Documentar el resultado, crear commit Git y subirlo a GitHub.

## Riesgos y mitigacion

- **Verguenza demasiado dura**: prompts con rubor amable, paso pequeno y apoyo, sin publico amenazante.
- **Grupo intimidante**: representar al grupo como companeros tranquilos, sonrisas suaves y aplauso respetuoso.
- **Inconsistencia de personaje**: referencia inicial y revision conjunta en lamina de control.
- **Cambio funcional accidental**: editar solo recursos visuales, documentacion y rutas `imageSrc`.
- **Texto accidental en libro o escenario**: pedir superficies sin texto, numeros ni letras legibles.

# Modelo de recursos: Tristeza

## RecursoVisual

- `emotionId`: `tristeza`
- `pageId`: 1 a 6, o `referencia`
- `fileName`: nombre estable del JPG
- `path`: ruta publica dentro de `public/images/stories/tristeza/`
- `dimensions`: 900 x 900 px
- `format`: JPG
- `role`: referencia o escena narrativa

## Recursos finales

| pageId | fileName | role |
| --- | --- | --- |
| referencia | `personajes-referencia.jpg` | Ficha visual de Alba y profesora |
| 1 | `pagina-1-lluvia-suave.jpg` | Patio con lluvia y nostalgia |
| 2 | `pagina-2-gotas-permitidas.jpg` | Lagrimas permitidas |
| 3 | `pagina-3-pedir-compania.jpg` | Pedir compania a la profesora |
| 4 | `pagina-4-recuerdo-carino.jpg` | Escribir una nota-recuerdo |
| 5 | `pagina-5-volver-poco-a-poco.jpg` | Volver al juego acompanada |
| 6 | `pagina-6-sendero-azul.jpg` | Camino sereno hacia la siguiente isla |

## Integracion

Cada pagina se enlaza desde `src/data/storyIllustrations.js` mediante `imageSrc`, manteniendo `theme`, `mainIcon` y `supportingIcons` como respaldo.

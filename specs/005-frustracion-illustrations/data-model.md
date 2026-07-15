# Modelo de recursos: Frustracion

## RecursoVisual

- `emotionId`: `frustracion`
- `pageId`: 1 a 6, o `referencia`
- `fileName`: nombre estable del JPG
- `path`: ruta publica dentro de `public/images/stories/frustracion/`
- `dimensions`: 900 x 900 px
- `format`: JPG
- `role`: referencia o escena narrativa

## Recursos finales

| pageId | fileName | role |
| --- | --- | --- |
| referencia | `personajes-referencia.jpg` | Ficha visual de Dani y apoyo |
| 1 | `pagina-1-pieza-dificil.jpg` | Pieza que no encaja |
| 2 | `pagina-2-algo-cuesta.jpg` | Tension y dificultad |
| 3 | `pagina-3-pausa-intento.jpg` | Pausa, agua y respiracion |
| 4 | `pagina-4-otra-estrategia.jpg` | Girar, mirar y pedir pista |
| 5 | `pagina-5-aprender-error.jpg` | Pieza encajada y esfuerzo |
| 6 | `pagina-6-camino-naranja.jpg` | Taller y camino hacia la siguiente isla |

## Integracion

Cada pagina se enlaza desde `src/data/storyIllustrations.js` mediante `imageSrc`, manteniendo `theme`, `mainIcon` y `supportingIcons` como respaldo.

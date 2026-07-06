# Modelo de recursos: Enfado

## RecursoVisual

- `emotionId`: `enfado`
- `pageId`: 1 a 6, o `referencia`
- `fileName`: nombre estable del JPG
- `path`: ruta publica dentro de `public/images/stories/enfado/`
- `dimensions`: 900 x 900 px
- `format`: JPG
- `role`: referencia o escena narrativa

## Recursos finales

| pageId | fileName | role |
| --- | --- | --- |
| referencia | `personajes-referencia.jpg` | Ficha visual de Marco y companera |
| 1 | `pagina-1-torre-caida.jpg` | Torre caida y energia corporal |
| 2 | `pagina-2-senal-roja.jpg` | Senal roja para parar |
| 3 | `pagina-3-nombrar-enfado.jpg` | Respirar y nombrar |
| 4 | `pagina-4-limite-respetuoso.jpg` | Pedir un minuto |
| 5 | `pagina-5-plan-seguro.jpg` | Volver a construir con plan |
| 6 | `pagina-6-volcan-sereno.jpg` | Cierre sereno y camino seguro |

## Integracion

Cada pagina se enlaza desde `src/data/storyIllustrations.js` mediante `imageSrc`, manteniendo `theme`, `mainIcon` y `supportingIcons` como respaldo.

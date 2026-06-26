# Guía para ampliar islas emocionales

EMOPLAY queda preparado para añadir nuevas emociones sin reconstruir el mapa desde cero.

## Para añadir una emoción nueva

1. Añadir la emoción en `src/data/emotions.js`.
   - Es obligatorio definir `id`, `name`, `shortName`, `status`, `color`, `accent`, `icon`, `storyTitle`, `unlockHint`, `intro` y `story`.

2. Decidir si será jugable dentro del recorrido principal.
   - Si la emoción debe desbloquearse completando una isla anterior, añadir su `id` a `islandUnlockOrder` en `src/data/islandProgression.js`.
   - Si solo debe aparecer visible como futura isla, no hace falta añadirla a `islandUnlockOrder`.

3. Decidir dónde aparece en el mapa.
   - Para controlar su lugar exacto en la ruta, añadir su `id` a `islandMapOrder` en `src/data/islandProgression.js`.
   - Si no se añade, la app la colocará automáticamente al final como isla futura.

4. Personalizar su aspecto visual.
   - Añadir una entrada opcional en `src/data/islandVisuals.js`.
   - Si no se añade, la app usará una isla provisional con el icono de la emoción y una posición automática.

5. Añadir contenido educativo cuando toque.
   - Cuento completo.
   - Retos.
   - Recompensa de aula o distintivo de avatar.

## Importante

- No separar emociones en positivas, complejas o sociales dentro del mapa.
- Mantener el mensaje pedagógico: todas las emociones son útiles y enseñan algo.
- No eliminar islas existentes ni progreso guardado.
- Probar siempre `npm run build` después de añadir una isla.

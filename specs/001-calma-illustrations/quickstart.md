# Quickstart: Validate Calma Story Illustrations

## Prerequisites

- Run from the `emoplay` project folder.
- Keep the dev server available at `http://127.0.0.1:5173/` or start it with the existing Vite workflow.

## Validation Steps

1. Build the app.

   ```powershell
   npm run build
   ```

   Expected result: build completes successfully.

2. Check that all Calma image resources exist and load:

   - `/images/stories/calma/personajes-referencia.jpg`
   - `/images/stories/calma/pagina-1-bahia-despacio.jpg`
   - `/images/stories/calma/pagina-2-concha-pausa.jpg`
   - `/images/stories/calma/pagina-3-respirar-olas.jpg`
   - `/images/stories/calma/pagina-4-cuerpo-ligero.jpg`
   - `/images/stories/calma/pagina-5-pausa-clase.jpg`
   - `/images/stories/calma/pagina-6-camino-sereno.jpg`

   Expected result: each resource returns successfully from the local app.

3. Open the app and navigate to the Calma story.

   Expected result: every page uses a narrative image instead of the icon-only fallback.

4. Complete the Calma story.

   Expected result: completion, points, next action, and existing progression behavior remain unchanged.

5. Review the Spec Kit artifacts and final implementation notes.

   Expected result: the final assessment explains whether Spec Kit improved, worsened, or did not change this workflow.

# Tasks: Calma Story Illustrations

**Input**: Design documents from `specs/001-calma-illustrations/`

**Prerequisites**: `plan.md`, `research.md`, `data-model.md`, `quickstart.md`

## Phase 1: Setup

- [x] T001 Create Calma image asset folder in `public/images/stories/calma/`
- [x] T002 Review existing Calma story pages in `src/data/stories.js`
- [x] T003 Review current Calma fallback illustration entries in `src/data/storyIllustrations.js`

## Phase 2: Foundational

- [x] T004 Define Vega character reference prompt using `GUIA_VISUAL_CUENTOS.md` and `specs/001-calma-illustrations/data-model.md`
- [x] T005 Define six page-specific scene prompts from the existing Calma story text in `src/data/stories.js`
- [x] T006 Generate and save `public/images/stories/calma/personajes-referencia.jpg`

## Phase 3: User Story 1 - Leer Calma Con Ilustraciones Reales (P1)

**Goal**: Each Calma page displays a real narrative illustration.

**Independent Test**: Open the Calma story and confirm pages 1-6 render page-specific images rather than icon-only fallback visuals.

- [x] T007 [P] [US1] Generate and save `public/images/stories/calma/pagina-1-bahia-despacio.jpg`
- [x] T008 [P] [US1] Generate and save `public/images/stories/calma/pagina-2-concha-pausa.jpg`
- [x] T009 [P] [US1] Generate and save `public/images/stories/calma/pagina-3-respirar-olas.jpg`
- [x] T010 [P] [US1] Generate and save `public/images/stories/calma/pagina-4-cuerpo-ligero.jpg`
- [x] T011 [P] [US1] Generate and save `public/images/stories/calma/pagina-5-pausa-clase.jpg`
- [x] T012 [P] [US1] Generate and save `public/images/stories/calma/pagina-6-camino-sereno.jpg`
- [x] T013 [US1] Add Calma `imageSrc` paths in `src/data/storyIllustrations.js`

## Phase 4: User Story 2 - Mantener Continuidad Visual de Vega (P2)

**Goal**: Vega remains recognizable across all six story pages.

**Independent Test**: Review the character reference and six scenes together; Vega should preserve hair, clothing, bracelet, age, and emotional progression.

- [x] T014 [US2] Inspect saved Calma images for continuity and reject or regenerate any scene that breaks Vega's appearance
- [x] T015 [US2] Confirm all images avoid text, logos, watermarks, speech bubbles, and confusing UI-like marks

## Phase 5: User Story 3 - Evaluar Spec Kit en una Mejora Real (P3)

**Goal**: Record whether Spec Kit improved this EMOPLAY workflow.

**Independent Test**: Final report compares generated artifacts, implementation clarity, friction, and outcome quality.

- [x] T016 [US3] Record Spec Kit observations in `specs/001-calma-illustrations/speckit-assessment.md`
- [x] T017 [US3] Summarize whether the process improves, worsens, or does not materially change this type of task

## Phase 6: Polish & Validation

- [x] T018 Run `npm run build`
- [x] T019 Check all seven Calma image URLs from the local dev server
- [x] T020 Walk through the Calma story in the running app and verify story navigation still works
- [x] T021 Update `PROGRESO_EMOPLAY.md` with the Calma illustration milestone

## Dependencies

- Phase 1 must complete before prompts and assets.
- T004 and T005 must complete before image generation.
- T006 should complete before page scenes to anchor Vega's design.
- T013 depends on T007-T012.
- T014 and T015 depend on all generated image tasks.
- T018-T020 depend on T013.
- T016-T017 should happen after implementation and validation.

## Parallel Execution Examples

After T004-T006, page images can be generated independently:

```text
T007, T008, T009, T010, T011, T012
```

## Implementation Strategy

Deliver the MVP by completing T001-T013 first: Calma will visually render real images. Then validate continuity, build, local image loading, and Spec Kit usefulness.

# Implementation Plan: Calma Story Illustrations

**Branch**: `001-calma-illustrations` | **Date**: 2026-06-24 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-calma-illustrations/spec.md`

## Summary

Renew the Calma story visuals by adding one stable character reference for Vega and six square narrative illustrations for `La bahía que respiraba despacio`. The implementation keeps the existing story text and reader flow intact, adds image paths to the existing story illustration data, stores all new assets locally, and validates that the app still builds and serves the new resources.

## Technical Context

**Language/Version**: JavaScript with React 19.2.7 and Vite 8.0.12

**Primary Dependencies**: Existing React/Vite dependencies only; no new runtime dependency planned

**Storage**: Static image files in `public/images/stories/calma/`; story image metadata in `src/data/storyIllustrations.js`

**Testing**: `npm run build`, local dev-server resource checks, and manual story-reader walkthrough

**Target Platform**: Browser app for desktop, tablet, and mobile

**Project Type**: Single frontend web application

**Performance Goals**: Seven local JPG assets should remain lightweight enough for smooth story navigation; target 900 x 900 px final images in the same practical range as existing story assets

**Constraints**: Do not modify story text, unlock order, points, rewards, challenges, mini-games, localStorage keys, or teacher-panel logic

**Scale/Scope**: One existing story, one character reference, six story pages, one data file update, optional progress documentation

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Educational Safety and Child Privacy**: Pass. No student data or privacy behavior changes.
- **Preserve the Rich Game Experience**: Pass. Replaces provisional icon visuals with richer story art.
- **Existing Progress Must Survive**: Pass. No localStorage or progression changes planned.
- **Content Follows the EMOPLAY Learning Model**: Pass. Calma remains focused on pause, breathing, body awareness, and classroom regulation.
- **Visual Story Quality Is Product Quality**: Pass. Work follows `GUIA_VISUAL_CUENTOS.md` and mirrors existing renewed story folders.
- **Work With the Existing Architecture**: Pass. Uses current `public/images/stories/` and `src/data/storyIllustrations.js` pattern.
- **Responsive, Readable, and Non-Overlapping UI**: Pass. Keeps current story reader layout and square image contract.

## Project Structure

### Documentation (this feature)

```text
specs/001-calma-illustrations/
├── spec.md
├── checklists/
│   └── requirements.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── tasks.md
```

### Source Code (repository root)

```text
public/
└── images/
    └── stories/
        └── calma/
            ├── personajes-referencia.jpg
            ├── pagina-1-bahia-despacio.jpg
            ├── pagina-2-concha-pausa.jpg
            ├── pagina-3-respirar-olas.jpg
            ├── pagina-4-cuerpo-ligero.jpg
            ├── pagina-5-pausa-clase.jpg
            └── pagina-6-camino-sereno.jpg

src/
└── data/
    └── storyIllustrations.js
```

**Structure Decision**: Use the same asset and data pattern already used by Empatía, Ternura, Admiración, and Alegría. No new component is needed because `StoryReaderScreen.jsx` already prefers `imageSrc` when present and falls back to icons otherwise.

## Phase 0: Research

Research is captured in [research.md](./research.md).

## Phase 1: Design

Data and validation artifacts are captured in:

- [data-model.md](./data-model.md)
- [quickstart.md](./quickstart.md)

No external API or public interface contract is introduced, so `contracts/` is intentionally omitted.

## Complexity Tracking

No constitution violations or additional complexity are planned.

# Research: Calma Story Illustrations

## Decision: Reuse the Existing Story Image Integration

**Rationale**: `StoryReaderScreen.jsx` already reads `imageSrc` from `src/data/storyIllustrations.js` and renders the image before falling back to icons. Adding image paths for Calma follows the established pattern used by Ternura, Admiración, Alegría, and Empatía.

**Alternatives considered**:

- Create a new story-image component: rejected because the existing component already supports the behavior.
- Replace the whole reader layout: rejected because the current reader is already responsive and tested with renewed stories.

## Decision: Store Calma Assets Locally

**Rationale**: Existing renewed stories store images under `public/images/stories/<emotion>/`. Local files keep the app deployable without external image dependencies and match the visual guide.

**Alternatives considered**:

- Remote image URLs: rejected because they would create availability and privacy concerns.
- Data URLs or bundled imports: rejected because the public-folder pattern is already established and simpler.

## Decision: Keep Calma Text and Flow Unchanged

**Rationale**: The requested work is visual renewal, not story rewriting. Leaving story text, rewards, points, unlocks, and challenges unchanged reduces regression risk.

**Alternatives considered**:

- Rewrite the story while illustrating: rejected because it expands scope and makes it harder to evaluate Spec Kit on a controlled change.

## Decision: Use One Character Reference and Six Scene Prompts

**Rationale**: `GUIA_VISUAL_CUENTOS.md` requires stable character references before story illustration. Calma has one protagonist, Vega, so a single reference plus scene-specific prompts is enough.

**Alternatives considered**:

- Generate pages without a reference: rejected because continuity has been a known quality requirement.
- Create separate references for secondary classmates: rejected because they are background/supporting figures only.

## Decision: Validate With Build, Resource Checks, and Story Walkthrough

**Rationale**: This feature touches static assets and data references. The highest-signal validation is build success, 200 responses for image resources, and a walkthrough that confirms the reader uses images on each page.

**Alternatives considered**:

- Add automated unit tests: not chosen for this pilot because there is no existing test setup for visual story data and the change is data/assets only.

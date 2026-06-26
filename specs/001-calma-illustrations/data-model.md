# Data Model: Calma Story Illustrations

## Entity: Vega Character Reference

**Purpose**: Locks the protagonist's appearance for the Calma story.

**Attributes**:

- Approximate age: Primary-school child, around 8 years old.
- Appearance: warm medium skin tone, dark brown wavy bob-length hair, expressive brown eyes.
- Clothing: teal cardigan over a soft cream T-shirt, coral shorts or skirt, simple trainers.
- Recognizable accessory: small blue shell bracelet.
- Emotional range: starts overstimulated and tense; gradually becomes grounded, attentive, and calmer.

**Validation Rules**:

- Vega must remain visually recognizable across all six scenes.
- Clothing and shell bracelet should remain consistent.
- Expressions should change gradually, not magically from stressed to joyful.

## Entity: Calma Story Image

**Purpose**: A square narrative illustration linked to a specific page of the Calma story.

**Attributes**:

- Page number: 1 through 6.
- Scene title: short filename-friendly summary.
- File path: `/images/stories/calma/<filename>.jpg`.
- Visual role: primary story illustration.
- Fallback: existing `mainIcon` and `supportingIcons` remain available.

**Validation Rules**:

- Each page must have exactly one primary image path.
- Images must not include text, watermarks, logos, speech bubbles, or UI.
- Images must represent the existing page scene and fit a square crop.

## State Changes

No player state changes are introduced. Story completion, points, unlock logic, rewards, mini-games, challenges, and teacher-panel summaries remain unchanged.

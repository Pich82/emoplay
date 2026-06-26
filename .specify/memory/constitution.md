# EMOPLAY Constitution

## Core Principles

### I. Educational Safety and Child Privacy
EMOPLAY is an educational emotional-intelligence app for children. Features MUST protect student wellbeing, avoid shaming language, and keep teacher-facing information clearly separated from student play. Student progress, diary entries, reports, and classroom data MUST remain local unless a future feature explicitly specifies an external service, consent model, storage policy, and teacher/guardian-facing safeguards.

### II. Preserve the Rich Game Experience
Every change MUST preserve the current playful island-adventure experience. Do not replace existing screens with simplified placeholders, generic layouts, or text-heavy pages. The app should continue to feel like a polished children's game: visual, warm, navigable, responsive, and complete.

### III. Existing Progress Must Survive
New features MUST keep existing localStorage progress compatible. Completed stories, unlocked islands, challenge reports, mini-game completions, avatar rewards, diary entries, and teacher-panel summaries must not be lost or renamed without a migration path. Additive changes are preferred over destructive rewrites.

### IV. Content Follows the EMOPLAY Learning Model
All emotions are useful and teach something; features MUST NOT divide emotions into "good" and "bad" categories. New playable islands should normally include a story, challenges, achievements, rewards, and unlock logic. Stories should be age-appropriate for Primary learners and should favor everyday situations, emotional naming, respectful choices, and realistic support from trusted adults or peers.

### V. Visual Story Quality Is Product Quality
Story work MUST follow GUIA_VISUAL_CUENTOS.md. Final story art should use stable character references and real narrative illustrations stored in public/images/stories/<emotion>/, optimized for desktop, tablet, and mobile. CSS/icon compositions may remain only as technical fallback or temporary scaffolding.

### VI. Work With the Existing Architecture
Prefer the current React + Vite structure. Keep emotional content in src/data, screen behavior in src/screens, shared UI in src/components, progress helpers in src/utils or hooks, and top-level navigation in App.jsx unless a spec justifies a broader refactor. Avoid new dependencies unless they clearly reduce risk or complexity.

### VII. Responsive, Readable, and Non-Overlapping UI
Every user-facing change must work on desktop, tablet, and small mobile screens. Text, buttons, islands, cards, story images, avatar elements, and teacher-panel summaries must not overlap or overflow. The app should prioritize readable copy, clear actions, and stable layouts over decorative density.

## Development Workflow

Each meaningful feature should follow the Spec Kit path:

1. Create or update a spec focused on what the user needs and why.
2. Clarify ambiguities before implementation when child safety, data, progression, or classroom use is involved.
3. Create a technical plan that names the existing files and data flows affected.
4. Break work into tasks that can be verified independently.
5. Implement only the agreed scope.
6. Validate with npm run build and targeted data/visual checks.

Small copy, color, spacing, or one-line bug fixes may skip the full Spec Kit workflow, but they still must respect this constitution.

## Quality Gates

Before a meaningful feature is considered complete:

- npm run build must pass.
- Existing island progression must still unlock in the intended order.
- New islands must define the needed story, challenges, achievements, rewards, and visual data.
- Teacher-panel data must remain understandable and protected behind adult access.
- localStorage keys must remain backward compatible or include migration logic.
- Responsive behavior must be checked for desktop, tablet, and mobile when UI changes are made.
- A backup or clear rollback path must exist before broad structural changes.

## Governance

This constitution is the primary rule set for Spec Kit work in EMOPLAY. If a generated spec, plan, task list, or implementation conflicts with these principles, the constitution wins. Amendments should be intentional, dated, and reflected in future specs.

**Version**: 1.0.0 | **Ratified**: 2026-06-24 | **Last Amended**: 2026-06-24

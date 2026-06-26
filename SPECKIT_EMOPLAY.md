# Spec Kit in EMOPLAY

Spec Kit has been initialized as a planning and quality layer for EMOPLAY. It does not replace the React/Vite app; it helps prepare larger changes before code is edited.

## Local Setup

- Spec Kit CLI version: 0.11.6
- Local tool environment: `.tools/spec-kit-venv/`
- Project rules: `.specify/memory/constitution.md`
- Spec Kit skills: `.agents/skills/`
- PowerShell scripts: `.specify/scripts/powershell/`

The `.tools/` folder is ignored because it only contains local installation files.

## Recommended Flow

Use Spec Kit for meaningful changes such as new islands, story renewals, teacher-panel upgrades, data/export features, or broad UI changes:

1. `$speckit-specify` - define what should improve and why.
2. `$speckit-clarify` - resolve ambiguities when safety, classroom use, or data is involved.
3. `$speckit-plan` - map the work to the current React/Vite structure.
4. `$speckit-tasks` - create the implementation checklist.
5. `$speckit-analyze` - check that spec, plan, and tasks agree.
6. `$speckit-implement` - implement the planned work.

For small text, style, or bug fixes, direct edits are still fine.

## Rollback

A backup was created before Spec Kit was initialized:

`C:\Users\oscar\OneDrive\Escritorio\APP EMOPLAY\_backups\emoplay-before-speckit-20260624-102616.zip`

To return to the previous state, restore that backup over the `emoplay` folder after closing any running dev server.

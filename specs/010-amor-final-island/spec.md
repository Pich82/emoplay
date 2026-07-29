# 010 Amor Final Island

## Objective

Build a personalized final experience that integrates the complete EMOPLAY route and opens a permanent replayable refuge.

## Unlock Contract

- Amor remains outside `islandUnlockOrder` until Culpa is implemented.
- When Culpa is completed, the final route becomes `... -> Celos -> Culpa -> Amor`.
- The map may continue showing Amor as the final locked destination before it becomes playable.
- Completing Amor does not unlock another island.

## Architecture

Amor should use a dedicated experience instead of forcing its behavior into `StoryReaderScreen`.

Planned modules:

- `src/data/loveFinale.js`: chapters, situations, tools, feedback, commitments, and reward metadata.
- `src/screens/LoveFinaleScreen.jsx`: six-step final experience and refuge view.
- `src/components/LoveCompassScenario.jsx`: reusable choice scene.
- `src/components/LoveToolbox.jsx`: tool selection.
- `src/components/LighthouseRefuge.jsx`: final badge and progress display.
- `src/styles/love-finale.css`: responsive final-island layout.

Planned integration points:

- `src/App.jsx`: final-island navigation and completion callback.
- `src/screens/IslandDetailScreen.jsx`: special final-island entry instead of the normal story/challenge path.
- `src/data/emotions.js`: align the existing Amor metadata with `El Faro de los Vínculos Seguros`.
- `src/data/islandProgression.js`: add Amor only after Culpa is playable.
- `src/data/achievements.js` and `src/data/rewards.js`: final achievement and avatar frame.
- `src/data/player.js` and `src/data/progressTransfer.js`: normalize, export, import, and restore final progress.

## Saved Progress

Recommended player state:

```js
loveFinale: {
  version: 1,
  started: false,
  completed: false,
  completedAt: '',
  chapterId: 'arrival',
  scenarioChoices: {},
  selectedToolIds: [],
  futureMessage: '',
  careCommitmentId: '',
}
```

Rules:

- Award final points and achievements only on the first completion.
- Allow the player to revisit the refuge and edit the optional future message.
- Limit `futureMessage` to 280 characters.
- Validate all imported identifiers against the known finale catalog.
- Preserve an import backup before replacing this state, following the existing transfer flow.
- Clearly mention the private message in the export/import summary.

## Completion Contract

On first completion:

- add `amor` to `completedStories` for map and route compatibility;
- add `final_amor` to achievements;
- add 50 points;
- unlock the `Marco del Archipiélago` reward;
- persist the selected tools, care commitment, and completion date;
- open the `Refugio del Faro`.

Replays must not award duplicate points or duplicate achievements.

## Content Contract

- Six interactive chapters as defined in `concept.md`.
- Four relationship scenarios with at least two safe or repairable routes each.
- Eight to twelve reusable emotional tools drawn from previous islands.
- Four to six small care commitments.
- Prepared future-message starters plus optional free text.
- Calm explanatory feedback for every selectable response.
- No ordinary true/false challenge set is required.

## Visual Assets

Minimum final set:

- one visual reference for the lighthouse environment;
- six wide chapter illustrations;
- one illuminated final panorama;
- optional reusable symbol sheet for previous island objects.

The player avatar remains a live interface element and should not be baked into the illustrations.

## Accessibility And Mobile

- One primary action per step.
- Choices remain readable at 390 x 844 and larger viewports.
- No fixed bottom control may cover text or choice buttons.
- Support keyboard navigation and visible focus.
- Respect reduced-motion preferences.
- Decorative movement must not be required to understand a choice.
- The future-message field must remain usable with the mobile keyboard open.

## Verification

- Unit-style data check for chapters, tools, choices, rewards, and valid identifiers.
- Completion test proving points are awarded once.
- Progress-transfer test including valid and corrupt finale state.
- Build check.
- Responsive browser walkthrough for all six chapters.
- Manual export/import test confirming the final refuge and optional message restore correctly.

## Acceptance

- Completing Culpa unlocks Amor and no earlier action can bypass that prerequisite.
- Amor opens the dedicated six-chapter experience rather than the ordinary story reader.
- Safe choices provide useful feedback and can be reconsidered without a losing state.
- Completion awards 50 points and the final achievement only once.
- Reloading or importing progress restores the current chapter, selected tools, commitment, and optional message.
- The final refuge remains available after completion.
- The optional private message never appears in teacher reports.
- The full experience is usable on a representative mobile viewport.

## Out Of Scope

- Server accounts, cloud sync, public sharing, social feeds, leaderboards, or multiplayer.
- Romantic or dating content.
- Rewriting completed island stories.
- Implementing Amor before Culpa has established the final repair transition.

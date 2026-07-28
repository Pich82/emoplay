import assert from 'node:assert/strict';
import { defaultAvatarConfig } from '../src/data/avatar.js';
import { initialPlayerState } from '../src/data/player.js';
import {
  buildProgressBackup,
  parseProgressBackupText,
  progressStorageKeys,
  saveLocalProgressBackup,
  writeProgressBackupToStorage,
} from '../src/data/progressTransfer.js';

function createLocalStorage() {
  const store = new Map();

  return {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
    key(index) {
      return [...store.keys()][index] || null;
    },
    clear() {
      store.clear();
    },
    get length() {
      return store.size;
    },
  };
}

global.window = {
  localStorage: createLocalStorage(),
};

const player = {
  ...initialPlayerState,
  hasStarted: true,
  studentName: 'Oscar',
  className: '4A',
  points: 225,
  completedStories: ['ternura', 'admiracion', 'alegria', 'calma'],
  completedChallengeIds: ['ternura'],
  completedMiniGameIds: ['calma'],
  unlockedIslands: ['ternura', 'admiracion', 'alegria', 'calma', 'miedo'],
};

window.localStorage.setItem(
  progressStorageKeys.diaryEntries,
  JSON.stringify([
    {
      id: 'diary_test',
      moodId: 'calma',
      intensity: 3,
      note: 'Una nota de prueba.',
      createdAt: '2026-07-28T10:00:00.000Z',
    },
  ]),
);
window.localStorage.setItem('informe_calma_123', JSON.stringify({ id: 'informe_calma_123', emotionId: 'calma' }));

const backup = buildProgressBackup(player, defaultAvatarConfig);
assert.equal(backup.app, 'emoplay');
assert.equal(backup.type, 'progress-backup');
assert.equal(backup.data.player.points, 225);
assert.equal(backup.data.diaryEntries.length, 1);
assert.equal(backup.data.challengeReports.length, 1);

const parsed = parseProgressBackupText(JSON.stringify(backup));
assert.equal(parsed.ok, true);
assert.equal(parsed.summary.studentName, 'Oscar');
assert.equal(parsed.summary.diaryEntries, 1);

assert.equal(parseProgressBackupText('{broken').ok, false);
assert.equal(
  parseProgressBackupText(JSON.stringify({ app: 'otra', type: 'progress-backup', version: 1 })).ok,
  false,
);

window.localStorage.setItem('cuento_empatia_completado', 'true');
window.localStorage.setItem('reto_empatia_completado', 'true');
window.localStorage.setItem('minijuego_empatia_completado', 'true');
window.localStorage.setItem('informe_viejo_999', JSON.stringify({ id: 'informe_viejo_999' }));

saveLocalProgressBackup(backup);
const restored = writeProgressBackupToStorage(parsed.backup);

assert.equal(window.localStorage.getItem(progressStorageKeys.lastImportBackup) !== null, true);
assert.equal(JSON.parse(window.localStorage.getItem(progressStorageKeys.player)).studentName, 'Oscar');
assert.equal(JSON.parse(window.localStorage.getItem(progressStorageKeys.avatarConfig)).seed, defaultAvatarConfig.seed);
assert.equal(JSON.parse(window.localStorage.getItem(progressStorageKeys.diaryEntries)).length, 1);
assert.equal(window.localStorage.getItem('cuento_calma_completado'), 'true');
assert.equal(window.localStorage.getItem('cuento_empatia_completado'), null);
assert.equal(window.localStorage.getItem('reto_empatia_completado'), null);
assert.equal(window.localStorage.getItem('minijuego_empatia_completado'), null);
assert.equal(window.localStorage.getItem('informe_viejo_999'), null);
assert.equal(window.localStorage.getItem('informe_calma_123') !== null, true);
assert.equal(restored.player.points, 225);

console.log('progress transfer checks passed');

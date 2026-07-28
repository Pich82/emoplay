import { defaultAvatarConfig, normalizeAvatarConfig } from './avatar.js';
import { diaryStorageKey, normalizeDiaryEntries } from './diary.js';
import { islandUnlockOrder } from './islandProgression.js';
import { initialPlayerState } from './player.js';

export const progressTransferVersion = 1;

export const progressStorageKeys = {
  player: 'emoplay:player',
  avatarConfig: 'emoplay_avatarDiceBearConfig',
  diaryEntries: diaryStorageKey,
  lastImportBackup: 'emoplay:progressImportBackup:last',
};

const backupEnvelope = {
  app: 'emoplay',
  type: 'progress-backup',
};

const maxImportTextLength = 2_000_000;
const maxArrayItems = 160;
const maxStringLength = 120;
const maxReportCount = 80;
const reportStoragePrefix = 'informe_';
const knownStoryIds = [
  'ternura',
  'admiracion',
  'afectividad',
  'alegria',
  'calma',
  'miedo',
  'enfado',
  'tristeza',
  'frustracion',
  'verguenza',
  'empatia',
];
const knownChallengeIds = knownStoryIds;
const knownMiniGameIds = ['calma', 'empatia'];

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function clampNumber(value, fallbackValue = 0, maxValue = 99999) {
  const numberValue = Number(value);

  if (!Number.isFinite(numberValue)) {
    return fallbackValue;
  }

  return Math.min(maxValue, Math.max(0, Math.round(numberValue)));
}

function cleanString(value, maxLength = maxStringLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function cleanStringArray(values, maxItems = maxArrayItems) {
  if (!Array.isArray(values)) {
    return [];
  }

  return [...new Set(values.map((value) => cleanString(value)).filter(Boolean))].slice(0, maxItems);
}

function readStorageValue(key, fallbackValue) {
  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

function safeSetStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorageKeys() {
  try {
    return Array.from({ length: window.localStorage.length }, (_, index) =>
      window.localStorage.key(index),
    ).filter(Boolean);
  } catch {
    return Object.keys(window.localStorage);
  }
}

function normalizeImportedPlayer(player) {
  const source = isPlainObject(player) ? player : {};
  const completedStories = cleanStringArray(source.completedStories);
  const completedChallengeIds = cleanStringArray(source.completedChallengeIds);
  const completedMiniGameIds = cleanStringArray(source.completedMiniGameIds);
  const explicitUnlockedIslands = cleanStringArray(source.unlockedIslands);
  const storyUnlockedIslands = islandUnlockOrder
    .slice(0, -1)
    .map((storyId, index) =>
      completedStories.includes(storyId) ? islandUnlockOrder[index + 1] : null,
    )
    .filter(Boolean);
  const unlockedIslands = cleanStringArray([
    ...initialPlayerState.unlockedIslands,
    ...explicitUnlockedIslands,
    ...storyUnlockedIslands,
  ]);
  const derivedAchievements = cleanStringArray([
    ...completedStories.map((storyId) => `cuento_${storyId}`),
    ...completedChallengeIds.map((challengeId) => `reto_${challengeId}`),
    ...completedMiniGameIds.map((miniGameId) => `minijuego_${miniGameId}`),
    ...islandUnlockOrder
      .slice(1)
      .map((islandId) =>
        unlockedIslands.includes(islandId) ? `desbloqueo_${islandId}` : null,
      )
      .filter(Boolean),
  ]);

  return {
    ...initialPlayerState,
    hasStarted: Boolean(source.hasStarted || source.studentName),
    studentName: cleanString(source.studentName, 32),
    className: cleanString(source.className, 32),
    points: clampNumber(source.points),
    completedChallenges: Math.max(
      clampNumber(source.completedChallenges),
      completedChallengeIds.length,
    ),
    completedChallengeIds,
    completedMiniGameIds,
    completedStories,
    achievements: cleanStringArray([...(source.achievements || []), ...derivedAchievements]),
    ownedRewardIds: cleanStringArray(source.ownedRewardIds),
    equippedRewardId: cleanString(source.equippedRewardId, 80),
    unlockedIslands,
    avatar: {
      ...initialPlayerState.avatar,
      ...(isPlainObject(source.avatar) ? source.avatar : {}),
    },
  };
}

function readLegacyProgress() {
  return {
    points: readStorageValue('emoplay_puntos', 0),
    completedChallenges: readStorageValue('emoplay_retosCompletados', 0),
    unlockedIslands: readStorageValue('islasCompletadas', []),
    completedStories: knownStoryIds.filter(
      (storyId) => window.localStorage.getItem(`cuento_${storyId}_completado`) === 'true',
    ),
    completedChallengeIds: knownChallengeIds.filter(
      (challengeId) =>
        window.localStorage.getItem(`reto_${challengeId}_completado`) === 'true' ||
        Boolean(window.localStorage.getItem(`reto_demo_${challengeId}_ultimo`)),
    ),
    completedMiniGameIds: knownMiniGameIds.filter(
      (miniGameId) => window.localStorage.getItem(`minijuego_${miniGameId}_completado`) === 'true',
    ),
  };
}

function normalizeReportStorageKey(value, index) {
  const cleanKey = cleanString(value, 96).replace(/[^\w:-]/g, '_');

  if (cleanKey.startsWith(reportStoragePrefix)) {
    return cleanKey;
  }

  return `${reportStoragePrefix}importado_${index + 1}`;
}

function normalizeChallengeReports(reports) {
  if (!Array.isArray(reports)) {
    return [];
  }

  return reports
    .slice(0, maxReportCount)
    .map((report, index) => {
      const value = isPlainObject(report?.value) ? report.value : report;
      const storageKey = normalizeReportStorageKey(
        report?.storageKey || report?.key || value?.id,
        index,
      );

      if (!isPlainObject(value)) {
        return null;
      }

      return {
        storageKey,
        value: {
          ...value,
          id: cleanString(value.id || storageKey, 96),
          emotionId: cleanString(value.emotionId, 80),
          title: cleanString(value.title, 140),
        },
      };
    })
    .filter(Boolean);
}

function readChallengeReports() {
  try {
    return getLocalStorageKeys()
      .filter((key) => key.startsWith(reportStoragePrefix))
      .map((key) => ({
        storageKey: key,
        value: readStorageValue(key, null),
      }))
      .filter((report) => isPlainObject(report.value))
      .slice(0, maxReportCount);
  } catch {
    return [];
  }
}

export function buildProgressBackup(player, avatarConfig) {
  const normalizedPlayer = normalizeImportedPlayer(player);
  const normalizedAvatarConfig = normalizeAvatarConfig(avatarConfig || defaultAvatarConfig);
  const diaryEntries = normalizeDiaryEntries(readStorageValue(diaryStorageKey, []));
  const challengeReports = normalizeChallengeReports(readChallengeReports());

  return {
    ...backupEnvelope,
    version: progressTransferVersion,
    exportedAt: new Date().toISOString(),
    data: {
      player: normalizedPlayer,
      avatarConfig: normalizedAvatarConfig,
      diaryEntries,
      challengeReports,
      legacy: readLegacyProgress(),
    },
  };
}

export function getProgressBackupSummary(backup) {
  const data = backup?.data || {};
  const player = data.player || {};

  return {
    studentName: player.studentName || 'Alumno sin nombre',
    className: player.className || 'Clase no indicada',
    points: clampNumber(player.points),
    unlockedIslands: Array.isArray(player.unlockedIslands) ? player.unlockedIslands.length : 0,
    completedStories: Array.isArray(player.completedStories) ? player.completedStories.length : 0,
    completedChallenges: Array.isArray(player.completedChallengeIds)
      ? player.completedChallengeIds.length
      : 0,
    completedMiniGames: Array.isArray(player.completedMiniGameIds)
      ? player.completedMiniGameIds.length
      : 0,
    diaryEntries: Array.isArray(data.diaryEntries) ? data.diaryEntries.length : 0,
    challengeReports: Array.isArray(data.challengeReports) ? data.challengeReports.length : 0,
    exportedAt: backup?.exportedAt || '',
  };
}

export function parseProgressBackupText(rawText) {
  if (typeof rawText !== 'string' || rawText.length === 0) {
    return { ok: false, error: 'El archivo esta vacio o no se pudo leer.' };
  }

  if (rawText.length > maxImportTextLength) {
    return { ok: false, error: 'El archivo es demasiado grande para una copia de progreso.' };
  }

  let parsed;

  try {
    parsed = JSON.parse(rawText);
  } catch {
    return { ok: false, error: 'El archivo no es un JSON valido.' };
  }

  if (!isPlainObject(parsed)) {
    return { ok: false, error: 'La copia no tiene un formato compatible.' };
  }

  if (parsed.app !== backupEnvelope.app || parsed.type !== backupEnvelope.type) {
    return { ok: false, error: 'La copia no pertenece a EMOPLAY o no es de progreso.' };
  }

  if (Number(parsed.version) !== progressTransferVersion) {
    return { ok: false, error: 'La version de la copia no es compatible con esta app.' };
  }

  if (!isPlainObject(parsed.data)) {
    return { ok: false, error: 'La copia no contiene datos de progreso.' };
  }

  const backup = {
    ...backupEnvelope,
    version: progressTransferVersion,
    exportedAt: cleanString(parsed.exportedAt, 40) || new Date().toISOString(),
    data: {
      player: normalizeImportedPlayer(parsed.data.player),
      avatarConfig: normalizeAvatarConfig(parsed.data.avatarConfig || defaultAvatarConfig),
      diaryEntries: normalizeDiaryEntries(parsed.data.diaryEntries),
      challengeReports: normalizeChallengeReports(parsed.data.challengeReports),
      legacy: isPlainObject(parsed.data.legacy) ? parsed.data.legacy : {},
    },
  };

  if (!backup.data.player.studentName && backup.data.player.points === 0) {
    return { ok: false, error: 'La copia no contiene un alumno o progreso reconocible.' };
  }

  return {
    ok: true,
    backup,
    summary: getProgressBackupSummary(backup),
  };
}

export function downloadProgressBackup(backup) {
  const studentSlug = cleanString(backup?.data?.player?.studentName || 'alumno', 32)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'alumno';
  const dateSlug = new Date().toISOString().slice(0, 10);
  const blob = new Blob([JSON.stringify(backup, null, 2)], {
    type: 'application/json;charset=utf-8',
  });
  const link = document.createElement('a');

  link.href = URL.createObjectURL(blob);
  link.download = `emoplay-progreso-${studentSlug}-${dateSlug}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

export function saveLocalProgressBackup(backup) {
  const localBackup = {
    ...backup,
    localBackupCreatedAt: new Date().toISOString(),
  };

  safeSetStorage(progressStorageKeys.lastImportBackup, localBackup);

  return progressStorageKeys.lastImportBackup;
}

function syncLegacyProgress(player) {
  knownStoryIds.forEach((storyId) => {
    window.localStorage.removeItem(`cuento_${storyId}_completado`);
  });
  knownChallengeIds.forEach((challengeId) => {
    window.localStorage.removeItem(`reto_${challengeId}_completado`);
    window.localStorage.removeItem(`reto_demo_${challengeId}_ultimo`);
  });
  knownMiniGameIds.forEach((miniGameId) => {
    window.localStorage.removeItem(`minijuego_${miniGameId}_completado`);
  });

  player.completedStories.forEach((storyId) => {
    window.localStorage.setItem(`cuento_${storyId}_completado`, 'true');
  });
  player.completedChallengeIds.forEach((challengeId) => {
    window.localStorage.setItem(`reto_${challengeId}_completado`, 'true');
  });
  player.completedMiniGameIds.forEach((miniGameId) => {
    window.localStorage.setItem(`minijuego_${miniGameId}_completado`, 'true');
  });

  safeSetStorage('emoplay_puntos', player.points);
  safeSetStorage('emoplay_retosCompletados', player.completedChallenges);
  safeSetStorage('islasCompletadas', player.unlockedIslands);
}

function replaceChallengeReports(challengeReports) {
  getLocalStorageKeys()
    .filter((key) => key.startsWith(reportStoragePrefix))
    .forEach((key) => window.localStorage.removeItem(key));

  challengeReports.forEach((report) => {
    safeSetStorage(report.storageKey, report.value);
  });
}

export function writeProgressBackupToStorage(backup) {
  const data = backup?.data || {};
  const player = normalizeImportedPlayer(data.player);
  const avatarConfig = normalizeAvatarConfig(data.avatarConfig || defaultAvatarConfig);
  const diaryEntries = normalizeDiaryEntries(data.diaryEntries);
  const challengeReports = normalizeChallengeReports(data.challengeReports);

  safeSetStorage(progressStorageKeys.player, player);
  safeSetStorage(progressStorageKeys.avatarConfig, avatarConfig);
  safeSetStorage(progressStorageKeys.diaryEntries, diaryEntries);
  syncLegacyProgress(player);
  replaceChallengeReports(challengeReports);

  return {
    player,
    avatarConfig,
    diaryEntries,
    challengeReports,
  };
}

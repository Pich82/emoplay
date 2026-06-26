import { diaryStorageKey, normalizeDiaryEntries } from './diary.js';
import { getEmotionById } from './emotions.js';

const reportStoragePrefix = 'informe_';

function readJsonStorage(key, fallbackValue) {
  try {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

function readReportTimestamp(report, storageKey) {
  const id = report?.id || storageKey;
  const timestamp = Number(String(id).match(/_(\d+)$/)?.[1]);

  return Number.isFinite(timestamp) ? timestamp : 0;
}

function normalizeReport(report, storageKey) {
  const timestamp = readReportTimestamp(report, storageKey);
  const emotion = getEmotionById(report?.emotionId);
  const answers = Array.isArray(report?.answers) ? report.answers : [];

  return {
    id: report?.id || storageKey,
    storageKey,
    emotionId: report?.emotionId || emotion?.id || '',
    emotionName: report?.emotionName || emotion?.name || 'Emoción',
    title: report?.title || `Informe de ${emotion?.name || 'emoción'}`,
    date: report?.date || '',
    time: report?.time || '',
    createdAt: timestamp ? new Date(timestamp).toISOString() : '',
    points: Number(report?.points) || 0,
    correctCount: Number(report?.correctCount) || 0,
    totalChallenges: Number(report?.totalChallenges) || answers.length,
    percentage: Math.min(100, Math.max(0, Number(report?.percentage) || 0)),
    answers,
    strengths: Array.isArray(report?.strengths) ? report.strengths : [],
    development: Array.isArray(report?.development) ? report.development : [],
  };
}

export function readLocalChallengeReports() {
  try {
    return Object.keys(window.localStorage)
      .filter((key) => key.startsWith(reportStoragePrefix))
      .map((key) => normalizeReport(readJsonStorage(key, null), key))
      .sort((firstReport, secondReport) => {
        const firstDate = firstReport.createdAt ? new Date(firstReport.createdAt).getTime() : 0;
        const secondDate = secondReport.createdAt ? new Date(secondReport.createdAt).getTime() : 0;

        return secondDate - firstDate;
      });
  } catch {
    return [];
  }
}

export function readLocalDiaryEntries() {
  return normalizeDiaryEntries(readJsonStorage(diaryStorageKey, []));
}

export function getReportSummary(reports) {
  if (reports.length === 0) {
    return {
      averagePercentage: 0,
      totalPoints: 0,
      latestEmotion: 'Sin informes',
    };
  }

  const totalPercentage = reports.reduce((sum, report) => sum + report.percentage, 0);
  const totalPoints = reports.reduce((sum, report) => sum + report.points, 0);

  return {
    averagePercentage: Math.round(totalPercentage / reports.length),
    totalPoints,
    latestEmotion: reports[0].emotionName,
  };
}

export function getDiarySummary(entries) {
  if (entries.length === 0) {
    return {
      averageIntensity: '0/5',
      latestMoodId: '',
      highIntensityCount: 0,
    };
  }

  const totalIntensity = entries.reduce((sum, entry) => sum + entry.intensity, 0);

  return {
    averageIntensity: `${(totalIntensity / entries.length).toFixed(1)}/5`,
    latestMoodId: entries[0].moodId,
    highIntensityCount: entries.filter((entry) => entry.intensity >= 4).length,
  };
}

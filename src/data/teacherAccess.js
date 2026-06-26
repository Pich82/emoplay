export const teacherAccessCode = 'EMO2026';

export function verifyTeacherAccessCode(code) {
  return String(code || '').trim().toUpperCase() === teacherAccessCode;
}

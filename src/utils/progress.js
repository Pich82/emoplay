export function getPlayerLevel(points) {
  if (points < 100) {
    return {
      level: 1,
      name: 'Explorador emocional',
      color: '#95a5a6',
      nextGoal: 100,
      previousGoal: 0,
    };
  }

  if (points < 300) {
    return {
      level: 2,
      name: 'Aventurero emocional',
      color: '#3498db',
      nextGoal: 300,
      previousGoal: 100,
    };
  }

  if (points < 600) {
    return {
      level: 3,
      name: 'Maestro emocional',
      color: '#f39c12',
      nextGoal: 600,
      previousGoal: 300,
    };
  }

  return {
    level: 4,
    name: 'Sabio emocional',
    color: '#e74c3c',
    nextGoal: 600,
    previousGoal: 600,
  };
}

export function getLevelProgress(points) {
  const level = getPlayerLevel(points);

  if (level.nextGoal === level.previousGoal) {
    return 100;
  }

  return Math.min(
    100,
    Math.max(0, ((points - level.previousGoal) / (level.nextGoal - level.previousGoal)) * 100),
  );
}

export const defaultAvatarConfig = {
  seed: 'EmoplayUser',
  hair: 'short01',
  eyes: 'variant01',
  eyebrows: 'variant01',
  mouth: 'variant01',
  glasses: 'none',
  earrings: 'none',
  hairColor: '6a4e35',
  skinColor: 'ecad80',
  backgroundColor: 'transparent',
  avatarFrame: 'none',
  avatarHead: 'none',
  avatarBadge: 'none',
  avatarAccessory: 'none',
};

export const avatarOptionGroups = {
  Pelo: {
    icon: '\u{1F487}',
    key: 'hair',
    options: [
      ...Array.from({ length: 19 }, (_, index) => ({
        value: `short${String(index + 1).padStart(2, '0')}`,
        label: `Corto ${index + 1}`,
      })),
      ...Array.from({ length: 26 }, (_, index) => ({
        value: `long${String(index + 1).padStart(2, '0')}`,
        label: `Largo ${index + 1}`,
      })),
    ],
  },
  Ojos: {
    icon: '\u{1F441}\uFE0F',
    key: 'eyes',
    options: Array.from({ length: 26 }, (_, index) => ({
      value: `variant${String(index + 1).padStart(2, '0')}`,
      label: `Estilo ${index + 1}`,
    })),
  },
  Cejas: {
    icon: '\u270F\uFE0F',
    key: 'eyebrows',
    options: Array.from({ length: 15 }, (_, index) => ({
      value: `variant${String(index + 1).padStart(2, '0')}`,
      label: `Estilo ${index + 1}`,
    })),
  },
  Boca: {
    icon: '\u{1F5E3}\uFE0F',
    key: 'mouth',
    options: Array.from({ length: 30 }, (_, index) => ({
      value: `variant${String(index + 1).padStart(2, '0')}`,
      label: `Boca ${index + 1}`,
    })),
  },
  Gafas: {
    icon: '\u{1F453}',
    key: 'glasses',
    options: [
      { value: 'none', label: 'Sin gafas' },
      { value: 'variant01', label: 'Normales 1' },
      { value: 'variant02', label: 'Normales 2' },
      { value: 'variant03', label: 'Redondas' },
      { value: 'variant04', label: 'Cuadradas' },
      { value: 'variant05', label: 'Grandes' },
    ],
  },
  Pendientes: {
    icon: '\u{1F48E}',
    key: 'earrings',
    options: [
      { value: 'none', label: 'Sin pendientes' },
      { value: 'variant01', label: 'Aros pequeños' },
      { value: 'variant02', label: 'Aros grandes' },
      { value: 'variant03', label: 'Largos' },
      { value: 'variant04', label: 'Bolitas' },
      { value: 'variant05', label: 'Estrellas' },
      { value: 'variant06', label: 'Diamantes' },
    ],
  },
  'Color de pelo': {
    icon: '\u{1F3A8}',
    key: 'hairColor',
    options: [
      { value: '0e0e0e', label: 'Negro', color: '#0e0e0e' },
      { value: '562306', label: 'Castaño oscuro', color: '#562306' },
      { value: '6a4e35', label: 'Castaño', color: '#6a4e35' },
      { value: 'b9a05f', label: 'Rubio oscuro', color: '#b9a05f' },
      { value: 'e5d7a3', label: 'Rubio', color: '#e5d7a3' },
      { value: 'cb6820', label: 'Pelirrojo', color: '#cb6820' },
      { value: '85c2c6', label: 'Azul', color: '#85c2c6' },
      { value: 'dba3be', label: 'Rosa', color: '#dba3be' },
      { value: '8e44ad', label: 'Violeta', color: '#8e44ad' },
      { value: '27ae60', label: 'Verde', color: '#27ae60' },
      { value: 'ff7da8', label: 'Coral', color: '#ff7da8' },
      { value: 'ffffff', label: 'Blanco', color: '#ffffff' },
    ],
  },
  'Color de piel': {
    icon: '\u{1F91A}',
    key: 'skinColor',
    options: [
      { value: 'f2d3b1', label: 'Claro', color: '#f2d3b1' },
      { value: 'ecad80', label: 'Medio', color: '#ecad80' },
      { value: '9e5622', label: 'Oscuro', color: '#9e5622' },
      { value: '763900', label: 'Muy oscuro', color: '#763900' },
    ],
  },
  Fondo: {
    icon: '\u{1F5BC}\uFE0F',
    key: 'backgroundColor',
    options: [
      { value: 'transparent', label: 'Transparente' },
      { value: 'ffd5dc', label: 'Rosa suave', color: '#ffd5dc' },
      { value: 'd1d4f9', label: 'Azul suave', color: '#d1d4f9' },
      { value: 'c0e0de', label: 'Verde suave', color: '#c0e0de' },
      { value: 'fff2cc', label: 'Amarillo suave', color: '#fff2cc' },
      {
        value: 'f7b731',
        label: 'Dorado premio',
        color: '#f7b731',
        requiredPoints: 150,
        unlockRewardId: 'fondo_dorado_avatar',
        unlockLabel: '150 puntos',
      },
    ],
  },
};

export function isAvatarOptionUnlocked(option, player) {
  if (!option?.requiredPoints && !option?.unlockRewardId) {
    return true;
  }

  const hasEnoughPoints = (player?.points || 0) >= (option.requiredPoints || 0);
  const hasReward = option.unlockRewardId
    ? (player?.ownedRewardIds || []).includes(option.unlockRewardId)
    : false;

  return hasEnoughPoints || hasReward;
}

export function normalizeAvatarConfig(config) {
  return {
    ...defaultAvatarConfig,
    ...(config || {}),
    glasses: config?.glasses || 'none',
    earrings: config?.earrings || 'none',
    avatarFrame: config?.avatarFrame || 'none',
    avatarHead: config?.avatarHead || 'none',
    avatarBadge: config?.avatarBadge || 'none',
    avatarAccessory: config?.avatarAccessory || 'none',
  };
}

export function buildDiceBearAvatarUrl(config) {
  const normalizedConfig = normalizeAvatarConfig(config);
  const params = new URLSearchParams();

  params.set('seed', normalizedConfig.seed || defaultAvatarConfig.seed);

  ['hair', 'eyes', 'eyebrows', 'mouth', 'hairColor', 'skinColor'].forEach((key) => {
    if (normalizedConfig[key]) {
      params.set(key, normalizedConfig[key]);
    }
  });

  if (normalizedConfig.glasses && normalizedConfig.glasses !== 'none') {
    params.set('glasses', normalizedConfig.glasses);
    params.set('glassesProbability', '100');
  } else {
    params.set('glassesProbability', '0');
  }

  if (normalizedConfig.earrings && normalizedConfig.earrings !== 'none') {
    params.set('earrings', normalizedConfig.earrings);
    params.set('earringsProbability', '100');
  } else {
    params.set('earringsProbability', '0');
  }

  if (normalizedConfig.backgroundColor && normalizedConfig.backgroundColor !== 'transparent') {
    params.set('backgroundColor', normalizedConfig.backgroundColor);
  }

  params.set('size', '256');

  return `https://api.dicebear.com/9.x/adventurer/svg?${params.toString()}`;
}

export function buildAvatarOptionPreviewUrl(config, optionKey, optionValue) {
  return buildDiceBearAvatarUrl({
    ...normalizeAvatarConfig(config),
    [optionKey]: optionValue,
  });
}


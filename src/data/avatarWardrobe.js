import { normalizeAvatarConfig } from './avatar.js';
import { canUnlockReward, rewardCatalog } from './rewards.js';

export const avatarWardrobeSlots = [
  {
    id: 'frame',
    name: 'Marcos',
    icon: '\u{1F5BC}\uFE0F',
    configKey: 'avatarFrame',
    emptyValue: 'none',
    emptyLabel: 'Sin marco',
    description: 'Marcos conseguidos al completar retos de islas.',
  },
  {
    id: 'head',
    name: 'Cabeza',
    icon: '\u{1F451}',
    configKey: 'avatarHead',
    emptyValue: 'none',
    emptyLabel: 'Sin objeto',
    description: 'Coronas, diademas y objetos superiores ligados al avance.',
  },
  {
    id: 'badge',
    name: 'Medallas',
    icon: '\u{1F3C5}',
    configKey: 'avatarBadge',
    emptyValue: 'none',
    emptyLabel: 'Sin medalla',
    description: 'Medallas ganadas por logros concretos.',
  },
  {
    id: 'accessory',
    name: 'Accesorios',
    icon: '\u{1F9ED}',
    configKey: 'avatarAccessory',
    emptyValue: 'none',
    emptyLabel: 'Sin accesorio',
    description: 'Objetos especiales para tu explorador emocional.',
  },
  {
    id: 'background',
    name: 'Fondos premio',
    icon: '\u{1F7E1}',
    configKey: 'backgroundColor',
    emptyValue: 'transparent',
    emptyLabel: 'Sin fondo premio',
    description: 'Fondos visuales asociados a hitos de puntos.',
  },
];

export function getAvatarWardrobeRewards() {
  return rewardCatalog.filter((reward) => reward.rewardType === 'avatar' && reward.avatarSlot);
}

export function getAvatarWardrobeSections(player) {
  const ownedRewardIds = new Set(player?.ownedRewardIds || []);
  const rewards = getAvatarWardrobeRewards();

  return avatarWardrobeSlots.map((slot) => ({
    ...slot,
    items: rewards
      .filter((reward) => reward.avatarSlot === slot.id)
      .map((reward) => ({
        ...reward,
        configKey: slot.configKey,
        unlocked: canUnlockReward(reward, player),
        owned: ownedRewardIds.has(reward.id),
        lockedReason: reward.requirementLabel,
      })),
  }));
}

export function getEquippedAvatarVisuals(config) {
  const normalizedConfig = normalizeAvatarConfig(config);
  const equipped = {};

  getAvatarWardrobeRewards().forEach((reward) => {
    const slot = avatarWardrobeSlots.find((slotItem) => slotItem.id === reward.avatarSlot);

    if (!slot || normalizedConfig[slot.configKey] !== reward.avatarValue) {
      return;
    }

    equipped[slot.id] = {
      ...reward,
      configKey: slot.configKey,
    };
  });

  return equipped;
}

export function getAvatarWardrobeStats(player) {
  const rewards = getAvatarWardrobeRewards();
  const ownedRewardIds = new Set(player?.ownedRewardIds || []);
  const unlockedCount = rewards.filter((reward) => canUnlockReward(reward, player)).length;
  const ownedCount = rewards.filter((reward) => ownedRewardIds.has(reward.id)).length;

  return {
    total: rewards.length,
    unlocked: unlockedCount,
    owned: ownedCount,
    pendingToClaim: Math.max(0, unlockedCount - ownedCount),
  };
}

import { useMemo, useState } from 'react';
import AppShell from './components/AppShell.jsx';
import { defaultAvatarConfig, normalizeAvatarConfig } from './data/avatar.js';
import { futureSections } from './data/navigation.js';
import { initialPlayerState, normalizePlayerState } from './data/player.js';
import { canUnlockReward, getRewardById } from './data/rewards.js';
import useLocalStorage from './hooks/useLocalStorage.js';
import AchievementsScreen from './screens/AchievementsScreen.jsx';
import AvatarScreen from './screens/AvatarScreen.jsx';
import CalmBreathingGameScreen from './screens/CalmBreathingGameScreen.jsx';
import ChallengeRunnerScreen from './screens/ChallengeRunnerScreen.jsx';
import ChallengesHubScreen from './screens/ChallengesHubScreen.jsx';
import DiaryScreen from './screens/DiaryScreen.jsx';
import EmpathyBridgeGameScreen from './screens/EmpathyBridgeGameScreen.jsx';
import FutureSectionScreen from './screens/FutureSectionScreen.jsx';
import IslandDetailScreen from './screens/IslandDetailScreen.jsx';
import MapScreen from './screens/MapScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import RewardsScreen from './screens/RewardsScreen.jsx';
import StudentHomeScreen from './screens/StudentHomeScreen.jsx';
import StoryReaderScreen from './screens/StoryReaderScreen.jsx';
import TeacherAccessScreen from './screens/TeacherAccessScreen.jsx';
import TeacherPanelScreen from './screens/TeacherPanelScreen.jsx';
import WelcomeScreen from './screens/WelcomeScreen.jsx';
import { getEmotionById } from './data/emotions.js';
import { islandUnlockOrder } from './data/islandProgression.js';

const screens = {
  welcome: 'welcome',
  home: 'home',
  map: 'map',
  avatar: 'avatar',
  island: 'island',
  challengesHub: 'challengesHub',
  calmGame: 'calmGame',
  story: 'story',
  challenge: 'challenge',
  diary: 'diary',
  achievements: 'achievements',
  rewards: 'rewards',
  class: 'class',
  profile: 'profile',
  empathyGame: 'empathyGame',
};

function App() {
  const [storedPlayer, setPlayer] = useLocalStorage('emoplay:player', initialPlayerState);
  const [storedAvatarConfig, setAvatarConfig] = useLocalStorage(
    'emoplay_avatarDiceBearConfig',
    defaultAvatarConfig,
  );
  const player = normalizePlayerState(storedPlayer);
  const avatarConfig = normalizeAvatarConfig(storedAvatarConfig);
  const [currentScreen, setCurrentScreen] = useState(player.hasStarted ? screens.home : screens.welcome);
  const [selectedIslandId, setSelectedIslandId] = useState('ternura');
  const [isTeacherPanelUnlocked, setTeacherPanelUnlocked] = useState(false);

  const selectedIsland = useMemo(() => getEmotionById(selectedIslandId), [selectedIslandId]);

  const goHome = () => setCurrentScreen(screens.home);

  const closeTeacherPanel = () => {
    setTeacherPanelUnlocked(false);
    setCurrentScreen(screens.home);
  };

  const startAdventure = (studentName) => {
    setPlayer((currentPlayer) => ({
      ...normalizePlayerState(currentPlayer),
      hasStarted: true,
      studentName,
    }));
    setCurrentScreen(screens.home);
  };

  const updateAvatar = (nextAvatarConfig) => {
    setAvatarConfig(normalizeAvatarConfig(nextAvatarConfig));
  };

  const updateProfile = ({ studentName, className }) => {
    setPlayer((currentPlayer) => {
      const normalizedPlayer = normalizePlayerState(currentPlayer);

      return {
        ...normalizedPlayer,
        studentName,
        className,
      };
    });
  };

  const claimReward = (rewardId) => {
    setPlayer((currentPlayer) => {
      const normalizedPlayer = normalizePlayerState(currentPlayer);
      const reward = getRewardById(rewardId);

      if (
        !reward ||
        normalizedPlayer.ownedRewardIds.includes(rewardId) ||
        !canUnlockReward(reward, normalizedPlayer)
      ) {
        return normalizedPlayer;
      }

      return {
        ...normalizedPlayer,
        ownedRewardIds: [...normalizedPlayer.ownedRewardIds, rewardId],
        equippedRewardId:
          !normalizedPlayer.equippedRewardId && reward.canEquip
            ? rewardId
            : normalizedPlayer.equippedRewardId,
      };
    });
  };

  const equipReward = (rewardId) => {
    setPlayer((currentPlayer) => {
      const normalizedPlayer = normalizePlayerState(currentPlayer);
      const reward = getRewardById(rewardId);

      if (!reward || !reward.canEquip || !normalizedPlayer.ownedRewardIds.includes(rewardId)) {
        return normalizedPlayer;
      }

      return {
        ...normalizedPlayer,
        equippedRewardId: rewardId,
      };
    });
  };

  const completeStory = (islandId) => {
    setPlayer((currentPlayer) => {
      const normalizedPlayer = normalizePlayerState(currentPlayer);
      const wasCompleted = normalizedPlayer.completedStories.includes(islandId);
      const completedStories = wasCompleted
        ? normalizedPlayer.completedStories
        : [...normalizedPlayer.completedStories, islandId];
      const storyAchievementId = `cuento_${islandId}`;
      let achievements =
        wasCompleted || normalizedPlayer.achievements.includes(storyAchievementId)
          ? normalizedPlayer.achievements
          : [...normalizedPlayer.achievements, storyAchievementId];
      const unlockedIslands = [...normalizedPlayer.unlockedIslands];
      const currentIslandIndex = islandUnlockOrder.indexOf(islandId);
      const nextIslandId =
        currentIslandIndex >= 0 ? islandUnlockOrder[currentIslandIndex + 1] : '';

      if (nextIslandId && !unlockedIslands.includes(nextIslandId)) {
        unlockedIslands.push(nextIslandId);
        const unlockAchievementId = `desbloqueo_${nextIslandId}`;

        if (!achievements.includes(unlockAchievementId)) {
          achievements = [...achievements, unlockAchievementId];
        }
      }

      const nextPlayer = {
        ...normalizedPlayer,
        points: normalizedPlayer.points + (wasCompleted ? 0 : 25),
        achievements,
        completedStories,
        unlockedIslands,
      };

      window.localStorage.setItem(`cuento_${islandId}_completado`, 'true');
      window.localStorage.setItem('emoplay_puntos', JSON.stringify(nextPlayer.points));
      window.localStorage.setItem('islasCompletadas', JSON.stringify(nextPlayer.unlockedIslands));

      return nextPlayer;
    });
  };

  const openIsland = (islandId) => {
    setSelectedIslandId(islandId);
    setCurrentScreen(screens.island);
  };

  const openStory = (islandId) => {
    setSelectedIslandId(islandId);
    setCurrentScreen(screens.story);
  };

  const openChallenges = (islandId) => {
    setSelectedIslandId(islandId);
    setCurrentScreen(screens.challenge);
  };

  const openMiniGame = (islandId) => {
    setSelectedIslandId(islandId);
    if (islandId === 'calma') {
      setCurrentScreen(screens.calmGame);
      return;
    }

    if (islandId === 'empatia') {
      setCurrentScreen(screens.empathyGame);
    }
  };

  const completeMiniGame = (islandId) => {
    setPlayer((currentPlayer) => {
      const normalizedPlayer = normalizePlayerState(currentPlayer);
      const wasCompleted = normalizedPlayer.completedMiniGameIds.includes(islandId);
      const miniGameAchievementId = `minijuego_${islandId}`;
      const achievements =
        wasCompleted || normalizedPlayer.achievements.includes(miniGameAchievementId)
          ? normalizedPlayer.achievements
          : [...normalizedPlayer.achievements, miniGameAchievementId];
      const completedMiniGameIds = wasCompleted
        ? normalizedPlayer.completedMiniGameIds
        : [...normalizedPlayer.completedMiniGameIds, islandId];
      const nextPlayer = {
        ...normalizedPlayer,
        points: normalizedPlayer.points + (wasCompleted ? 0 : 20),
        achievements,
        completedMiniGameIds,
      };

      window.localStorage.setItem(`minijuego_${islandId}_completado`, 'true');
      window.localStorage.setItem('emoplay_puntos', JSON.stringify(nextPlayer.points));

      return nextPlayer;
    });
  };

  const awardChallengePoints = (pointsDelta) => {
    setPlayer((currentPlayer) => {
      const normalizedPlayer = normalizePlayerState(currentPlayer);
      const nextPoints = Math.max(0, normalizedPlayer.points + pointsDelta);
      const nextPlayer = {
        ...normalizedPlayer,
        points: nextPoints,
      };

      window.localStorage.setItem('emoplay_puntos', JSON.stringify(nextPlayer.points));

      return nextPlayer;
    });
  };

  const completeChallengeSet = (islandId) => {
    setPlayer((currentPlayer) => {
      const normalizedPlayer = normalizePlayerState(currentPlayer);
      const wasCompleted = normalizedPlayer.completedChallengeIds.includes(islandId);
      const completedChallengeIds = wasCompleted
        ? normalizedPlayer.completedChallengeIds
        : [...normalizedPlayer.completedChallengeIds, islandId];
      const challengeAchievementId = `reto_${islandId}`;
      const achievements =
        wasCompleted || normalizedPlayer.achievements.includes(challengeAchievementId)
          ? normalizedPlayer.achievements
          : [...normalizedPlayer.achievements, challengeAchievementId];
      const nextPlayer = {
        ...normalizedPlayer,
        achievements,
        completedChallengeIds,
        completedChallenges: wasCompleted
          ? normalizedPlayer.completedChallenges
          : normalizedPlayer.completedChallenges + 1,
      };

      window.localStorage.setItem(`reto_${islandId}_completado`, 'true');
      window.localStorage.setItem(
        'emoplay_retosCompletados',
        JSON.stringify(nextPlayer.completedChallenges),
      );

      return nextPlayer;
    });
  };

  if (currentScreen === screens.welcome) {
    return <WelcomeScreen onStart={startAdventure} savedName={player.studentName} />;
  }

  const renderScreen = () => {
    if (currentScreen === screens.map) {
      return (
        <MapScreen
          player={player}
          unlockedIslands={player.unlockedIslands}
          onOpenIsland={openIsland}
          onStartStory={openStory}
          onStartChallenges={openChallenges}
          onStartMiniGame={openMiniGame}
          onOpenChallengesHub={() => setCurrentScreen(screens.challengesHub)}
        />
      );
    }

    if (currentScreen === screens.avatar) {
      return (
        <AvatarScreen
          avatarConfig={avatarConfig}
          onAvatarChange={updateAvatar}
          onClaimReward={claimReward}
          player={player}
        />
      );
    }

    if (currentScreen === screens.achievements) {
      return <AchievementsScreen player={player} onGoMap={() => setCurrentScreen(screens.map)} />;
    }

    if (currentScreen === screens.rewards) {
      return (
        <RewardsScreen
          player={player}
          onClaimReward={claimReward}
          onEquipReward={equipReward}
          onGoMap={() => setCurrentScreen(screens.map)}
        />
      );
    }

    if (currentScreen === screens.profile) {
      return (
        <ProfileScreen
          player={player}
          avatarConfig={avatarConfig}
          onSaveProfile={updateProfile}
          onGoAvatar={() => setCurrentScreen(screens.avatar)}
          onGoMap={() => setCurrentScreen(screens.map)}
        />
      );
    }

    if (currentScreen === screens.diary) {
      return <DiaryScreen player={player} onGoMap={() => setCurrentScreen(screens.map)} />;
    }

    if (currentScreen === screens.challengesHub) {
      return (
        <ChallengesHubScreen
          player={player}
          onStartChallenges={openChallenges}
          onStartStory={openStory}
          onStartMiniGame={openMiniGame}
          onGoMap={() => setCurrentScreen(screens.map)}
        />
      );
    }

    if (currentScreen === screens.class) {
      if (!isTeacherPanelUnlocked) {
        return (
          <TeacherAccessScreen
            onAccessGranted={() => setTeacherPanelUnlocked(true)}
            onGoHome={goHome}
          />
        );
      }

      return (
        <TeacherPanelScreen
          player={player}
          avatarConfig={avatarConfig}
          onGoMap={() => setCurrentScreen(screens.map)}
          onOpenDiary={() => setCurrentScreen(screens.diary)}
          onLockPanel={closeTeacherPanel}
        />
      );
    }

    if (futureSections[currentScreen]) {
      return (
        <FutureSectionScreen
          section={futureSections[currentScreen]}
          player={player}
          avatarConfig={avatarConfig}
        />
      );
    }

    if (currentScreen === screens.island) {
      return (
        <IslandDetailScreen
          island={selectedIsland}
          isUnlocked={player.unlockedIslands.includes(selectedIsland?.id)}
          storyCompleted={player.completedStories.includes(selectedIsland?.id)}
          miniGameCompleted={player.completedMiniGameIds.includes(selectedIsland?.id)}
          onStartStory={openStory}
          onStartMiniGame={openMiniGame}
          onStartChallenges={openChallenges}
          onGoMap={() => setCurrentScreen(screens.map)}
        />
      );
    }

    if (currentScreen === screens.calmGame) {
      return (
        <CalmBreathingGameScreen
          island={selectedIsland}
          gameCompleted={player.completedMiniGameIds.includes('calma')}
          onCompleteMiniGame={completeMiniGame}
          onGoIsland={() => setCurrentScreen(screens.island)}
          onStartChallenges={openChallenges}
        />
      );
    }

    if (currentScreen === screens.empathyGame) {
      return (
        <EmpathyBridgeGameScreen
          island={selectedIsland}
          gameCompleted={player.completedMiniGameIds.includes('empatia')}
          onCompleteMiniGame={completeMiniGame}
          onGoIsland={() => setCurrentScreen(screens.island)}
          onStartChallenges={openChallenges}
        />
      );
    }

    if (currentScreen === screens.story) {
      return (
        <StoryReaderScreen
          island={selectedIsland}
          isUnlocked={player.unlockedIslands.includes(selectedIsland?.id)}
          storyCompleted={player.completedStories.includes(selectedIsland?.id)}
          miniGameCompleted={player.completedMiniGameIds.includes(selectedIsland?.id)}
          onCompleteStory={completeStory}
          onGoIsland={() => setCurrentScreen(screens.island)}
          onGoMap={() => setCurrentScreen(screens.map)}
          onStartChallenges={openChallenges}
          onStartMiniGame={openMiniGame}
        />
      );
    }

    if (currentScreen === screens.challenge) {
      return (
        <ChallengeRunnerScreen
          island={selectedIsland}
          isUnlocked={player.unlockedIslands.includes(selectedIsland?.id)}
          storyCompleted={player.completedStories.includes(selectedIsland?.id)}
          miniGameCompleted={player.completedMiniGameIds.includes(selectedIsland?.id)}
          challengeCompleted={player.completedChallengeIds.includes(selectedIsland?.id)}
          onAwardPoints={awardChallengePoints}
          onCompleteChallengeSet={completeChallengeSet}
          onGoIsland={() => setCurrentScreen(screens.island)}
          onGoMap={() => setCurrentScreen(screens.map)}
          onOpenRewards={() => setCurrentScreen(screens.rewards)}
        />
      );
    }

    return (
      <StudentHomeScreen
        player={player}
        onGoMap={() => setCurrentScreen(screens.map)}
        onGoAvatar={() => setCurrentScreen(screens.avatar)}
        onOpenSection={(screenId) => setCurrentScreen(screenId)}
        avatarConfig={avatarConfig}
      />
    );
  };

  return (
    <AppShell
      player={player}
      avatarConfig={avatarConfig}
      onGoHome={goHome}
      onOpenTeacherPanel={() => setCurrentScreen(screens.class)}
    >
      {renderScreen()}
    </AppShell>
  );
}

export default App;

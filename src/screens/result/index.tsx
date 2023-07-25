import { Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import Button from '../../components/button';
import ChoiceIcon from '../../components/choiceIcon';
import Scoreboard from '../home/components/scoreboard';

import useComputerPick from '../../hooks/useComputerPick';
import useWinner from '../../hooks/useWinner';
import { gameChoice } from '../../utils/gameChoice';

import { useNavigation, useRoute } from '@react-navigation/native';

export default function Result() {
  const { navigate } = useNavigation();
  const { params } = useRoute();

  const computerChoice = useComputerPick();

  const winner = useWinner({
    playerChoice: params?.id,
    computerChoice: computerChoice
  });

  return (
    <View className="flex-1 bg-blue-950 px-8 pb-4 pt-16">
      <Scoreboard />
      <View className="m-auto mt-24 h-[320px] w-[320px] justify-center">
        <Animated.View entering={FadeIn.duration(2000)}>
          <ChoiceIcon
            Choice={gameChoice[computerChoice]}
            key={computerChoice}
            initialX={220}
            initialY={30}
            finalX={220}
            finalY={30}
          />
        </Animated.View>
        <ChoiceIcon
          Choice={gameChoice[params?.id]}
          key={params?.id}
          initialX={gameChoice[params?.id].position.x}
          initialY={gameChoice[params?.id].position.y}
          finalX={-20}
          finalY={60}
        />
      </View>
      <Animated.View entering={FadeIn.duration(1000).delay(1200)}>
        {winner !== 'tie' && (
          <Text className="text-center text-4xl font-bold text-white">
            {winner === 'player' ? 'YOU WIN' : 'YOU LOSE'}
          </Text>
        )}
        {winner === 'tie' && (
          <Text className="text-center text-4xl font-bold text-white">TIE</Text>
        )}
      </Animated.View>
      <Button className="mt-auto" onPress={() => navigate('home')}>
        <Text className="text-center text-lg font-bold text-white">
          NEW GAME
        </Text>
      </Button>
    </View>
  );
}

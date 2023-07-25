import { Text, View } from 'react-native';

import Button from '../../components/button';
import Picker from './components/picker';
import Scoreboard from './components/scoreboard';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <View className="flex-1 bg-blue-950 px-8 pb-4 pt-16">
      <Scoreboard />
      <Picker />
      <View className="m-auto flex w-full flex-row gap-3">
        <Button onPress={() => navigate('modal')}>
          <Text className="text-center text-lg font-bold text-white">
            RULES
          </Text>
        </Button>
        <Button>
          <Text className="text-center text-lg font-bold text-white">
            RESET SCORE
          </Text>
        </Button>
      </View>
    </View>
  );
}

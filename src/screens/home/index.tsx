import { Text, View } from 'react-native';

import Button from '../../components/button';
import Picker from './components/picker';
import Scoreboard from './components/scoreboard';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const { navigate } = useNavigation();
  return (
    <View className="flex-1 px-8 pt-16 bg-blue-950">
      <Scoreboard />
      <Picker />
      <View className="flex flex-row w-full gap-3 m-auto">
        <Button onPress={() => navigate('modal')}>
          <Text className="text-white font-bold text-lg text-center">
            RULES
          </Text>
        </Button>
        <Button>
          <Text className="text-white font-bold text-lg text-center">
            RESET SCORE
          </Text>
        </Button>
      </View>
    </View>
  );
}

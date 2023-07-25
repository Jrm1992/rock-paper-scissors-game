import { ImageBackground, View } from 'react-native';

import ChoiceIcon from '../../../components/choiceIcon';

import { gameChoice } from '../../../utils/gameChoice';

import { useNavigation } from '@react-navigation/native';
export default function Picker() {
  const { navigate } = useNavigation();
  return (
    <ImageBackground
      source={require('../../../../assets/bg-pentagon.png')}
      resizeMode="contain"
      className="flex-1 justify-center"
    >
      <View className="mt-24 flex flex-1 items-center">
        {gameChoice.map((choice) => (
          <ChoiceIcon
            key={choice.id}
            Choice={choice}
            finalX={choice.position.x}
            finalY={choice.position.y}
            onPress={() => navigate('result', { id: choice.id })}
          />
        ))}
      </View>
    </ImageBackground>
  );
}

import { Image, Text, View } from 'react-native';

import Button from '../button';

import { useNavigation } from '@react-navigation/native';

export default function RulesModal() {
  const { navigate } = useNavigation();
  return (
    <View className="m-auto flex items-center justify-center rounded bg-gray-100 px-4 py-40">
      <Button
        className="absolute right-8 top-8 z-10 h-12 w-12"
        onPress={() => navigate('home')}
      >
        <Text className="text-center text-lg font-bold text-red-600">X</Text>
      </Button>
      <View className="">
        <Image
          source={require('../../../assets/image-rules-bonus.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

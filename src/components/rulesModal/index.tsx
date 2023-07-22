import { Image, Text, View } from 'react-native';

import Button from '../button';

import { useNavigation } from '@react-navigation/native';

export default function RulesModal() {
  const { navigate } = useNavigation();
  return (
    <View className="flex justify-center items-center m-auto px-4 py-40 bg-gray-100 rounded">
      <Button
        className="w-12 h-12 absolute top-8 right-8 z-10"
        onPress={() => navigate('home')}
      >
        <Text className="text-red-600 font-bold text-lg text-center">X</Text>
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

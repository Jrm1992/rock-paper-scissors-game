import { Image, View } from 'react-native';

export default function Result() {
  return (
    <View className="flex-1 justify-center items-center m-auto px-4 py-40 bg-gray-100 rounded">
      <Image
        source={require('../../../assets/image-rules-bonus.png')}
        resizeMode="contain"
      />
    </View>
  );
}

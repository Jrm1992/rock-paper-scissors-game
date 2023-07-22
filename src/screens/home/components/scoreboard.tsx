import { Image, Text, View } from 'react-native';

export default function Scoreboard() {
  return (
    <View className="flex flex-row justify-between items-center border-2 border-gray-400 rounded p-4">
      <View>
        <Image
          source={require('../../../../assets/logo-bonus.png')}
          resizeMode="contain"
        />
      </View>
      <View className="flex flex-row gap-4">
        <View className="w-[88px] h-20 rounded flex flex-col items-center bg-white p-2">
          <Text className="text-blue-700 font-bold text-xs">SCORE</Text>
          <Text className="text-blue-950 font-bold text-4xl mt-1">5</Text>
        </View>
      </View>
    </View>
  );
}

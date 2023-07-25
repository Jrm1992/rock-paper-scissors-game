import { Image, Text, View } from 'react-native';

export default function Scoreboard() {
  return (
    <View className="flex flex-row items-center justify-between rounded border-2 border-gray-400 p-4">
      <View>
        <Image
          source={require('../../../../assets/logo-bonus.png')}
          resizeMode="contain"
        />
      </View>
      <View className="flex flex-row gap-4">
        <View className="flex h-20 w-[88px] flex-col items-center rounded bg-white p-2">
          <Text className="text-xs font-bold text-blue-700">SCORE</Text>
          <Text className="mt-1 text-4xl font-bold text-blue-950">5</Text>
        </View>
      </View>
    </View>
  );
}

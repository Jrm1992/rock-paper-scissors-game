import { Image, ImageBackground, View } from 'react-native';

export default function Picker() {
  return (
    <ImageBackground
      source={require('../../../../assets/bg-pentagon.png')}
      resizeMode="contain"
      className="flex-1 justify-center"
    >
      <View className="flex-1 mt-24">
        <View className="border-[8px] absolute left-[50%] -translate-x-14 border-orange-400 bg-white rounded-full flex justify-center items-center w-24 h-24 m-2">
          <Image source={require('../../../../assets/icon-scissors.png')} />
        </View>
        <View className="border-[8px] absolute top-[20%] -right-[8%] border-blue-500 bg-white rounded-full flex justify-center items-center w-24 h-24 m-2">
          <Image source={require('../../../../assets/icon-paper.png')} />
        </View>
        <View className="border-[8px] absolute top-[20%] -left-[8%] border-cyan-400 bg-white rounded-full flex justify-center items-center w-24 h-24 m-2">
          <Image source={require('../../../../assets/icon-spock.png')} />
        </View>
        <View className="border-[8px] absolute top-[58%] left-[8%] border-purple-600 bg-white rounded-full flex justify-center items-center w-24 h-24 m-2">
          <Image source={require('../../../../assets/icon-lizard.png')} />
        </View>
        <View className="border-[8px] absolute top-[58%] right-[8%] border-red-600 bg-white rounded-full flex justify-center items-center w-24 h-24 m-2">
          <Image source={require('../../../../assets/icon-rock.png')} />
        </View>
      </View>
    </ImageBackground>
  );
}

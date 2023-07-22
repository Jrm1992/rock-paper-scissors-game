import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
export default function Picker() {
  const { navigate } = useNavigation();
  return (
    <ImageBackground
      source={require('../../../../assets/bg-pentagon.png')}
      resizeMode="contain"
      className="flex-1 justify-center"
    >
      <View className="flex-1 flex items-center mt-24">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigate('result')}
          className="absolute left-[50%] -translate-x-14 border-orange-400 border-8 bg-white rounded-full flex justify-center items-center w-24 h-24 m-2"
        >
          <Image source={require('../../../../assets/icon-scissors.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          className="absolute top-[20%] -right-[8%] border-blue-500 border-8 bg-white rounded-full flex justify-center items-center w-24 h-24 m-2"
        >
          <Image source={require('../../../../assets/icon-paper.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          className="absolute top-[20%] -left-[8%] border-cyan-400 border-8 bg-white rounded-full flex justify-center items-center w-24 h-24 m-2"
        >
          <Image source={require('../../../../assets/icon-spock.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          className="absolute top-[58%] left-[8%] border-purple-600 border-8 bg-white rounded-full flex justify-center items-center w-24 h-24 m-2"
        >
          <Image source={require('../../../../assets/icon-lizard.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          className="absolute top-[58%] right-[8%] border-red-600 border-8 bg-white rounded-full flex justify-center items-center w-24 h-24 m-2"
        >
          <Image source={require('../../../../assets/icon-rock.png')} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

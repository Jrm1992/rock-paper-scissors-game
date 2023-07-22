import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  useFonts
} from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Routes />
      <StatusBar translucent backgroundColor="transparent" style="light" />
    </>
  );
}

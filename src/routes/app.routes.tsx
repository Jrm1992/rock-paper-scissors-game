import RulesModal from '../components/rulesModal';

import Home from '../screens/home';
import Result from '../screens/result';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Group>
        <Screen name="home" component={Home} />
        <Screen name="result" component={Result} />
      </Group>
      <Group screenOptions={{ presentation: 'transparentModal' }}>
        <Screen name="modal" component={RulesModal} />
      </Group>
    </Navigator>
  );
}

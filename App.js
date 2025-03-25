import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home/HomeScreen';
import CronometroScreen from './screens/cronometro/CronometroScreen';

const Tab = createBottomTabNavigator();export default function App() {
return (
<NavigationContainer>
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen} />
</Tab.Navigator>
</NavigationContainer>
);
}
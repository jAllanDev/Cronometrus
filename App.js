import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home"><Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
    );
    }

   //  <Drawer.Screen name="Tarefas" component={TarefaScreen} />

   // <Drawer.Screen name="Cronômetro" component={CronometroScreen} />
   
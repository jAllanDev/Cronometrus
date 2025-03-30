import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/home/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CronometroScreen from './screens/cronometro/CronometroScreen';
import TarefaScreen from './screens/tarefa/TarefaScreen';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Cronômetro" component={CronometroScreen} />
                <Drawer.Screen name="Tarefas" component={TarefaScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}


   


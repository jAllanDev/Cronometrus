import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomButton from '../../componentes/CustomButton/CustomButton';
import TextInputBox from '../../componentes/TextInputBox/TextInputBox';
import { Ionicons } from '@expo/vector-icons';
import ListarScreen from './listar/ListarScreen';
import DateTimePicker from '@react-native-community/datetimepicker';

const Tab = createBottomTabNavigator();

function TarefaScreen() {
  const [tarefa, setTarefa] = useState("");
  const [data, setData] = useState("");

  const handleSalvar = () => {
    console.log(`Tarefa: ${tarefa}, Data: ${data}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Tarefas</Text>

      <TextInputBox
        value={tarefa}
        onChangeText={setTarefa}
        placeholder="Digite a tarefa"
        keyboardType="default"
      />

      <TextInputBox
        value={data}
        onChangeText={setData}
        placeholder="Digite a data"
        keyboardType="numeric"
      />

      <CustomButton title="Salvar" onPress={handleSalvar} style={styles.button} />
    </View>
  );
}

// Tab.Navigator da Screen tarefas

function TarefaNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Cadastro') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Listar') {
            iconName = focused ? 'list' : 'list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Cadastro" component={TarefaScreen} />
      <Tab.Screen name="Listar" component={ListarScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  }
});

export default TarefaNavigator;
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CustomButton from '../../componentes/CustomButton/CustomButton';
import TextInputBox from '../../componentes/TextInputBox/TextInputBox';

function TarefaScreen() {

    const [tarefa, setTarefa] = useState("");
    const [data, setData] = useState("");

    const handleSalvar = () => {
        console.log(`Tarefa: ${tarefa}, Data: ${data}`);
        // Aqui você pode adicionar lógica para salvar os dados
    };

    return (

<Tab.Navigator>
<Tab.Screen name="Cadastrar" component={Cadastrar} />
<Tab.Screen name="Listar" component={Listar} />

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

            <CustomButton title="Salvar"
            onPress={handleSalvar}
            style={styles.button} />


        </View>
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
    }, picker: {
        height: 50,
        width: 200,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    }
});
export default TarefaScreen; 
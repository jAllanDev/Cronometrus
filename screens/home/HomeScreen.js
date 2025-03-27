import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Image 
    style={{ width: 300, height: 250 }} 
    source={{ uri: 'https://png.pngtree.com/png-clipart/20231013/original/pngtree-simple-yellow-stopwatch-icon-vector-png-image_13296184.png' }} 
/>
            <Text>Home Screen</Text>
        </View>
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
export default HomeScreen; 
import React, { useState, useEffect } from 'react';  // Importando o useState e useEffect
import { View, Text, Button, StyleSheet } from 'react-native';  // Importando o Button

const CronometroScreen = () => {
  const [seconds, setSeconds] = useState(0);  // Contador em segundos
  const [isRunning, setIsRunning] = useState(false);  

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);  // Incrementando o contador de segundos a cada 1 segundo
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);  
  };

  const resetTimer = () => {
    setSeconds(0);  
    setIsRunning(false);  
  };

 
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);  
    const seconds = timeInSeconds % 60;  
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(seconds)}</Text>
      <Button title={isRunning ? 'Parar' : 'Começar'} onPress={toggleTimer} />
      <Button title="Resetar" onPress={resetTimer} />

      <Tab.Navigator>
<       Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={CalculoScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default CronometroScreen;

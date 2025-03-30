import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PomodoroScreen from './pomodoro/PomodoroScreen';  // Certifique-se de que PomodoroScreen está exportado corretamente.

const Tab = createBottomTabNavigator();

const CronometroScreen = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
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
    <Tab.Navigator>
      <Tab.Screen name="Cronômetro">
        {(props) => (
          <View style={styles.container}>
            <Text style={styles.timerText}>{formatTime(seconds)}</Text>
            <Button title={isRunning ? 'Parar' : 'Começar'} onPress={toggleTimer} />
            <Button title="Resetar" onPress={resetTimer} />
          </View>
        )}
      </Tab.Screen>
      <Tab.Screen name="Pomodoro" component={PomodoroScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default CronometroScreen;

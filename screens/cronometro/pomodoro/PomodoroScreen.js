import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PomodoroScreen = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutos em segundos
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true); // Alterna entre trabalho e descanso

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setIsWorkSession((prev) => !prev); // Alterna entre trabalho e descanso
            return isWorkSession ? 5 * 60 : 25 * 60; // 5 min descanso, 25 min trabalho
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, isWorkSession]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(25 * 60);
    setIsWorkSession(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sessionText}>
        {isWorkSession ? 'Foco' : 'Descanso'}
      </Text>
      <Text style={styles.timerText}>{formatTime(time)}</Text>
      <Button title={isRunning ? 'Pausar' : 'Iniciar'} onPress={toggleTimer} />
      <Button title="Resetar" onPress={resetTimer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  sessionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default PomodoroScreen;



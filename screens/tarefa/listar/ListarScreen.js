import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function ListarScreen({ tarefas }) {
  const renderItem = ({ item }) => (
    <View style={styles.tarefaItem}>
      <Text style={styles.tarefaDescricao}>{item.descricao}</Text>
      <Text style={styles.tarefaData}>{item.data}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      
      {tarefas.length > 0 ? (
        <FlatList
          data={tarefas}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <Text style={styles.emptyMessage}>Nenhuma tarefa cadastrada</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  tarefaItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  tarefaDescricao: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tarefaData: {
    fontSize: 14,
    color: '#666',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 50,
    color: '#666',
  }
});

export default ListarScreen;


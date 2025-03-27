import React, { createContext, useState, useContext } from 'react';

const TarefaContext = createContext();

export const TarefaProvider = ({ children }) => {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa]);
  };

  return (
    <TarefaContext.Provider value={{ tarefas, adicionarTarefa }}>
      {children}
    </TarefaContext.Provider>
  );
};

export const useTarefas = () => useContext(TarefaContext);
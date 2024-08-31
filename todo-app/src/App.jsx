import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
// import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="container mx-auto  p-4 flex justify-center items-center flex-col">
      <h1 className="text-4xl mb-4">Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;

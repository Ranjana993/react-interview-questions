import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todo = useSelector(state => state.todo);

  return (
    <div className='w-[58%]'>
      {todo?.length === 0 ? (
        <p>No todos available</p>
      ) : (
        todo.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};

export default TodoList;

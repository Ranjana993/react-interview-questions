import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo({
      id: Date.now(),
      text,
      done: false
    }));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex w-full items-center justify-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        className="border p-2 w-1/2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2  ml-2">Add Todo</button>
    </form>
  );
};

export default TodoForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleDoneTodo, updateTodo } from '../redux/slices/todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    dispatch(updateTodo({ id: todo.id, text, done: todo.done }));
    setEditing(false);
  };

  return (
    <div className="flex  justify-between w-full p-2 border-b">
      <div className='w-full flex justify-between'>
        {editing ? (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-2 w-full"
          />
        ) : (
          <span
            onClick={() => dispatch(toggleDoneTodo(todo.id))}
            className={`${todo.done ? 'line-through' : ''} cursor-pointer  p-2 w-full`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className='flex'>
        {editing ? (
          <button onClick={handleUpdate} className="bg-green-500 text-white p-1 mr-2 px-8">Save</button>
        ) : (
          <button onClick={() => setEditing(true)} className="bg-yellow-500 text-white p-1 mr-2 px-8">Edit</button>
        )}
        <button onClick={() => dispatch(deleteTodo(todo.id))} className="bg-red-500 text-white p-1 px-8">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;

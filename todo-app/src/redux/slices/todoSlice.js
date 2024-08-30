import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state))
    },
    deleteTodo: (state, action) => {
      const updatedTodos = state.filter(todo => todo.id !== action.payload);
      return updatedTodos;
    },
    updateTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index] = action.payload;
      localStorage.setItem("todos", JSON.stringify(state))
    },
    toggleDoneTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      state[index].done = !state[index].done;
      localStorage.setItem('todos', JSON.stringify(state));
    }
  }
})

export const {addTodo , deleteTodo , updateTodo, toggleDoneTodo} = todoSlice.actions
export default todoSlice.reducer;
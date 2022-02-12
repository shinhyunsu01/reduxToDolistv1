import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";
/*
const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteTodo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteTodo,
};

export default store;
*/

const toDos = createSlice({
  name: "toDosReducder",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter((toDo) => toDo.id !== action.id),
  },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });

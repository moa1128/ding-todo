import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TodoState {
  id: number,
  text: string,
  complete: boolean
};

var nextId = 0;
const initialState: TodoState[] = [];

const todoSlice = createSlice({
  name: 'todo-slice',
  initialState,
  reducers: {
    add(state, action: PayloadAction<string>) {
      nextId++;
      state.push({
        id: nextId,
        text: action.payload,
        complete: false
      });
    },
    remove(state, action: PayloadAction<number>) {
      return state.filter(st => st.id !== action.payload);
    },
    complete(state, action: PayloadAction<number>) {
      return state.map(st => st.id === action.payload ? { ...st, complete: !st.complete } : st);
    },
  },
});
export default todoSlice;
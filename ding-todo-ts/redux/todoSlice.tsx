import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoType } from '@/types/todo';

var nextId = 0;
const initialState: TodoType[] = [];

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
    edit(state, action: PayloadAction<TodoType>) {
      return state.map(st => st.id === action.payload.id ? { ...st, text: action.payload.text } : st);
    },
    sort(_, action: PayloadAction<TodoType[]>) {
      return action.payload;
    }
  },
});
export default todoSlice;
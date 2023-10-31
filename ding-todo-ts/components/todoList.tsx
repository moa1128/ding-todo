import * as React from 'react';
import List from '@mui/material/List';
import { TodoType } from '@/types/todo';
import TodoItem from './todoItem';

export default function TodoList({ todoList = [] }: {
  todoList: TodoType[]
}) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {todoList && todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </List>
  );
}
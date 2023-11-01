import * as React from 'react';
import List from '@mui/material/List';
import { TodoType } from '@/types/todo';
import TodoItem from './todoItem';

export default function TodoList({ todoList = [], visibleCompleted }: {
  todoList: TodoType[],
  visibleCompleted: boolean
}) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {todoList && todoList.map((todo) => {
        if (!visibleCompleted && todo.complete) {
          return "";
        }
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </List>
  );
}
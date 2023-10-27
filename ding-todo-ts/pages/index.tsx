import * as React from 'react';
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { add } from "@/redux/store";
import TodoList from '@/components/todoList';
import layoutStyles from '@/styles/layout.module.css';
import TodoTextField from '@/components/todoTextField';

export default function Home() {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(state => state.todo);

  const addTodo = (newTodo: string) => {
    dispatch(add(newTodo));
  }

  return (
    <div className={layoutStyles.container}>
      <header className={layoutStyles.header}>
        <h2>Ding's TODO List</h2>
      </header>
      <main>
        <TodoTextField addTodo={addTodo} />
        <TodoList todoList={todoList} />
      </main>
    </div>
  )
}

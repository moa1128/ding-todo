import * as React from 'react';
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { sort } from "@/redux/store";
import TodoList from '@/components/todoList';
import layoutStyles from '@/styles/layout.module.css';
import TodoTextField from '@/components/todoTextField';

export default function Home() {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(state => state.todo);
  const [visibleCompleted, setVisibleCompleted] = React.useState(true);

  const handleSort = (sortType: string) => {
    const sortedList = [...todoList];

    const sortProperty = sortType === "date" ? "id" : "text";
    sortedList.sort((todo1, todo2) => {
      if (todo1[sortProperty] < todo2[sortProperty]) {
        return -1;
      } else if (todo1[sortProperty] > todo2[sortProperty]) {
        return 1;
      }
      return 0;
    });

    dispatch(sort(sortedList));
  }

  const handleVisible = (visible: boolean) => {
    setVisibleCompleted(visible);
  }

  return (
    <div className={layoutStyles.container}>
      <header className={layoutStyles.header}>
        <h2>Ding's TODO List</h2>
      </header>
      <main>
        <TodoTextField handleListBySort={handleSort} handleListByVisible={handleVisible} />
        <TodoList todoList={todoList} visibleCompleted={visibleCompleted} />
      </main>
    </div>
  )
}

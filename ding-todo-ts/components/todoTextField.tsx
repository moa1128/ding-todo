import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';

const initialValue = "";
export default function TodoTextField({ addTodo }: { addTodo: Function }) {
  const [newTodo, setNewTodo] = React.useState(initialValue);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo(newTodo);
      setNewTodo(initialValue);
    }
  }

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  return <OutlinedInput
    value={newTodo}
    onKeyPress={handleKeyPress}
    onChange={onChangeTodo}
    placeholder="Please enter text" />;
}
import * as React from 'react';
import { useAppDispatch } from "@/redux/hooks";
import { add } from "@/redux/store";
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import TodoMenuButton from './todoMenuButton';

const INIT_VALUE = "";
export default function TodoTextField({ handleListBySort, handleListByVisible }: { handleListBySort: Function; handleListByVisible: Function }) {
  const dispatch = useAppDispatch();
  const [newTodo, setNewTodo] = React.useState(INIT_VALUE);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      dispatch(add(newTodo));
      setNewTodo(INIT_VALUE);
    }
  }

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  return (
    <Box component={"span"}>
      <OutlinedInput
        value={newTodo}
        onKeyPress={handleKeyPress}
        onChange={onChangeTodo}
        sx={{ width: "calc(100% - 40px)" }}
        placeholder="Please enter text" />
      <TodoMenuButton handleListBySort={handleListBySort} handleListByVisible={handleListByVisible} />
    </Box>
  );
}
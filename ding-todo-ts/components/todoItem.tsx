import * as React from 'react';
import { useAppDispatch } from "@/redux/hooks";
import { complete, remove, edit } from "@/redux/store";
import { TodoType } from '@/types/todo';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function TodoItem({ todo }: { todo: TodoType }) {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = React.useState(false);
  const ref = React.useRef();
  const [text, setText] = React.useState(todo.text);

  const handleToggle = (todo: TodoType) => () => {
    dispatch(complete(todo.id));
    setChecked(!checked);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (e.target as HTMLInputElement).blur();
    }
  }

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setText(newValue);
    dispatch(edit({ ...todo, text: newValue }));
  }

  return (
    <ListItem
      key={todo.id}
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={() => dispatch(remove(todo.id))}>
          <HighlightOffIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            onClick={handleToggle(todo)}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText id={todo.id.toString()} primary={<InputBase
          inputRef={ref}
          value={text}
          onKeyPress={handleKeyPress}
          onChange={onChangeTodo}
          fullWidth />} />
      </ListItemButton>
    </ListItem>
  )
};
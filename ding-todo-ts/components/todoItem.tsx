import * as React from 'react';
import { useAppDispatch } from "@/redux/hooks";
import { complete, remove } from "@/redux/store";
import { TodoType } from '@/types/todo';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function TodoItem({ todo }: { todo: TodoType }) {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = React.useState(true);

  const handleToggle = (todo: TodoType) => () => {
    dispatch(complete(todo.id));
    setChecked(!checked);
  };

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
      <ListItemButton role={undefined} onClick={handleToggle(todo)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText id={todo.id.toString()} primary={todo.text} />
      </ListItemButton>
    </ListItem>
  )
};
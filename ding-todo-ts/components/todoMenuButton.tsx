import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Check from '@mui/icons-material/Check';

const ITEM_HEIGHT = 48;
export default function TodoMenuButton({ handleListBySort, handleListByVisible }: { handleListBySort: Function; handleListByVisible: Function }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [sort, setSort] = React.useState("date");
  const [visibleCompleted, setVisibleCompleted] = React.useState(true);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleVisible = () => {
    handleClose();

    const visible = !visibleCompleted;
    setVisibleCompleted(visible);
    handleListByVisible(visible);
  }

  const SortMenuItem = ({ id }: { id: string }) => {
    const getSortText = (id: string) => {
      return id === "date" ? "생성일" : "제목순";
    }

    const handleSort = (e: React.MouseEvent<HTMLElement>) => {
      handleClose();

      const sortType = e.currentTarget.id;
      setSort(sortType);
      handleListBySort(sortType);
    }

    return (
      <MenuItem id={id} onClick={handleSort} disableRipple>
        {
          sort === id ? (
            <ListItemIcon>
              <Check />
            </ListItemIcon>
          ) : ""
        }
        <ListItemText inset={sort !== id}>{`${getSortText(id)}으로 정렬`}</ListItemText>
      </MenuItem>
    )
  }

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <SortMenuItem id="date" />
        <SortMenuItem id="text" />
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleVisible} disableRipple>
          <ListItemText inset>{visibleCompleted ? "완료된 항목 숨기기" : "완료된 항목 보기"}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  )
}

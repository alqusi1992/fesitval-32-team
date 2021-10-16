import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const AccountItem = ({ text, icon, classes, setValue }) => {
  return (
    <ListItem
      button
      disableGutters
      className={classes.listItem}
      onClick={() => setValue(text)}
    >
      <ListItemIcon className={classes.listIcon}>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default AccountItem;

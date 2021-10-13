import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const AccountItem = ({ text, icon, link }) => {
  return (
    <ListItem button disableGutters>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default AccountItem;

import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { classes } from './ChatBotStyle';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const ChatSteps = ({ steps, show, setShow }) => {
  return (
    <div>
      <Grid sx={classes.chatBotHelper}>{show ? <ChatBot steps={steps} /> : null}</Grid>
      <Button onClick={() => setShow(!show)} sx={classes.chatButton}>
        <ChatBubbleOutlineIcon sx={{ color: '#fff', margin: '0 auto' }} />
      </Button>
    </div>
  );
};

export default ChatSteps;

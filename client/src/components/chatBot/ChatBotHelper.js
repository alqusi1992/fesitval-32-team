import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { classes } from './ChatBotStyle';
import { Grid } from '@mui/material';

const ChatBotHelper = () => {
  const steps = [
    {
      id: '0',
      message: 'Welcome our festival 32',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Hi! Do you need some help?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'YES', trigger: '4' },
        { value: 2, label: 'NO, THANK YOU', trigger: '3' },
      ],
    },
    {
      id: '3',
      message: 'YOUR WELCOME',
      trigger: '1',
    },
    {
      id: '4',
      message: 'Awesome! You are a telepath!',
      end: true,
    },
    {
      id: '4',
      component: <div> </div>,
      end: true,
    },
  ];

  return (
    <Grid sx={classes.chatBotHelper}>
      <ChatBot steps={steps} />
    </Grid>
  );
};

export default ChatBotHelper;

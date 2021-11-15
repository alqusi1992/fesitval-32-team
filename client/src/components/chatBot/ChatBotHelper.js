import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { classes } from './ChatBotStyle';
import { Grid } from '@mui/material';

const ChatBotHelper = () => {
  const steps = [
    {
      id: '0',
      message: 'Welcome our festival 32',
      trigger: '2',
    },
    {
      id: '2',
      message: 'What is your name?',
      trigger: '3',
    },
    {
      id: '3',
      user: true,
      trigger: '4',
    },
    {
      id: '4',
      message: 'Hi {previousValue}, nice to meet you!',
      trigger: '5',
    },
    {
      id: '5',
      message: 'Hi! Do you need some help?',
      trigger: '6',
    },
    {
      id: '6',
      options: [
        { value: 1, label: 'YES', trigger: '7' },
        { value: 2, label: 'NO, THANK YOU', trigger: '8' },
      ],
    },
    {
      id: '8',
      message: 'YOUR WELCOME, HAVE A NICE DAY',
      trigger: '5',
    },
    {
      id: '7',
      message: 'Select the page that you want to redirect',
      trigger: '9',
    },
    {
      id: '9',
      component: (
        <Grid sx={classes.containerCoponent}>
          <div>
            <a href='/' rel='noreferrer'>
              Home
            </a>
          </div>
          <div>
            <a href='/about' rel='noreferrer'>
              About
            </a>
          </div>
          <div>
            <a href='/tickets' rel='noreferrer'>
              Ticket
            </a>
          </div>
          <div>
            <a href='/program' rel='noreferrer'>
              Program
            </a>
          </div>
        </Grid>
      ),
      trigger: '10',
    },
    {
      id: '10',
      message: 'I will redirect you to the page when you clicked',
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

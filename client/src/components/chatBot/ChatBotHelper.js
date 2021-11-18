import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBotItem from './ChatBotItem';
import { steps } from './ChatSteps';
const ChatBotHelper = () => {
  const [show, setShow] = useState(false);

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#610527',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#610527',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBotItem steps={steps} show={show} setShow={setShow} />
    </ThemeProvider>
  );
};

export default ChatBotHelper;

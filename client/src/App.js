import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { classes, theme } from './GlobalStyles';
import {
  LandingPage,
  SuccessPage,
  NavBar,
  Loading,
  Profile,
  Protected,
  Footer,
  About,
  OrderStepper,
  Schedule,
  MyAccount,
  ResetPassword,
  Verify,
} from './components';
import './app.css';
import { GuestProvider } from './context/guestContext';
import useScrollToTop from './utils/useScrollToTop';
import ChatBotHelper from './components/chatBot/ChatBotHelper';

function App() {
  useScrollToTop();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Loading />
        <Verify />
        <ChatBotHelper />
        <Container maxWidth='lg' sx={classes.container}>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/success' component={SuccessPage} />
            <Route exact path='/program' component={Schedule} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/reset-password/:token' component={ResetPassword} />
            <Route exact path='/profile'>
              <Protected>
                <Profile />
              </Protected>
            </Route>
            <Route exact path='/account'>
              <Protected>
                <MyAccount />
              </Protected>
            </Route>
            <GuestProvider>
              <Route exact path='/tickets' component={OrderStepper} />
            </GuestProvider>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

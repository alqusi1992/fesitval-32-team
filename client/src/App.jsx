import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './GlobalStyles';
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
} from './components';
import './app.css';
import { GuestProvider } from './context/guestContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Loading />
        <Container maxWidth='lg' style={{ padding: '50px 20px 350px 20px' }}>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/success' component={SuccessPage} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/about' component={About} />
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

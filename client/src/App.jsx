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
  OrderStepper,
  Schedule,
} from './components';
import './app.css';
import { GuestProvider } from './context/guestContext';
import MyAccount from './components/user/pages/components/manageAccount/MyAccount';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Loading />
        <Container maxWidth='lg' style={{ paddingBottom: '250px' }}>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/success' component={SuccessPage} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/tickets' component={Tickets} />
            <Route exact path='/profile'>
              <Protected>
                <Profile />
              </Protected>
            </Route>
            <GuestProvider>
              <Route exact path='/tickets' component={OrderStepper} />
            </GuestProvider>
            <Route exact path='/guestMode' component={GuestForm} />
            <Route exact path='/account'>
              <Protected>
                <MyAccount />
              </Protected>
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './GlobalStyles';
import {
  LandingPage,
  SuccessPage,
  NavBar,
  PayButton,
  Tickets,
  Profile,
  GuestForm,
} from './components';
import './app.css';
import { GuestProvider } from './context/guestContext';

function App() {
  return (
    <GuestProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <NavBar />
          <Container maxWidth='lg'>
            <LandingPage />
          </Container>
          <Switch>
            <Route exact path='/success' component={SuccessPage} />
            <Route exact path='/tickets' component={Tickets} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/guestMode' component={GuestForm} />
          </Switch>
        </Router>
        <PayButton />
      </ThemeProvider>
    </GuestProvider>
  );
}

export default App;

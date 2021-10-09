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
} from './components';
import './app.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Container maxWidth='lg'>
          <LandingPage />
        </Container>
        <Switch>
          <Route exact path='/success' component={SuccessPage} />
          <Route path='/tickets' component={Tickets} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
      <PayButton />
    </ThemeProvider>
  );
}

export default App;

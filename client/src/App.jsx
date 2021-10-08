import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyle, theme } from './GlobalStyles';
import { LandingPage, NavBar, Tickets, Profile } from './components';
import './app.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      <Router>
        <NavBar />
        <Container maxWidth='lg'>
          <LandingPage />
        </Container>
        <Switch>
          <Route path='/tickets' component={Tickets} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

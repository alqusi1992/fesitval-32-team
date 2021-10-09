import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyle, theme } from './GlobalStyles';
<<<<<<< HEAD
<<<<<<< HEAD
import { NavBar, Tickets, Profile } from './components';
=======
import {
  LandingPage,
  SuccessPage,
  NavBar,
  PayButton,
  Tickets,
} from './components';
import './app.css';

>>>>>>> 589c84f1d1f63ea2acc5e4feb5f2a857c4e28ea9
=======
import { LandingPage, NavBar, Tickets, Profile } from './components';
import './app.css';
>>>>>>> d87e7a6eaca7f104772f922618b4b5f0eea88cf9

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      <Router>
        <NavBar />
<<<<<<< HEAD
<<<<<<< HEAD
        <Container
          maxWidth='xl'
          style={{ width: '100%', height: '100%', backgroundColor: 'blue' }}
        ></Container>
        <Switch>
          <Route path='/tickets' component={Tickets} />
          <Route path='/profile' component={Profile} />
=======
=======
>>>>>>> d87e7a6eaca7f104772f922618b4b5f0eea88cf9
        <Container maxWidth='lg'>
          <LandingPage />
        </Container>
        <Switch>
<<<<<<< HEAD
          <Route exact path='/tickets' component={Tickets} />
          <Route exact path='/success' component={SuccessPage} />
>>>>>>> 589c84f1d1f63ea2acc5e4feb5f2a857c4e28ea9
=======
          <Route path='/tickets' component={Tickets} />
          <Route path='/profile' component={Profile} />
>>>>>>> d87e7a6eaca7f104772f922618b4b5f0eea88cf9
        </Switch>
      </Router>
      <PayButton />
    </ThemeProvider>
  );
}

export default App;

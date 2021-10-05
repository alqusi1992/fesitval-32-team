import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyle, theme } from "./GlobalStyles";
import { NavBar } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <CssBaseline />
        <NavBar />
        <Container maxWidth="xl"></Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;

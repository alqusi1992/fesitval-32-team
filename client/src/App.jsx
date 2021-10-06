import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyle, theme } from "./GlobalStyles";
import { NavBar } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      <Router>
        <NavBar />
        <Container
          maxWidth="xl"
          style={{ width: "100%", height: "100%", backgroundColor: "blue" }}
        ></Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import { NavBar, LandingPage } from "./components";
import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <LandingPage />
    </Router>
  );
}

export default App;

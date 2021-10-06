import React from "react";
import { NavBar, PayButton } from "./components";
import { MainContainer } from "./GlobalStyles";

function App() {
  return (
    <MainContainer>
      <NavBar />
      <PayButton />
    </MainContainer>
  );
}

export default App;

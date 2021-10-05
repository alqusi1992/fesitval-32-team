import { NavBar } from "./components";
import { Tickets } from "./components";
import { MainContainer } from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainContainer>
        <NavBar />
      </MainContainer>
      <Switch>
        <Route path="/tickets" component={Tickets} />
      </Switch>
    </Router>
  );
}

export default App;

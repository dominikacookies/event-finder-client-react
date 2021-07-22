import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Events from "./pages/Events";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

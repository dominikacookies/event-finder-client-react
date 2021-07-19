import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <SearchBar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

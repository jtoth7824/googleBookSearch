import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SavedBooks from "./pages/SavedBooks";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <SearchBooks />
          </Route>
          <Route exact path="/save">
            <SavedBooks />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

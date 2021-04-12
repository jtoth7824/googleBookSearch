import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SavedBooks from "./pages/SavedBooks";
import Header from "./components/Header";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
        <Header />
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

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from "./App";
import Create from "./components/Create";

import "./index.css";

ReactDOM.render(
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/create">Kitap Ekle</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

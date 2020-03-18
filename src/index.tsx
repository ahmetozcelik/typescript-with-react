import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Main from "./components/Main";
import Create from "./components/Create";
import Detail from "./components/Detail";

import "./index.css";

class App extends React.Component {
  state = { books: [] };
  componentDidMount() {
    axios.get("https://5e31ca3eb92d240014ea4f58.mockapi.io/books")
      .then(res => {this.setState({books : res.data})})
  }
  render() {
    return (
        <div className="App">
              <Main books={this.state.books} />
        </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <div className="w-75 mx-auto text-center">
      <nav className="text-center">
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
        <Route path="/detail/:id" component={Detail}>
          <Detail />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

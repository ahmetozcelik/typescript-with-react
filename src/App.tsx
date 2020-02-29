import React from "react";
import axios from "axios";


import Main from "./components/Main";

import "./App.css";

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

export default App;

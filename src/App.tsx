import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";

class App extends React.Component {
  state = { books: [] };
  componentDidMount() {
    fetch("https://5e31ca3eb92d240014ea4f58.mockapi.io/books")
      .then(res => res.json())
      .then(data => {
        this.setState({ books: data });
      })
      .catch(console.log);
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

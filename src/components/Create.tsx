import React, { Component } from "react";
import axios from "axios";

class Create extends Component {
  state = {
    title: "",
    author: "",
    publisher: ""
  };
  nameChange = e => {
    this.setState({ title: e.target.value });
  };
  authorChange = e => {
    this.setState({ author: e.target.value });
  };
  publisherChange = e => {
    this.setState({ publisher: e.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const book = {
      title: this.state.title,
      author: this.state.author,
      publisher: this.state.publisher
    };
    axios({
      method: "post",
      url: "https://5e31ca3eb92d240014ea4f58.mockapi.io/books",
      data: {
        title: book.title,
        author: book.author,
        publisher: book.publisher
      }
    });
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Kitap Adi</label>
            <input
              type="text"
              className="form-control"
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label>Kitap Yazari</label>
            <input
              type="text"
              className="form-control"
              onChange={this.authorChange}
            />
          </div>
          <div className="form-group">
            <label className="form-check-label">Yayinevi</label>
            <input
              type="text"
              className="form-control"
              onChange={this.publisherChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Ekle
          </button>
        </form>
      </div>
    );
  }
}

export default Create;

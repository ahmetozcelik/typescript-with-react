import React, { Component } from "react";
class Search extends Component<{ books }, {}> {
  state = {
    search: ""
  };
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { search } = this.state;
    const filteredBooks = this.props.books.filter(book => {
      return (
        book.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        book.author.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        book.publisher.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
    });
    return (
      <div>
        <div className="md-form mt-0">
          <input
            className="form-control"
            type="text"
            placeholder="Ara"
            onChange={this.handleChange}
          />
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Kitap Adı</th>
              <th scope="col">Yazar</th>
              <th scope="col">Yayınevi</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map(book => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const Main = ({ books }) => {
  return (
    <div className="w-50 mx-auto">
      <h1>Kitap Listesi</h1>
      <Search books={books} />
    </div>
  );
};

export default Main;

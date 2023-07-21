import React from 'react';
import bookData from './book.json';
class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }
  handleChange = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };
  render() {
    let filteredBook = bookData.filter((book) =>
      book.title.toLowerCase().includes(this.state.searchTerm)
    );

    return (
      <>
        <div className="main-div">
          <input
            placeholder="Search"
            className="search"
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <ul>
            <div className="book-div">
              {filteredBook.map((book) => (
                <div className="container">
                  <li className="book-li">
                    <img src={book.image} alt="book.name" />
                    <h4>{book.title}</h4>
                    <h5>Author:{book.author}</h5>
                  </li>
                  <a href={book.website}>
                    <button className="btn">Buy Know</button>
                  </a>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </>
    );
  }
}
export default Books;

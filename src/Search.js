import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book';
import * as BooksAPI from './BooksAPI.js';

export default class Search extends Component {
  state = {
    books: [],
    query: ""
  }

  handleSearch = (event) => {
    const query = event.target.value;
    if(query.length > 0){
      BooksAPI.search(query).then((result) => (
        this.setState(() => ({
          books: result,
          query: query
        }))
      ));
    }else{
      this.setState({
        books: [],
        query: ""
      })
    }
  }
  
  handleChangeBookShelf = (book,e) => {
    BooksAPI.update(book,e.target.value).then((result) => {
      
    });
  }

  render() {
    return (
      <div>
          <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" onChange={this.handleSearch} placeholder="Search by title or author"/>

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {
                    (this.state.books.length > 0) && (this.state.books.map((book) => (
                      <Book handleBookChangeShelf={this.handleChangeBookShelf} key={book.id} book={book} />
                    )))
                  }
                </ol>
              </div>
            </div>
      </div>
    )
  }
}

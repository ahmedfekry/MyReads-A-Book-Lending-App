import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book';

function ListBooks (props) {

    const {Books,handleBookUpdate} = props;

    const currentlyReading = Books.filter((book) => (book.shelf === "currentlyReading"));
    const wantToRead = Books.filter((book) => (book.shelf === "wantToRead"));
    const read = Books.filter((book) => (book.shelf === "read"));
    
    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    currentlyReading.map((book) => (
                      <Book handleBookChangeShelf={handleBookUpdate} key={book.id} book={book} />
                    ))
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    wantToRead.map((book) => (
                      <Book handleBookChangeShelf={handleBookUpdate} key={book.id} book={book} />
                    ))
                  }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    read.map((book) => (
                      <Book handleBookChangeShelf={handleBookUpdate} key={book.id} book={book} />
                    ))
                  }
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search' >Add a book</Link>
        </div>
      </div>
    )
}


export default ListBooks;
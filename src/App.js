import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    isLoaded: false
  }

  loadBooks = () => {
    BooksAPI.getAll()
    .then((result) => {
      this.setState(()=>({
        books: result,
        isLoaded : true
      }))
    })
  }
  componentDidMount(){
    this.loadBooks();
  }

  handleChangeBookShelf = (book,e) => {
    BooksAPI.update(book,e.target.value).then((result) => {
      this.loadBooks();
    })
  }

  render() {
    if(this.state.isLoaded === false)
      return (<div>Loading ....</div>)

    return (
      <div className="app">
        <ListBooks handleBookUpdate={this.handleChangeBookShelf} Books={this.state.books}></ListBooks>
      </div>
    )
  }
}

export default BooksApp

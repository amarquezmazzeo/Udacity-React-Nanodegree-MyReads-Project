import React, {Component} from 'react'

import Book from './Book'

class BookList extends Component {
  
  render () {
    const books = this.props.books.filter((book) => book.shelf===this.props.shelf)
    const booklist = books.map((book) => {
      
      return (<Book key={book.id} book={book} onShelfChange={this.props.handleShelfChange} />)})
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.shelfText}</h2>
      <div className="bookshelf-books">
      <ol className="books-grid">
        {booklist}
      </ol>
      </div>
      </div>
  )
  }

}

export default BookList
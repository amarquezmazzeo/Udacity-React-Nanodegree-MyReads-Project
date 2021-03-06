import React, { Component } from 'react'

import BookList from './BookList'

class Read extends Component {
  
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <BookList books={this.props.books} handleShelfChange={this.props.handleShelfChange} shelf="read"/> 
        </div>
      </div>
    )
  }
}

export default Read
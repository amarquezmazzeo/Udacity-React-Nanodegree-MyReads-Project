import React, { Component } from 'react'

import BookList from './BookList'

class w extends Component {
  
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want To Read</h2>
        <div className="bookshelf-books">
          <BookList books={this.props.books} handleShelfChange={this.props.handleShelfChange} shelf="wantToRead"/> 
        </div>
      </div>
    )
  }
}

export default w
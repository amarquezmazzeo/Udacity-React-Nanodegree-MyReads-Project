import React, { Component } from 'react'

import BookList from './BookList'

class CurrentlyReading extends Component {

  
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <BookList books={this.props.books} handleShelfChange={this.props.handleShelfChange} shelf="currentlyReading"/> 
        </div>
      </div>
    )
  }
}

export default CurrentlyReading
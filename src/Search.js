import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import Book from './Book'

class Search extends Component {
  state = {
    query : '',
    results : null
  }

  handleChange = (e) => {
    let query = e.target.value
    this.setState({query})
    setTimeout(()=> this.getResults(), 300)
    console.log(this.state.query)
  }
  
  getResults = () => {
  
    BooksAPI.search(this.state.query, 10)
      .then(results => {
        if(results === undefined || 'error' in results) {
          results = null
        } 
        this.setState({results})

      })
      .catch((e)=> console.log(e))
  }
  
  
  render() {
    let books = []

    if (this.state.results !== null && this.state.results !== undefined && this.state.results !== []) {
      books = this.state.results.map((book) => {
        let i = 0
      for (;i < this.props.books.length;) {
        if (this.props.books[i].id === book.id) {
          break
        }
        i++
      }
        if (i >= this.props.books.length) {
          book.shelf = 'none'
        }
        else {
          book.shelf = this.props.books[i].shelf
        }
        return (<Book key={book.id} book={book} onShelfChange={this.props.handleShelfChange} />)
      })
    }

    return(
    <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange}/>
</div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
{books}
              </ol>
            </div>
          </div>
  )}
}

export default Search
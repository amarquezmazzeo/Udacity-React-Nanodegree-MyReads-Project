import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

import BookList from './BookList'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books : []
  }
  
  handleShelfChange = (id, value) => {
    console.log(this.state.books)
    BooksAPI.update({id: id},value)
      .then(this.getAllBooks)
      .catch((error) => console.log(error))
  }
    
  getAllBooks = () => {
    BooksAPI.getAll()
    // TODO: Optimize storage of books in state so that they are indexed on 'id'
       .then((data) => 
         this.setState({
           //currentlyReading: data.filter(item => item.shelf==="currentlyReading"),
           books: data
       }))
       .catch((error) => console.log(error))
  }
  
  componentDidMount() {

     this.getAllBooks()
  }
  

  
  render() {
    if (this.state.books.length > 0) {
    return (
      <div className="app">
      <Routes>
        <Route path='/search' element={<Search books={this.state.books} handleShelfChange={this.handleShelfChange}/>}/>
        <Route exact path='/' element={
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookList books={this.state.books} handleShelfChange={this.handleShelfChange} shelf="currentlyReading" shelfText="Currently Reading"/>
                <BookList books={this.state.books} handleShelfChange={this.handleShelfChange} shelf="wantToRead" shelfText="Want To Read"/>
                <BookList books={this.state.books} handleShelfChange={this.handleShelfChange} shelf="read" shelfText="Read" />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        } />
      </Routes>
      </div>
      
    )} 
    else {
      return <p>loading</p>
    }
}
}

export default BooksApp

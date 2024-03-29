import React from 'react'

const Book = (props) => {
  const { imageLinks, title, authors, shelf, id } = props.book

  const handleChange = (event) => {
    event.preventDefault()
    props.onShelfChange(id, event.target.value)
  }

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                imageLinks ? imageLinks.thumbnail : ''
              }")`,
            }}
          ></div>

          <div className='book-shelf-changer'>
            <select id='shelf' onChange={handleChange} defaultValue={shelf}>
              <option value='move' disabled>
                Move to...
              </option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{title}</div>
        <div className='book-authors'>
          {authors !== undefined ? authors.join(', ') : ''}
        </div>
      </div>
    </li>
  )
}

export default Book

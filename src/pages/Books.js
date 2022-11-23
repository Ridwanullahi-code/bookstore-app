import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import CreateBook from '../components/CreateBook';

function Books() {
  const selectedBooks = useSelector((state) => state.books);
  return (
    <div className="container">
      <div className="books-container">
        {selectedBooks.books.map((book) => (
          <Book Id={book.id} key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <div>
        <CreateBook />
      </div>
    </div>
  );
}

export default Books;

import React from 'react';
import Book from '../components/Book';

function Books() {
  return (
    <div className="container">
      <div className="books-container">
        <Book title="Book1" author="Alex James" />
      </div>
      <div className="books-container">
        <Book title="Book1" author="Alex James" />
      </div>
    </div>
  );
}

export default Books;

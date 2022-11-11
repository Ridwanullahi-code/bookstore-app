import React from 'react';
import Book from '../components/Book';
import CreateBook from '../components/CreateBook';

function Books() {
  return (
    <div className="container">
      <div className="books-container">
        <Book title="Book1" author="Alex James" />
        <div>
          <CreateBook />
        </div>
      </div>
      <div className="books-container">
        <Book title="Book2" author="Marry John" />
      </div>
      <div>
        <CreateBook />
      </div>
    </div>
  );
}

export default Books;

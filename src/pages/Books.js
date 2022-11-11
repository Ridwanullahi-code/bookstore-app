import React from 'react';
import Book from '../components/Book';
import Button from '../components/Button';
import Input from '../components/Input';

function Books() {
  return (
    <div className="container">
      <div className="books-container">
        <Book title="Book1" author="Alex James" />
        <div>
          <Input class="book1" holder="Book title" />
          <Input class="author" holder="Author" />
          <Button value="Add Book" />
        </div>
      </div>
      <div className="books-container">
        <Book title="Book2" author="Marry John" />
      </div>
      <div>
        <Input classes="book" holder="Book title" />
        <Input classes="author" holder="Author" />
        <Button value="Add Book" />
      </div>
    </div>
  );
}

export default Books;

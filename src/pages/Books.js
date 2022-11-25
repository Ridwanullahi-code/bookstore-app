import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CreateBook from '../components/CreateBook';
import { getBooks } from '../redux/features/bookSlicer';

function Books() {
  const dispatch = useDispatch();
  
  // const { books, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="container">
      <h1>hello world</h1>
    </div>
  );
}

export default Books;
/* 
<div className="books-container">
        {books.map((book) => (
          <Book
            Id={book.id}
            key={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
      <div>
        <CreateBook />
      </div>

*/

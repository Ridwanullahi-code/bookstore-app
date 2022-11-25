import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CreateBook from '../components/CreateBook';
import { getBooks } from '../redux/features/bookSlicer';

function Books() {
  const dispatch = useDispatch();

  const { books, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="books-container">
        {books.map((book) => (
          <Book
            category={book.category}
            Id={book.itemId}
            key={book.itemId}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
      <div className="progress-container">
        <div className="circle">
          <p className="percentage">64%</p>
          <p className="status">Completed</p>
        </div>
      </div>
      <div className="current-chapter">
        <h4 className="chapter-title">CURRENT CHAPTER</h4>
        <p className="chapter-no">Chapter 17</p>
        <div className="progress">
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
      <div>
        <CreateBook />
      </div>
    </div>
  );
}

export default Books;

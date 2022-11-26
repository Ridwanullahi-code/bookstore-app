import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import CreateBook from '../components/CreateBook';
import { getBooks } from '../redux/features/bookSlicer';

function Books() {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <body>
      <div className="Bookstore-CMS">
        {books.map((book) => (
          <div className="inner-container" key={book.itemId}>
            <div className="books-container">
              <Book
                category={book.category}
                Id={book.itemId}
                key={book.itemId}
                title={book.title}
                author={book.author}
              />
            </div>
            <div className="progress-container">
              <div className="circle">
                <div className="percentage-status">
                  <div className="Oval-2" />
                  <div>
                    <p className="percentage">64%</p>
                    <p className="status">Completed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="current-chapter">
              <h4 className="chapter-title">CURRENT CHAPTER</h4>
              <p className="chapter-no">Chapter 17</p>
              <div className="progress">
                <button type="button" className="update-btn">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </div>
        ))}
        <div>
          <CreateBook />
        </div>
      </div>
    </body>
  );
}

export default Books;

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/features/bookSlicer';

import Button from './Button';

function Book(props) {
  // props destructive
  const {
    category, title, author, Id,
  } = props;
  const dispatch = useDispatch();

  // function to remove the book
  const handleRemove = () => {
    dispatch(deleteBook(Id));
  };
  return (
    <div className="book-container">
      <div className="book-info">
        <p className="category">{category}</p>
        <h2 className="book">{title}</h2>
        <p className="author">{author}</p>
        <div className="button-container">
          <Button
            btnType="button"
            classes="comment-btn btn"
            value="comment"
            click={null}
          />
          <Button
            btnType="button"
            classes="remove-btn btn"
            value="remove"
            click={handleRemove}
          />
          <Button
            btnType="button"
            classes="edit-btn btn"
            value="Edit"
            click={null}
          />
        </div>
      </div>
    </div>
  );
}
// props validation should be proTypes
Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
};
export default Book;

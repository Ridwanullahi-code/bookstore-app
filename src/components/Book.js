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
      <div>
        <h2>{category}</h2>
        <h2>{title}</h2>
        <p>{author}</p>
        <Button
          btnType="button"
          classes="remove-btn"
          value="remove"
          click={handleRemove}
        />
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

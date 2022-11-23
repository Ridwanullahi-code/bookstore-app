import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Button from './Button';

function Book(props) {
  // props destructive
  const { title, author, Id } = props;
  const dispatch = useDispatch();

  // function to remove the book
  const handleRemove = () => {
    dispatch(removeBook(Id));
  };
  return (
    <div className="book-container">
      <div>
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  Id: PropTypes.number.isRequired,
};
export default Book;

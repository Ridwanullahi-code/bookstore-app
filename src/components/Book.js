import PropTypes from 'prop-types';
import Button from './Button';

function Book(props) {
  // props destructive
  const { title, author } = props;
  return (
    <div className="book-container">
      <div>
        <h2>{title}</h2>
        <p>{author}</p>
        <Button class="remove-btn" value="remove" />
      </div>
    </div>
  );
}
// props validation should be proTypes
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;

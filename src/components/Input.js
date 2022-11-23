import PropTypes from 'prop-types';

function Input(props) {
  const {
    classes, holder, name, change,
  } = props;
  return (
    <input
      name={name}
      type="text"
      className={classes}
      placeholder={holder}
      onChange={change}
    />
  );
}
// props validation
Input.propTypes = {
  classes: PropTypes.string.isRequired,
  holder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
export default Input;

import PropTypes from 'prop-types';

function Input(props) {
  const { classes, holder } = props;
  return <input type="text" className={classes} placeholder={holder} />;
}
// props validation
Input.propTypes = {
  classes: PropTypes.string.isRequired,
  holder: PropTypes.string.isRequired,
};
export default Input;

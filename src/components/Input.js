import PropTypes from 'prop-types';

function Input(props) {
  const { clas, holder } = props;
  return (
    <input type="text" className={clas} placeholder={holder} />
  );
}
// props validation
Input.PropTypes = {
  clas: PropTypes.string.isRequired,
  holder: PropTypes.string.isRequired,
};
export default Input;

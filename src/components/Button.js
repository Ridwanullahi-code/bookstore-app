import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    btnType, classes, value, click,
  } = props;
  return (
    <input type={btnType} className={classes} value={value} onClick={click} />
  );
}
// props validation should be proTypes
Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
export default Button;

import React from 'react';
import PropTypes from 'prop-types';

const emptyFunc = () => {};

/**
 * The basic button without any functionality
 * @param {Object} props The base button props
 */
function BaseButton(props) {
  return (
    <button
      {...props}
      className={props.className}
      onClick={props.onClick}
      name={props.name}
      disabled={props.disabled}
      children={props.children}
    />
  );
}

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

BaseButton.defaultProps = {
  disabled: false,
  onClick: emptyFunc
};

export default BaseButton;

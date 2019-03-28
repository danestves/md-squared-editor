import React from 'react';
import PropTypes from 'prop-types';

function ToolbarLeft({ children, className }) {
  return <div className={className}>{children}</div>;
}

ToolbarLeft.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ToolbarLeft;

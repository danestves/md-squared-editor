import React from 'react';
import PropTypes from 'prop-types';

function ToolbarRight({ children, className }) {
  return <div className={className}>{children}</div>;
}

ToolbarRight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ToolbarRight;

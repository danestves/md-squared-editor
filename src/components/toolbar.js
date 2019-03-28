import React from 'react';
import PropTypes from 'prop-types';

function ToolbarContainer({ children, className }) {
  return <div className={className}>{children}</div>;
}

ToolbarContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default ToolbarContainer;

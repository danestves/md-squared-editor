import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import classNames from 'classnames';
import styles from './styles';
import { withStyles } from '@material-ui/core';

function ToolbarRight({ children, className, classes }) {
  return (
    <div className={classNames(classes.toolbarRight, className)}>
      {children}
    </div>
  );
}

ToolbarRight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ToolbarRight);

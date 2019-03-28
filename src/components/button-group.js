import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import classNames from 'classnames';
import styles from './styles';
import withStyles from '@material-ui/core/styles/withStyles';

function ButtonGroup({ children, classes }) {
  return <div className={classes.buttonGroupContainer}>{children}</div>;
}

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonGroup);

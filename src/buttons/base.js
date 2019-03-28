import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import styles from './styles';
import { withStyles, Fab } from '@material-ui/core';

const emptyFunc = () => {};

/**
 * The basic button without any functionality
 * @param {Object} props The base button props
 */
function BaseButton(props) {
  const { classes } = props;

  return (
    <Fab
      variant='extended'
      size='small'
      {...props}
      className={props.className}
      classes={{ root: classes.buttonBase }}
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
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

BaseButton.defaultProps = {
  disabled: false,
  onClick: emptyFunc
};

export default withStyles(styles)(BaseButton);

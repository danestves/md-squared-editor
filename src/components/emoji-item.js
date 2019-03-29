import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

// Material UI
import Tooltip from '@material-ui/core/Tooltip';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

class EmojiItem extends Component {
  state = {
    arrowRef: null
  };

  handleArrowRef = node => {
    this.setState({
      arrowRef: node
    });
  };

  render() {
    const {
      code,
      emoji,
      onPick,
      className,
      classes,
      children,
      ...props
    } = this.props;

    return (
      <Tooltip
        title={
          <Fragment>
            :{code}:
            <span className={classes.arrow} ref={this.handleArrowRef} />
          </Fragment>
        }
        classes={{ popper: classes.arrowPopper }}
        PopperProps={{
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(this.state.arrowRef),
                element: this.state.arrowRef
              }
            }
          }
        }}>
        <button
          {...props}
          key={code}
          data-code={code}
          aria-label={code}
          className={className}
          onClick={onPick}>
          {emoji}
        </button>
      </Tooltip>
    );
  }
}

EmojiItem.propTypes = {
  code: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  onPick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

EmojiItem.defaultProps = {
  children: null
};

export default withStyles(styles)(EmojiItem);

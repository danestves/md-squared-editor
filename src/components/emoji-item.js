import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

// Material UI
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

function EmojiItem({ code, emoji, onPick, className, children, ...props }) {
  return (
    <Tooltip title={`:${code}:`}>
      <Fab
        {...props}
        size='small'
        key={code}
        data-code={code}
        aria-label={code}
        className={className}
        onClick={onPick}>
        {emoji}
      </Fab>
    </Tooltip>
  );
}

EmojiItem.propTypes = {
  code: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  onPick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
};

EmojiItem.defaultProps = {
  children: null
};

export default EmojiItem;

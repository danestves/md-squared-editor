import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Map as map } from 'immutable';

// import the list of emojis supported on markdown-it-emoji plugin
import emojis from 'markdown-it-emoji/lib/data/full.json';

// Material UI
import { Fab } from '@material-ui/core';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';

const emojiMap = map(emojis);

class EmojiBar extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  static contextTypes = {
    pickEmoji: PropTypes.func.isRequired,
    emoji: PropTypes.shape({
      writing: PropTypes.bool.isRequired,
      code: PropTypes.string.isRequired
    }).isRequired
  };

  handleClick = ({
    currentTarget: {
      dataset: { code }
    }
  }) => {
    this.context.pickEmoji(code);
  };

  /**
   * Find emojis that match the code the user wrote
   * @param  {string}  emoji The emoji unicode character
   * @param  {string}  code  The emoji code
   * @return {Boolean}       If it match or not
   */
  searchEmojis = (emoji, code) => {
    return code.indexOf(this.context.emoji.code.toLowerCase()) === 0;
  };

  render() {
    // if the user wrote only `:` or 1 char after `:` render null
    if (!this.context.emoji.writing || this.context.emoji.code.length < 2)
      return null;

    return (
      <div id='textNode'>
        {emojiMap
          .filter(this.searchEmojis)
          .map((emoji, code) => (
            <Fab
              size='small'
              key={code}
              data-code={code}
              aria-label={code}
              //className={this.props.className}
              onClick={this.handleClick}>
              {emoji}
            </Fab>
          ))
          .toArray()}
      </div>
    );
  }
}

export default EmojiBar;

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import EmojiItem from './emoji-item';

// import the list of emojis supported on markdown-it-emoji plugin
import emojis from 'markdown-it-emoji/lib/data/full.json';

const emojiKeys = Object.keys(emojis);

class EmojiBar extends Component {
  state = {
    expanded: null
  };

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
  searchEmojis = code =>
    code.indexOf(this.context.emoji.code.toLowerCase()) === 0;

  getEmoji = code => ({ code, emoji: emojis[code] });

  renderItem = ({ emoji, code }) =>
    this.props.children ? (
      cloneElement(this.props.children, {
        emoji,
        code,
        key: code,
        onPick: this.handleClick
      })
    ) : (
      <EmojiItem
        key={code}
        emoji={emoji}
        code={code}
        onPick={this.handleClick}
      />
    );

  render() {
    // if the user wrote only `:` or 1 char after `:` render null
    if (!this.context.emoji.writing || this.context.emoji.code.length < 2)
      return null;

    return (
      <div className={this.props.className}>
        {emojiKeys
          .filter(this.searchEmojis)
          .map(this.getEmoji)
          .map(this.renderItem)}
      </div>
    );
  }
}

export default EmojiBar;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Field extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  static contextTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    writeValue: PropTypes.func.isRequired,
    syncScroll: PropTypes.func.isRequired,
    detectShortcut: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
  };

  handleChange = this.context.writeValue;

  handleScroll = this.context.syncScroll;

  handleKeyDown = this.context.detectShortcut;

  render() {
    return (
      <textarea
        name="value"
        {...this.props}
        className={this.props.className}
        disabled={this.context.disabled}
        id={`md-squared-editor-${this.context.name}`}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        value={this.context.value}
      />
    );
  }
}

export default Field;

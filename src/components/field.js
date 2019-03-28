import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollSyncPane } from 'react-scroll-sync';

// Material UI
import InputBase from '@material-ui/core/InputBase';

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
      <ScrollSyncPane>
        <InputBase
          multiline
          row={4}
          rowsMax={10}
          name='value'
          {...this.props}
          className={this.props.className}
          disabled={this.context.disabled}
          id={`md-squared-editor-${this.context.name}`}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.context.value}
          fullWidth
        />
      </ScrollSyncPane>
    );
  }
}

export default Field;

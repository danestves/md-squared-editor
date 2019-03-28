import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from '@danestves/react-markdown';
import { ScrollSyncPane } from 'react-scroll-sync';

class Preview extends Component {
  static propTypes = {
    className: PropTypes.string,
    parser: PropTypes.object
  };

  static defaultProps = {
    className: 'PulseEditor-preview',
    parser: {}
  };

  static contextTypes = {
    value: PropTypes.string.isRequired
  };

  render() {
    return (
      <ScrollSyncPane>
        <Markdown
          className={this.props.className}
          content={this.context.value}
          parser={this.props.parser}
        />
      </ScrollSyncPane>
    );
  }
}

export default Preview;

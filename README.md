[![npm version](https://img.shields.io/npm/v/md-squared-editor.svg?style=flat-square)](https://www.npmjs.com/package/md-squared-editor)

This is forked from [Pulse Editor - Platzi](https://github.com/PlatziDev/pulse-editor)

# Pulse Editor

A React markdown editor, extensible and fully customizable

## Installation

To install this editor just run:

```bash
yarn add md-squared-editor
```

Or with npm:

```bash
npm i md-squared-editor
```

## Usage example

```javascript
import React, { Component } from 'react';
import {
  Editor,
  ButtonBar,
  ButtonGroup,
  Field,
  Preview,
  EmojiBar
} from 'md-squared-editor';
import {
  Base,
  Bold,
  Italic,
  Underline,
  Code,
  Link,
  Image,
  OrderedList,
  UnorderedList,
  Quote,
  Heading,
  Youtube
} from 'md-squared-editor/buttons';

class MyEditor extends Component {
  handleChange = ({ selected, selection, markdown, html, native }) => {
    console.group('Editor special change event');
    console.log('With this event you can get the `selected` text.');
    console.log('Along with the `selection` position inside the full value.');
    console.log(
      'Of course, you also get the original `markdown` and the parsed `html`.'
    );
    console.log(
      'And since the changes are also triggered from a button click, text input, etc.'
    );
    console.log('You will also get the `native` DOM event.');
    console.groupEnd('Editor special change event');
  };

  handleDrop = event => {
    console.group('Editor custom (drop) event');
    console.log('The editor is extensible!');
    console.log('This event is not actually used by the editor.');
    console.log('But you can use it to extend the editor features.');
    console.log('And create your own custom editor on top of this one.');
    console.groupEnd('Editor custom (drop) event');
  };

  handleSubmit = event => {
    event.preventDefault();
    console.group('Form submit');
    console.log('Because the editor is just a textarea at the end of the day.');
    console.log(
      'You can wrap it in a HTML `<form>` tag and use it as part of a common form'
    );
    console.log("If you submit it, the editor field name it's `value`.");
    console.log(
      'That name can be customized if you set it as a prop of the `Field` component.'
    );
    console.groupEnd('Form submit');
  };

  setRef = editor => {
    console.group('Editor ref');
    console.log('We can also get the editor instance ref.');
    console.log(
      'This can allow us to call editor methods to update the internal value.'
    );
    console.log('That way we can extend our editor.');
    console.log('And implement features like Drag&Drop of images.');
    console.groupEnd('Editor ref');
    this.editor = editor;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Editor
          name='main-editor'
          defaultValue='**Initial _editor_ value**'
          onChange={this.handleChange}
          onDrop={this.handleDrop}
          editorRef={this.setRef}>
          <ButtonBar>
            <ButtonGroup>
              <Bold>
                <strong>B</strong>
              </Bold>
              <Italic>
                <em>I</em>
              </Italic>
              <Underline>U</Underline>
            </ButtonGroup>

            <ButtonGroup>
              <Code>Insert code</Code>
              <Link>Link</Link>
              <Image>Image</Image>
            </ButtonGroup>

            <ButtonGroup>
              <OrderedList>OL</OrderedList>
              <UnorderedList>UL</UnorderedList>
              <Quote>Q</Quote>
              <Heading>H</Heading>
              <Youtube>Y</Youtube>
            </ButtonGroup>
          </ButtonBar>

          {/* you can use any DOM element or event custom components */}
          <div>
            <Preview />
            {/* you can force an initial height for the field if it's server rendered */}
            <Field style={{ height: '39px' }} />
          </div>

          <EmojiBar />
        </Editor>
        <button type='submit'>Send form</button>
      </form>
    );
  }
}

export default MyEditor;
```

## Authors

- Platzi ([@sergiodxa](https://github.com/PlatziDev))

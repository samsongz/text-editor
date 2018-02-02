import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import './TextEditor.css';

import 'react-quill/dist/quill.snow.css';


class TextEditor extends Component {
  render() {
    const { locked } = this.props
    return (
      <ReactQuill
        placeholder={'Leave a nice note...'}
      />
    );
  }
}

export default TextEditor;

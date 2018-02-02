import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import './TextEditor.css';


class TextEditor extends Component {
  render() {
    return (
      <div className={'dashboard-sprint-external-text-editor'}>
        <ReactQuill
          placeholder={'Leave a nice note...'}
        />
      </div>
    );
  }
}

export default TextEditor;

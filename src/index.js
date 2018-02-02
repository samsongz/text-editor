import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './TextEditor';
import registerServiceWorker from './registerServiceWorker';

const mount = (node, props) => {
  ReactDOM.render(<App {...props} />, node);
}
if (window.ConstructionOS) {
  window.ConstructionOS.Applications.TextEditor = {
    mount: mount
  };
}
else {
  ReactDOM.render(<App />, document.getElementById("root"));
}
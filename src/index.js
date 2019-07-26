import React from 'react';
import { render } from 'react-dom';
import {
  FileExplorer,
  CodeMirror,
  BrowserPreview,
  SandpackProvider,
} from 'react-smooshpack/es/components';
import 'react-smooshpack/dist/styles.css';

const files = {
  '/index.js': {
    code: "document.body.innerHTML = `<div>${require('uuid')}</div>`",
  },
};

const dependencies = {
  uuid: 'latest',
};

const App = () => (
  <SandpackProvider files={files} dependencies={dependencies} entry="/index.js">
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <FileExplorer style={{ width: 300 }} />
      <CodeMirror style={{ flex: 1 }} />
      <BrowserPreview style={{ flex: 1 }} />
    </div>
  </SandpackProvider>
);

render(<App />, document.getElementById('root'));

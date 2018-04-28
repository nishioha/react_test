import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const List = () => {
  return (
    <ul>
      <li>hoge</li>
      <li>huga</li>
      <li>piyo</li>
    </ul>
  );
}

ReactDOM.render(<List />, document.getElementById('root'));
registerServiceWorker();

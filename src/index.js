import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const List = (props) => {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<List items={['hoge', 'huga', 'piyo']}/>, document.getElementById('root'));
registerServiceWorker();

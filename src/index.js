import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class List extends React.Component {
  render(){
    return (
      <ul>
        {this.props.items.map((item, i) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<List items={['hoge', 'huga', 'piyo']}/>, document.getElementById('root'));
registerServiceWorker();

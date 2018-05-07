import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types';

class List extends React.Component {
  render(){
    return (
      <ul>
        {this.props.items.map((item, i) => (
          <li key={`list_${i}`}>{item}</li>
        ))}
      </ul>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired
}

ReactDOM.render(<List items={['hoge', 'huga', 'piyo']}/>, document.getElementById('root'));
registerServiceWorker();

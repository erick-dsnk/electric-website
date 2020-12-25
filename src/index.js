import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


class Doc extends React.Component {
  componentDidMount() {
    document.title = "Electric";
  }

  render() {
    return <App />
  }
}


ReactDOM.render(
  <Doc />,
  document.getElementById('root')
);

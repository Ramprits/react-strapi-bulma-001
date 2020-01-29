import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bulma/css/bulma.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <p className="has-text-danger">
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

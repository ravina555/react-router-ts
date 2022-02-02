import React, { Component } from 'react';
import { render } from 'react-dom';
import Navigation from './Router/BasicExample';
import ComponentNavigation from './Router/ComponentNavigation';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Navigation />
        <ComponentNavigation />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

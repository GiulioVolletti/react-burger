import React, {Component} from 'react'
import logo from './assets/logo.svg';
import './App.css';

import Layout from './components/Layout/Layout'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
        </header>
        <Layout>
          <p>test</p>
        </Layout>
      </div>
    );
  }
 
}

export default App;

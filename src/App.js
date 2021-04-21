import React, {Component} from 'react'
import logo from './assets/logo.svg';
import './App.css';

import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render(){
    return (
      <div >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
        </header>
        <Layout>
        <BurgerBuilder />
        </Layout>
       
      </div>
    );
  }
 
}

export default App;

import React, {Component} from 'react'
import logo from './assets/logo.svg';
import './App.css';

import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render(){
    return (
      <div >
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
        </div>
        <Layout>
        <BurgerBuilder />
        </Layout>
       
      </div>
    );
  }
 
}

export default App;

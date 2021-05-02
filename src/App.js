import React, {Component} from 'react'
import logo from './assets/logo.svg';
import './App.css';
import {Route , Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'

class App extends Component {
  render(){
    return (
      <div >
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />        
        </div>
        <Layout>
          <Switch>           
            <Route path='/checkout' component={Checkout} />
            <Route path='/' exact component={BurgerBuilder} />
          </Switch>
        
        </Layout>
       
      </div>
    );
  }
 
}

export default App;

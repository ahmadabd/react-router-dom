import React, { Component } from 'react';
import Header from './components/sections/Header';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import './style/css/bootstrap.min.css';
import './style/css/bootstrap-rtl.min.css';
import Product from './components/pages/Product';
import NoMatch from './components/pages/NoMatch';


class App extends Component{
  render(){

    return (
      <div>
        <Header />
        <div className="container" style={{  paddingTop: 60 }}>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/product/:id" component={Product} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

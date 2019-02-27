import React, { Component } from 'react';
import Header from './components/sections/Header';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import './style/css/bootstrap.min.css';
import './style/css/bootstrap-rtl.min.css';


class App extends Component{
  render(){

    return (
      <div>
        <Header />
        <div className="container" style={{  paddingTop: 60 }}>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
    );
  }
}

export default App;

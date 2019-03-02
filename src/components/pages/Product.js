import React, { Component } from 'react';

class Product extends Component{
  render(){
    const { params } = this.props.match
    return (
      <div>
        <h2>product : {params.id}</h2>
      </div>
    );
  }
}

export default Product;

import React, { Component } from 'react';
import axios from 'axios';
import Product from './../Product';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      article : []
    }
  }

  componentDidMount(){
    axios.get('http://roocket.org/api/products')
      .then(response => {  // Response
        //console.log(response);
        const {current_page, data} = response.data.data;  // Stores response in data tag (response has 3 data tag)
        this.setState({
          article : data
        });
      })
      .catch( error => {  // Errors
        console.log(error);
      })
  }


  render(){
    return (
      <div className="container">
        <div className = "jumbotron rtl">
          <h2>سلام</h2>
        </div>

        <div className="row rtl">
          {this.state.article.map((product, index) => <Product product={product} key={index} />)}
        </div>

      </div>
    );
  }
}

export default Home;

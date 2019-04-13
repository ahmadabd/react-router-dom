import React, { Component } from 'react';
import axios from 'axios';
import Product from './../Product';
import InfiniteScroll from 'react-infinite-scroller';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      article : [],
      nextPage: 1,
      hasMore: true,
    }
  }

  handleLoadMore(){
      axios.get(`http://roocket.org/api/products?page=${this.state.nextPage}`)
        .then(response => {  // Response
          //console.log(response);
          const {current_page, lastPage, data} = response.data.data;  // Stores response in data tag (response has 3 data tag)
          this.setState(prevState => ({
            article : [ ...prevState.article, ...data],
            hasMore: current_page === lastPage ? false:true,
            nextPage: current_page + 1,
          }))
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

        <InfiniteScroll
          className="row rtl"
          pageStart={0}
          loadMore={this.handleLoadMore.bind(this)}
          hasMore={this.state.hasMore}
          loader={<div className="loader" key={0}>Loading ...</div>}>
            {this.state.article.map((product, index) => <Product product={product} key={index} />)}
      </InfiniteScroll>

      </div>
    );
  }
}

export default Home;

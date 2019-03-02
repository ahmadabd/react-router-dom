import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
  render(){
    return (
      <div className="container">
        <div className = "jumbotron rtl">
          <h2>سلام</h2>
        </div>

        <div className="row rtl">
          <div className="col-lg-4" style={{ marginBottom : 20 }}>
            <div className="card">
              <img className="card-img-top" src="" alt="Card image cap" />
              <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link className="btn btn-primary" to={`product/1`}>Go someWhere</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row rtl">
          <div className="col-lg-4" style={{ marginBottom : 20 }}>
            <div className="card">
              <img className="card-img-top" src="" alt="Card image cap" />
              <div className="card-body">
                  <h4 className="card-title">Card title</h4>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link className="btn btn-primary" to={`product/2`}>Go someWhere</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;

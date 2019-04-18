import React, { Component } from 'react';
import validator from 'validator';
import axios from 'axios';


class LogIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      fields: {
        email: '',
        password: ''
      },
      errors : {}
    }
  }

  // Check email and password fields for validating data
  handleValidation(callback){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    // Email
    if(validator.isEmpty(fields.email)){
      formIsValid = false;
      errors["email"] = "email cant be empty";
    }
    else if(!validator.isEmail(fields.email)){
      formIsValid = false;
      errors["email"] = "email format is wrong";
    }

    // Password
    if(validator.isEmpty(fields.password)){
      formIsValid = false;
      errors["password"] = "password cant be empty";
    }
    else if(!validator.isLength(fields.password, {min : 6 , max: undefined})){
      formIsValid = false;
      errors["password"] = "password length cant be lower than 6 character";
    }

    this.setState({errors: errors}, () => {
      return callback(formIsValid);
    });
  }

  // stores password and email input tag datas in state.fields
  handleChange(event){
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({
      fields: fields
    });
  }

  // sends password and email input tag datas to http://.../api/login AND get api_token from server and stores on localStorage
  handleRequest(){
    const {email, password} = this.state.fields;

    let data = new FormData();
    data.append('email', email);
    data.append('password', password);

    axios.post('http://roocket.org/api/login', data)
      .then((response) => {
        localStorage.setItem('api_token', response.data.data.api_token);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // runs after submit data and sends data to handleValidation() func
  handleSubmit(event){
    event.preventDefault();

    this.handleValidation((valid) => {
      if(valid){
        this.handleRequest()
      }
    })
  }

  render(){
    const {email, password} = this.state.fields;
    const errors = this.state.errors;

    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Email:</label>
            <input type="text" className={["form-control", errors["email"] ? 'is-invalid' : ''].join(' ')} name="email" value={email} onChange={this.handleChange.bind(this)} />
            <span className="invalid-feedback">{errors["email"]}</span>
          </div>

          <div className="form-group">
            <label>password:</label>
            <input type="password" className={["form-control", errors["password"] ? 'is-invalid' : ''].join(' ')} name="password" value={password} onChange={this.handleChange.bind(this)} />
            <span className="invalid-feedback">{errors["password"]}</span>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-danger">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;

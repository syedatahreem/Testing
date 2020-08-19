import React, { Component } from "react";
 import { history } from 'react-dom';
 
class Login extends Component {
  
   state = {
     email: '',
     password: ''
    };
  

  changeHandler = e =>
  {
    this.setState({[e.target.name]:e.target.value}); 
     
  };

submitHanlder = (e) =>
{  
  const axios = require('axios').default;
  e.preventDefault();
  axios.post('https://dfma-apis.herokuapp.com/api/auth/weblogin', {"email": this.state.email, "password": this.state.password})
  .then(response =>{
    alert("login successful");
    console.log(response.data);

  })
  .catch(error=>{
    alert("Wrong credentials");
    console.log(error);     
  })
};

resetForm = () => {
  this.setState({ email: '' })
}
  

  render() {
 

    return (
      <div className="d-md-flex h-md-100 align-items-center">
        <div
          className="col-md-5 p-0 bg-indigo h-md-100"
          style={{
            backgroundColor: "rgb(23,53,131)",
            height: "100vh",
          }}
        >
          
          <p
            style={{
              color: "rgb(249, 249,247)",
              textAlign: "center",
              fontFamily: "MozAnimationName",
              fontSize: 50,
              marginTop: 150,
            }}
          >
            Digital Fatigue Management
          </p>

          <img
            src="/images/logPic2.png"
            width="230"
            height="230"
          
            style={{
              marginLeft: 200,
              marginTop: 50,
            }}
          />
        </div>
        <div className="col-md-6 p-0 bg-white h-md-100 loginarea">
          <h2
            style={{
              paddingTop: 100,
              textAlign: "center",
              color: "rgb(77,77,128)",
              fontSize: 50,
              fontWeight: "bold",
              paddingBottom: 50,
              marginLeft: 140,
            }}
          >
            Sign In
          </h2>
          <img src="/images/Jemenalogo.png" width="10" height="10" style={{}} />
          <br></br>
          <form
            className="form-horizontal"
            onSubmit={ this.submitHanlder}
            style={{
              marginLeft: 100,
              marginRight: 80,
              borderRadius: 25,
              backgroundColor: "rgb(226,226,217)",
              padding: 40,
              paddingLeft: 55,
              paddingTop: 60,
              marginBottom: 65,
              width: 700,
              paddingBottom: 50,
            }}
          >
            <div className="form-group">
              <label
                className="control-label col-sm-4 font-weight-bold"
            
                style={{
                  fontSize: 20,
                }}
              >
                User Name
              </label>
              <div className="col-sm-12">
                <input
                  type="text"
                  name="email"
                   defaultValue={ this.state.email}
                  onChange={this.changeHandler}
                  className="form-control"
                   
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <br></br>
            <div className="form-group">
              <label
                className="control-label col-sm-4 font-weight-bold"
                
                style={{
                  fontSize: 20,
                }}
              >
                Password
              </label>
              <div className="col-sm-12">
                <input
                  type="password"
                  name="password"
                  defaultValue={this.state.password}
                  onChange={this.changeHandler}
                  className="form-control"
                  
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="form-group font-weight-bold">
              <div className="col-sm-10 font-weight-bold">
                <div className="row justify-content-start">
                  <div className="col-4">
                    <input
                      className=" font-weight-bold"
                      style={{
                        backgroundColor: "rgb(23, 53,131)",
                        color: "white",
                        width: 200,
                        fontWeight: "bold",
                        fontSize: 20,
                        height: 45,
                        borderRadius: 50,
                        marginLeft: 180,
                        marginTop: 30,
                        paddingTop: 10,
                        paddingBottom: 40,
                      }}
                      type="submit"
                      className="form-control"
                      
                    /> 
        
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

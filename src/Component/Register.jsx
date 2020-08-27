import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Register extends Component {
  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundImage: "url(" + "/images/background.jpg" + ")",
          height: 250,
          width: 1500,
          backgroundColor: "rgb(154,196,226)",
          borderBottomRightRadius: 50,
         
          
        }}
      >
  
          
        <br></br>
        <div>
        <div className="topnav" style={{float:"right"}}>
          <div className="topnav-right font-weight-bold " >
            <a href="#" style={{marginRight:50,color: "rgb(249, 249,247)",fontSize:22, textDecoration: 'none'}}>Home</a>
            <a href="#" style={{marginRight:50,color: "rgb(249, 249,247)",fontSize:22, textDecoration: 'none'}}>About</a>
            <a href="#" style={{marginRight:20,color: "rgb(249, 249,247)",fontSize:22, textDecoration: 'none'}}>LogOut</a>
          </div>
          </div>
        </div>
        <div>
        <div>
        
 
  </div>
    
  </div>
        <div className="main">

          <h2
            style={{
              paddingTop: 100,
              textAlign: "center",
              color: "rgb(77,77,128)",
              fontSize: 44,
              fontWeight: "bold",
              paddingBottom: 100,
            }}
          >
            Registration form
          </h2>
          
          <br></br>
          <form
            className="form-horizontal"
            action="https://www.google.com"
            style={{ 
               marginLeft: 200,
               marginRight:80,               
               borderRadius:25,
               backgroundColor:"rgb(226,226,217)",
               padding:40, 
               paddingLeft:85,
               paddingTop:60,
               marginBottom:100,
               width:1190
         
               }}
          >
            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
              
              >
                FirstName:
              </label>
              <div className="col-sm-10">
                <input
                  type="name"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter firstname"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
                
              >
                LastName:
              </label>
              <div className="col-sm-10">
                <input
                  type="name"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter lastname"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
                
              >
                Password:
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
             
              >
                Confirm Password:
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="confirmPass"
                  placeholder="Confirm the entered password"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
                
              >
                Email ID:
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email-id"
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
                
              >
                Phone Number:
              </label>
              <div className="col-sm-10">
                <input
                  type="telNo"
                  className="form-control"
                  id="email"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div className="col-sm-10">
              <br></br>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle font-weight-bold"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    textAlign: "left",
                    width: 860,
                    backgroundColor: "rgb(139, 154,193)",
                    color: "black",
                  }}
                >
                  Select working group
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
              
              >
                Choose Work Days:
              </label>
              <div className="col-sm-10">
                <label className="checkbox-inline" style={{ paddingRight: 20 }}>
                  <input type="checkbox" value="" />
                  Monday
                </label>
                <label className="checkbox-inline" style={{ marginLeft: 30 }}>
                  <input type="checkbox" value="" />
                  Tuesday
                </label>
                <label className="checkbox-inline" style={{ marginLeft: 50 }}>
                  <input type="checkbox" value="" />
                  Wednesday
                </label>
                <label className="checkbox-inline" style={{ marginLeft: 60 }}>
                  <input type="checkbox" value="" />
                  Thursday
                </label>
                <label className="checkbox-inline" style={{ marginLeft: 60 }}>
                  <input type="checkbox" value="" />
                  Friday
                </label>
                <label className="checkbox-inline" style={{ marginLeft: 60 }}>
                  <input type="checkbox" value="" />
                  Saturday
                </label>
                <label className="checkbox-inline" style={{ marginLeft: 60 }}>
                  <input type="checkbox" value="" />
                  Sunday
                </label>
              </div>
            </div>
            <br></br>
            <div className="form-group">
              <div className="col-sm-10">
                <div className="row justify-content-start">
                  <div className="col-6">
                    <label
                       
                      className=" font-weight-bold"
                      style={{ marginRight: 20 }}
                    >
                      Select a start time:
                    </label>
                    <input
                      type="time"
                      id="appt"
                      name="appt"
                      style={{ width: 250 }}
                    />
                  </div>
                  <div className="col-6">
                    <label
                      
                      className=" font-weight-bold"
                      style={{ marginRight: 20 }}
                    >
                      Select an end time:
                    </label>
                    <input
                      type="time"
                      id="appt"
                      name="appt"
                      style={{ width: 250 }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <br></br>
            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
               
              >
                Manager's Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter the Operation's team Manager's Name"
                />
              </div>
            </div>
            <br></br>
            <div className="form-group">
              <label
                className="control-label col-sm-2 font-weight-bold"
          
              >
                Manager's Contact:
              </label>
              <div className="col-sm-10">
                <input
                  type="phonenumber"
                  className="form-control"
                  id="email"
                  placeholder="Enter the Operation team Manager's phone number"
                />
              </div>
            </div>
            <br></br>
            <div className="form-group">
              <label
                className="control-label col-sm-4 font-weight-bold"
               
              >
                Manager's Email ID:
              </label>
              <div className="col-sm-10">
                <input
                  type="phonenumber"
                  className="form-control"
                  id="email"
                  placeholder="Enter the Operation team Manager's phone number"
                />
              </div>
            </div>
            <br></br>
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
                        marginLeft: 240,
                      }}
                      type="submit"
                      className="form-control"
                      id="email"
                      placeholder="Submit"
                    />
                  </div>
                  <div className="col-2">
                    <input
                      className=" font-weight-bold"
                      style={{
                        backgroundColor: " rgb(220,20,60)",
                        color: "white",
                        width: 200,
                        fontWeight: "bold",
                        fontSize: 20,
                        height: 45,
                        borderRadius: 50,
                        marginLeft: 200,
                      }}
                      type="reset"
                      className="form-control"
                      id="email"
                      placeholder="Cancel"
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

export default Register;

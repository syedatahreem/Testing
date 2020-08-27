import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';

class Dummy extends Component {
  render() {
    return (
      <div
        class="container-fluid"
        style={{
          height: 250,
          width: 1500,
          backgroundColor: "rgb(154,196,226)",
          borderBottomRightRadius: 50,
        }}
      >

          
        <br></br>
        <div>
        <div class="topnav" style={{float:"right"}}>
          <div class="topnav-right font-weight-bold " >
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
        <div class="main">
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
          <i class="fas fa-users"></i>
          <FontAwesomeIcon icon={""} />
          <br></br>
          <form
            class="form-horizontal"
            action="https://www.google.com"
            style={{ marginLeft: 300 }}
          >
            <div class="form-group">
              <label
                class="control-label col-sm-2 font-weight-bold"
                for="fname"
              >
                FirstName:
              </label>
              <div class="col-sm-10">
                <input
                  type="name"
                  class="form-control"
                  id="firstName"
                  placeholder="Enter firstname"
                />
              </div>
            </div>
            <div class="form-group">
              <label
                class="control-label col-sm-2 font-weight-bold"
                for="lname"
              >
                LastName:
              </label>
              <div class="col-sm-10">
                <input
                  type="name"
                  class="form-control"
                  id="lastName"
                  placeholder="Enter lastname"
                />
              </div>
            </div>
            <div class="form-group">
              <label
                class="control-label col-sm-2 font-weight-bold"
                for="password"
              >
                Password:
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div class="form-group">
              <label
                class="control-label col-sm-2 font-weight-bold"
                for="confirmPass"
              >
                Confirm Password:
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="confirmPass"
                  placeholder="Confirm the entered password"
                />
              </div>
            </div>
            <div class="form-group">
              <label
                class="control-label col-sm-2 font-weight-bold"
                for="email"
              >
                Email ID:
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email-id"
                />
              </div>
            </div>
            <div class="form-group">
              <label
                class="control-label col-sm-2 font-weight-bold"
                for="telNo"
              >
                Phone Number:
              </label>
              <div class="col-sm-10">
                <input
                  type="telNo"
                  class="form-control"
                  id="email"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div class="col-sm-10">
              <br></br>

              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle font-weight-bold"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{
                    textAlign: "left",
                    width: 900,
                    backgroundColor: "rgb(139, 154,193)",
                    color: "black",
                  }}
                >
                  Select working group
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div class="form-group">
              <label
                class="control-label col-sm-2 font-weight-bold"
                for="email"
              >
                Choose Work Days:
              </label>
              <div class="col-sm-10">
                <label class="checkbox-inline" style={{ paddingRight: 20 }}>
                  <input type="checkbox" value="" />
                  Monday
                </label>
                <label class="checkbox-inline" style={{ marginLeft: 30 }}>
                  <input type="checkbox" value="" />
                  Tuesday
                </label>
                <label class="checkbox-inline" style={{ marginLeft: 50 }}>
                  <input type="checkbox" value="" />
                  Wednesday
                </label>
                <label class="checkbox-inline" style={{ marginLeft: 60 }}>
                  <input type="checkbox" value="" />
                  Thursday
                </label>
                <label class="checkbox-inline" style={{ marginLeft: 60 }}>
                  <input type="checkbox" value="" />
                  Friday
                </label>
                <label class="checkbox-inline" style={{ marginLeft: 60 }}>
                  <input type="checkbox" value="" />
                  Saturday
                </label>
                <label class="checkbox-inline" style={{ marginLeft: 60 }}>
                  <input type="checkbox" value="" />
                  Sunday
                </label>
              </div>
            </div>
            <br></br>
            <div class="form-group">
              <div class="col-sm-10">
                <div class="row justify-content-start">
                  <div class="col-6">
                    <label
                      for="appt"
                      class=" font-weight-bold"
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
                  <div class="col-6">
                    <label
                      for="appt"
                      class=" font-weight-bold"
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
            <div class="form-group">
              <label
                class="control-label col-sm-2 font-weight-bold"
                for="email"
              >
                Manager's Name:
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter the Operation's team Manager's Name"
                />
              </div>
            </div>
            <br></br>
            <div class="form-group">
              <label
                class="control-label col-sm-2 font-weight-bold"
                for="email"
              >
                Manager's Contact:
              </label>
              <div class="col-sm-10">
                <input
                  type="phonenumber"
                  class="form-control"
                  id="email"
                  placeholder="Enter the Operation team Manager's phone number"
                />
              </div>
            </div>
            <br></br>
            <div class="form-group">
              <label
                class="control-label col-sm-2 font-weight-bold"
                for="email"
              >
                Manager's Email ID:
              </label>
              <div class="col-sm-10">
                <input
                  type="phonenumber"
                  class="form-control"
                  id="email"
                  placeholder="Enter the Operation team Manager's phone number"
                />
              </div>
            </div>
            <br></br>
            <div class="form-group font-weight-bold">
              <div class="col-sm-10 font-weight-bold">
                <div class="row justify-content-start">
                  <div class="col-4">
                    <input
                      class=" font-weight-bold"
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
                      class="form-control"
                      id="email"
                      placeholder="Submit"
                    />
                  </div>
                  <div class="col-2">
                    <input
                      class=" font-weight-bold"
                      style={{
                        backgroundColor: " rgb(220,20,60)",
                        color: "white",
                        width: 200,
                        fontWeight: "bold",
                        fontSize: 20,
                        height: 45,
                        borderRadius: 50,
                        marginLeft: 150,
                      }}
                      type="reset"
                      class="form-control"
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

export default Dummy;

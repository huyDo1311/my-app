import React, { Component } from "react";
import "./UserProfile.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'


export default class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: "",
      passWordConfirm: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      passWord: "",
      passWordConfirm: "",
    },
  };
 

  handleChangeValue = (event) => {
    let { name, value, type } = event.target;
    let newValue = { ...this.state.values, [name]: value };
    let newErrors = { ...this.state.errors };

    if (value.trim() === "") {
      newErrors[name] = name + " is required!";
    } else {
      newErrors[name] = "";
    }

    if (type === "email") {
      const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regexEmail.test(value)) {
        newErrors[name] = name + " is invalid !";
      } else {
        newErrors[name] = "";
      }
    }

    if (name === "passWordConfirm") {
      if (value === newValue["passWord"]) {
        newErrors[name] = "";
      } else {
        newErrors[name] = name + " is invalid";
      }
    }

    this.setState(
      {
        values: newValue,
        errors: newErrors,
      },
      () => {
        console.log("this.state", this.state);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let {values, errors} = this.state;
    let valid = true;
    let profileContent = '';
    let errorsContent = '';
    for(let key in values) {
        if(values[key] === '') {
            errorsContent += `<p class="text-left"><b class="text-danger">${key}: is invalid!</b></p>`;
            valid = false;
        };
        profileContent += `<p class="text-left"><b>${key}: </b>${values[key]}</p>`;
    }
    for(let key in errors) {
        if(errors[key] !== ''){
            errorsContent += `<p class="text-left"><b class="text-danger">${key}: is invalid!</b></p>`;
            valid = false;
        }
        
    }
    if(!valid) {
        Swal.fire({
            title: 'Your profile',
            html: errorsContent,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        return;
    }
    // alert('Thanh cong')
    Swal.fire({
        title: 'Your profile',
        html: profileContent,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#EEEEEE",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={this.handleSubmit} className="w-50 bg-white p-5 m-5">
          <h1 className="text-center mt-0">User Profile</h1>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.firstName}
                    type="text"
                    name="firstName"
                    // required
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>firstName</label>
                  <span className="text text-danger">
                    {this.state.errors.firstName}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.lastName}
                    type="text"
                    name="lastName"
                    required
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>lastName</label>
                  <span className="text text-danger">
                    {this.state.errors.lastName}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="group">
                  <input
                    value={this.state.values.userName}
                    type="text"
                    name="userName"
                    required
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>userName</label>
                  <span className="text text-danger">
                    {this.state.errors.userName}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="group">
                  <input
                    value={this.state.values.email}
                    type="email"
                    name="email"
                    required
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>email</label>
                  <span className="text text-danger">
                    {this.state.errors.email}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.passWord}
                    type="password"
                    name="passWord"
                    // required
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>password</label>
                  <span className="text text-danger">
                    {this.state.errors.passWord}
                  </span>
                </div>
              </div>
              <div className="col-6">
                <div className="group">
                  <input
                    value={this.state.values.passWordConfirm}
                    type="password"
                    name="passWordConfirm"
                    required
                    onChange={this.handleChangeValue}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>passWordConfirm</label>
                  <span className="text text-danger">
                    {this.state.errors.passWordConfirm}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button className="btn btn-dark text-white form-control p-3">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

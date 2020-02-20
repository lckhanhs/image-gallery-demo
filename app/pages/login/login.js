import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormField, Label } from "semantic-ui-react";
import Cookies from "js-cookie";
import "./login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.auth = {
      email: "admin@admin.com",
      password: "admin123"
    };
    this.state = {
      password: "",
      email: "",
      submittedPassword: "",
      submittedEmail: "",
      isLoading: false
    };
  }

  render() {
    const { email, password, isLoading, error } = this.state;
    return (
      <div className="login-component">
        <Form
          onSubmit={() => {
            this.handleSubmit();
          }}
          loading={isLoading}
        >
          <div className="title">LOGIN REQUIRED</div>
          <div className="error">{error}</div>
          <Form.Input
            label="Email"
            placeholder={this.auth.email}
            value={email}
            name="email"
            onChange={e => {
              this.handleChange(e);
            }}
            type="email"
            required
          />
          <Form.Input
            label="Password"
            placeholder={this.auth.password}
            type="password"
            value={password}
            name="password"
            onChange={e => {
              this.handleChange(e);
            }}
            minLength={6}
            required
          />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value, error: "" });
  }
  handleSubmit() {
    console.log("form submit:");

    const { password, email } = this.state;
    this.setState(
      {
        isLoading: true
      },
      () => {
        setTimeout(() => {
          if (email == this.auth.email && password == this.auth.password) {
            Cookies.set("token", "__t0k3n");
            window.location.href = "/";
          } else {
            this.setState({
              error: "Email/Password is invalid."
            });
          }
        }, 3000);
      }
    );
  }
}

Login.propTypes = {};

export default Login;

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { SigninAction } from '../store/action/logIn'
import { TextField, Paper, RaisedButton } from "material-ui";
import { Link } from 'react-router'



function mapStateToProps(state) {
  return {
    isAuthenticated: state.LoginReducer.isAuthenticated,
  }
}


class SignIn extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(() => {
      if (this.props.isAuthenticated) {
        console.log("Authenticated true in signin");
        this.context.router.push("/app");
      }
    }, 0);
  }

  studentHandleLogin() {

    var credentials = {};
    credentials.email = this.refs.email.getValue();
    credentials.password = this.refs.pass.getValue();
    this.props.dispatch(SigninAction.login(credentials));

  }



  render() {
    return (
      <div>

        <div
          style={{
            width: "500px",
            margin: "100px auto",
            textAlign: "center",
            borderRadius: "20px"
          }}>
          <Paper zDepth={3} >

            <h2 style={{ backgroundColor: "#8BC34A", height: "50px", marginTop: "0px", paddingTop: "20px", color: "white" }}>Login</h2>
            <div style={{ padding: "10px" }}>
              <TextField floatingLabelText="Email" type="email" ref="email" fullWidth={true} defaultValue="a@a.com" />
              <br />
              <TextField
                floatingLabelText="Password"
                ref="pass"
                type="password"
                fullWidth={true}
                defaultValue="123456" />
              <br />
              <RaisedButton
                fullWidth={true}
                onClick={
                  this.studentHandleLogin.bind(this)
                }
              >Login</RaisedButton>
              <Link to="/SignUp"><p style={{ textAlign: "right" }}>Create Account</p></Link>
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SignIn);
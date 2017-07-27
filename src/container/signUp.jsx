
import React, { Component,PropTypes } from 'react';
import { SignUpAction } from '../store/action/signUp';
import { TextField, Paper, RaisedButton, } from "material-ui";

import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {
        isRegistered: state.LoginReducer.isRegistered
    }
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    }
 componentWillReceiveProps(nextProps){
    setTimeout(()=> {
      if(this.props.isRegistered){
        console.log("isRegistered true in signup");
        this.context.router.push("/login");
      }
    },0);
  }



    handleStudentSinUp() {
        var credentials = {};
        credentials.nam = this.refs.name.getValue();
        credentials.email = this.refs.email.getValue();
        credentials.password = this.refs.pass.getValue();
        this.props.dispatch(SignUpAction.SignUp(credentials))
   

    } 
    
    render() {

  
        return (<div>


            <div
                style={{
                    height: "200px",
                    width: "500px",
                    margin: "100px auto",
                    textAlign: "center"
                }}>
                <Paper zDepth={3} >

                    <h2 style={{ backgroundColor: "#8BC34A", height: "50px", margin: "0px", paddingTop: "20px", color: "white" }}>SignUp</h2>
                    <div style={{ padding: "10px", }}>
                        <TextField floatingLabelText="Name" ref="name" fullWidth={true} />
                        <br />
                        <TextField floatingLabelText="Email" ref="email" fullWidth={true} />
                        <br />
                        <TextField
                            floatingLabelText="Password"
                            ref="pass"
                            type="password"
                            fullWidth={true} />

                        <br/>

                        <RaisedButton
                            fullWidth={true}
                            onClick={
                                this.handleStudentSinUp.bind(this)
                            }


                        >SignUp</RaisedButton>
                    </div>
                </Paper>
            </div>
        </div>
        );
    }

};


export default connect(mapStateToProps)(SignUp);
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FlatButton, AppBar, } from "material-ui";
import { Link } from 'react-router';




function mapStateToProps(state) {
  return {
    isAuthenticated: state.LoginReducer.isAuthenticated
  }
}

class Main extends Component {
  constructor(props){
    super(props)
      this.state = {
          open: false
      }
    
  }


  static contextTypes = {
    router: PropTypes.object.isRequired
  }


  handleToggle = () => {
    if (this.props.isAuthenticated) {
      this.setState({ open: !this.state.open })
    }

    else {
      this.setState({ open: this.state.open })
      alert("please LogIn")

    }
  }


  handleClose = () => this.setState({ open: false });


  render() {
    return (
      <div className="App">
        <AppBar
          onLeftIconButtonTouchTap={this.handleToggle}
          title={<span>Real Time Car parking</span>}
          iconElementRight={<span>
            <Link to="/"><FlatButton style={{ color: "white" }} label="SignIn" /></Link>
            <Link to="/SignUp"><FlatButton style={{ color: "white" }} label="Signup" /></Link></span>}
        />
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
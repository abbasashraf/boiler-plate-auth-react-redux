import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';



function mapStateToProps(state) {
  return {
    isAuthenticated: state.LoginReducer.isAuthenticated
  }
}

class App extends Component {

     static contextTypes = {
    router: PropTypes.object.isRequired
  }

    componentWillMount() {
    
    if(this.props.isAuthenticated){
      console.log("Authenticated");
    }
    else {
      console.log("Not Authenticated");
      //Uncomment it and it will move to login page if not authenticated
      this.context.router.push("/");
    }
    
  }
  render() {
    return (
      <div className="App">
        app .js
  
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);

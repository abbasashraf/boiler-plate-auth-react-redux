import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// material
import {
  cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack, lightGreen500,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Components
import Main from './container/main.js';
import SignIn from './container/logIn.jsx';
import SignUp from './container/signUp.jsx'
import App from './container/app'
//redux  && router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { store } from './store/index.js';



import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightGreen500,
    primary2Color: lightGreen500,
    primary3Color: lightGreen500,
    accent1Color: lightGreen500,
    accent2Color: lightGreen500,
    accent3Color: lightGreen500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: lightGreen500,
  
    pickerHeaderColor: lightGreen500,
  
    shadowColor: fullBlack,
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        {/*<Route component={SignIn} path="login"></Route>*/}


        <Route component={Main} path='/'>
          <IndexRoute component={SignIn} />
          <Route component={SignUp} path='/signup'></Route>

        </Route>
        <Route component={App} path='/app'></Route>


      </Router>
    </MuiThemeProvider>
  </Provider>


  , document.getElementById('root'));
registerServiceWorker();

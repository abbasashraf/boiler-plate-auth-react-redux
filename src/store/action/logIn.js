import firebase from '../../firebase';
export class SigninAction {

    static LOGIN = "LOGIN";
    static LOGIN_SUCCESS = "LOGIN_SUCCESS";
    static LOGIN_UN_SUCCESS = "LOGIN_UN_SUCCESS";


    static login(credentials) {
        return (dispatch) => {
            firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).then(function (res) {
                console.log("login success")
                dispatch(SigninAction.loginSuccess());
            }).catch((err) => {
                alert(err.message)
                dispatch(SigninAction.loginUnSuccess());
            });
        }
    }
    static loginSuccess() {
        return {
            type: SigninAction.LOGIN_SUCCESS,
            payload: null
        }
    }
    static loginUnSuccess() {
        return {
            type: SigninAction.LOGIN_UN_SUCCESS,
            payload: null
        }
    }

    // static chekLogin(loginState) {
    //     return (dispatch) => {
    //         if (loginState == false) {
    //             hashHistory.replace("/login");
    //         }
    //         else {
    //             hashHistory.replace("/")
    //         }
    //     }
  //  }


}
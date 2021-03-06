import firebase from "../../firebase";



export class SignUpAction {
    static SIGNUP = "SIGNUP";
    static SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
    static SIGN_UP_UNSUCCESS = "SIGN_UP_UNSUCCESS";

    static SignUp(credentials) {
        return (dispatch) => {
            firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password).then((res) => {
                console.log("sign up success")
                dispatch(SignUpAction.SignUpSuccess());
            }).catch((err) => {
                alert(err.message)
                dispatch(SignUpAction.SignUpUnSuccess());
            });
        }
    }

    static SignUpSuccess() {
        return { 
            type: SignUpAction.SIGN_UP_SUCCESS 
        }
    }

    static SignUpUnSuccess() {
        return { 
            type: SignUpAction.SIGN_UP_UNSUCCESS 
        }
    }


}
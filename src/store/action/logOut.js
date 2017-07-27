import browserHistory from "react-router" ;
import firebase from '../../firebase';

export default class LogOutAction {
    static LOGOUT = "LOGOUT";
    static LOGOUT_SUCCESS = "LOGOUT_SUCCESS";




    static logout(){
        return (dispatch)=>{
             firebase.auth().signOut().then(function () {
                browserHistory.replace("/");
                dispatch(LogOutAction.logoutSuccess());
            })
        }
    }

    static logoutSuccess(){
        return {
            type: LogOutAction.LOGOUT_SUCCESS
        }
    }
}
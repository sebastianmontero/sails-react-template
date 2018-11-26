import { ActionTypes } from '../const';
import { UserService } from '../services';

class UserAction {
    static signinRequest() {
        return {
            type: ActionTypes.SIGNIN_REQUEST,
        };
    }

    static signinSuccess(user) {
        return {
            type: ActionTypes.SIGNIN_SUCCESS,
            user,
        };
    }

    static signinFailure(error) {
        return {
            type: ActionTypes.SIGNIN_FAILURE,
            error,
        };
    }

    static signin(credentials) {
        return (dispatch) => {
            dispatch(UserAction.signinRequest());
            UserService.signin(credentials).then((user) => {
                dispatch(UserAction.signinSuccess(user));
            }, (error) => {
                dispatch(UserAction.signinFailure(error));
            });
        };
    }
}

export default UserAction;

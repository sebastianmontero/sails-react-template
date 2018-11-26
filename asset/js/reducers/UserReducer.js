import { ActionTypes } from '../const';

const initialState = {
    user: null,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.SIGNIN_REQUEST:
        return {
            user: null,
            error: null,
        };
    case ActionTypes.SIGNIN_SUCCESS:
        return {
            ...state,
            user: action.user,
        };
    case ActionTypes.SIGNIN_FAILURE:
        return {
            ...state,
            error: action.error,
        };
    default:
        return state;
    }
};

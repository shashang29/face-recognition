import { userConstants } from '../constants/userAuth.constants';

const initialUserState = {
    user: null,
    error: null,
    isSignedIn: false,
    isPending: false
}

const { SIGNIN_REQUEST,
    SIGNIN_FAILED, SIGNIN_SUCCESS,
} = userConstants;


export default function (state = initialUserState, action = {}) {
    switch (action.type) {
        case SIGNIN_REQUEST:
            return { ...state, isPending: true }
        case SIGNIN_SUCCESS:
            return { ...state, isSignedIn: true, isPending: false, error: null, user: action.payload };
        case SIGNIN_FAILED:
            return { ...state, error: action.payload, isPending: false }
        default:
            return state;
    }
}


import { userConstants } from '../constants/userAuth.constants';

const initialUserState = {
    user: null,
    error: null,
    isSignedIn: false,
    isPending: false
}

const { SIGNIN_REQUEST,
    SIGNIN_FAILED, SIGNIN_SUCCESS, SIGN_OUT
} = userConstants;


export default function (state = initialUserState, action = {}) {
    console.log(action.payload)
    switch (action.type) {
        case SIGNIN_REQUEST:
            return { ...state, isPending: true }
        case SIGNIN_SUCCESS:
            return { ...state, isSignedIn: true, isPending: false, error: null, user: action.payload };
        case SIGNIN_FAILED:
            return { ...state, error: action.payload, isPending: false }
        case SIGN_OUT:
            return { ...initialUserState }
        default:
            return state;
    }
}


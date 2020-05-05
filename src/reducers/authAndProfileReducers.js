import { userConstants } from '../constants/userAuth.constants';
import { UPDATE_IMAGE_COUNT, UPDATE_PROFILE } from '../constants/user.constants';

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
    switch (action.type) {
        case SIGNIN_REQUEST:
            return { ...state, isPending: true }
        case SIGNIN_SUCCESS:
            return { ...state, isSignedIn: true, isPending: false, error: null, user: action.payload };
        case SIGNIN_FAILED:
            return { ...state, error: action.payload, isPending: false }
        case UPDATE_IMAGE_COUNT:
            return { ...state, user: { ...state.user, entries: action.payload } }
        case UPDATE_PROFILE:
            return { ...state, user: { ...state.user, ...action.userData } }
        case SIGN_OUT:
            return initialUserState
        default:
            return state;
    }
}


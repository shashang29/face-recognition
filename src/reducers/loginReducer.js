import { userConstants } from '../constants/userAuth.constants';

const initialUserState = {
    user: {
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        entries: 0,
        joined: '',
        age: ''
    },
    error: '',
    isSignedIn: false
}

const {
    SIGNIN_FAILED, SIGNIN_SUCCESS,
} = userConstants;


export default function (state = initialUserState, action = {}) {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return { ...state, isSignedIn: true,error:'', user: { ...action.response } };
        case SIGNIN_FAILED:
            return { ...state, error: action.response }
        default:
            return state;
    }
}


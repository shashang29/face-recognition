import { userConstants } from '../constants/user.constants';

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
    error: ''
}

const {
    SIGNIN_FAILED, SIGNIN_SUCCESS,
} = userConstants;


export default function (state = initialUserState, action = {}) {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return { ...state, user: { ...action.response }};
        case SIGNIN_FAILED:
            return { ...state, error: action.response }
        default:
            return state;
    }
}


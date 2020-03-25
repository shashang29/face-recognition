import { userConstants } from '../constants/user.constants';

const initialRegisterState = {
    registered: false,
    error: ''
}

const {
    REGISTER_FAILED, REGISTER_SUCCESS
} = userConstants;


export default function (state = initialRegisterState, action = {}) {
    console.log(action.response)
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state, registered: true };
        case REGISTER_FAILED:
            return { ...state, error: 'Could not register. Try again' }
        default:
            return state;
    }
}


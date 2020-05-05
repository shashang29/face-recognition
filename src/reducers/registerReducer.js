import { userConstants } from '../constants/userAuth.constants';

const initialRegisterState = {
    registered: false,
    error: '',
    isPending: false
}

const {
    REGISTER_FAILED, REGISTER_SUCCESS, REGISTER_RESET, REGISTER_REQUEST
} = userConstants;


export default function (state = initialRegisterState, action = {}) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, isPending: true };
        case REGISTER_SUCCESS:
            return { ...state, registered: true, isPending: false };
        case REGISTER_FAILED:
            return { ...state, error: 'Could not register. Try again', isPending: false }
        case REGISTER_RESET:
            return { initialRegisterState }
        default:
            return state;
    }
}


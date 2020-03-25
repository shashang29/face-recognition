import { CHANGE_IMAGE_INPUT, PENDING } from '../constants/constants';


const initialState = {
    input: '',
}

export const pictureSubmit = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_IMAGE_INPUT:
            return { ...state, input: action.payload };
        default:
            return state;
    }
}


export const isPending = (state = {pending:false}, action = {}) => {
    switch (action.type) {
        case PENDING:
            return {...state, pending:action.payload };
        default:
            return state;
    }
}
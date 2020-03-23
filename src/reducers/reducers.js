import { CHANGE_IMAGE_INPUT } from './constants/constants';


const initialState = {
    input: ''
}

export const pictureSubmit = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_IMAGE_INPUT:
            return { ...state, input: action.payload };
        default:
            return state;
    }
}
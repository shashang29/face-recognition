import { CHANGE_IMAGE_INPUT, SET_IMAGE_URL } from '../constants/constants';


const initialImageState = {
    input: '',
    imageUrl: ''
}

export const imageInput = (state = initialImageState, action = {}) => {
    switch (action.type) {
        case CHANGE_IMAGE_INPUT:
            return { ...state, input: action.payload };
        case SET_IMAGE_URL:
            return { ...state, imageUrl: action.payload }
        default:
            return state;
    }
}


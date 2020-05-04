import { SUBMIT_IMAGE, PROFILE_TOGGLE, DISPLAY_FACE_DATA, NO_FACE_DETECTED, RESET_IMAGE_STATE, FETCH_IMAGE_DATA_FAILED } from '../constants/user.constants';


const initialImageState = {
    input: '',
    imageUrl: '',
    faceBoxes: [],
    error: ''
}

export const imageInput = (state = initialImageState, action = {}) => {
    switch (action.type) {
        case SUBMIT_IMAGE:
            return { ...state, imageUrl: action.payload }
        case DISPLAY_FACE_DATA: return {
            ...state, faceBoxes: action.payload
        }
        case NO_FACE_DETECTED: return {
            ...state, error: 'No face was detected'
        }
        case FETCH_IMAGE_DATA_FAILED: return {
            ...state, error: 'There was an error. Please try again'
        }
        case RESET_IMAGE_STATE: return initialImageState

        default:
            return state;
    }
}

const initialProfileToggleState = {
    isProfileOpen: false
}

export const toggleProfile = (state = initialProfileToggleState, action = {}) => {
    switch (action.type) {
        case PROFILE_TOGGLE:
            return { isProfileOpen: !state.isProfileOpen }
        default:
            return state
    }
}

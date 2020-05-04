import {
    SUBMIT_IMAGE,
    PROFILE_TOGGLE,
    DISPLAY_FACE_DATA,
    RESET_IMAGE_STATE
} from '../constants/user.constants';


export const submitImage = (ImageURL) => ({
    type: SUBMIT_IMAGE,
    payload: ImageURL
});

export const toggleModal = () => ({
    type: PROFILE_TOGGLE
});

export const displayFaceData = (FaceBoxes) => ({
    type: DISPLAY_FACE_DATA,
    payload: FaceBoxes
});

export const resetImageState = () => ({
    type: RESET_IMAGE_STATE
});
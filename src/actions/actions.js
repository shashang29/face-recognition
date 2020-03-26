import { CHANGE_IMAGE_INPUT, PENDING, SUBMIT_IMAGE, SET_IMAGE_URL
} from '../constants/constants';


export const setImageInput = (ImageURL) => ({
    type: CHANGE_IMAGE_INPUT,
    payload: ImageURL
});

export const setPending =(status)=>({
    type: PENDING,
    payload: status
})

export const submitImage=(ImageURL)=>({
type: SUBMIT_IMAGE,
payload: ImageURL
});

export const setImageURL=(ImageURL)=>({
    type: SET_IMAGE_URL,
    payload: ImageURL
});
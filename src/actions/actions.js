import { CHANGE_IMAGE_INPUT, PENDING
} from '../constants/constants';


export const setImageInput = (ImageURL) => ({
    type: CHANGE_IMAGE_INPUT,
    payload: ImageURL
});

export const setPending =(status)=>({
    type: PENDING,
    payload: status
})

import { CHANGE_IMAGE_INPUT
} from '../constants/constants';


export const setImageInput = (ImageURL) => ({
    type: CHANGE_IMAGE_INPUT,
    payload: ImageURL
});


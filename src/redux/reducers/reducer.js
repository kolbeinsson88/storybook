import { BUTTON_PROPS } from '../actions/types';

const INITIALIZE_STATE = {
    props: ''
};

export default function (state = INITIALIZE_STATE, action) {
    switch(action.type) {
        case BUTTON_PROPS:
            return {
                ...state,
                props: action.payload
            }
        default: return {...state};
    }
};
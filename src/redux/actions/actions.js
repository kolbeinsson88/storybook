import { BUTTON_PROPS  } from '../actions/types';

export const doTask = () => dispatch => {
    return dispatch({ type: BUTTON_PROPS, payload: 'props' });
}
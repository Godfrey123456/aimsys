import { CHILDUPDATE, CHILD_CREATE, CHILD_SAVE, CHILD_FETCH_LOAD_START, CHILD_FETCH_LOAD_END } from '../actions/types';
var _ = require('lodash');

const INITIAL_STATE = {
    HNumber: '',
    CName: '',
    CMotherName: '',
    option: '',
    DPickdob: new Date(),
    DPickregdate: new Date(),
    Loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHILDUPDATE:
            return { ...state, [action.payload.name]: action.payload.value };
        case CHILD_CREATE:
            return INITIAL_STATE;
        case CHILD_SAVE:
            return INITIAL_STATE;       
        case CHILD_FETCH_LOAD_START:
            return { Loading: action.payload };
        case CHILD_FETCH_LOAD_END:
            return { Loading: action.payload };
        default:
            return state;
    }
};
import actionTypes from '../ActionTypes/user';
import update from 'immutability-helper';

const initialState = {
    userData: false,
    loadingUser: false
};

const repos = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_USER_DATA:
            return update(state, { userData: { $set: action.payload.key.user } });
        case actionTypes.LOADING_USER:
            return update(state, { loadingUser: { $set: action.payload.status } });
        case actionTypes.CLEAN_USER_PARAMS:
            return update(state, {
                $set:
                {
                    userData: [],
                    loadingUser: false
                }
            });
        default:
            return state;
    }
};

export default repos;
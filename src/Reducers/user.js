import actionTypes from '../ActionTypes/user';
import update from 'immutability-helper';

const initialState = {
    userData: false,
    orgs: false,
    error_userData: false,
    loadingUser: false
};

const repos = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_USER_DATA:
            return update(state, { userData: { $set: action.payload.key.user } });
            case actionTypes.ADD_ORGS_DATA:
                return update(state, { orgs: { $set: action.payload.key.orgs } });
        case actionTypes.ERROR_USER_DATA:
            return update(state, { error_userData: { $set: action.payload.status } });
        case actionTypes.LOADING_USER:
            return update(state, { loadingUser: { $set: action.payload.status } });
        case actionTypes.CLEAN_USER_PARAMS:
            return update(state, {
                $set:
                {
                    userData: false,
                    orgs: false,
                    loadingUser: false
                }
            });
        default:
            return state;
    }
};

export default repos;
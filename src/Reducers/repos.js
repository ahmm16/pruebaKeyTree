import actionTypes from '../ActionTypes/repos';
import update from 'immutability-helper';

const initialState = {
    userName: '',
    repos: false,
    loadingRepos: false
};

const repos = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_REPOS:
            return update(state, { repos: { $set: action.payload.key } });
        case actionTypes.ADD_USERNAME_PARAM:
            return update(state, { userName: { $set: action.payload.value } });
        case actionTypes.LOADING_REPOS:
            return update(state, { loadingRepos: { $set: action.payload.status } });
        case actionTypes.CLEAN_PARAMS_REPOS:
            return update(state, {
                $set:
                {
                    userName: '',
                    repos: [],
                    loadingRepos: false
                }
            });
        default:
            return state;
    }
};

export default repos;
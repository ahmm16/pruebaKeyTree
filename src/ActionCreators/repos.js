import { getRepos } from '../Api/GithubApi';
import actionTypes from '../ActionTypes/repos'
import actionUser from './user'

const actions = {
    searchUserRepos: () => {
        return (dispatch, store) => {
            dispatch(actions.loadingRepos(true));
            const { userName } = store().repos;
            getRepos(userName).then(response => {
                dispatch(actions.setUserRepos(response));
                dispatch(actions.loadingRepos(false));
            }, reason => {
                dispatch(actions.loadingRepos(false));
                dispatch(actions.setUserRepos(null));
                if (reason.message === 400) {
                    //Login erroneo
                    console.log("No api 400")
                } else {
                    //TODO: Falló otra cosa
                    console.log("No api 1")

                }
            });

        }
    },

    setUserNameParam: (key, value) => {
        return {
            type: actionTypes.ADD_USERNAME_PARAM,
            payload: {
                key,
                value
            }
        };
    },

    setUserRepos: (key, value) => {
        return {
            type: actionTypes.SET_USER_REPOS,
            payload: {
                key,
                value
            }
        };
    },

    loadingRepos: (status) => ({
        type: actionTypes.LOADING_REPOS,
        payload: {
            status
        }
    }),

    cleanParamsRepos: () => {
        return {
            type: actionTypes.CLEAN_PARAMS_REPOS
        };
    },
};

export default actions;
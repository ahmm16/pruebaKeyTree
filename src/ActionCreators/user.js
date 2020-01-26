import { getUserData } from '../Api/GithubApi';
import actionTypes from '../ActionTypes/user'
import actionRepos from './repos'

const actions = {
    setUserData: () => {
        return (dispatch, store) => {
            dispatch(actions.loadingUser(true));
            const { userName } = store().repos;
            getUserData(userName).then(response => {
                dispatch(actions.addUserData(response));
                dispatch(actions.loadingUser(false));
                dispatch(actions.errorUserData(false));
            }, reason => {
                if (reason.message === 400) {
                    //User erroneo
                    console.log("No api 400")
                    dispatch(actions.loadingUser(false));
                    dispatch(actions.errorUserData(true));
                } else {
                    //TODO: Falló otra cosa
                    console.log("No api 1")
                    dispatch(actions.loadingUser(false));
                    dispatch(actions.errorUserData(true));

                }
            });

        }
    },

    addUserData: (key, value) => {
        return {
            type: actionTypes.ADD_USER_DATA,
            payload: {
                key,
                value
            }
        };
    },

    errorUserData: (status) => {
        return {
            type: actionTypes.ERROR_USER_DATA,
            payload: {
                status
            }
        };
    },

    loadingUser: (status) => ({
        type: actionTypes.LOADING_USER,
        payload: {
            status
        }
    }),

    cleanUserParams: () => {
        return {
            type: actionTypes.CLEAN_USER_PARAMS
        };
    },
};

export default actions;
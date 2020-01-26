import { getUserData } from '../Api/GithubApi';
import actionTypes from '../ActionTypes/user'

const actions = {

    setUserData: () => {
        return (dispatch, store) => {
            dispatch(actions.loadingUser(true));
            const { userName } = store().repos;
            getUserData(userName).then(response => {
                console.log("USER", response)
                dispatch(actions.addUserData(response));
                dispatch(actions.loadingUser(false));
            }, reason => {
                dispatch(actions.loadingUser(false));
                dispatch(actions.addUserData(null));
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
    
    addUserData: (key, value) => {
        return {
            type: actionTypes.ADD_USER_DATA,
            payload: {
                key,
                value
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
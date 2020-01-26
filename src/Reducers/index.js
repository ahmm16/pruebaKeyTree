import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import repos from './repos'
import user from './user'
export default (history) => combineReducers({
    router: connectRouter(history),
    repos,
    user
});
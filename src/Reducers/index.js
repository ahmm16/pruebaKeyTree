import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import repos from './repos'
export default (history) => combineReducers({
    router: connectRouter(history),
    repos
});
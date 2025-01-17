import { combineReducers } from 'redux'
import authedUser from './authedUser'
import tweets from './tweets'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

//Use Redux combineReducers by passing it an object containing
//all your reducers
export default combineReducers({
    authedUser,
    tweets,
    users,
    loadingBar: loadingBarReducer,
})

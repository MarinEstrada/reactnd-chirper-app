import { combineReducers } from 'redux'
import authedUser from './authedUser'
import tweets from './tweets'
import users from './users'

//Use Redux combineReducers by passing it an object containing
//all your reducers
export default combineReducers({
    authedUser,
    tweets,
    users,
})

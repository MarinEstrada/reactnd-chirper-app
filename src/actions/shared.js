import { getInitalData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveTweets } from './tweets'
import { setAuthedUser } from './authedUser'

//user currently 'logged in'
const AUTHED_ID = 'tylermcginnis'

export function handleInitalData() {
    return (dispatch) => {
        return getInitalData()
            .then(({ users, tweets }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}

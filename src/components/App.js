import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <div>
                <LoadingBar />
                {this.props.loading === true
                    ? null
                    : <TweetPage match={{params: {id: '6h5ims9iks66d4m7kqizmv'}}} />}
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return{
        loading: authedUser === null
    }
}

//We don't need anything from state, so leave
//first invocation blank
//second invocation is where we will render (eg, App)
export default connect(mapStateToProps)(App)

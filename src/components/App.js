import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <div>
                {this.props.loading === true
                    ? null
                    : <Dashboard />}
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

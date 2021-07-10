import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <div>
                Starter Code
            </div>
        )
    }
}

//We don't need anything from state, so leave
//first invocation blank
export default connect()(App)

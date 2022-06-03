import React, { Component } from 'react'

export default class SubLifecycle extends Component {

    componentWillUnmount() {
        this.props.ubahmakanan("Sate")
    }


    render() {
        return (
            <div>
                <h1>SubLifecycle</h1>
            </div>
        )
    }
}

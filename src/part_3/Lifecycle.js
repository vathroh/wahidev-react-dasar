import React, { Component } from 'react'
import SubLifecycle from './SubLifecycle'

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            makanan: "Bakso",
            data: {},
            tampilHalamanSub: false
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data : json
                })
            })
    }

    ubahmakanan = (value) => {
        this.setState({
            makanan: value
        })
    }

    render() {
        return (
            <div>
                <h1>Lifecycle</h1>
                <h2>{this.state.makanan}</h2>
                <hr />

                {this.state.tampilHalamanSub && <SubLifecycle ubahmakanan = { this.ubahmakanan }/>}

                <button onClick={ () => this.setState({tampilHalamanSub: !this.state.tampilHalamanSub}) }>Tampil Halaman Sub Lifecycle</button>
            </div>
        )
    }
}

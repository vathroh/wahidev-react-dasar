import React, { Component } from 'react'

export default class Operan extends Component {
    render() {
        const { makanan, gantiMakanan } = this.props
        return (
            <div>Operan
                {/* <h2>Operan State yang menjadi Props : {this.props.makanan}</h2> */}
                <h2>Operan State yang menjadi Props : {makanan}</h2>
                {/* <button onClick={ () => this.props.gantiMakanan("Soto")}>Ganti Makanan</button> */}
                <button onClick={() => gantiMakanan("Soto")}>Ganti Makanan</button>
            </div>
        )
    }
}

import React, { Component } from 'react'
// import { Container } from 'react-bootstrap'
import FormComponent from './components/FormComponent'
import NavbarComponent from './components/NavbarComponent'
import TableComponent from './components/TableComponent'

export default class index extends Component {

    constructor(props) {
        super(props)

        this.state = {
            makanans: [],
            nama: '',
            deskripsi: '',
            harga: 0,
            id: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.id === "") {

            this.setState({
                makanans: [
                    ...this.state.makanans,
                    {
                        id: this.state.makanans.length + 1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            })

        } else {
            const bukanMakananTerpilih = this.state.makanans
            .filter( (makanan) => makanan.id !== this.state.id )
            .map( (filtermakanan) => {
                return filtermakanan;
            })

            this.setState({
                makanans: [
                    ...bukanMakananTerpilih,
                    {
                        id: this.state.id,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi,
                        harga: this.state.harga
                    }
                ]
            })
        }

        this.setState({
            id: "",
            nama: "",
            deskripsi: "",
            harga: 0
        })
    }

    editData = (id) => {
        const makananTerpilih = this.state.makanans
            .filter((makanan) => makanan.id === id)
            .map((filtermakanan) => {
                return filtermakanan;
            })

        this.setState({
            id: makananTerpilih[0].id,
            nama: makananTerpilih[0].nama,
            deskripsi: makananTerpilih[0].deskripsi,
            harga: makananTerpilih[0].harga
        })
    }

    hapusData = (id) => {
        const makananBaru = this.state.makanans
        .filter( (makanan) => makanan.id !== id )
        .map( (filtermakanan) => {
            return filtermakanan;
        })

        this.setState({
            makanans: makananBaru
        })
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className='container mt-4'>
                    <TableComponent makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData} />
                    <FormComponent {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

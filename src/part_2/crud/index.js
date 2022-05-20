import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import FormComponent from './components/FormComponent'
import NavbarComponent from './components/NavbarComponent'
import TableComponent from './components/TableComponent'

export default class index extends Component {
    render() {
        return (
            <div>
                <NavbarComponent />
                <div className='container mt-4'>
                    <TableComponent />
                    <FormComponent />
                </div>
            </div>
        )
    }
}

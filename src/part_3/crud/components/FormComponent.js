import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const FormComponent = ({nama, deskripsi, harga, handleSubmit, handleChange, id } ) => {
    return (
        <div>
            <Row className='mt-5'>
                <Col>
                    <h4>{ id ? "Edit Data" : "Tambah Data" }</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group className="mb-3" controlId="nama">
                            <Form.Label>Nama Makanan</Form.Label>
                            <Form.Control type="text" name='nama' value={nama} onChange={ (event)=>handleChange(event) } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="deskripsi">
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control as="textarea" rows={3} name="deskripsi" value={deskripsi} onChange={ (event)=>handleChange(event) }/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="harga">
                            <Form.Label>Harga</Form.Label>
                            <Form.Control type="number" name='harga' value={harga} onChange={ (event)=>handleChange(event)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Tambah Data</Button>
                    </Form>

                </Col>
            </Row>
        </div>
    )
}

export default FormComponent
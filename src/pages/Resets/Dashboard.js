import React, { Component } from 'react';
import Axios from "axios";
import Grafico from './Grafico/Grafico';
import '../../assets/css/Dashboard.css'
import Url from '../../services/api';
import MenuNav from '../../components/Menu/MenuNavegacao';
import { Card, Table, Row, DropdownButton, Dropdown, Col } from 'react-bootstrap';

export default class CadastroPlaca extends Component {
    constructor(event) {
        super(event);

        this.state = {
            nome: ""
            , email: ""
            , senha: ""
            , tipoUsuario: ""
        }
    }

    componentDidMount() {
        this.listarPlacaEndereco()
    }

    listarPlacaEndereco() {
        Axios.get(Url + "Usuarios", {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Cerberus-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                console.log(data.data)
            })
    }

    render() {
        return (
            <main>
                <Row>
                    <Col xs="3" lg="2">
                        <MenuNav></MenuNav>
                    </Col>

                    <Col xs="9" lg="10">
                        <Row className="d-flex justify-content-between">
                            <Card variant className='col-3 p-0 b-r-linx'>
                                <Card.Header className="bg-linx f-linx bt-r-linx">TResets</Card.Header>
                                <Card.Body>

                                </Card.Body>
                            </Card>

                            <Card className='col-3 p-0'>
                                <Card.Header className="bg-linx f-linx">UResets</Card.Header>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                            <Card className='col-3 p-0'>
                                <Card.Header className="bg-linx f-linx">Alerte</Card.Header>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className="d-flex justify-content-between">
                            <Card className='col-7 p-0'>
                                <Card.Header className="bg-linx f-linx">Grafico</Card.Header>
                                <Card.Body>
                                    <Grafico />
                                </Card.Body>
                            </Card>
                            <Card className='col-4 p-0'>
                                <Card.Header className="bg-linx f-linx p-10">Ultimos Resets</Card.Header>
                                <Card.Body>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Local</th>
                                                <th>Codigo</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </Table>

                                </Card.Body>
                            </Card>

                        </Row>
                        <Card>
                            <Card.Header className="bg-linx f-linx d-flex bd-highlight">Resets
                            <DropdownButton className="bd-highlight" id="dropdown-basic-button" title="Estado">

                                </DropdownButton>
                                <DropdownButton className="bd-highlight" id="dropdown-basic-button" title="Cidade">

                                </DropdownButton>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Codigo</th>
                                            <th>Local</th>
                                            <th>Ultimo Reset</th>
                                            <th>Quantidade de Resets</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    </tbody>
                                </Table>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </main>
        );
    }
}

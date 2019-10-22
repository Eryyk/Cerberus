import React, { Component } from 'react';
import Axios from 'axios';

const url = "http://192.168.4.50:5000/api/empresas"

export default class CadastroPlaca extends Component {
    constructor(event) {
        super(event);

        this.state = {
            id: '',
            nomeFantasia: '',
            telefone: '',
            email: '',
            responsavel: ''
        }
    }

    componentDidMount() {
        this.atualizaListaPlacas()
    }

    atualizaListaPlacas() {
        Axios.get(url)
            .then(data => {
                console.log(data.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    atualizarEstadoNomeFantasia(event) {
        this.setState({ nome: event.target.value })
    }
    atualizarEstadoTelefone(event) {
        this.setState({ email: event.target.value })
    }
    atualizarEstadoEmail(event) {
        this.setState({ senha: event.target.value })
    }
    atualizarEstadoResponsavel(event) {
        this.setState({ TipoUsuario: event.target.value })
    }

    efetuarCadastroEmpresa(event) {
        event.preventOrDefault()

        let empresa = {
            nomeFantasia: this.state.nomeFantasia,
            telefone: this.state.telefone,
            email: this.state.email,
            responsavel: this.state.responsavel
        }

        Axios.post(url, empresa, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Cerberus-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
            .then()
    }


    render() {
        return (
            <div>
                <form className="cadastro__form"
                    onSubmit={this.efetuarCadastroEmpresa.bind(this)}>

                    <input type="text"
                        onChange={this.atualizarEstadoNomeFantasia.bind(this)}
                        value={this.state.nomeFantasia}
                        className="cadastro__input"
                        placeholder="insira o nome fantasia" />

                    <input type="email"
                        onChange={this.atualizarEstadoTelefone.bind(this)}
                        value={this.state.telefone}
                        className="cadastro__input"
                        placeholder="insira o telefone" />

                    <input type="password"
                        onChange={this.atualizarEstadoEmail.bind(this)}
                        value={this.state.email}
                        className="cadastro__input"
                        placeholder="insira o email" />

                    <input type="password"
                        onChange={this.atualizarEstadoResponsavel.bind(this)}
                        value={this.state.responsavel}
                        className="cadastro__input"
                        placeholder="insira o responsavel" />


                    <button className="cadastro__btnCadastro">Cadastrar</button>
                </form>
            </div>
        )
    }
}
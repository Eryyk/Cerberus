import React, { Component } from 'react';
import Axios from "axios"

const url = "http://192.168.4.50:5000/api/Usuarios"

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
        this.listarUsuarios()
    }

    listarUsuarios() {
        Axios.get(url, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Cerberus-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                console.log(data.data)
            })
    }

    atualizarEstadoNome(event) {
        this.setState({ nome: event.target.value })
    }
    atualizarEstadoEmail(event) {
        this.setState({ email: event.target.value })
    }
    atualizarEstadoSenha(event) {
        this.setState({ senha: event.target.value })
    }
    atualizarEstadoTipoUsuario(event) {
        this.setState({ TipoUsuario: event.target.value })
    }


    efetuarCadastroUsuario(event) {
        event.preventDefault();

        let usuario = {
            Nome: this.state.nome
            , Email: this.state.email
            , Senha: this.state.senha
            , TipoUsuario: "Administrador"
        }

        Axios.post(url, usuario,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('Cerberus-chave-autenticacao'),
                    'Content-Type': 'application/json'
                }
            })
            .then(data => {
                console.log(data);
                console.log(usuario);
            })
            .catch(erro => { console.log(erro); console.log(usuario); })
    }


    render() {
        return (
            <div className="cadastro__body">
                <a href="/">inicio</a>

                <h1>Cadastro de Usuario</h1>

                <div className="cadastro__main">
                    <form className="cadastro__form"
                        onSubmit={this.efetuarCadastroUsuario.bind(this)}>

                        <input type="text"
                            onChange={this.atualizarEstadoNome.bind(this)}
                            value={this.state.nome}
                            className="cadastro__input"
                            placeholder="insira o nome do usuario" />

                        <input type="email"
                            onChange={this.atualizarEstadoEmail.bind(this)}
                            value={this.state.email}
                            className="cadastro__input"
                            placeholder="insira o email do usuario" />

                        <input type="password"
                            onChange={this.atualizarEstadoSenha.bind(this)}
                            value={this.state.senha}
                            className="cadastro__input"
                            placeholder="insira a senha do usuario" />

                        <select className="cadastro__select"
                            onChange={this.atualizarEstadoTipoUsuario.bind(this)}
                            value={this.state.tipoUsuario}>
                            <option value="">
                                Selecione um tipo
                        </option>

                            <option value="Administrador">
                                Administrador
                        </option>

                            <option value="Comum">
                                Comum
                        </option>
                        </select>

                        <button className="cadastro__btnCadastro">Cadastrar</button>
                    </form>
                </div>
            </div>
        );
    }
}
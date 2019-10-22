import React, { Component } from 'react';
import Axios from 'axios'
import Logo from '../../assets/imagens/logo.png'

// import ApiServer from '../../services/api';

class Login extends Component {
    constructor() {
        super()

        this.state = {
            email: ''
            , senha: ''
        }
    }

    efetuarLogin(event) {
        event.preventDefault();

        localStorage.setItem("Cerberus-chave-autenticacao", null)

        Axios.post('http://192.168..40.10:5000/api/Login', {
            email: this.state.email, senha: this.state.senha
        })
            .then(data => {
                localStorage.setItem("Cerberus-chave-autenticacao", data.data.token);
                // this.props.history.push("/")
                console.log(data.data)
            })
            .catch(erro => {
                console.log(erro);
                alert("Usuario Incorreto")
            });
        // ApiServer
        //     .call("login")
        //     .alert("Bateu aqui")
        //     .create({email: this.state.email, senha: this.state.senha})
        //     .then(data => {
        //         localStorage.setItem("Cerberus-chave-autenticacao", data.data.token);
        //     })
        //     .catch(erro => {
        //         console.log(erro);
        //         alert("Usuario Incorreto")
        //     });
    }

    atualizaEstadoEmail(event) {
        this.setState({ email: event.target.value })
    }

    atualizaEstadoSenha(event) {
        this.setState({ senha: event.target.value })
    }

    render() {
        return (
            <main>
                <div id="cx1">
                    <img src={Logo} alt="Linx logotipo" id="img1" />
                    <div id="cx2">
                        <h2 id="titulo">Login</h2>
                        <form onSubmit={this.efetuarLogin.bind(this)}>
                            <div>
                                <input
                                    type="text"
                                    id="form1"
                                    placeholder="E-mail"
                                    onChange={this.atualizaEstadoEmail.bind(this)} />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    id="form2"
                                    placeholder="Senha"
                                    onChange={this.atualizaEstadoSenha.bind(this)} />
                            </div>
                            <div>
                                <input type="submit" id="form3" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}

export default Login;
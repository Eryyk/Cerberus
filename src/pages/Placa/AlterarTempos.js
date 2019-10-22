import React, { Component } from 'react';
import Axios from 'axios'

export default class CadastroPlaca extends Component {
    constructor() {
        super()

        this.state = {
            id: ''
            , tempoDesligado: 0
            , tempoEntreTestes: 0
            , tempoVoltarTestes: 0
            , quantidadePings: 0
        }
    }

    atualizaTempoDesligado(event) {
        this.setState({ tempoDesligado: event.target.value })
    }

    atualizaTempoEntreTestes(event) {
        this.setState({ tempoEntreTestes: event.target.value })
    }

    atualizaTempoVoltarTestes(event) {
        this.setState({ tempoVoltarTestes: event.target.value })
    }

    atualizaQuantidadePings(event) {
        this.setState({ quantidadePings: event.target.value })
    }

    atualizaId(event) {
        this.setState({ id: event.target.value })
    }

    efetuarAlteracao(event) {
        event.preventDefault();

        let cronometro = {
            id: this.state.id
            , tempoDesligado: parseInt(this.state.tempoDesligado)
            , tempoEntreTestes: parseInt(this.state.tempoEntreTestes)
            , tempoVoltarTestes: parseInt(this.state.tempoVoltarTestes)
            , quantidadePings: parseInt(this.state.quantidadePings)
        }

        console.log(cronometro);

        Axios.put('http://192.168.4.50:5000/api/PlacaEndereco/cronometro', cronometro, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Cerberus-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                console.log(data);
                alert("Cronometro de placa alterada")
            })
            .catch(error => {
                console.log(error)
                alert("Aquiiiiiiiiiii")
            })
    }

    render() {
        return (
            <main>
                <div id="cx3">
                    <h2 id="titulo">Alterar Configuração</h2>
                    <div id="cx1">
                        <div id="link1">
                            <p id="lk1">Resets</p>
                        </div>
                        <div id="link2">
                            <p id="lk1">Configuração</p>
                        </div>
                        <div id="link3">
                            <p id="lk1">Usuários</p>
                        </div>
                        <div id="link4">
                            <p id="lk1">Sair</p>
                        </div>
                    </div>
                    <form onSubmit={this.efetuarAlteracao.bind(this)}>
                        <div id="cx2">
                            <h3 id="titulotabela">Placa :
                        <label>
                                    <input
                                        type="text"
                                        onChange={this.atualizaId.bind(this)} />
                                </label></h3>
                            <h3 id="titulotabela2">Tempo desligado :</h3>
                            <h3 id="titulotabela3">Tempo entre Testes :</h3>
                            <h3 id="titulotabela4">Tempo voltar testes :</h3>
                            <h3 id="titulotabela5">Quantidade Pings:</h3>
                            <div>
                                <input
                                    type="text"
                                    id="form5"
                                    placeholder="segundos"
                                    onChange={this.atualizaTempoDesligado.bind(this)} />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="form6"
                                    placeholder="segundos"
                                    onChange={this.atualizaTempoEntreTestes.bind(this)} />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="form7"
                                    placeholder="segundos"
                                    onChange={this.atualizaTempoVoltarTestes.bind(this)} />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="form8"
                                    placeholder="0"
                                    onChange={this.atualizaQuantidadePings.bind(this)} />
                            </div>
                            <div className="seila">
                                <button href="#" className="myButton">Alterar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        )
    }
}
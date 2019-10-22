import React, { Component } from 'react';
import Axios from "axios";
import Grafico from './Grafico/Grafico';


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
        this.listarPlacaEndereco()
    }

    listarPlacaEndereco() {
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

    render() {
        return (
                <main>
                <div className="Top">    
                <div className="TResets"><h2>Total de Resets</h2></div>
                <div className="UResets"><h2>Ultimo Reset</h2></div>
                <div className="ALerte"><h2>Alerte</h2></div>
                </div>
                <div>
                    <h1>Resets</h1>
                <div className="Grafico"> 
                <Grafico />
                </div>
                <div className="Utimos Resets" ></div>
                <div className="Resets"></div>
                </div>
            </main>
        );
    }
}
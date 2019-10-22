import React, { Component } from 'react';
import Axios from 'axios';
import Grafico from './Grafico/Grafico';


const url = "http://192.168.40.10:5000/api/Reiniciacoes"

// import ApiServer from '../../services/api';

class Resets extends Component {
    constructor() {
        super()

        this.state = {
            email: ''
            , senha: ''
            , listaResets : []
        }
    }

    componentDidMount() {
        this.listarResets()
    }

    listarResets() {
        Axios.get(url, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Cerberus-chave-autenticacao'),
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                let _7dias = new Date();
                _7dias.setDate(_7dias.getDate() - 7);
                console.log("passou", _7dias);
                let dados = data.data.filter((item) => {
                    return new Date(_7dias) <= new Date(item.dataOcorrida);
                })
                this.setState({listaResets : dados}, () =>{
                    console.log(dados);
                })
                
            })
    }

    
    render() {
        return (
            <main>
                <div></div>
                <div></div>
                <div></div>
                <div>
                    <h1>Resets</h1>
                <div>
                <Grafico />
                <h1>10</h1>
                </div>
                <div></div>
                <div></div>
                </div>
            </main>
        );
    }
}

export default Resets;
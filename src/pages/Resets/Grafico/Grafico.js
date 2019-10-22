import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import axios from 'axios';

const options={
  maintainAspectRatio: false,
    title: {
      display: false,
      text: 'Title',
      fontSize: 25
    },
    legend: {
      display: false,
      position: 'bottom'
    },
    scales: {
   xAxes: [{
    scaleLabel: {
        display: true,
        labelString: 'Data',
        fontSize: 10
    },
    //type: 'linear',
    position: 'bottom',
    gridLines: {
        display: false
    }
 }],
   yAxes: [{
    scaleLabel: {
        display: true,
        labelString: 'Total',
        fontSize: 10
     }
   }]
  }
}
// Estrutura a Tabela
let line = {
  // informa a date dos Resets
  labels: null,
  datasets: [
    {
      label: 'Quantidade de Resets no dia',
      fill: 'none',          // Don't fill area under the line
      borderColor: '#C409FF',  // Line color
      lineTension: 0.0,

      data: null
    }
  ]
};


export default class Grafico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelsRelatorioResets: [],
      dataRelatorioResets: [],
      legendaGrafico : []
    }
  }

  formataData(data) {
    var d = new Date(data);
    return d.toLocaleString().replace(' 00:00:00', '');
  }

  componentDidMount() {
    axios.get('http://192.168.4.50:5000/api/Reiniciacoes')
      .then(data => {
        console.log("passou", data.data);
        data.data.map((item) => {
          this.state.labelsRelatorioResets.push(this.formataData(item.date))
        })
        
        line.labels = this.state.labelsRelatorioResets;
      
        data.data.map((item) => {
          this.state.dataRelatorioResets.push(item.count)
        })

        line.datasets[0].data = this.state.dataRelatorioResets;

        console.log(line.labels);

        //this.setState({ legendaGrafico: this.state.labelsRelatorioResets.reverse() });
      });
  }

 

  render() {
    
    return (
      <div>
        <h2>Quantidade de Resets</h2>
        <Line data={line} options={options} />
        
      </div>
    );
  }
}

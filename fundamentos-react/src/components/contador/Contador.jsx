import './Contador.css';
import React, { Component } from 'react';

export default class Contador extends Component {

        // aqui no state vamos colocar todos os atributos necessarios para o nosso contador
        // forma 1 - inserindo o state como um objeto
        state = {
                numero: this.props.numeroInicial || 0,
                passo: this.props.passoInicial || 5
        };

        // implementamos como uma funcao arrow, pq o this nesse caso sempre vai apontar para a classe
        incrementar = () => {
                // a funcao setState foi herdada de Component
                this.setState({ numero: this.state.numero + this.state.passo });
        };

        decrementar = () => {
                this.setState({ numero: this.state.numero - this.state.passo });
        };

        setPasso = (evento) => {
                // como o e.target.value ele vai vir como string colocamos o sinal de + antes para converter para um numero inteiro
                this.setState({passo: +evento.target.value})
        }

        // forma 2 - utilizando o constructor e chamando o state dentro dele
        // constructor(props){
        //         super(props)

        //         this.state = {
        //                 numero: props.numeroInicial
        //         }
        //  Forcando o this apontar para a classe, ja que quando chamamos o metodo incrementar no botao la embaixo o this nao esta apontando para a classe
        //      this.incrementar = this.incrementar.bind(this)

        // }

        render() {
                return (
                        <div className="Contador">
                                <h2>Contador</h2>
                                <h3>{this.state.numero}</h3>
                                <div>
                                        <label htmlFor="passoInput">Passo:</label>
                                        <input type="number" id="passoInput" value={this.state.passo} onChange={this.setPasso} />
                                </div>
                                {/* o this aponta para a instancia da classe */}
                                {/* <p>Valor Inicial: {this.props.numeroInicial}</p> */}
                                <button onClick={this.incrementar}>+</button>
                                {/* outra forma de resolver a questao do this, é associar um arrow function no onClick */}
                                {/* <button onClick={ e => this.incrementar()}>+</button> */}

                                <button onClick={this.decrementar}>-</button>
                        </div>
                )
        }
}
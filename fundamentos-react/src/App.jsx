import './App.css';
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';

export default _ =>
        <div id="App">
                <h1>Fundamentos React </h1>

                <div className="Cards">
                        <Card titulo="#04 - Desafio Números Aleatórios:">
                                <Aleatorio valorMin={2} valorMax={100} />
                        </Card>

                        <Card titulo="#03 - Fragmentos:">
                                <Fragmento />
                        </Card>

                        <Card titulo="#02 - Com Parâmetro:">
                                <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3}></ComParametro>
                        </Card>

                        <Card titulo="#01 - Primeiro Componente:">
                                <Primeiro></Primeiro>
                        </Card>
                </div>
        </div>

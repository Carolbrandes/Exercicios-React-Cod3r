import './App.css';
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';

export default _ =>
        <div id="App">
                <h1>Fundamentos React </h1>

                <div className="Cards">

                        <Card titulo="#05 - Componente com Filhos:" color="#00C8F8">
                                <Familia sobrenome="Ferreira">
                                        <FamiliaMembro nome="Pedro" />
                                        <FamiliaMembro nome="Ana" />
                                        <FamiliaMembro nome="Gustavo" />
                                </Familia>
                        </Card>

                        <Card titulo="#04 - Desafio Números Aleatórios:" color="#FA6900">
                                <Aleatorio valorMin={2} valorMax={100} />
                        </Card>

                        <Card titulo="#03 - Fragmentos:" color="#E94C6F">
                                <Fragmento />
                        </Card>

                        <Card titulo="#02 - Com Parâmetro:" color="#E8B71A">
                                <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3}></ComParametro>
                        </Card>

                        <Card titulo="#01 - Primeiro Componente:" color="#588C73">
                                <Primeiro></Primeiro>
                        </Card>
                </div>
        </div>

import React, {useState} from 'react';
import IndiretaFilho from './IndiretaFilho';

// na comunicacao indireta, os elementos filhos que passam informações para o elemento pai
// para mostrar as informações que estao vindo do componente filho, o componente precisa ter estado
// no react os dados sao alterados e  a interface grafica e alterada. Nunca a alteracao vem da interface grafica

export default props => {
        // a funcao useState vai retornar um array. A 1ª posicao e o valor e a 2ª posicao vai ser uma funcao para alterar esse valor
        const [nome, setNome] =  useState('?'); 
        const [idade, setIdade] =  useState(0); 
        const [nerd, setNerd] =  useState(false); 
        

        function fornecerInformacoes(nome, idade, nerd) {
               setNome(nome);
               setIdade(idade);
               setNerd(nerd);
        }
        return (
                <div>
                        <div>
                                <span>{nome} </span>
                                <span>{idade} </span>
                                <span>{nerd ? "Verdadeiro" : "Falso"}</span>
                        </div>
                        <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
                </div>
        )
}
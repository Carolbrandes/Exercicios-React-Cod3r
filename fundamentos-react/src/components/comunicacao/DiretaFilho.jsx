import React from 'react';

// a comunicacao de um componente pai para um componente filho ocorre via props
// essa relação é direta pq no componente pai nos importamos o componente filho e passamos no momento em que estamos instanciando esse componente
// comunicacao direta -> a troca de dados via props do elemento pai para o elemento filho

export default  props => {
        return (
                <div>
                        <span>{props.nome} </span>
                        <span>{props.idade}  </span>
                        <span>{props.nerd ? 'Verdadeiro' : 'Falso'}!</span>
                </div>
        )
}
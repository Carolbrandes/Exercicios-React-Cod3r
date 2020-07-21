import React from 'react'
import './Button.css'

// quanto mais componentes sem estado melhor será a aplicação

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation': ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

   return(
    //    o conteudo que é representando por e.target.innerHTML será passado para a funcao click
    // colocando o e => props.click, ele só vai executar a segunda funcao (props.click(e.target.innerHTML)), caso a primeira props.click for verdadeira
        <button onClick={e => props.click(props.label)} className={classes}>
            {props.label}
        </button> 
   )
}


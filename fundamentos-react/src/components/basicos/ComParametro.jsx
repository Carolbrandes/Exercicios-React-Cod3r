import React from 'react';

export default function ComParametro(props){
        console.log(props); // retorna um objeto com os parametros da tag
        // como nao podemos alterar as propriedades vindas do componente, vamos arredondar a nota para cima e guardar em uma costante e depois renderizar.
        const notaInt = Math.ceil(props.nota);
        const status = notaInt >= 7 ? 'Aprovado' : 'Recuperação';


        return (
                <div>
                        <h2>{props.titulo}</h2>
                        <p>{props.aluno}</p>
                        <p>{notaInt}</p>
                        <p>{status}</p>
                </div>
        )
}

//os parametros foram passados na tag no arquivo index.js
// as propriedades que passamos abaixo são somente leitura não é possivel fazer alterações
//  <ComParametro titulo="Segundo Componente" subtitulo="muito legal!"></ComParametro>
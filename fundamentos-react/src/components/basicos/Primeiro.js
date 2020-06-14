// a variavel que representa a importacao do react tem que ser escrita exatamente assim: React
import React from 'react';

// para poder usar essa funcao em outro arquivo vamos ter que exportar essa funcao
// sempre qd exportamos como padrao no arquivo index.js nao precisamos usar o nome Primeiro
export default function Primeiro(){
        // return 'Primeiro Componente';
        const msg = 'Seja bem vindo(a)!';
        // para identar o codigo na linha de baixo e importante que esteja dentro do parentesis (q quer dizer q e uma expressao). Se voce colocar return e ir para linha de baixo e colocar as tags htmls vai dar erro, por isso usar o parentesis
        return (
                <div>
                        <h2>Primeiro Componente</h2>
                         <p>{msg}</p>
                </div>
        ) 
}
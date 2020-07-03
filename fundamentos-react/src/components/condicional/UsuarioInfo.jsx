import React from 'react';
import If from './If';

export default props => {
        const usuario = props.usuario || {}
        return (
                <div>
                        {/* vai testar se o usuario estiver setado e se o nome do usuario for valido, entao se nao  for passado um usuario ou um usuario nao tiver o nome ele nao renderizar o componente dentro do if */}
                        <If test={usuario && usuario.nome}>
                                Seja Bem Vindo {usuario.nome}!
                        </If>

                        <If test={!usuario || !usuario.nome}>
                                Seja Bem Vindo Amigão!
                        </If>
                </div>
        )
}
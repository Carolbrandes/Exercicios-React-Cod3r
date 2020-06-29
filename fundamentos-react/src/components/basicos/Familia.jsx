import React from 'react';
import FamiliaMembro from './FamiliaMembro';

export default props => {
        return (
                <div>
                        <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
                        {/* utilizando o  operador "spread" ...props estamos passando todas as propriedades declaradas no elemento pai para o elemento filho */}
                        <FamiliaMembro nome="Ana" {...props} />
                        <FamiliaMembro nome="Gustavo" sobrenome="Silva"/>
                </div>
        )
}
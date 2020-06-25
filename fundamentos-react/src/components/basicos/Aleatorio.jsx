import React from 'react';

export default props => {
        const {valorMin, valorMax} = props;
       const aleatorio = getRandomIntInclusive(valorMin, valorMax);

       return(
                <div>
                        <h2>Valor Aleatório</h2>
                        <p><strong>Valor Mínimo: </strong>{valorMin}</p>
                        <p><strong>Valor Máximo: </strong>{valorMax}</p>
                        <p><strong>Valor Escolhido: </strong>{aleatorio}</p>
                </div>
       );
};

function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
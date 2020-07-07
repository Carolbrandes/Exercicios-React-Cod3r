import React from 'react';

// vamos invocar um metodo, q no caso é o clique do botao e passamos as informações para o elemento pai.

export default props => {
        const  funcaoCallback = props.quandoClicar;
        const  min = 50;
        const  max = 70;
        const  gerarIdade = () => parseInt(Math.random() * (max - min) + min);
        const  gerarNerd = () => Math.random() > 0.5;
        return (
                <div>
                        <div>Filho</div>
                        <button onClick={e =>  funcaoCallback("Mário", gerarIdade(), gerarNerd()) }>
                                Fornecer Informações
                        </button>
                </div>
        )
}
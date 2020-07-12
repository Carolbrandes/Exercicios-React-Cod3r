import './Mega.css';
import React, { useState } from 'react';

export default props => {
        function gerarNumeroAleatorio(min, max, array) {
                // somamos +1 ao numero maximo para que o valor max passado seja incluido
                const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);

                // so vai retorna o numero gerado se ele nao estiver no array, caso contrario a funcao e chamada e é gerado um novo numero
                return array.includes(aleatorio) ? gerarNumeroAleatorio(min, max, array) : aleatorio;
        }

        function gerarNumeros(qtd) {
                // o fill vai preencher o array com numero 0
                const numeros = Array(qtd)
                        .fill(0)
                        .reduce((nums) => {
                                const novoNumero = gerarNumeroAleatorio(1, 60, nums);
                                console.log([...nums, novoNumero]);
                                return [...nums, novoNumero]
                        }, [])
                        // se colocarmos n2 - n1 ele coloca na ordem descrecente
                        .sort((n1, n2) => n1 - n2)

                return numeros;
        }

        const [qtde, setQtde] = useState(props.qtd || 6);
        const numerosIniciais = gerarNumeros(qtde);
        const [numeros, setNumeros] = useState(numerosIniciais);


        return (
                <div className="Mega">
                        <h2>Mega</h2>
                        <h3>{numeros.join(' ')}</h3>
                        <div>
                                <label>Qtde de Números</label>
                                <input type="number" value={qtde} onChange={e => setQtde(+e.target.value)} />
                        </div>
                        <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                                Gerar Números
                        </button>
                </div>
        )
}
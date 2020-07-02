// criar uma tabela com os dados do produto e apresentar isso no card no arquivo app.jsx
import './TabelaProdutos.css';
import React from 'react';
import produtos from '../../data/produtos';

export default props => {
        const linhasTabela = produtos.map((produto, indice) => (
                <tr key={produto.id} className={indice % 2 == 0 ? 'Par' : ''}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
        ));
        return (
                <div className="TabelaProdutos">
                        <table border="1">
                                <thead>
                                        <th>ID</th>
                                        <th>Produto</th>
                                        <th>Preço</th>
                                </thead>
                                <tbody>
                                        {linhasTabela}
                                </tbody>
                        </table>
                </div>
        )
}

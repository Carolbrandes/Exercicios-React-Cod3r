import './Input.css';
import React from 'react';
import { useState } from 'react';

// componente controlado -> está amarrado a um determinado estado
// o estado muda e a interface grafifca muda
// a interface grafica nao altera o estado
// para a mudança do value do input refletir na interface grafica, temos que mudar o estado dele usando a funcao setValor.

export default props => {
        const [valor, setValor] = useState('inicial');

        function quandoMudar(e) {
                console.log(e.target);
                console.log(e.target.value);
                setValor(e.target.value);
        }
        return (
                <div className="Input">
                        <h2>{valor}</h2>
                        <div>
                                <input type="text" value={valor} onChange={quandoMudar} />
                                <input type="text" value={valor} readOnly />
                                
                                {/* componente nao controlado - nao ewsta associado a nenhum estado */}
                                <input type="text" value={undefined}/>
                        </div>
                </div>
        )
}
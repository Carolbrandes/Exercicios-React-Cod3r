import './Card.css';
import React from 'react';

export default props => {
        const cardStyle = {
                backgroundColor: props.color || '#F00',
                borderColor: props.color || '#F00'
        }

        return(
                <div className="Card" style={cardStyle}>
                        <div className="Title">{props.titulo}</div>
                        <div className="Content">
                                {props.children}
                        </div>
                </div>
        );
};

// usamos className ao inves de class pq no js class e uma palavra reservada, para criar uma classe

// {props.children} - filhos desse componente
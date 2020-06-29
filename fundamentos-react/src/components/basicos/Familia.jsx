import React from 'react';
import { cloneElement } from 'react';

export default props => {
        return (
                <div>
                      {
                              React.Children.map(props.children, child => {
                                      return cloneElement(child, props);
                              })
                      }
                      
                </div>
        )
}

// na linha 8 em props.children estamos recebendo todos os filhos e para cada filho (child) ele vai retorna um clone com as propriedades herdadas pelo elemento pai
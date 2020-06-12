 // vamos interagir com a biblioteca react dom
 // vamos usar essa biblioteca para renderizar as coisas na tela
 import ReactDOM from  'react-dom';

 // para o jsx funcionar precisamos importar o react
 import React from 'react';

 const tag = <strong>Ola react</strong>;

 // temos um metodo utilizado para fazer a renderizações que e render()
 // o render recebe dois parametros, o 1º e o que queremos escrever e o 2º e o elemento que vai conter esse texto
 const elemento = document.getElementById('root');
ReactDOM.render(<div>{tag}</div>, elemento);

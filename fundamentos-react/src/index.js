 // vamos interagir com a biblioteca react dom
 // vamos usar essa biblioteca para renderizar as coisas na tela
 import ReactDOM from  'react-dom';

 // temos um metodo utilizado para fazer a renderizações que e render()
 // o render recebe dois parametros, o 1º e o que queremos escrever e o 2º e o elemento que vai conter esse texto
 const elemento = document.getElementById('root');
 ReactDOM.render('Ola react', elemento);

 // vamos importar o arquivo css e vamos fazer um import relativo
 // './ indica que está na pasta atual
 // nao usamos uma variavel e o from pq aqui nessa caso queremos apenas que ele encontre o arquivo e nao queremos manipular dentro desse arquivo como e o caso do react dom ou do react
 import './index.css';

 // vamos interagir com a biblioteca react dom
 // vamos usar essa biblioteca para renderizar as coisas na tela
 import ReactDOM from  'react-dom';

 // para o jsx funcionar precisamos importar o react
 import React from 'react';

 // vamos importar a funcao que retorna o primeiro componente q esta em components/basicos/Primeiro.js
 import Primeiro from './components/basicos/Primeiro';
 import ComParametro from './components/basicos/ComParametro';
 import Fragmento from './components/basicos/Fragmento';

 // os componentes são colocados como tags conforme a linha 24


 // temos um metodo utilizado para fazer a renderizações que e render()
 // o render recebe dois parametros, o 1º e o que queremos escrever e o 2º e o elemento que vai conter esse texto
 // os componentes Primeiro, ComParametro SEMPRE devem estar envolvidas em um elemento pai (no caso a div), se nao ele vai dar erro. Outra alternativa e envolver esses elementos na tag <React.Fragment></React.Fragment> usando a tag React.Fragment podemos colocar atributos na tag. Ex: <React.Fragment key="1"></React.Fragment>
 // a outra forma é  usando tags vazias <> </>
 const elemento = document.getElementById('root');
ReactDOM.render(
<div>
      <Primeiro></Primeiro>
      <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3}></ComParametro>
      <Fragmento/>
</div>, elemento);

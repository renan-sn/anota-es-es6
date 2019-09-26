//import { promises } from "dns";

/* 
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
  }
}
*/

/* FUNÇÃO EM FORMATO DE CLASS (ver livro cap 03 e caderno) */
/* class TodoList extends List {
 constructor() {
   super();

   this.usuario = 'Renan';
 }

 mostraUsuario() {
   console.log(this.usuario);
 }
} */

/* var que recebe novo objeto da class/func "TodoList" */
/* const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todo');
  console.log(this.aata);
}

MinhaLista.mostraUsuario();  */




/* Métodos "map()" e "reduce()" */

/* const arr = [1, 2, 3, 4, 5];

// "map()"
const newArr = arr.map(function(item, index){
  return item * 2;
});

console.log(newArr); // resultado = [2, 4, 6, 8, 10]. Que é a multiplicação de cada valor do vetor por 2


// "reduce()"
const sum = arr.reduce(function(total, next) {  
  return total + next;
});

console.log(sum); // resultado = 15. Que é o valor da soma de todos os itens do vetor


// "filter()"
const filter = arr.filter(function(item) {  
  return item % 2 === 0; // retorna os itens pares e filtra/esconde/remove os que não são 
});                      // OBS: "filter()" retorna um Boolean (true ou false); 

console.log(filter);


// "find()"
const find = arr.find(function(item) {
  return item === 4; // se existe um "item igual a quatro" retorna True ou False
});

console.log(find); */



/* ARROW FUNCTIONS */
/* const array = [1, 2, 3, 4, 5];

// Função anonima sem parametro
const teste = array.map(() => {
  return 'testing';
});

// Função anonima com parametros
const teste = array.map((item, next) => {
  return 'testing';
});

// Função anonima com apenas 1 parametro (opcional e recomendado)
const teste = array.map(item => {
  return 'testing';
});

// Função anonima com uma única linha de códgo pode ser escrita assim:
const teste = array.map(item => item * 2);

// Função em variavel com um objeto literal
const teste = () => ({ nome: 'Renan' }); */



/* DESESTRUTURAÇÃO */

/* // Temos um objeto com informações
const usuario = {
  nome: 'Renan',
  idade: 22,
  endereco: {
    cidade: 'Salvador',
    estado: 'BA'
  }
};

// Acessando as informações desse objeto
const { nome, idade, endereco: { cidade, estado } } = usuario;

console.log(nome, idade, cidade);

// Desestruturação tbm podem ser usados nos parâmetros de funções
function mostraNome({ nome, idade, endereco: { estado } }) {
  console.log(nome, estado, idade);
}

mostraNome(usuario);


// Desestruturação de Arrays precisa ser com "[]" (colchetes)
const ar = [1, 2, 3, 4];

const [ a, b, c, d] = ar; */


/* OPERADORES REST/SPREAD */

// REST: Serve para pegar o resto das prpridades
// Utilizando em Objeto
/* const ars = {
  nome: 'Renan',
  idade: 22,
  ender: {
    cidade: 'Salvador',
    estado: 'BA'
  }
};

const { nome, ...resto } = ars;

console.log(nome);
console.log(resto);


// Utilizando em Array
const arTest = [1, 2, 3, 4];

const [ a, b, ...resta ] = arTest;

console.log(a, b);
console.log(resta); */


/* // Pode-se usar tbm em parametros de funções
function soma1(...params) {  
  return params;
}

// Tambem pode ser usado da mesma forma de "REST"
function soma2(a, b, ...params) {  
  return params;
}
// "...params" é responsavel por definir "possiveis variaveis" para cada item passado ao parametro
console.log(soma(1, 2, 3, 4, 5, 6)); */



// SPREAD: serve para propagar/passar informaçoes de Objetos e Arrays

// Iterando dois Arrays 
/* const ar1 = [ 1, 2, 3 ];

const ar2 = [ 4, 5, 6 ];

const ar1ar2 = [ ...ar1, ...ar2 ];

console.log(ar1ar2); */


// Alterando um valor de um item de objeto
/* const obj1 = {
  nome: 'Renan',
  idade: 22,
  empresa: 'Skin Load'
};
// Recebe todos os itens e altera o valor de "nome"
const objTeste = { ...obj1, nome:'Renan SN' }; 

console.log(objTeste); */



/* TEMPLATE LITERALS */

// É a nova forma de concatenar variáveis usando ( `` - "crases" )_
/* const name = 'Renan';
const idade = 22;

const user = `Meu nome é ${name}, e tenho ${idade} anos.`;
 */


/* OBJECT SHORT SYNTAX */
// Quando o nome da propriedade de um Objeto for igual a uma
// variável, podemos deixar apenas um dels no objeto

/* const nome = 'Renan';
const idade = 22;

// Em vez disso
const user = {
  nome: nome,
  idade: idade
};
// podemos usar assim
const user = {
  nome: nome,
  idade: idade
}; */


/* EXERCÍCIOS */
// Exercicio 1
/* class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin === true;
  }  
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);

    this.admin = true;
  } 
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123'); 

console.log(User1.isAdmin());
console.log(Adm1.isAdmin()); */

// Exercicio 2
// 2.12.1 Utilizando o map() Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
/* const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 const userIdade = usuarios.map(function(usuario){
  return usuario.idade;
 });

 console.log(userIdade); */

 // 2.2 2.2 Utilizando o filter Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
 /* const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 const users = usuarios.filter( item => {  
  return item.idade >= 18 && item.empresa === 'Rocketseat'; 
 });

 console.log(users); */


 // 2.3 Utilizando o find Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
/*  const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 const userGoogle = usuarios.find( item => item.empresa === 'Google');

 console.log(userGoogle); */

 // 2.4 Unindo operações - Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:
/*  const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 const testUser = usuarios.filter( item => {
    item.idade = item.idade * 2;
    return item.idade <= 50;
 });

 console.log(testUser); */


 // EXERCICIO 4
 // 4.1 Desestruturação simples  - Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis
/*  const empresa = {
  nome: 'Rocketseat',
  endereco: {
  cidade: 'Rio do Sul',
  estado: 'SC',
  }
 };
 
 const { nome, endereco: { cidade, estado } } = empresa;

 console.log(nome);
 console.log(cidade);
 console.log(estado); */


 // 4.2 Desestruturação em parâmetros - Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente e a função poder retornar apenas:
/*  function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
 }
 mostraInfo({ nome: 'Diego', idade: 23 });

 console.log(mostraInfo()); */


 // EXERCICIO 5
 // defina uma variável x que recebe a primeira posição do vetor e outra variável y que recebe todo restante dos dados.
/*  const arr = [1, 2, 3, 4, 5, 6];

 const [ x, ...y ] = arr;

 console.log(x);
 console.log(y); */

// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles

/* function somando(...soma) {  
  return soma.reduce((a, b) => a + b);
}

console.log(somando(1, 2, 3, 4, 5, 6));
console.log(somando(1, 2)); */

// 5.2 Spread -
// Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

/* const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
  cidade: 'Rio do Sul',
  uf: 'SC',
  pais: 'Brasil',
  }
 };

 const usuario2 = { ...usuario, nome: 'Gabriel' };

 const usuario3 = { ...usuario, endereco: {...usuario, cidade: 'Lontras' } };

 console.log(usuario2);
 console.log(usuario3); */


 // EXERCICIO 7
// Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto
/* const nome = 'Diego';
const idade = 23;
const usuario = {
 nome: nome,
 idade: idade,
 cidade: 'Rio do Sul',
};

// resultado
const nome = 'Diego';
const idade = 23;
const usuario = {
 nome,
 idade,
 cidade: 'Rio do Sul',
};
 */


 /* IMPORT/EXPORT */

/*  // Sintaxe e importação
 import { soma } from './funcoes';

 console.log(soma(2, 4));


 // Importando alguns módulos do arquivo 'funcoes'
 import { soma, sub, div } from './funcoes';

 console.log(soma(1, 2), sub(10, 7),div(6, 2));


 // Importando todos os módulos do arquivo 'funcoes'
 import * as funcoes from './funcoes';

 console.log(funcoes.soma(1, 2));
 console.log(funcoes.sub(5, 2));
 console.log(funcoes.div(6, 2));

 // obs: sintaxe de exportação no caderno */

 /* import { cube, teste } from './funcoes';

 console.log(cube(2, 3));
 console.log(teste); */
 
// Importando módulo "DFAULT"
/*  import help from './funcoes'; // É permitido mudar o nome da função na importação

 console.log(help(10, 5)); */


/* Async/Await and Promise (estudar mais sobre...)*/
/*  const testePromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('Hello world') }, 2000);
});

async function execPromise() { 
  const response = await testePromise();

  console.log(response);
}

execPromise(); */


/* AXIOS */
/*import axios from 'axios';

 class Api {
  static async reqGit(username) {
    // Utilizando "try/catch"
    try {
      const resp = await axios.get(`https://api.github.com/users/${username}`);

      console.log(resp);  

    } catch (error) {
      console.log('Usuário não encontrado!');
    }
    
  }
}

Api.reqGit('renan-sn786874'); */



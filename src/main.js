/* 
import api from './api';

class App {
  constructor() {
    this.repositories = [];

    // Variaveis rcebem os elementos
    this.formEl = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]');
    this.listEl = document.getElementById('repo-list');

    // Chama a function 
    this.regsiterHanders();
  }

  regsiterHanders() {
    // Quando o botão é clicado chama a function 
    this.formEl.onsubmit = event => this.addRepostory(event);
  }
  
  // Loading "enquanto a aplicação carrega/busca"
  setLoading(loading = true) {
    
    if (loading === true) {
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando'));
      loadingEl.setAttribute('id', 'loading');

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  
  }
  
    
  async addRepostory(event) {
    event.preventDefault(); // É um metodo de prevenção de "get/post.." do envio de formulario (estudar mais sobre).

    // Recebe o valor do campo de texto digitado pelo cliente
    const repoInput = this.inputEl.value;

    // Apos o usuario solicitar a busca, a função é chamada
    this.setLoading();

    // "try/catch" se o repositorio não existe/nao foi encontrado
    try {
    // Se valor da entrada de texto for igual a "nada/zero"
    if (repoInput.length === 0)
      return; // esse 'return' faz com que a function pare de executar aqui, se essa condição for 'true'

    // Buscando a partir do axios em "api.js"
    const response = await api.get(`/users/${repoInput}`);// busca a url com o usuario que o cliente digitou
    
    //console.log(response);
    
    // Desestruturação para pegar os valores em formato json que foi solicitado do Github e por no array "repositories"
    const { name, bio, avatar_url, html_url } = response.data;

    // Add os valores recebidos da desestruturação no array "repositories"
    // Ver anotação no caderno sobre "Object Short Syntax"
    this.repositories.push({
      name,
      bio,
      avatar_url,
      html_url,
    });
    
    // Apaga o conteúdo do input quando o botão é clicado
    this.inputEl.value = '';
    
    // Chama a function "render"
    this.render();
  
      } catch (err) {
        alert('O repositório não existe!');
      }
    
    // Passa o parametro "false" para que depois da busca, idependente do resultado, o "carregando" seja removido da tela 
    this.setLoading(false);  
  }


  render() {
    // Limpa a lista
    this.listEl.innerHTML = '';

    // Percorre o array e adciona os respectivos elementos
    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let bioEl = document.createElement('p');
      bioEl.appendChild(document.createTextNode(repo.bio));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(bioEl);
      listItemEl.appendChild(linkEl);

      // A lista recebe novos itens
      this.listEl.appendChild(listItemEl);
    });
  }
}

// Chamada da classe
new App(); */






/* 
import api from './api';

class App {
  constructor() {
    // Onde as informalçoes são adicionadas
    this.repositorio = [];

    // Elemento "form"
    this.formEl = document.getElementById('repo-form');
    
    this.listEl = document.getElementById('repo-list');
    this.inputEl = document.querySelector('input[name=repository]');
    //this.titleEl = document.getElementById('title-repo');
    //this.descricaoEl = document.getElementById('');
    
    this.setUsuario();
  }

  // Quando usuario clicar
  setUsuario() {
    // O parameto "event" é para ser usado para prevenir o envio padrao de formulario na função especificada
    this.formEl.onsubmit =  event => this.addRepositorio(event);
  }


  async addRepositorio(event) {
    // Previne o envio padrao do formulario
    event.preventDefault();
    
    try {

      // Pega o texto digitado na entrada de texto do formulario
      const repoInput = this.inputEl.value;
      

      // Verifica se algo foi digitado ou não
      if (repoInput.length <= 0) {
        alert('Digite um usuário no campo indicado');
        return;
      }
      
      // Coletando informações do usuário no Github
      const apiReq = await api.get(`/users/${repoInput}`);

      //console.log(apiReq);
    
      // Desestruturando os dados para serem armazenados no repositorio
      const { name, avatar_url, html_url, bio } = apiReq.data;

      this.repositorio.push({
        name,
        avatar_url,
        html_url,
        bio
      });
    
    } catch(err) {
      
      alert('Usuário não encontrado')
    
    }
      //console.log(this.repositorio);

      this.render();
  }

  // Adicionando à lista na tela
  render() {
    // Limpa lista
    this.listEl.innerHTML = '';

    this.repositorio.forEach(repo => {
      // Criando os novos elementos
      let imgCreate = document.createElement('img');
      imgCreate.setAttribute('src', repo.avatar_url);

      let titleCreate = document.createElement('strong');
      titleCreate.appendChild(document.createTextNode(repo.name));

      let bioCreate = document.createElement('p');
      bioCreate.appendChild(document.createTextNode(repo.bio));

      let linkCreate = document.createElement('a');
      linkCreate.setAttribute('href', repo.html_url);
      linkCreate.setAttribute('target', '_blank');
      linkCreate.appendChild(document.createTextNode('Acessar'));


      // VArialvel que poe os elementos criados na lista
      let itensCreate = document.createElement('li');
      itensCreate.appendChild(imgCreate);
      itensCreate.appendChild(titleCreate);
      itensCreate.appendChild(bioCreate);
      itensCreate.appendChild(linkCreate);

      // Adiciona todos os elementos criado na lista
      this.listEl.appendChild(itensCreate);

    });

  }
  
}

new App(); */



/* 
import api from './api';

class App {
  constructor() {
    this.repositorio = [];

    this.listEl = document.getElementById('repo-list');
    this.inputEl = document.querySelector('input[name=repository]');
    this.formEl = document.getElementById('repo-form');
    
    this.submitClick();
  }

  submitClick() {
    this.formEl.onsubmit = event => this.addUsuario(event);
  }

  async addUsuario(event) {
    event.preventDefault();

    const inputValue = this.inputEl.value;

    try {

    if (inputValue <= 0) {
      alert('Insira um nome de usuário no campo indicado!');
      return;
    }

    const username = await api.get(`/users/${inputValue}`); 


    const { name, bio, avatar_url, html_url } = username.data;

    this.repositorio.push({
      name,
      bio,
      avatar_url,
      html_url
    });
  } catch(err) {
    alert('Usuário não encontrado');
  }

    this.render();
  }

  render() {
    this.listEl.innerHTML = '';

    this.repositorio.forEach(repo => {

      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatar_url);

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      let bioEl = document.createElement('p');
      bioEl.appendChild(document.createTextNode(repo.bio));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('href', repo.html_url);
      linkEl.setAttribute('target', '_blank');
      linkEl.appendChild(document.createTextNode('Acessar'));
      
      
      let liEl = document.createElement('li');

      liEl.appendChild(imgEl);
      liEl.appendChild(titleEl);
      liEl.appendChild(bioEl);
      liEl.appendChild(linkEl);

      this.listEl.appendChild(liEl);

    });
  }

}

new App(); */

import api from './api';

class App {
  constructor() {
    this.repositorio = [];
    
    this.formEl = document.getElementById('repo-form');
    this.listEl = document.getElementById('repo-list');
    this.inputText = document.querySelector('input[name=repository]');

    this.reqInfo();
  }

  reqInfo() {
    this.formEl.onsubmit = (event) => {
      this.getDadosAndAddReposit(event);
    }
  }

  async getDadosAndAddReposit() {
    event.preventDefault();
    
    const textClient = this.inputText.value;
    
    try{
     
      if (textClient.length <= 0) {
        alert('Insira um usuário no campo indicado');
        return;
      }

      const getGithubUser = await api.get(`/users/${textClient}`);    
      
      const { name, bio, avatar_url, html_url, id } = getGithubUser.data;

      this.repositorio.push({ name, bio, avatar_url, html_url, id });

      /* this.repositorio.forEach( req => {
        if (req.name === textClient) {
          
          alert('Usuario repetido');
          
          return;
        
        } 
    
      }); */

    this.addRepositorioRender();

    }catch(err) {
     
      alert('Usuário não encontrado'); 
    
    }
    
  }


  addRepositorioRender() {
    this.listEl.innerHTML = '';


    this.repositorio.forEach(repo => {  

      const avatarEl = document.createElement('img');
      avatarEl.setAttribute('src', repo.avatar_url);

      const titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(repo.name));

      const bioEl = document.createElement('p');
      bioEl.appendChild(document.createTextNode(repo.bio));

      const linkEl = document.createElement('a');
      linkEl.appendChild(document.createTextNode('Acessar'));
      linkEl.setAttribute('href', repo.html_url);
      linkEl.setAttribute('target', 'blank');

      const liEl = document.createElement('li');
      liEl.setAttribute('id', 'byReset');
      liEl.appendChild(avatarEl);
      liEl.appendChild(titleEl);
      liEl.appendChild(bioEl);
      liEl.appendChild(linkEl);

      this.listEl.appendChild(liEl);

    });
    
    
    this.resetList();
  }

  
  resetList() {
    this.reset = document.getElementById('reset');

    this.reset.onclick = () => {
      const removeLi = document.getElementById('byReset');

      this.listEl.innerHTML = '';
      
      this.repositorio = [];
    }

  }
}



new App();
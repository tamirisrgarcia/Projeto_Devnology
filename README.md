<h1>Projeto - Trainee Devnology</h1>

O projeto consiste em criar um sistema para gerenciar links de artigos de tecnologia.
Os links podem, também, ser editados e excluídos.

<h2>Tecnologias utilizadas:</h2>
- [X] Backend: NodeJS, API RESTful, Hoppscotch <br>
- [X] Banco de Dados: ODM Mongoose <br>
- [X] Frontend: HTML, Bootstrap, JQuery, AJAX <br>

O banco de dados foi criado utilizando o Mongoose (ODM do MongoDB - NoSQL). <br>

Exemplo de testes da API utilizando o Hoppscotch:
![image](https://user-images.githubusercontent.com/87827996/192393710-0dbf0e91-c470-41eb-aaec-23fc46441e6e.png)

Tela desenvolvida utilizando HTML, Bootstrap, AJAX e JQuery
![image](https://user-images.githubusercontent.com/87827996/192393860-363f502d-233d-4266-b444-f9fdc1c642b5.png)


Modal para adicionar novos artigos:
![image](https://user-images.githubusercontent.com/87827996/192393919-8d6b5353-40cf-4d0f-8f02-1b3e3f49eb49.png)


Modal de sucesso após inserção de informações:
![image](https://user-images.githubusercontent.com/87827996/192394234-9bbeab9e-3efb-4ddd-ac60-6a6eaf1ae459.png)


Modal para edição dos dados:
![image](https://user-images.githubusercontent.com/87827996/192394296-bc112c6f-5b5a-4b53-8c32-707837497716.png)


Modal de sucesso após atualização:
![image](https://user-images.githubusercontent.com/87827996/192394351-0079c842-79ff-4b78-9fc3-6617c6336bcb.png)


Modal informativo sinalizando exclusão dos dados:
![image](https://user-images.githubusercontent.com/87827996/192394404-9df15bcf-0d16-4a67-8b16-f3c00af5985a.png)


Botão de pesquisa filtrando os itens que contém a palavra "css" - pacote JQuery DataTable:
![image](https://user-images.githubusercontent.com/87827996/192394446-8a385f49-12a1-44dc-8022-15f7b01a877e.png)


O projeto encontra-se em ambiente local, para rodar a aplicação seguir os passos abaixo:
- clonar o repositório localmente; <br>
- abrir o terminal integrado e digitar o comando: **npm install** <br>
OBS: esse comando fará a instalação dos pacotes do npm que foram utilizados para a criação do projeto e que estão salvos no arquivo package.json e também a pasta node_modules; <br>
- criar o arquivo **.env** com as seguintes informações: <br>
- **DB_CONN=mongodb+srv://<@user>:<@password>@apicluster.f0sp8vk.mongodb.net/?retryWrites=true&w=majority** <br>
- foi utilizado o nodemon para ambiente de desenvolvimento, realizar a instalação do mesmo com o comando: **npm install nodemon**
- digitar o comando: **npm start** <br>
OBS: esse comando fará a inicialização do arquivo index.js, que contém as informações de conexão com o express e o mongoose; <br>
- aparecerá uma mensagem no terminal de que o banco de dados foi conectado; <br>
- após conexão do backend e banco de dados, abrir o arquivo index.html (pasta frontend), onde será possível visualizar a aplicação funcionando. <br>

  <h3>Dificuldades:</h3>
- utilização do JQuery e Ajax;
- criação do frontend;

  <h3>Pendências: </h3>
- automatização do processo de salvar links com um web crawler;
- hospedagem da aplicação em algum servidor;

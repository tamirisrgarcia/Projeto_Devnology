#Projeto desenvolvido como teste - Trainee Devnology

O projeto consiste em criar um sistema para gerenciar links de artigos de tecnologia.
Os links podem, também, ser editados e excluídos.

Tecnologias utilizadas:
- [X] Backend: NodeJS, API RESTful, Hoppscotch 
- [X] Banco de Dados: ODM Mongoose
- [X] Frontend: HTML, Bootstrap, JQuery, AJAX

O banco de dados foi criado utilizando o Mongoose (ODM do MongoDB - NoSQL).
Seguem testes da API utilizando o Hoppscotch:

image.png

image.png

image.png

image.png

image.png

image.png

image.png


Segue modelo de tela desenvolvido utilizando HTML, Bootstrap, AJAX e JQuery

image.png

Modal para adicionar novos artigos:
image.png

Modal de sucesso após inserção de informações:
image.png

Modal para edição dos dados:
image.png

Modal de sucesso após atualização:
image.png

Modal informativo sinalizando exclusão dos dados:
image.png

Botão de pesquisa filtrando os itens que contém a palavra "html":
image.png

O projeto encontra-se em ambiente local, para rodar a aplicação localmente seguir os passos abaixo:
- clonar o repositório localmente;
- abrir o terminal integrado e digitar o comando: npm install
OBS: esse comando fará a instalação dos pacotes do npm que foram utilizados para a criação do projeto;
- após instalações, dar o comando: npm start
OBS: esse comando fará a inicialização do arquivo index.js, que contém as informações de conexão com o express e o mongoose;
- aparecerá uma mensagem no terminal de que o banco de dados foi conectado;
- após conexão do backend e banco de dados, abrir o arquivo index.html (pasta frontend), onde será possível visualizar a aplicação funcionando.

Dificuldades:
- utilização do JQuery e Ajax, que ainda são conceitos novos;

Pendências:
- automatização do processo de salvar links com um web crawler;
- hospedagem da aplicação em algum servidor;

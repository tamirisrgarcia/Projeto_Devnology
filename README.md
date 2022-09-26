#Projeto desenvolvido como teste - Trainee Devnology

O projeto consiste em criar um sistema para gerenciar links de artigos de tecnologia.
Os links podem, também, ser editados e excluídos.

Tecnologias utilizadas:
- [X] Backend: NodeJS, API RESTful, Hoppscotch 
- [X] Banco de Dados: ODM Mongoose
- [X] Frontend: HTML, Bootstrap, JQuery, AJAX

O banco de dados foi criado utilizando o Mongoose (ODM do MongoDB - NoSQL). <br>
Segue modelo de testes da API utilizando o Hoppscotch:
![image](https://user-images.githubusercontent.com/87827996/192393710-0dbf0e91-c470-41eb-aaec-23fc46441e6e.png)

Segue modelo de tela desenvolvido utilizando HTML, Bootstrap, AJAX e JQuery
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


Botão de pesquisa filtrando os itens que contém a palavra "html" - pacote JQuery DataTable:
![image](https://user-images.githubusercontent.com/87827996/192394446-8a385f49-12a1-44dc-8022-15f7b01a877e.png)


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

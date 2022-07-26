
<div align="center">
    <img src="https://user-images.githubusercontent.com/100800836/180287564-b8a347df-1aea-4458-ab2f-a527d4828e0e.jpg" width="50%">
</div>

## 💻 **Sobre o Projeto**
<br>
API desenvolvida como Projeto Final e conclusão do curso de backend {Reprograma} com o auxílio da professora maravilhosa, Hannah Freitas.

<p align ="justify">De acordo com dados do IBGE um a cada quatro alunos que inicia o ensino fundamental no Brasil abandona a escola antes de completar a última série, colocando o país como terceiro em maior taxa de abandono escolar. Um dos motivos é a falta de motivação e de acreditar que consegue.
 <p align ="justify">Este projeto foi pensado e desenvolvido  a partir da minha vivência profissional como professora alfabetizadora, a educação é o pilar para que um pais seja bem sucedido, e nos como professores temos juntos com os pais a sagrada missão de estender a mão a esses jovens e  criançãs e dizer: "Eu te ajudo".
<br>

## ✍🏽 **Descrição**
<br>
<p align ="justify"> O projeto é uma API REST que permite professoras de diversas disciplinas ou especialidades a estarem a disposição de forma voluntaria e gratuita, ajudando jovens e crianças em suas dificuldades escolares, essa aplicação permitirá que familiares encontre uma professora mais proxima de de sua residência 
<p align="justify">A interface é um CRUD completo integrado com o banco de dados Mongodb, onde é possível listar as professoras, cadastrar novas, atualizar os dados e deletar o cadastro.

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)

<br>

  
<br>

## 📄 **Sumário**



## 🔗 **Link**
[Apresentação](https://www.canva.com/design/DAFG4uoRboM/Gqx9XbZL3MXOoma8H6zLGQ/view?utm_content=DAFG4uoRboM&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent)

[Heroku](https://eu-te-ajudo.herokuapp.com/)

## 🗂️ **Arquitetura MVC**
<br>
```
 📁 cestas-solidarias
   |
   |-  📁 src
   |    |
   |    |- 📁 Controller
   |         |- 📑 teacherController.js
   |     
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 Models
   |         |- 📑 teacherSchema.js
   |         
   |         
   |
   |    |- 📁 Routes
   |         |- 📑 teacherRoutes.js 
   |         
   |  |- 📑 app.js
   |  
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js

<br>
   ## 🔃 Rotas

* local: http://localhost:8070

* Heroku: 

    * Utilize o [Postman](https://www.postman.com/), para chamar e testar os endpoints da API localmente ou via Heroku

```
<br>

<br>

## 🔃 Manipulação das Rotas:

| Método HTTP  | Endpoint               | Descrição                            
| ------------ | --------------------------------------------------------- 
| GET          | `/teacher/all/`        | Retorna todas professoras           
| POST         | `/teacher/create` -    | Cria/cadastra um nova professora       
| PUT          | `/teacher/update/:id`- | Atualiza algum  os dados    
| DELETE       | `/teacher/delete/:id`  | Deleta um usuário específico         

<br>

## ✅ Dados da Collection:

- id: gerado automaticamente 
- Professora: string e true
- Disciplina : string e true
- bairro: string e true
- email: string e true
- whatsapp: string e true
- especilidade: string e true
- criadoEm: data gerada automaticamente e obrigatório

<br>

<br>

## ✅ API deve retornar seguinte JSON:

{
    "message": "Professora cadastrada com sucesso",
    "savedTeacher": {
        "teacher": "Ana Claudia",
        "subject": "Musica",
        "district": "Vila Bartira",
        "email": "anaclau@email.com",
        "whatsapp": "97334-0907",
        "specialty": "musicoterapia",
        "createdAt": "2022-07-26T18:55:39.420Z",
        "_id": "62e038abe5bd0104dadd7eef",
        "__v": 0
    }



 ## 🚧 Melhorias para o futuro (Em construção)

<br>

* Atualizar os códigos inserindo autorização , autenticaçao e testes.
* Apresentar o projeto em reuniões educacionais para ter professores parceiros.
* Implementar o front end para tornar o projeto:"Eu te ajudo", uma realidade, para que os professores e familiares tenham interação com a tela.
<br>

## ⚙️ **Funcionalidades/Objetivos**
- Listar todas as professoras cadastradas no sistema;
- Cadastrar novas professoras;
- Atualizar os dados pessoais, caso haja  mudança de wathsapp ou localidade.
- Deletar professora que não consiga continuar com o trabalho voluntario.

## 📚 **Aprendizados**

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DELETAR).

## 👩‍🎓 **Autora**
<div align="rigth">
    <img src="https://user-images.githubusercontent.com/100800836/180608874-c54f54c9-6d44-4b48-89c0-6fa83871dca7.jpeg" width="10%")
</div>

### Alice da Silva Lins

[Linkedin](https://www.linkedin.com/in/alice-lins-araujo/)

## ❤️ **Agradecimentos**

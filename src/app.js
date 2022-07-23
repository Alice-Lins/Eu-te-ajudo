const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
db.connect();

app.use(express.json());


 const teacherRoutes = require('./Routes/teacherRoutes');
// const tagRoutes = require('./routes/tagRoutes');

app.use("/teacher", teacherRoutes);
// app.use("/tags", tagRoutes);

app.get('/', (req, res) => {
    res.status(200).send({
        title: "Reprograma -> Projeto Final",
        version: "1.0.0",
        mensagem: "Olá mundooooo, bem vindo ao meu site!"
    })
})


module.exports = app;
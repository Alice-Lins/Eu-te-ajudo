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

module.exports = app;
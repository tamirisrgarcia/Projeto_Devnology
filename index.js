const express = require('express');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.json());
app.use(cors());

const articleRoutes = require('./routes/articleRoutes')

app.use('/article', articleRoutes);


mongoose.connect(process.env.DB_CONN)
.then(() => {
    console.log('banco de dados conectado')
    app.listen(3000)
})
.catch((err) => console.log(err))


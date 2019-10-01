const express = require('express');

const routes = require('./routes');

const app = express();

// req.query = Acessar query.params (pra filtros)
// req. params = Acessar route params (Edição, Delete)
// req.body = Acessar o corpo da requisão para edição e registro

// Post sequelize
app.use(express.json());
app.use(routes);


app.listen(3333);
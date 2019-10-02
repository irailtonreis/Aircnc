const express = require('express');
const mongoose = require('mongoose');


const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://aircnc:aircnc@cluster0-shard-00-00-dws0k.mongodb.net:27017,cluster0-shard-00-01-dws0k.mongodb.net:27017,cluster0-shard-00-02-dws0k.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
// req.query = Acessar query.params (pra filtros)
// req. params = Acessar route params (Edição, Delete)
// req.body = Acessar o corpo da requisão para edição e registro

// Post sequelize
app.use(express.json());
app.use(routes);


app.listen(3333);
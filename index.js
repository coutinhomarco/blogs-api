require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const middleware = require('./midlewares');
const { createUser, login, getUsers, getOne } = require('./controllers');
const { validateUser, validateLogin, validateGetOne } = require('./services');
const { createCategory } = require('./controllers/Categories.controller');

const app = express();
app.use(bodyParser.json());
app.use(middleware.errorHandler);
app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validateUser, createUser);

app.post('/login', validateLogin, login);

app.get('/user', middleware.Auth, getUsers);

app.get('/user/:id', middleware.Auth, validateGetOne, getOne);

app.post('/categories', middleware.Auth, createCategory);
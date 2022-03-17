require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const middleware = require('./midlewares');
const { createUser, login } = require('./controllers');
const { validateUser, validateLogin } = require('./services');

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

app.get('/user');
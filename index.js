require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const middleware = require('./midlewares');
const { 
    createUser, 
    login, 
    getUsers, 
    getOne, 
    createCategory, 
    getCategories,
    createBlogPost, 
    getPosts,
    getOnePost,
    updatePost,
  } = require('./controllers');
const { validateUser, validateLogin, validateGetUser, validatePost } = require('./services');

const app = express();
app.use(bodyParser.json());
app.use(middleware.errorHandler);

app.listen(process.env.PORT || 3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.post('/user', validateUser, createUser);

app.post('/login', validateLogin, login);

app.get('/user', middleware.Auth, getUsers);

app.get('/user/:id', middleware.Auth, validateGetUser, getOne);

app.post('/categories', middleware.Auth, createCategory);

app.get('/categories', middleware.Auth, getCategories);

app.post('/post', middleware.Auth, validatePost, createBlogPost);

app.get('/post', middleware.Auth, getPosts);

app.get('/post/:id', middleware.Auth, getOnePost);

app.put('/post/:id', middleware.Auth, updatePost);
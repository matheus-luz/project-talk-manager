const express = require('express');
const bodyParser = require('body-parser');

const { getAllTalkers } = require('./middlewares/getAllTalkers');
const { getTalkerById } = require('./middlewares/getTalkerById');
const { getTalkerError } = require('./middlewares/getTalkerError');
const { postLogin } = require('./middlewares/postLogin');
const { postTalker } = require('./middlewares/postTalker');
const { validate } = require('./middlewares/validations/validate');
const { auth } = require('./middlewares/validations/auth');
const { validateTalker } = require('./middlewares/validations/validateTalker');
// const { putTalkerById } = require('./middlewares/putTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getAllTalkers);

app.get('/talker/:id', getTalkerById);

app.use(getTalkerError);

app.post('/login', validate, postLogin);

app.post('/talker', auth, validateTalker, postTalker);

// app.put('/talker/:id', auth, validateTalker, putTalkerById);

app.listen(PORT, () => {
  console.log('Online');
});

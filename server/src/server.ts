import express from 'express';

const app = express();

const users = ['Luiz', 'Rita', 'Milena', 'Marcos', 'Miller'];

app.get('/users', (request, response)=>{
  return response.json(users);
});

app.listen(3333);
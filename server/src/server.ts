import express from 'express';

const app = express();

const users = ['Luiz', 'Rita', 'Milena', 'Marcos', 'Miller',;

app.get('/', (request, response)=>{
  console.log('Funcionou!');
  return response.json();
});

app.listen(3333);
import tabela2024 from './tabela.js';
import express from 'express';

const server = express();

server.get('/',(req,res) => {
    res.send(tabela2024);
});
server.listen(300, () => console.log('servidor rodando com sucesso'));


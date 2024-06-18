import tabela2024 from './tabela.js';
import express from 'express';

const server = express();

server.get('/',(req,res) => {
    res.send(tabela2024);
});

server.get('/:sigla',(req,res) => {
    const siglaInformada = req.params.sigla.toUpperCase();
    const time = tabela2024.find(siglaInformada);
    res.send(time);
    });
server.listen(300, () => console.log('servidor rodando com sucesso'));


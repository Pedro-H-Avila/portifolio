import tabela2024 from './tabela.js';
import express from 'express';

const server = express();

server.get('/', (req,res) => {
    res.status(200).send(tabela2024);
});

server.get('/:sigla', (req,res) => {

     const siglaInformada = req.params.sigla.toUpperCase();
     const time = tabela2024.find((infoTime) => infoTime.sigla === siglaInformada);

    if /*(time === undefined) */ (!time) {
        resposta.status(404).send('Não existe na série A do Brasileirão 2024 um time com a sigla informada!');
        return;
    }
    res.status(200).send(time);
});
server.listen(300, () => console.log('servidor rodando com sucesso'));

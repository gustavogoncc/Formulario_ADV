// Exemplo usando Node.js com Express para o lado do servidor
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/processar_formulario', (req, res) => {
  const respostas = {
    pergunta1: req.body.pergunta1_opcao,
    pergunta2: req.body.pergunta2_opcao,
    pergunta3: req.body.pergunta3_opcao,
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
  };

  // Salve ou processe as respostas como necessário
  // Neste exemplo, apenas enviamos as respostas de volta como JSON
  res.json({ respostas });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // ou sua senha local
  database: "agendabarber",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco:", err);
  } else {
    console.log("Conectado ao MySQL!");
  }
});

app.post("/agendar", (req, res) => {
  const { barbeiro, servico, data, hora, nome_do_cliente, telefone } = req.body;

  const verificarSql = `
    SELECT * FROM agendamentos
    WHERE barbeiro = ? AND data = ? AND hora = ?
  `;

  connection.query(verificarSql, [barbeiro, data, hora], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ erro: "Erro ao verificar horário" });
    }

    if (results.length > 0) {
      return res.status(400).json({ erro: "Horário já está ocupado" });
    }

    const insertSql = `
      INSERT INTO agendamentos
      (barbearia_id, barbeiro, servico, data, hora, nome_do_cliente, telefone)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(
      insertSql,
      [1, barbeiro, servico, data, hora, nome_do_cliente, telefone],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ erro: "Erro ao salvar agendamento" });
        }

        res.json({ mensagem: "Agendamento salvo com sucesso!" });
      },
    );
  });
});

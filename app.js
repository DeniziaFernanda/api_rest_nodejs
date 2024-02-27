const express = require("express");
const app = express();
const morgan = require("morgan");

const routaProduto = require("./routes/produtos");
const routaPedidos = require("./routes/pedidos");


app.use(morgan("dev")) //para monitoramento
app.use('/produto', routaProduto);
app.use('/pedido', routaPedidos);


app.use((request, response, next) => {
    const erro = new Error("Rota não encontrada");
    erro.status = 404;
    next(erro);
});


app.use((error, request, response, next) => {
    response.status(error.status || 500);
    return response.send({
        erro: {
            "mensagem": error.mensagem
        }
    })
});


module.exports = app;
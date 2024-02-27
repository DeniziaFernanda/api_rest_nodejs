const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser")

const routaProduto = require("./routes/produtos");
const routaPedidos = require("./routes/pedidos");


app.use(morgan("dev")) //para monitoramento
app.use(bodyParser.urlencoded({ extended: false })) // apenas dados simples
app.use(bodyParser.json()) // aceitar json no body

// CORS: Cross Origin Resource Sharing
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (request.method === 'OPTIONS') {
        response.header('Access-Control-Allow-Methods', 
        'GET, POST, PUT, PATCH, DELETE');
        return response.status(200).send({});
    }
    next();
});

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
const express = require("express");
const route = express();


route.get("/", (request, response, next) => {
    response.status(200).send({
        mensagem: "get de pedidos feito com sucesso"
    });
});

route.post("/", (request, response, next) => {
    const pedido = {
        idProduto: request.body.idProduto,
        quantidade: request.body.quantidade
    }
    response.status(201).send({
        mensagem: "post de pedidos feito com sucesso",
        pedidoCriado: pedido
    });
});


route.get("/:idPedido", (request, response, next) => {
    const id = request.params.idPedido;
    if (!isNaN(id)){
        response.status(200).send({
            mensagem: "get exclusivo de pedidos feito com sucesso",
            id: id
        });
    } else {
        response.status(200).send({
            mensagem: "id invalido",
        });
    }
    
});

route.put("/", (request, response, next) => {
    response.status(201).send({
        mensagem: "put de pedidos feito com sucesso"
    });
});


route.delete("/", (request, response, next) => {
    response.status(201).send({
        mensagem: "delete de pedidos feito com sucesso"
    });
});

route.patch("/", (request, response, next) => {
    response.status(201).send({
        mensagem: "patch de pedidos feito com sucesso"
    });
});


module.exports = route;
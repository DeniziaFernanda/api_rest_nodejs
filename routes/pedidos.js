const express = require("express");
const route = express();
const postgres = require("../postgresql")

route.get("/", (request, response, next) => {
    response.status(200).send({
        mensagem: "get de pedidos feito com sucesso"
    });
});

route.post("/", (request, response, next) => {
    postgres.query(
        'INSERT INTO pedido(quantidade, fk_produto) VALUES ($1, $2);',
        [request.body.quantidade, request.body.fk_produto],
        (error, result, field) => {
            if (error) {
                console.log("vou mostrar um erro")
                return response.status(500).send({
                    error: error.message,
                    response: null
                })
            }
            response.status(201).send({
                mensagem: "Pedido inserido com sucesso",
               // id_pedido: result.rows[0].id
            });
        }
    );
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
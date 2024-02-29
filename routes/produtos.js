const express = require("express");
const route = express();
const postgres = require("../postgresql")


route.get("/", (request, response, next) => {
    response.status(200).send({
        mensagem: "get de produto feito com sucesso"
    });
});

route.post("/", (request, response, next) => {
    postgres.query(
        'INSERT INTO produto(nome, preco) VALUES ($1, $2);',
        [request.body.nome, request.body.preco],
        (error, result, field) => {
            if (error) {
                return response.status(500).send({
                    error: error.message,
                    response: null
                })
            }
            response.status(201).send({
                mensagem: "Produto inserido com sucesso",
               // id_produto: result.rows[0].id
            });
        }
    );
});


route.get("/:idProduto", (request, response, next) => {
    const id = request.params.idProduto;
    if (!isNaN(id)){
        response.status(200).send({
            mensagem: "get exclusivo de produto feito com sucesso",
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
        mensagem: "put de produto feito com sucesso"
    });
});


route.delete("/", (request, response, next) => {
    response.status(201).send({
        mensagem: "delete de produto feito com sucesso"
    });
});

route.patch("/", (request, response, next) => {
    response.status(201).send({
        mensagem: "patch de produto feito com sucesso"
    });
});


module.exports = route;
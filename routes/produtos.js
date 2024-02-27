const express = require("express");
const route = express();


route.get("/", (request, response, next) => {
    response.status(200).send({
        mensagem: "get de produto feito com sucesso"
    });
});

route.post("/", (request, response, next) => {
    const produto = {
        nome: request.body.nome,
        preco: request.body.preco
    }
    response.status(201).send({
        mensagem: "post de produto feito com sucesso",
        produtoCriado: produto
    });
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
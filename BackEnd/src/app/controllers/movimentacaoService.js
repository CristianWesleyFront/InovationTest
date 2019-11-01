const Movimentacao = require("../../database/mongo/Schemas/Movimentacao/Movimentacao");
const errorHandler = require("../../config/Erros/errorHandler");

Movimentacao.methods(["get", "post", "put", "delete"]);
Movimentacao.updateOptions({ new: true, runValidators: true });
Movimentacao.after("post", errorHandler).after("put", errorHandler);

module.exports = Movimentacao;

const departamento = require("../../database/mongo/Schemas/Departamento/Departamento");
const errorHandler = require("../../config/Erros/errorHandler");

departamento.methods(["get", "post", "put", "delete"]);
departamento.updateOptions({ new: true, runValidators: true });
departamento.after("post", errorHandler).after("put", errorHandler);

module.exports = departamento;

const Movement = require("../../database/mongo/schemas/movement/movement");
const errorHandler = require("../../config/Erros/errorHandler");

Movement.methods(["get", "post", "put", "delete"]);
Movement.updateOptions({ new: true, runValidators: true });
Movement.after("post", errorHandler).after("put", errorHandler);

module.exports = Movement;

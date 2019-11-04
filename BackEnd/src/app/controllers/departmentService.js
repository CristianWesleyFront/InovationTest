const Department = require("../../database/mongo/schemas/department/department");
const errorHandler = require("../../config/Erros/errorHandler");

Department.methods(["get", "post", "put", "delete"]);
Department.updateOptions({ new: true, runValidators: true });
Department.after("post", errorHandler).after("put", errorHandler);

module.exports = Department;

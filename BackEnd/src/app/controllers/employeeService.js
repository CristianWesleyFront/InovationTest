const Employee = require("../../database/mongo/schemas/employee/employee");
const errorHandler = require("../../config/Erros/errorHandler");

Employee.methods(["get", "post", "put", "delete"]);
Employee.updateOptions({ new: true, runValidators: true });
Employee.after("post", errorHandler).after("put", errorHandler);

module.exports = Employee;

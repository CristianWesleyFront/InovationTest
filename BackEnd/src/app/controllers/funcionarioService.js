const funcionario = require("../../database/mongo/Schemas/Funcionario/Funcionario");
const errorHandler = require("../../config/Erros/errorHandler");

funcionario.methods(["get", "post", "put", "delete"]);
funcionario.updateOptions({ new: true, runValidators: true });
funcionario.after("post", errorHandler).after("put", errorHandler);

module.exports = funcionario;

// funcionario.route('count', (req, res, next) => {
//     funcionario.count((error, value) => {
//         if(error) {
//             res.status(500).json({ errors: [error]})
//         } else {
//             res.json({value})
//         }
//     })
// })

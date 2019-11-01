const restful = require("node-restful");
const mongoose = restful.mongoose;

const movimentacaoSchema = new mongoose.Schema({
  description: { type: String, min: 0, max: 50, required: true },
  funcionario: { type: String, required: true },
  valor: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
module.exports = restful.model("Movimentacao", movimentacaoSchema);

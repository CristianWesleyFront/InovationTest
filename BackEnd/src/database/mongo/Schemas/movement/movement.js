const restful = require("node-restful");
const mongoose = restful.mongoose;

const movimentacaoSchema = new mongoose.Schema({
  descricao: { type: String, min: 0, max: 50, required: true },
  funcionario: { type: Object, required: true },
  valor: { type: String, required: true },
  data: { type: Date, default: Date.now }
});
module.exports = restful.model("Movimentacao", movimentacaoSchema);

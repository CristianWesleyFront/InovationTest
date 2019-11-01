const restful = require('node-restful')
const mongoose = restful.mongoose


const funcionarioSchema = new mongoose.Schema({
    name: { type: String, max:200, required: true },
    departamento: { type: String, max: 100, required: true}
  })
  module.exports = restful.model('Funcionario', funcionarioSchema)
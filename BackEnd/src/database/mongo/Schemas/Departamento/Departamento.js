const restful = require('node-restful')
const mongoose = restful.mongoose

const departamentoSchema = new mongoose.Schema({
    name: { type: String, max: 100, required: true },
  })
  module.exports = restful.model('Departamento', departamentoSchema)
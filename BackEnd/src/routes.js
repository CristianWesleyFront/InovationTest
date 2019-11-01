const express = require("express");
//const auth = require('./auth')

module.exports = function(server) {
  //URL BASICA
  const router = express.Router();
  server.use("/api", router);

  // Rotas de funcionario
  const funcionando = require("./app/controllers/funcionarioService");
  funcionando.register(router, "/funcionario");

  //Rota de movimentacao
  const movimentacao = require("./app/controllers/movimentacaoService");
  movimentacao.register(router, "/movimentacao");

  //Rota de departamento
  const departamento = require("./app/controllers/departamentoService");
  departamento.register(router, "/departamento");
};

// /*
// * Rotas protegidas por Token JWT
// */

// const protectedApi = express.Router()
// server.use('/api', protectedApi)
// protectedApi.use(auth)

// const BillingCycle = require('../api/billingCycle/billingCycleService')
// BillingCycle.register(protectedApi, '/billingCycles')

// /*
// * Rotas abertas
// */
// const openApi = express.Router()
// server.use('/oapi', openApi)
// openApi.get('/', (req,res)=> res.send('funcionando'))
// const AuthService = require('../api/user/AuthService')
// openApi.post('/login', AuthService.login)
// openApi.post('/signup', AuthService.signup)
// openApi.post('/validateToken', AuthService.validateToken)

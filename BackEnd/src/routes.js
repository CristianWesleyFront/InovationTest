const express = require("express");
//const auth = require('./auth')

module.exports = function(server) {
  const router = express.Router();
  server.use("/api", router);

  const employee = require("./app/controllers/employeeService");
  employee.register(router, "/funcionario");

  const movement = require("./app/controllers/movementService");
  movement.register(router, "/movimentacao");

  const department = require("./app/controllers/departmentService");
  department.register(router, "/departamento");
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

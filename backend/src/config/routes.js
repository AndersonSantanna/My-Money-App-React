const express = require('express')

module.exports = function (server) {
    
    //Definir URL base para todas rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de Ciclo de Pagamento
    const BillingCyle = require('../api/billingCycle/billingCycleService')
    BillingCyle.register(router, '/billingCycles')
}
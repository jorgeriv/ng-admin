'use strict';
var customer = require('./customer');
module.exports = function(app){

  // Customer
  //Link routes and actions
  app.get('/customer', customer.findAllCustomers);
  app.get('/customer/:id', customer.getCustomer);
  app.post('/customer', customer.addCustomer);
  app.put('/customer/:id', customer.updateCustomer);
  app.delete('/customer/:id', customer.deleteCustomer);
}

'use strict';
var customer = require('./customer');
var place = require('./place');
var timetable = require('./timetable');

module.exports = function(app){

  // Customer
  //Link routes and actions
  app.get('/customer', customer.findAllCustomers);
  app.get('/customer/:id', customer.getCustomer);
  app.post('/customer', customer.addCustomer);
  app.put('/customer/:id', customer.updateCustomer);
  app.delete('/customer/:id', customer.deleteCustomer);

  // Place
  app.get('/place', place.getAll);
  app.get('/place/:id', place.get);
  app.post('/place', place.add);
  app.put('/place/:id', place.update);
  app.delete('/place/:id', place.delete);

  // Place
  app.get('/timetable', timetable.getAll);
  app.get('/timetable/:id', timetable.get);
  app.post('/timetable', timetable.add);
  app.put('/timetable/:id', timetable.update);
  app.delete('/timetable/:id', timetable.delete);
};

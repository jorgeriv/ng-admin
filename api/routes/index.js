'use strict';
var customer = require('./customer');
var place = require('./place');
var timetable = require('./timetable');
var payment = require('./payment');
var pricetable = require('./pricetable');

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

  // timetable
  app.get('/timetable', timetable.getAll);
  app.get('/timetable/place/:place/day/:day', timetable.get);
  app.post('/timetable', timetable.add);
  app.put('/timetable/:id', timetable.update);
  app.delete('/timetable/:id', timetable.delete);

  // payment
  app.get('/payment', payment.getAll);
  app.get('/payment/place/:place/day/:day', payment.get);
  app.post('/payment', payment.add);
  app.put('/payment/:id', payment.update);
  app.delete('/payment/:id', payment.delete);

  // pricetable
  app.get('/pricetable', pricetable.getAll);
  app.get('/pricetable/place/:place/day/:day', pricetable.get);
  app.post('/pricetable', pricetable.add);
  app.put('/pricetable/:id', pricetable.update);
  app.delete('/pricetable/:id', pricetable.delete);
};

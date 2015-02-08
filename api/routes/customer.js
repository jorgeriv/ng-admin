/**
* Customer
*
* @module      :: Routes
* @description :: Maps routes and actions
* @author        :: Jorge Rivera
*/
'use strict';

var Customer = require('../db')('customer');

module.exports = {
  /**
  * Creates a new customer from the data request
  * @param {Object} req HTTP request object.
  * @param {Object} res HTTP response object.
  */
  addCustomer: function(req, res){
    console.log('Add customer');
    var customer = new Customer({
      name:  req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      email: req.body.email,
      emName: req.body.emName,
      emPhone: req.body.emPhone
    });
    customer.insertInc(function(err, doc){
      if(err){
        console.log('Error while saving customer: ' + err);
        return res.send(500, err);
      }
      console.log('Customer created');
      return res.send(200, doc);
    });

  },
  getCustomer: function(req, res){
    return Customer.findById(req.params.id,
      function(err, doc){
        if(err){
          console.log('Error getting the customer: ' + req.params.id);
          return res.send(500, err);
        }
        console.log('Customer retrived');
        return res.send(200, doc);
    });
  },
  updateCustomer: function(req, res){
    return Customer.findById(req.params.id,
      function(err, doc){
        if(err){
          console.log('Customer not found: ' + req.params.id);
          return res.send(404, err);
        }

        if(req.body.name){
          doc.name = req.body.name;
        }
        if(req.body.phone){
          doc.phone = req.body.phone;
        }
        if(req.body.address){
          doc.address = req.body.address;
        }
        if(req.body.email){
          doc.email = req.body.email;
        }
        if(req.body.emName){
          doc.emName = req.body.emName;
        }
        if(req.body.emPhone){
          doc.emPhone = req.body.emPhone;
        }
        if(req.body.active){
          doc.active = req.body.active;
        }
        doc.save(function(err, doc){
          if(err){
            console.log('Error updating customer: ' + req.body.id);
            return res.send(500, err);
          }
          console.log('Customer updated');
          return res.send(200, doc);
        });
      });
  },
  deleteCustomer: function(req, res){
    return Customer.findById(req.params.id,
      function(err, doc){
        if(err){
          console.log('Customer not found: ' + req.params.id);
          return res.send(404, err);
        }
        doc.remove(function(err, doc){
          if(err){
            console.log('Error deleting user: ' + req.params.id);
            return res.send(500, err)
          }
          console.log('Customer deleted');
          return res.send(200, doc);
        })
    })
  },

  findAllCustomers: function(req, res){
    console.log('find all customers');
    return Customer.find({}, function(err, doc){
      if(err){
        console.log('Error finding all customers');
        return res.send(500, err);
      }
      console.log('Customers retrived');
      return res.send(200, doc);
    })
  }

}

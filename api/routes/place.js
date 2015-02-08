/**
* Place
*
* @module      :: Routes
* @description :: Maps routes and actions
* @author        :: Jorge Rivera
*/
'use strict';

var Place = require('../db')('place');

module.exports = {
  get: function(req, res){
    var id = req.params.id;
    Place.findById(id, function(err, doc){
      if(err){
        return res.status(404, err);
      }
      res.status(200).send(doc);
    });
  },
  getAll: function(req, res){
    var skip = req.params.skip || 0;
    var limit = req.params.limit || 20;
    Place.find({}).limit(limit).skip(skip).exec(function(err, doc){
      if(err){
        return res.status(404).send(err);
      }
      res.status(200).send(doc);
    });
  },
  create: function(req, res){
    var place = new Place(req.body);
    place.save(function(err, doc){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(doc);
    });
  },
  upate: function(req, res){
    var id = req.params.id;
    Place.find({_id:id}, function(err, doc){
      if(err){
        return res.status(404).send(err);
      }
      doc = doc[0];
      if(req.body.name){
        doc.name = req.body.name;
      }
      if(req.body.capacity){
        doc.capacity = req.body.capacity;
      }
      doc.save(function(err, doc){
        if(err){
          return res.status(500).send(err);
        }
        res.status(200).send(doc);
      });
    });
  },
  delete: function(req, res){
    var id = req.params.id;
    Place.findByIdAndRemove(id, function(err, doc){
      if(err){
        return res.status(404).send(err);
      }
      res.status(200).send(doc);
    });
  }
};

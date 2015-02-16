/**
* Schema
*
* @module      :: Routes
* @description :: Maps routes and actions
* @author        :: Jorge Rivera
*/
'use strict';

var Schema = require('../db')('timetable');

module.exports = {
  get: function(req, res){
    var params = {
      place: req.params.place,
      day: req.params.day
    };
    Schema.find(params, function(err, doc){
      if(err){
        console.log('Error while getting timetable: ', err);
        return res.status(500).send(err);
      }
      res.status(200).send(doc);
    });
  },
  getAll: function(req, res){
    var skip = req.params.skip || 0;
    var limit = req.params.limit || 20;
    Schema.find({}).limit(limit).skip(skip).exec(function(err, doc){
      if(err){
        return res.status(404).send(err);
      }
      res.status(200).send(doc);
    });
  },
  add: function(req, res){
    var place = new Schema(req.body);
    place.save(function(err, doc){
      if(err){
        return res.status(500).send(err);
      }
      res.status(200).send(doc);
    });
  },
  update: function(req, res){
    var id = req.params.id;
    Schema.find({_id:id}, function(err, doc){
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
    console.log('del');
    var id = req.params.id;
    Schema.findByIdAndRemove(id, function(err, doc){
      if(err){
        return res.status(404).send(err);
      }
      console.log('Item deleted ', doc._id);
      res.status(200).send(doc);
    });
  }
};

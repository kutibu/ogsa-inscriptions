var models = require('../models');
//var epi = require('../models/epi');

module.exports = {
    getCourses : function(req, res){

        models.courses.findOne({
            where : {
                id : req.params.id
            }
        }).then(function(courses) {
                if (courses) {
                  res.status(201).json(courses);
                } else {
                  res.status(404).json({ 'error': 'EPI not found' });
                }
              }).catch(function(err) {
                res.status(500).json({ 'error': 'cannot fetch EPI' });
              });
            
    },
    getDistance : function(req, res){


            models.parcourir.findAll({
                where : {
                    idcourses : req.params.id
                }
            }).then(function(distance) {
                if(distance){
                      res.status(201).json(distance);
                } else {
                    res.status(404).json({ 'error': 'EPI not found' });
                }
            }).catch(function(err) {
                    res.status(500).json({ 'error': 'cannot fetch EPI' });
            });
                
        
    }
}
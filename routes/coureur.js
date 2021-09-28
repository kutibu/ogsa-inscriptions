var models = require('../models');
//var epi = require('../models/epi');

module.exports = {
    getAll : function(req, res){

        models.coureur.findAll({
            attributes: [
                'id', 'Nom', 'Prenom'
            ]
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
}
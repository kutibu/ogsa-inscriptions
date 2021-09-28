var models = require('../models');
//var epi = require('../models/epi');
const fastcsv = require('fast-csv');
const fs = require('fs');


module.exports = {
    getVerif : function(req, res){

        models.coureur.findOne({
            where : {
                id : req.body.Nom,
                NumLic_Coureur : req.body.Licence,
            }
        }).then(function(coureur) {
                if (coureur) {
                
                    models.inscrire.create({
                        NumLic_Coureur : req.body.Licence,
                        IDCourse_courses : req.params.id,
                        Numerocourse_parcourir : req.body.Numero,
                        NumerodeDossard_inscrire : null,
                    }).then(function(inscrire) {
                        if (inscrire) {
                            res.status(201).json({ 'message': 'Vous êtes bien inscits' });
                           /* //const ws = fs.createWriteStream('course' + req.params.id + '.csv');
                            var data = [];
                            data.push(inscrire.dataValues);
                            console.log(data);
                            res.status(201).json({ 'message': 'reussi' });
                            fastcsv
                                .writeToPath("../course1.csv",data, {headers : true})
                                .on('finish', function(){
                                    console.log("Successfully!");
                                })*/
                        } else {
                            res.status(404).json({ 'error': 'EPI not found' });
                        }
                    });
                } else {
                res.status(404).json({ 'error': 'EPI not found' });
                }
            }).catch(function(err) {
                res.status(500).json({ 'error': 'cannot fetch EPI' });
            });
            
    },
 
}
// Imports
var express      = require('express');
const courses = require('./routes/courses');
const coureur = require('./routes/coureur');
const inscrire = require('./routes/inscrire');

// Router
exports.router = (function() {
  var apiRouter = express.Router();

  apiRouter.route('/courses/:id').get(courses.getCourses);

  apiRouter.route('/courses/:id/distance').get(courses.getDistance);

  apiRouter.route('/coureur').get(coureur.getAll);

  apiRouter.route('/inscrire/:id').post(inscrire.getVerif);



  return apiRouter;
})();
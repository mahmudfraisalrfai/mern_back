const routes = require("express").Router();
const control = require("../controller/controller");
// question Routes api

routes
  .route("/questions")
  .get(control.getQuestions)
  .post(control.postQuestions)
  .delete(control.deleteQuestions);
routes
  .route("/result")
  .get(control.getResult)
  .post(control.postResult)
  .delete(control.deleteResult);
module.exports = routes;

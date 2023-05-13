const authController = require("../controllers/auth.controller");


module.exports = (app)=>{


app.post('/jobHunter_App/api/v1/signup', authController.userSignUp);




}
const urlencoded = require('body-parser/lib/types/urlencoded')
const controller = require('../controllers/auth.controllers')
var bodyParser = require('body-parser');

var jsonPaser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (app){
    app.use(function(req,res,next){
        res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Accept")
        next()
        console.log("11111",req.body,"1111`1111111111") //test req
    })

    app.post("/api/auth/signin", urlencodedParser, controller.signin)
    app.post("/api/auth/signout", controller.signout)
    
}
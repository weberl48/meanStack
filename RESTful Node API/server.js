// Require packages
var express = require('express'),
app = express(),
morgan = require('morgan'),
mongoose = require('mongoose'),
port = process.env.PORT || 8080;

//App config
//use body parse to grab info from POST requests
 app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// config app to handle CORS requests
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
res.setHeader('Access-Control-Allow-Headers', "x-REquested-With,content-type, \ Authorization");
next();
});
//log all requests to the console
app.use(morgan('dev'));
//Routes for API

// home page
app.get('/', function(req,res){
  res.send('Home page route');
});
// api instance of express router
apiRouter = express.Router();

//test route
apiRouter.get('/', function(req,res){
  res.json({message:'yusss api hit'});
})
//all api route prefixed with /api
app.use('/api', apiRouter);

//start server
app.listen(port);
console.log('localhost/' + port);

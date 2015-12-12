#Build a RESTful NODE API
As the demand for interconnectivity grows REST APIs are becoming standard across the web.
This example REST API is built with Node, express router and mongoose.

First define our Node packages, start the Express server, Define the model and declare routes using express.
##File Structure
-app/
----- models/
---------- user.js // user model
-node_modules/ // dependencies/packages
-package.json  // define all node app and dependencies
-server.js   // configure application and create routes

##Package.json (Dependencies)
        npm install express morgan mongoose body-parser bcrypt-nodejs --save
{
  'name': 'node=api',
  'main': 'server.js',
  'dependencies': {
    "morgan": "~1.5.0",
    "express": "~4.10.3",
    "body-parser": "~1.9.3",
    "mongoose": "~3.8.19",
    "bcrypt-nodejs": "0.0.3"
  }
}

express - node framework
morgan - log requests to the console
mongoose - ODM used to communicate with MongoDB
body-parser - Pull POST content from HTTP requests
bcrypt-nodejs - hash passwords

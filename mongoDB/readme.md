#Common Database Commands
Rather than making queries for tables like an SQL database, mongo queries collections of JSON style documents.
##Starting mongo instance and showing databases  
        $ mongo - to connect to MongoDB instance.

        $ show databases - list all databases
##Creating a Database
Mongo will not create a database unless you insert information into that database

You don not need to explicitly create a database in mongo. use a database create a collection and document and the database will be created for you.
        use dbName
##Show Current Database
        $ db

##Select a Database
        $ use dbName
#CRUD Commands
###Create
    create one users
        $ db.users.save({name: "Bob"});
    create multiple users
        $ db.users.save({name:"bob"}, {name:"marry"});
    saving a document into a collection creates the collection and the database if they do not already exist
###Read
    show all users
        $ db.users.find();
    show specific users
        $ db.users.find({name:'bob'});
###Update
        $ db.users.update({name:'bob'},{name:'bob ross'});
###Delete
    remove all
        $ db.users.remove({});
    remove one
        $ db.users.remove({name:'bob ross'});
#Mongoose
connecting to a database using mongoose.

    grab mongoose package
        ```js
        var mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost/db_name');
        ```
    

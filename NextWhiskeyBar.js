/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fs = require('fs');
var path = require('path');
var morgan = require('morgan');
var express = require('express');
var errorHandler = require('errorhandler');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var dbops = require('./modules/dbops');
var pug = require('pug');

// MongoDB connection url
var url = 'mongodb://localhost:27017/nwb';

var port = 3000;
var host = 'localhost';

var app = express();

app.set('views', './templates');
app.set('view engine', 'pug');

app.use(morgan('short'));
app.use(bodyParser.json());

app.get('/places', function(req, res, next){
    
    mongoClient.connect(url, function(err, db){
        assert.equal(err, null);
        console.log('Connected to the MongoDB server');

        dbops.findDocuments(db, 'places', function(docs){
        
          res.render('places', {places: docs});
        });
        
        db.close();
        
    });
});

app.get('/places/:place_id', function(req, res, next){
    res.send('Will return a short description of a particular place with id ' + req.params.place_id);
});

app.post('/places', function(req, res, next){

    mongoClient.connect(url, function(err, db){
        assert.equal(err, null);
        consolee.log('Connected to the MongoDB server');
        
//        res.writeHead(200, {"Content-type":"text/html"});
        console.log(req.body);
        //dbops.insertDocument(db, req.body.name);
        
    });
    res.send('Will add a new place to the DB\nWill receive parameters ' + req.body.name);
});

app.put('/places/:place_id', function(req, res, next){
    res.send('Will edit the ' + req.params.place_id + ' place\'s info\n{"id":"place_id","name":"place_name","address":"place_address","info":"some_notes"}');
});

app.delete('/places/:place_id', function(req, res, next){
    res.send('Will delete the ' + req.params.place_id + ' place');
});

app.get('/vote', function(req, res, next){
    res.send('Will return current intermediate result of the today vote');
});

app.post('/vote', function(req, res, next){
    res.send('Vote for a concrete place for today');
});

app.get('/history', function(req, res, next){
    res.send('Will return history of our choises of the last week');
});

app.get('/log', function(req, res, next){
    res.send('Will log all requests to the app');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, host, 'Server is up');

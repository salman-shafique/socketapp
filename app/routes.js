var userMdl= require('../app/models/schema');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/getUser', function(req, res){
		console.log('asdfa')
		var newUser2 = userMdl();
		console.log(userMdl)
/*       newUser2.find({}, function(err, cars) {
            assert.equal(err, null);
            res.json(newUser2);
        });*/

	});







	app.post('/addUser', function(req, res) {
		// create a new user
/*		var newUser = userMdl({
		  name: 'Peter Quill',
		  username: 'starlord55',
		  password: 'password',
		  admin: true
		});*/

		console.log(req.body)

		var newUser = userMdl();
		console.log(newUser);
/*		newUser.name=req.body.data.name;
		newUser.username=req.body.data.username;
		newUser.email=req.body.data.email;
		newUser.password=req.body.data.password;

		newUser.save(function(err) {
		  if (err){
		  	throw err
		  } else{
		  	res.json({ status: 'ok' });   
		  }

		});*/
		
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});


/*var express  = require('express');
var router = express.Router(); 
router.get('*', function(req, res) {
   res.sendFile('./public/index.html');
});*/




};
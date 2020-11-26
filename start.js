const mongoose = require('mongoose');

mongoose.Promise=global.Promise;

(async () => {
	try{
		await mongoose.connect('mongodb://localhost/employees', {useNewUrlParser: true});
        console.log('Successfully connected to MongoDb database.');
    } catch(e) {
		console.log("Error connnecting mongodb. Reason:", e)
	}
})();

require('./model/employeeModel.js');
require('./index.js');

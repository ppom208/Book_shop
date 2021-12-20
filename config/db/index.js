const mongoose = require('mongoose');

async function connect() {
	try {
		await mongoose.connect('mongodb+srv://anhanh:a12345@cluster0.ks6pr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


		console.log("Connect sucessfully!!!");
	} catch(error) {
		console.log("Connect fail!!!");
	}
};

module.exports = { connect };


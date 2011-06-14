var client = require('./alerts');
var cliff  = require('cliff');

var columns = ['id', 'AMO Name', 'Alert Name', 'Severity', 'Description', 'Count', 'Time Created', 'AMO Class', 'Date Created'];
var client = new Alerts('Admin', 'NetExpert');

var amo = process.argv[2];
var alertName = process.argv[3];
if (!amo || !alertName) {
	console.log("Must provide both an AMO Name and an Alert Name");
	process.exit();
}

client.getSingle(amo,alertName).on('complete', function(data) {
	var objs = [];
	objs.push(data);
	cliff.putObjectRows('data', objs, columns);
});


var client = require('./alerts');
var cliff  = require('cliff');

var columns = ['id', 'AMO Name', 'Alert Name', 'Severity', 'Description', 'Count', 'Time Created', 'AMO Class', 'Date Created'];
var client = new Alerts('Admin', 'NetExpert');

var amo = process.argv[2];
if (!amo) {
	console.log("Must provide an AMO Name");
	process.exit();
}

client.getByAmo(amo).on('complete', function(data) {
	cliff.putObjectRows('data', data.alerts, columns);
});




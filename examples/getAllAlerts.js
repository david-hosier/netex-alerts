var client = require('../lib/netex-alerts');
var cliff  = require('cliff');

var columns = ['id', 'AMO Name', 'Alert Name', 'Severity', 'Description', 'Count', 'Time Created', 'AMO Class', 'Date Created'];

var client = new Alerts('Admin', 'NetExpert');

client.getAll().on('complete', function(data) {
	cliff.putObjectRows('data', data.alerts, columns);
});


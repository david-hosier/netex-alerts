These scripts demonstrate a very basic command line Alert display.

## Required Modules
* restler (sudo npm install restler)
* cliff   (sudo npm install cliff)

## Files

### alerts.js
This is a node module that provides an abstraction to the /alerts service for NetExpert.
To create a client instance call the constructor:

	var client = new Alerts(_username_, _password_, [baseURL]);

The baseURL value is optional and defaults to http://localhost:8080. The value must not include the /alerts portion.

### getAllAlerts.js
Fetches all alerts from the system and prints them as a table to the command line.
	
	node getAllAlerts.js

### getByAmo.js
Fetches all alerts for a given AMO Name and prints them as a table to the command line.
	
	node getByAmo.js _amoName_

### getSingleAlert.js
Fetches a single alert and prints it in a table format to the command line.
	
	node getSingleAlert.js _amoName_ _alertName_

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
	
	$ node getByAmo.js NetExpert
	data:   id   AMO Name  Alert Name              Severity Description                                  Count Time Created AMO Class Date Created 
	data:   8310 NetExpert A_root_cause_resource_3 Critical asdfasdfasdf                                 2     21:27:49     NetExpert 2011-06-10   
	data:   8269 NetExpert DalesAlertDefOne        Critical Something dun broke, we need to fix it ASAP! 44    16:32:36     NetExpert 2011-06-10   


### getSingleAlert.js
Fetches a single alert and prints it in a table format to the command line.
	
	$ node getSingleAlert.js NetExpert DalesAlertDefOne
	data:   id   AMO Name  Alert Name       Severity Description                                  Count Time Created AMO Class Date Created 
	data:   8269 NetExpert DalesAlertDefOne Critical Something dun broke, we need to fix it ASAP! 44    16:32:36     NetExpert 2011-06-10   


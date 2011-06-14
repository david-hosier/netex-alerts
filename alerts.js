var rest = require('restler');

Alerts = rest.service(function(u, p, baseOverride) {
  this.defaults.username = u;
  this.defaults.password = p;
  if (baseOverride) {
    this.baseURL = baseOverride;
  }
}, {
  baseURL: 'http://localhost:8080'
}, {
  getByAmo: function(amo) {
    return this.get('/alerts/' + amo, {});
  },
  getAll: function() {
    return this.get('/alerts', {});
  },
  getSingle: function(amo, alertName) {
    return this.get('/alerts/' + amo + '/' + alertName, {});
  }
});


Package.describe({
  name: 'citizensay:api'
});

Package.onUse(api => {
  api.versionsFrom('1.10.2');
  api.use('ecmascript');
  api.mainModule('client.js', 'client');
  Npm.depends({
      "swagger-ui-dist": "3.38.0"
  });
});
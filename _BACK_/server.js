const X = require('express');
const APP = X();
const PORT = 2105;

APP.use('/project1', X.static(__dirname + '/_SITE_/'));
APP.listen(PORT, () => {
  	console.log(`\r\nNODE ::: I started my back end server on port ${PORT}.\r\n`);
  });
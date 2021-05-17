
const express = require('express');

module.exports = function (app) {
  app.use('/aem6', express.static('server/content/dam/aem6'));
};

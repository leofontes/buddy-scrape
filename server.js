"use strict";
const PORT = process.env.port || 3000;
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
  console.log("Server started on port " + PORT);
});

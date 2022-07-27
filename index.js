const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
//const path = require('path'); //uncomment if you want the client to share the same domain as the server
//otherwise, use cors and delete above line entirely
const port = process.env.PORT || 3000;
const app = express();
require('dotenv').config();
const routes = require('./routes/payRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
//app.use(express.static(path.join(__dirname, 'public/')));
//same as path module comment
app.set('view engine', ejs);

app.use('/', routes);

app.listen(port, () => {
   console.log(`works...`)
});
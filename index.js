const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const routes = require('./routes/payRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(express.static(path.join(__dirname, 'public/')));
app.set('view engine', ejs);

app.use('/', routes);

app.listen(process.env.PORT || 3000, () => {
   console.log(`works...`)
});
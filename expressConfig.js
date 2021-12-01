const path = require('path');
var express = require('express');
const handlebars = require('express-handlebars');
const cors = require('cors');
const logger = require('morgan');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
const helpers = require('handlebars-helpers')();

var app = express();
app.use(express.json());
app.use(express.static('./frontend'));
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use("/", require("./frontend/model/api/features"))

function fViews(path) {
    return `${__dirname}/frontend/${path}`;
}
const wfPath = fViews + '/webflow';
app.engine(
    'handlebars',
    handlebars({
        helpers: helpers,
        extname: '.handlebars',
        defaultLayout: path.join(__dirname, '/frontend/views/main'),
        partialsDir: [__dirname + '/frontend/views/partials'],
    })
);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/frontend/views'));

module.exports = {
    app
};
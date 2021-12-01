const path = require('path');
var express = require('express');
const hbs = require('express-handlebars');
const cors = require('cors');
const logger = require('morgan');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
const helpers = require("./utils/helpers");
const Handlebars = require('handlebars')
const hbsHelpers = require('handlebars-helpers')();

const {
    allowInsecurePrototypeAccess
} = require('@handlebars/allow-prototype-access')

var app = express();
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', "handlebars", "js", 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function(res, path, stat) {
        res.set('x-timestamp', Date.now())
        res.set("Access-Control-Allow-Origin", '*');
        res.set('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept")
    }
}

app.use(express.json());
app.use(express.static('./frontend', options));
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
app.use(methodOverride('_method'));


let expressHandlebars = hbs.create({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
    helpers: {
        helpers,
        hbsHelpers
    },
    extname: '.handlebars',
    defaultLayout: path.join(__dirname, '/frontend/views/main'),
    layoutsDir: path.join(__dirname, "/frontend/views/layouts"),
    partialsDir: [path.join(__dirname, "/frontend/views/components"), path.join(__dirname, "/frontend/views/precompiled")],
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine(
    'handlebars',
    expressHandlebars.engine
);


function exposeTemplates(req, res, next) {
    expressHandlebars.getTemplates('frontend/views/precompiled', {
            cache: app.enabled('view cache'),
            precompiled: true
        }).then(function(templates) {
            templates = Object.keys(templates).map(function(name) {
                console.log('name', name)
                return {
                    name: name,
                    template: templates[name]
                };
            });
            if (templates.length) {
                res.locals.templates = templates;
            }

            setImmediate(next);
        })
        .catch(next);
}


// hbs.getPartials().then(function(partials) {
//     console.log(partials)
// })
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/frontend/views'));

module.exports = {
    app,
    exposeTemplates,
    expressHandlebars
};
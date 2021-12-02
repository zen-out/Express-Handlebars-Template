// render the data into views 
// this is where you should be playing 

const {
    query
} = require("../index.js")
const {
    exposeTemplates,
    expressHandlebars
} = require("../../../expressConfig")
const express = require("express")
const router = express.Router()



const data = {
    // name: "lesley",
    people: ["James", "Peter", "Roy", "Raj"],
    name: 'Chris',

    hellos: [{
        text: 'hello'
    }, {
        text: 'Hello'
    }, {
        text: 'HELLO'
    }],
    goodbyes: ['goodbye', 'Goodbye', 'GOODBYE'],
    outer: [{
        sibling: 'sad',
        inner: [{
            text: 'goodbye'
        }]
    }],
    barbaz: ['bar', 'baz'],
    invert: [{
            text: 'one'
        },
        {
            text: 'two'
        },
        {
            text: 'three'
        }
    ],
    lists: [{
            items: ["Orange", "Apple", "Pineapple"],
        },
        {
            items: ["Coke", "Sprite"],
        },
    ],

    // value: true,
    awesome: function(context) {
        return "awesome function" + context;
    },
    frank: 'Frank',
    "@alan": {
        expression: 'beautiful'
    },
    COMEON: {
        bar: 'world'
    },

    // '12.34': 'bar',
    // false: 'foo',
    // omg: 'OMG!',

    // invert: false,
    data: [1, 3, 5],
    person: {
        first: 'Alan',
        last: 'Johnson'
    },
    index: {
        a: {
            text: 'goodbye'
        },
        b: {
            text: 'Goodbye'
        },
        c: {
            text: 'GOODBYE'
        }
    },
    foo: 'bar',
    dudes: [{
            name: 'Yehuda',
            url: 'http://yehuda'
        },
        {
            name: 'Alan',
            url: 'http://alan'
        }
    ],
    context: {
        value: 'success'
    },
    yooo: {
        noway: "whatsup"
    },
    value: ['a', 'b', 'c']
}
router.get("/playground", exposeTemplates, function(req, res) {
    res.render("components/page/playground/playground", {
        layout: "playground",
        data
    })
})

module.exports = router
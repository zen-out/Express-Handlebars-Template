const {
    connection
} = require("../database/index")
const {
    Query
} = require("./basic/features")

function readQuery(q) {
    return q.then((result) => {
        console.log(result)
    })
}

let features = new Query("features", connection)
let users = new Query("users", connection)
let projects = new Query("projects", connection)
let tasks = new Query("tasks", connection)
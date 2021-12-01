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
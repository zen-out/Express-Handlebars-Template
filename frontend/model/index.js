const {
    Query
} = require("../../backend/queries/index.js")
const {
    connection
} = require("../../backend/database/index")

let query = new Query(connection)


module.exports = {
    query,
}
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
let getDescData = features.getAscData("title")
let id = features.exists("notes", "generate Sleek Grass-roots context-sensitive product")
let post = features.post({
    id: 19,
    user_id: 19,
    project_id: 19,
    title: 'expedite Realigned human-resource projection',
    status: 'doing',
    keyInfo: 'Balanced disintermediate toolset impactful Soft',
    tools: 'Table Cheese Fresh',
    description: 'De-engineered cohesive flexibility frictionless Fresh',
    notes: 'generate Sleek Grass-roots context-sensitive product',
    structure: 'e-enable Frozen'
})
let deleteQ = features.delete(21)
readQuery(deleteQ)
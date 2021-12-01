const {
    connection
} = require("../../database/index")
const {
    Query
} = require("./basic")
const {
    formatTableName,
} = require("../utils/format")
const {
    readQuery
} = require("../utils/readQuery")

let problems = new Query("problems", connection)
let features = new Query("features", connection)
let users = new Query("users", connection)
let projects = new Query("projects", connection)
let tasks = new Query("tasks", connection)
let timer = new Query("timer", connection)

// Use Case One 

let random = Math.floor(Math.random() * 1000000);
// create new user, and have no initial problems
let createNewUser = users.post({
    name: "lesley",
    email: `Hattie.${random}@example.org`,
    hash: "whatsup"
})
// should return 0 
class JoinQuery {
    // parent, child 
    // users, problems
    // users.id
    // problems.user_id
    constructor(knex, PARENT_TABLE, CHILD_TABLE) {
        this.PARENT_TABLE = PARENT_TABLE
        this.CHILD_TABLE = CHILD_TABLE
        let formatChildSuffix = formatTableName(PARENT_TABLE)
        this.parentClause = `${PARENT_TABLE}.id`
        this.childClause = `${CHILD_TABLE}.${formatChildSuffix}`
        console.log(this.parentClause, "parent", this.childClause)
        this.knex = knex
    }
    // 
    innerJoin(...conditions) {
        console.log(this.parentClause, this.childClause)
        return connection.select(...conditions).from(this.PARENT_TABLE).innerJoin(this.CHILD_TABLE, this.parentClause, this.childClause).then((array) => {
            return array
        });
    }

}

let jq = new JoinQuery(connection, "problems", "tasks")
readQuery(jq.innerJoin(1, ["task"]))
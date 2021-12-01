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
} = require("../utils/queryTools")

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

function formatPlural(string) {
    if (string.endsWith("s")) {
        return string.slice(0, -1)
    }
    return string;
}
class JoinQuery {
    // parent, child 
    // users, problems
    // users.id
    // problems.user_id
    constructor(userId, PARENT_TABLE, CHILD_TABLE, knex) {
        this.userId = userId
        this.PARENT_TABLE = PARENT_TABLE
        this.CHILD_TABLE = CHILD_TABLE
        let formatChildSuffix = formatTableName(PARENT_TABLE)
        this.userId = userId;
        this.parentUserId = `${PARENT_TABLE}.user_id`
        this.parentClause = `${PARENT_TABLE}.id`
        this.childClause = `${CHILD_TABLE}.${formatChildSuffix}`
        console.log(this.parentClause, "parent", this.childClause)
        this.knex = knex
    }
    // 
    innerJoin(...conditions) {
        console.log(this.parentClause, this.childClause)
        return connection.select(...conditions).from(this.PARENT_TABLE).innerJoin(this.CHILD_TABLE, this.parentClause, this.childClause).where(this.parentUserId, 1).then((result) => {
            return result;
        })
    }


}

let jq = new JoinQuery(5, "problems", "tasks", connection)
readQuery(jq.innerJoin(["task"]))
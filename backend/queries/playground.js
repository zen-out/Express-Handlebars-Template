const {
    connection
} = require("../database/index")
const {
    tableValues,

} = require("./utils/queryTools")
const {
    formatParentChildNames
} = require("./utils/format")
const {
    default: knex
} = require("knex")

// [projects.id, features.project_id, features.id]
console.log(formatParentChildNames("projects", "features"))
let columnNames = tableValues["features"]
let keys = Object.keys(columnNames)
// console.log(keys)
// inner join gets the condition 
function getNumberOfChildren(parent, child) {
    let [
        parentId,
        childReferenceToParent,
        childId
    ] = formatParentChildNames(parent, child)
    let onlyGetFeaturesWithId192 = connection.select(parentId).count(childId).from(parent).leftOuterJoin(child, parentId, childReferenceToParent).groupBy(parentId)
    onlyGetFeaturesWithId192.then((result) => {
        console.log(result)
    })

    // return connection.select("features.user_id", 'project_id', 'title', 'keyInfo', 'tools', 'description', 'notes', 'structure', 'start', 'end', 'status', 'created').from("features").innerJoin("projects", "features.project_id", "projects.id").where("projects.id", 19).then((result) => {
    //     return result;
    // })
}

let onlyFeatures = connection.select("features.title", "features.notes", "features.structure", "features.structure").from("features").leftOuterJoin("projects", "features.project_id", "projects.id").where("projects.id", 19).andWhere("projects.user_id", 19).then((result) => {
    return result;
})
// getNumberOfChildren("projects", "features")

function projectsAndTasks() {
    return connection("problems").leftJoin("tasks", function(join) {
        join.on("problems.id", "=", "tasks.problem_id")
    }).select().orderBy("problems.created").limit(2).then((results) => {
        console.log(results)
    })
}
// projectsAndTasks()

async function mapThisShit() {
    let getThis = await connection("problems").innerJoin("tasks", "problems.id", "tasks.problem_id").select("problem", "task")
    return getThis.map((eachObject) => {
        console.log("hello")
        console.log(eachObject)
    })
}
// mapThisShit()


// [{"project": { features: [{}]}, 
// {"project", { features: [{}]}}]
function getColumns() {
    return connection("projects").columnInfo()
}
// getColumns().then((object) => {
//     console.log("columns")
//     console.log(object)
// })


// {
//     id: {
//         type: 'integer',
//         maxLength: null,
//         nullable: false,
//         defaultValue: "nextval('projects_id_seq'::regclass)"
//     },
//     user_id: {
//         type: 'integer',
//         maxLength: null,
//         nullable: true,
//         defaultValue: null
//     },....
// }
// const withUserId = function(queryBuilder, foreignKey) {
//     queryBuilder.leftJoin("users", foreignKey, "users.id").select("users.name")
// }



// connection.table("problems").select("problem").modify(withUserId, 1).then(function(object) {
//     console.log(object)
// })






async function mergeOnConflict() {
    let example = await knexInstance
        .table('users')
        .insert({
            id: 10,
            active: true
        })
        .onConflict('id')
        .merge({
            active: true
        })
        .debug(true);

}

// get specific problem id 
// connection.select("*").from("tasks").where("problem_id", 2).rightJoin("problems", function() {
//     this.on("tasks.problem_id", "=", "problems.id")
// }).then((result) => {
//     console.log(result)
// })

// [{
//     id: 2,
//     user_id: 2,
//     problem_id: 2,
//     project_id: 2,
//     feature_id: 2,
//     task: 'e-enable Gorgeous Upgradable context-sensitive infrastructure Distributed actuating contingency',
//     status: 'done',
//     done: true,
//     start: 2021 - 04 - 18 T03: 36: 44.000 Z,
//     end: 2021 - 11 - 27 T21: 27: 56.000 Z,
//     created: 2052 - 02 - 26 T23: 20: 03.000 Z,
//     problem: 'Right-sized uniform structure rich Steel',
//     whatshouldbe: 'grow Tasty Total bi-directional knowledge base',
//     whatactuallyis: 'drive Fresh',
//     hypothesis: 'synthesize Function-based zero tolerance approach',
//     plan: 'enable Multi-tiered local collaboration'
// }]


// connection.select("*").from("features").where("project_id", 19).rightJoin("projects", function() {
//     this.on("features.project_id", "=", "projects.id")
// }).then((result) => {
//     console.log(result)
// })

const subquery = connection("problems").where("status", "done")


const completedTasks = connection("tasks").where("done", "=", true)
// console.log(completedTasks)
// connection("tasks").where("id", "in", subquery).then((results) => {
//     console.log(results)
// })


// group by specific column value 
// function groupByProblems() {
//     return connection("problems").select("whatshouldbe").orderBy("problem", "desc").then((result) => {
//         console.log("hello")
//         console.log(result)
//     })
// }
// groupByProblems()

function joinThree() {
    return connection("tasks").select("task").where("tasks.user_id", 2).join("problems", "tasks.problem_id", "=", "problems.id").leftJoin("users", "users.id", "=", "problems.user_id").then((object) => {

        console.log(object)
        return object
    })
}
joinThree()

function rightJoinThree() {
    return connection("tasks").select("task").orderBy("done").where("tasks.user_id", 2).rightJoin("problems", "problems.id", "=", "tasks.problem_id").rightOuterJoin("users", "users.id", "=", "problems.user_id").then((object) => {
        console.log(object)
    })
}
rightJoinThree()

// get array 
function getProblems() {
    return connection("problems").pluck("whatshouldbe").orderBy("problem").from("problems").then((result) => {
        console.log(result)
    })
}
getProblems()


function onIn() {
    return connection("tasks").select("task").join("problems", function() {
        this.on("problems.id", "=", "tasks.problem_id").onIn("problems.id", [2, 3])
    }).then((object) => {
        console.log(object)
        return object
    })
}
onIn()


// connection.schema.withSchema("public").createTable("checks", function(table) {
//     table.increments()
// })

// connection.schema.createView("dashboard_view", function(view) {
//     view.columns(["task", "problem", "user_id"])
//     view.as(connection("problems").select("status").where("status", "=", "done"))
// })
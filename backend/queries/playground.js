const knex = require("knex")
const connection = knex({
    client: "postgresql",
    connection: {
        database: "optee",
        user: "postgres",
        password: "postgres",
    }
})
const {
    tableValues,

} = require("./utils/queryTools")
const {
    formatParentChildNames
} = require("./utils/format")



let GRANDPARENT = "user"
let HOURGLASS = "hourglass"
let PARENT = "problem"
let CHILD = "task"

// user.id
let grandParentId = `${GRANDPARENT}.id`
let hourglassId = "hourglass.id"

let parentHourglass = `${PARENT}.hourglass_id`
let childHourglass = `${CHILD}.hourglass_id`

// hourglass.id
let parentId = `${PARENT}.id`
// problem.id
let childId = `${CHILD}.id`



// problem.hourglass_id
let childsParentId = `${CHILD}.${PARENT}_id`
// hourglass.user_id
let parentToGrandparent = `${PARENT}.${GRANDPARENT}_id`



/**
 * getNumberOfChildren
 * @date 2021-12-02
 * @returns {array} of objects, id and count of child
 */
function getNumberOfChildren() {
    return connection.select(parentId).count(childId).from(PARENT).leftOuterJoin(CHILD, parentId, childsParentId).groupBy(parentId)
}
// getNumberOfChildren().then((array) => {
//     console.log(array)
// })

const alwaysAddUser = function(qB, foreignKey) {
    qB.leftJoin(GRANDPARENT, foreignKey, grandParentId).select("user.id, user.name")
}

function getColumnInfo(table) {
    return connection(table).columnInfo().then((col) => {
        return col
    })
}

/**
 * getParentColumns
 * @date 2021-12-02
 * @returns {array} [ 'id', 'user_id', 'email', 'public', 'status', 'importance', 'difficulty', 'start', 'edit', 'end', 'created' ]
 */
function getParentColumns() {
    return getColumnInfo(PARENT).then((array) => {
        let keys = Object.keys(array)
        return keys;
    })
}
// 
/**
 * getChildColumns()
 * @returns {array} [ 'id', 'user_id', 'hourglass_id', 'problem', 'whatshouldbe', 'whatactuallyis', 'hypothesis', 'plan', 'created' ]
 */
function getChildColumns() {
    return getColumnInfo(CHILD).then((array) => {
        let keys = Object.keys(array)
        return keys;
    })
}
let parentCols = getParentColumns()
let childCols = getChildColumns()
// get all problems if hourglass is difficult
/**
 * getChildByParentCondition("parent.condition", ["value"], ["child.col", "child.col"])
 getChildByParentCondition("hourglass.difficulty", ["low"], ["problem.problem", "problem.whatshouldbe"])
 * @date 2021-12-02
 * @returns {any}
 */
function getChildByParentCondition(condition, value, childCols = "*") {
    return connection(CHILD).select(childCols).join(PARENT, function() {
        return this.on(childsParentId, "=", parentId).onIn(condition, value)
    })
}

// getChildByParentCondition("hourglass.difficulty", ["low"], ["problem.problem", "problem.whatshouldbe"]).then((array) => {
//     console.log(array)
// })



// try to see if you can get users where hourglass difficulty is medium

// try to see if you can get problems if tag is postgres


/**
 * getParentByChildCondition(condition, value, childCols = "*")
 getParentByChildCondition("tag_snippet.tag", "postgres", ["problem.problem", "problem.whatshouldbe", "problem.plan"]).then((object) => {
     console.log(object)
 })
 * @date 2021-12-02
 * @returns {array} of objects specified in childcols
 */
function getParentByChildCondition(condition, value, childCols = "*") {
    return connection(PARENT).select(childCols).join(CHILD, function() {
        return this.on(childsParentId, "=", parentId).onIn(condition, value)
    })

}
// getParentByChildCondition("tag_snippet.tag", "postgres", ["problem.problem", "problem.whatshouldbe", "problem.plan"]).then((object) => {
//     console.log(object)
// })

// get [array of children], nested into parent, where [parent condition]
// get tasks where current problems are not done 
// get tags where projects are not yet complete
async function getHourClassCondition() {
    let hourglassCondition = await connection(HOURGLASS).pluck("status")
    console.log(hourglassCondition)
}


/**
 * orderAndGroupHourglass(order, group, values)
 (difficulty, importance, ["difficulty", "importance"])
 * @date 2021-12-02
 * @param {string} order difficulty
 * @param {string} partition importance
 * @param {any} values="*"
 * @returns {any}
 { difficulty: 1, importance: 1, rank: '1' }, 
 { difficulty: 1, importance: 1, rank: '1' }, 
 { difficulty: 2, importance: 1, rank: '2' }, 
 { difficulty: 2, importance: 1, rank: '2' }, 
 { difficulty: 3, importance: 1, rank: '3' }, 
 { difficulty: 3, importance: 1, rank: '3' }, 
 { difficulty: 1, importance: 2, rank: '1' },
 */
// e.g., lets say that we want to get the most importance tasks, ranked by difficulty
// or lets say the most important tasks, ranked by due date 
// this is quite fun
function orderAndGroupHourglass(order, group, values = "*") {
    return connection("hourglass").select(values).denseRank("rank", function() {
        // so it's like ordering the data by status
        // by each group of status will have be grouped by importance
        this.orderBy(order).partitionBy(group)
    })
}
// orderAndGroupHourglass("difficulty", "importance", ["difficulty", "importance"]).then((array) => {
//     return array
// })

function grabByDate() {
    return connection("hourglass").select("*").rowNumber("row", ["importance", "difficulty"], ["end"])
}

grabByDate().then((array) => {
    console.log(array)
})



// TO DO for the basic - if there is a merge conflict, merge just the things you want (by grabbing the column names lolol removing created at and )
// function updateButIfDoesntExist() {
// knex('tableName')
//     .insert({
//         email: "ignore@example.com",
//         name: "John Doe",
//         created_at: timestamp,
//         updated_at: timestamp,
//     })
//     .onConflict('email')
//     .merge({
//         name: "John Doe",
//         updated_at: timestamp,
//     })
//     .where('updated_at', '<', timestamp)
// }


async function getTasksAndProblemsWithHourglass() {
    let ordered = await orderAndGroupHourglass("difficulty",
        "importance ", [
            "id", "difficulty", "importance"
        ]).then((array) => {
        return array
    })
    let finalArr = []
    for (let i = 0; i < ordered.length; i++) {
        let eachProblem = await connection("problem").select("problem.id as og_id", "problem").join("hourglass", function() {
            this.on("hourglass.id", "=", "problem.hourglass_id")
        }).select(["task", "task.id as taskId",
            "task.problem_id"
        ]).join("task", function() {
            this.on("problem.id", "=", "task.problem_id")
        }).rowNumber("row", ["problem.id"])
        finalArr.push(eachProblem)

    }
    return finalArr

}

getTasksAndProblemsWithHourglass().then((object) => {
    console.log(object)
})
// [ { status: '0', importance: '1', rank: '1' }, { status: '1', importance: '1', rank: '2' }, { status: 'done', importance: '1', rank: '3' }, { status: 'done', importance: '1', rank: '3' }, { status: 'to do', importance: '1', rank: '4' }, { status: '2', importance: '2', rank: '1' }, { status: '2', importance: '2', rank: '1' }, { status: '2', importance: '2', rank: '1' }, 


// return connection.select("features.user_id", 'project_id', 'title', 'keyInfo', 'tools', 'description', 'notes', 'structure', 'start', 'end', 'status', 'created').from("features").innerJoin("projects", "features.project_id", "projects.id").where("projects.id", 19).then((result) => {
//     return result;
// })

// let onlyFeatures = connection.select("features.title", "features.notes", "features.structure", "features.structure").from("features").leftOuterJoin("projects", "features.project_id", "projects.id").where("projects.id", 19).andWhere("projects.user_id", 19).then((result) => {
//     return result;
// })
// // getNumberOfChildren("projects", "features")

// function projectsAndTasks() {
//     return connection("problems").leftJoin("tasks", function(join) {
//         join.on("problems.id", "=", "tasks.problem_id")
//     }).select().orderBy("problems.created").limit(2).then((results) => {
//         console.log(results)
//     })
// }
// // projectsAndTasks()

// async function mapThisShit() {
//     let getThis = await connection("problems").innerJoin("tasks", "problems.id", "tasks.problem_id").select("problem", "task")
//     return getThis.map((eachObject) => {
//         console.log("hello")
//         console.log(eachObject)
//     })
// }
// // mapThisShit()


// // [{"project": { features: [{}]}, 
// // {"project", { features: [{}]}}]




// // {
// //     id: {
// //         type: 'integer',
// //         maxLength: null,
// //         nullable: false,
// //         defaultValue: "nextval('projects_id_seq'::regclass)"
// //     },
// //     user_id: {
// //         type: 'integer',
// //         maxLength: null,
// //         nullable: true,
// //         defaultValue: null
// //     },....
// // }
// // const withUserId = function(queryBuilder, foreignKey) {
// //     queryBuilder.leftJoin("users", foreignKey, "users.id").select("users.name")
// // }



// // connection.table("problems").select("problem").modify(withUserId, 1).then(function(object) {
// //     console.log(object)
// // })






// async function mergeOnConflict() {
//     let example = await knexInstance
//         .table('users')
//         .insert({
//             id: 10,
//             active: true
//         })
//         .onConflict('id')
//         .merge({
//             active: true
//         })
//         .debug(true);

// }

// // get specific problem id 
// // connection.select("*").from("tasks").where("problem_id", 2).rightJoin("problems", function() {
// //     this.on("tasks.problem_id", "=", "problems.id")
// // }).then((result) => {
// //     console.log(result)
// // })

// // [{
// //     id: 2,
// //     user_id: 2,
// //     problem_id: 2,
// //     project_id: 2,
// //     feature_id: 2,
// //     task: 'e-enable Gorgeous Upgradable context-sensitive infrastructure Distributed actuating contingency',
// //     status: 'done',
// //     done: true,
// //     start: 2021 - 04 - 18 T03: 36: 44.000 Z,
// //     end: 2021 - 11 - 27 T21: 27: 56.000 Z,
// //     created: 2052 - 02 - 26 T23: 20: 03.000 Z,
// //     problem: 'Right-sized uniform structure rich Steel',
// //     whatshouldbe: 'grow Tasty Total bi-directional knowledge base',
// //     whatactuallyis: 'drive Fresh',
// //     hypothesis: 'synthesize Function-based zero tolerance approach',
// //     plan: 'enable Multi-tiered local collaboration'
// // }]


// // connection.select("*").from("features").where("project_id", 19).rightJoin("projects", function() {
// //     this.on("features.project_id", "=", "projects.id")
// // }).then((result) => {
// //     console.log(result)
// // })

// const subquery = connection("problems").where("status", "done")


// const completedTasks = connection("tasks").where("done", "=", true)
// // console.log(completedTasks)
// // connection("tasks").where("id", "in", subquery).then((results) => {
// //     console.log(results)
// // })


// // group by specific column value 
// // function groupByProblems() {
// //     return connection("problems").select("whatshouldbe").orderBy("problem", "desc").then((result) => {
// //         console.log("hello")
// //         console.log(result)
// //     })
// // }
// // groupByProblems()

// function joinThree() {
//     return connection("tasks").select("task").where("tasks.user_id", 2).join("problems", "tasks.problem_id", "=", "problems.id").leftJoin("users", "users.id", "=", "problems.user_id").then((object) => {

//         console.log(object)
//         return object
//     })
// }
// joinThree()

// function rightJoinThree() {
//     return connection("tasks").select("task").orderBy("done").where("tasks.user_id", 2).rightJoin("problems", "problems.id", "=", "tasks.problem_id").rightOuterJoin("users", "users.id", "=", "problems.user_id").then((object) => {
//         console.log(object)
//     })
// }
// rightJoinThree()

// // get array 
// function getProblems() {
//     return connection("problems").pluck("whatshouldbe").orderBy("problem").from("problems").then((result) => {
//         console.log(result)
//     })
// }
// getProblems()


// function onIn() {
//     return connection("tasks").select("task").join("problems", function() {
//         this.on("problems.id", "=", "tasks.problem_id").onIn("problems.id", [2, 3])
//     }).then((object) => {
//         console.log(object)
//         return object
//     })
// }
// onIn()


// // connection.schema.withSchema("public").createTable("checks", function(table) {
// //     table.increments()
// // })

// // connection.schema.createView("dashboard_view", function(view) {
// //     view.columns(["task", "problem", "user_id"])
// //     view.as(connection("problems").select("status").where("status", "=", "done"))
// // })
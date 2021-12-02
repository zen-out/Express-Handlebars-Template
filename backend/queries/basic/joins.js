const {
    connection
} = require("../../database/index")
const {
    formatTableName,
    formatParentChildNames
} = require("../utils/format")


// Use Case One 

let random = Math.floor(Math.random() * 1000000);
// create new user, and have no initial problems
let createNewUser = users.post({
    name: "lesley",
    email: `Hattie.${random}@example.org`,
    hash: "whatsup"
})
// should return 0 

// examples of parent and children
// users and problems
// problems and tasks
// tasks and timers
// users and tasks
// tasks and tags
// it can cascade down, as long as the child has the parent id in its database
// be able to get number 
// be able to get links
// concerns - is the user id always a given? 
// make sure that you require user id for every table insertion 
// it should always be in local storage anyway but you want to double check 
// so every join clause, subsequently, will be a three table join 
// it could also just be easier to use lodash lol 
// also lol is this just easier to change in the frontend? 
// but it would be great if you could just do this because it'd just make it so much easier to fetch things later on. 
// and how do i make this fool proof? 
class JoinQuery {
    constructor(userId, PARENT_TABLE, CHILD_TABLE, knex) {
        this.userId = userId
        let [
            parentId,
            childReferenceToParent,
            childId
        ] = formatParentChildNames(parent, child)
        this.PARENT_TABLE = PARENT_TABLE
        this.CHILD_TABLE = CHILD_TABLE
        let formatChildSuffix = formatTableName(PARENT_TABLE)
        this.userId = userId;
        this.parentUserId = `${PARENT_TABLE}.user_id`
        this.parentClause = `${PARENT_TABLE}.id`
        this.childClause = `${CHILD_TABLE}.${formatChildSuffix}`
        this.knex = knex
    }
    // deconstruct the parent and children values right away so that you can just simply change the database anytime 
    async init() {
        // get all column values for parent and child
        // will be using the array to fetch required data 
        // call function

    }
    // get everything for child and parent 
    // get all 
    innerJoin(id, ...conditions) {
        return connection.select(...conditions).from(this.CHILD_TABLE).innerJoin(this.PARENT_TABLE, this.parentClause, this.childClause).where(this.parentUserId, id).then((result) => {
            return result;
        })
    }
    // get all tasks if problem is done
    getNumberOfChildrenByParentCondition(parentId, parentCondition) {


    }
    // get cheatsheets where projects are not yet complete
    // get problems where tasks 
    getNumberOfParentsByChildCondition(childId, childCondition) {

    }
    // get all tasks if problem is done
    // get all 
    conditionForParent(parentId, parentCondition) {
        // select all of parent id 
        // count nu

    }
    // get all tasks for problem id
    // get all notifications for user
    // get all timers for user 
    getChildren(parentId) {

    }
    // get problems for this tags
    // get tasks for this time 
    // 
    getParents(childId) {

    }
    // get projects where people are not notified 
    // get tasks where projects are not yet complete
    getChildrenGroupByParentCondition(parentId, parentCondition) {

    }
    // gets tasks if notifications are not yet done 
    getParentGroupByChildCondition() {

    }



}
// get all completed tasks for specific  
// get tasks for all projects
// get notificaions for all tasks
// get notifications for all users 

module.exports = {
    JoinQuery
}
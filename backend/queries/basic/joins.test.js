const {
    connection
} = require("../../database/index")
const {
    Query
} = require("./basic")
const {
    JoinQuery
} = require("./joins")
const {
    formatTableName,
    formatParentChildNames
} = require("../utils/format")
const {
    readQuery
} = require("../utils/readQuery")
test("remove plural should format name", () => {
    let final = formatTableName("problems")
    expect(final).toBe("problem_id");
})
test("given users, problems, should return users.id, problems.user_id", () => {
    let res = formatParentChildNames("users", "problems")
    expect(res).toStrictEqual(["users.id", "problems.user_id"]);

})
describe("join queries", () => {
    it("should be able to run a inner join query, accepting array as param", () => {
        let test = new JoinQuery(connect, "problems", "tasks")
        let getQuery = test.innerJoin(1, ["task"])
    })
    // what would be bad if broken?
    it("deleting parent means deleting the child", () => {

    })
    it("editing parent means editing the child", () => {})

    // e.g., if problem is solved, does that mean the task is completed? 
    //yah. 
    it("marking the parent as done means the child is done", () => {})

    // will return 0 if child doesn't have the condition
    // e.g., new users won't have any problems
    it("inner join condition returns 0 if baby table doesn't have data", () => {

    })

    // e.g., number of completed tasks for problem
    it("returns accurate count of parent", () => {})


    // e.g., rendering feature accordian 
    it("formats the parent and child accordingly", () => {

    })

    // getting latest features, but only with child inside
    it("filter function only applies to parent, child will be grouped inside", () => {

    })

    // getting all none completed tasks
    it("filter function only applies to child", () => {

    })
})
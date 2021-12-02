const {
    connection
} = require("../../database/index")
const {
    Query
} = require("./basic")
let objectToAdd = {
    user_id: 19,
    project_id: 19,
    title: 'expedite Realigned human-resource projection',
    status: 'doing',
    keyInfo: 'Balanced disintermediate toolset impactful Soft',
    tools: 'Table Cheese Fresh',
    description: 'De-engineered cohesive flexibility frictionless Fresh',
    notes: 'generate Sleek Grass-roots context-sensitive product',
    structure: 'e-enable Frozen'
}
let toEdit = {
    id: 19,
    user_id: 19,
    project_id: 19,
    title: 'expedite Realigned human-resource projection',
    status: 'doing',
}
// testQuery(deleteQ)
describe("basic query tool", () => {
    problem = new Query("problem", connection)
    beforeAll(() => {
        problem = new Query("problem", connection)
    })
    it("should get by importance", () => {
        return problem.getByImportance("problem", ["problem.id", "hourglass.importance", "hourglass.difficulty"]).then((object) => {
            expect(object[0]["importance"]).toBe(1)
            expect(object[0]["difficulty"]).toBe(1)
            expect(object[object.length - 1]["importance"]).toBe(3)
            expect(object[object.length - 1]["difficulty"]).toBe(3)
        })
    })
    it("should get by importance based on two tables", () => {
        return problem.getByImportanceJoin("problem", "task", ["task.name", "task.id as task_id", "task.problem_id as task_problem_id", "problem.id as problem_id", "problem.problem", "hourglass.importance", "hourglass.difficulty"]).then((array) => {

            console.log(array) // expect(array[0]["importance"]).toBe(1)
            // expect(array[0]["difficulty"]).toBe(1)
            // expect(array[array.length - 1]["importance"]).toBe(3)
            // expect(array[array.length - 1]["difficulty"]).toBe(3)

        })
    })
    // it("should add, returning object", () => {
    //     return problem.post(objectToAdd).then((object) => {
    //         expect(object.keyInfo).toEqual(objectToAdd.keyInfo)
    //         expect(object.id).toBeGreaterThan(1)
    //     })
    // })
    // it("should edit, returning object", () => {
    //     return problem.post(toEdit).then((object) => {
    //         expect(object.id).toEqual(toEdit.id)
    //     })
    // })
    // it("should delete, returning id", () => {
    //     return problem.delete(19).then((number) => {
    //         expect(number).toEqual(19)
    //     })
    // })
    // it("should return search query", () => {
    //     return problem.search("title", "expedite").then((array) => {
    //         // console.l/og(array)
    //         let title = array[0]["title"]
    //         console.log("TITLE", title)

    //         expect(title).toMatch(/expedite/)
    //     })
    // })
    // it("should return based on specific condition", () => {
    //     return problem.getByCondition("status", "doing").then((conditional) => {
    //         expect(conditional[0]["status"]).toBe("doing")
    //     })

    // })


})
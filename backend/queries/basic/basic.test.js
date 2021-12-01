const {
    connection
} = require("../../database/index")
const {
    Query
} = require("./basic")
var mockDb = require('mock-knex');
var connection = knex({
    client: 'postgresql',
    connection: {
        database: "optee",
        user: "postgres",
        password: "postgres",
    },
    migrations: {
        directory: "../../database/migrations",
    },
});

mockDb.mock(db);

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
    features = new Query("features", connection)
    beforeAll(() => {
        features = new Query("features", connection)
    })
    it("should add, returning object", () => {
        return features.post(objectToAdd).then((object) => {
            expect(object.keyInfo).toEqual(objectToAdd.keyInfo)
            expect(object.id).toBeGreaterThan(1)
        })
    })
    it("should edit, returning object", () => {
        return features.post(toEdit).then((object) => {
            expect(object.id).toEqual(toEdit.id)
        })
    })
    it("should delete, returning id", () => {
        return features.delete(19).then((number) => {
            expect(number).toEqual(19)
        })
    })
    it("should return search query", () => {
        return features.search("title", "expedite").then((array) => {
            // console.l/og(array)
            let title = array[0]["title"]
            console.log("TITLE", title)

            expect(title).toMatch(/expedite/)
        })
    })
    it("should return based on specific condition", () => {
        return features.getByCondition("status", "doing").then((conditional) => {
            expect(conditional[0]["status"]).toBe("doing")
        })

    })


})
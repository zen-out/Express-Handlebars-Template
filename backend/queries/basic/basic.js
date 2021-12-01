const {
    connection
} = require("../../database/index")
const {
    readQuery
} = require('../utils/queryTools')
class Query {
    constructor(TABLE_NAME, knex) {
        this.TABLE_NAME = TABLE_NAME
        this.knex = knex;
    }
    /**
     * get by most recent (created)
     * @date 2021-12-01
     * @param {id} id
     * @returns {array}
     */
    getByMostRecent() {
        return this.knex(this.TABLE_NAME).select("*").orderBy("created", "desc", "first").then((array) => {
                return array
            })
            .catch((error) => {
                console.log(error)
            })
    }
    /**
     * search(fakeProblemTitle, fake)
     * @param {any} search
     * @param {any} keyword
     * @returns {any}
     */
    search(search, keyword) {
        return this.knex(this.TABLE_NAME).select("*").where(search, "like", `%${keyword}%`).then((result) => {
            // console.log("any search results", result)
            return result;
        })
    }
    /**
     * getDescData("title")
     * @date 2021-12-01
     * @param {condition} condition
     * @returns {array}
     */
    getDescData(condition) {
        return this.knex(this.TABLE_NAME)
            .select("*")
            .orderBy(condition, "desc", "first").then((result) => {
                return result
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
    /**
     * getAscData("title")
     * @date 2021-12-01
     * @param {string} condition
     * @returns {array}
     */
    getAscData(condition) {
        return this.knex(this.TABLE_NAME)
            .select("*")
            .orderBy(condition, "asc", "first").then((result) => {
                return result
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
    /**
     * getById
     * @date 2021-12-01
     * @param {integer} id
     * @returns {object} of one object
     */
    getById(id) {
        return this.knex(this.TABLE_NAME)
            .select("*")
            .where({
                id: id
            }).then((eachRow) => {
                return eachRow[0]
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
    /**
     * getAll()
     * @returns {array}
     */
    getAll() {
        return this.knex(this.TABLE_NAME)
            .select("*")
            .then((eachRow) => {
                return eachRow;
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
    /**
     * getByCondition(col, val)
     e.g., getByCondition("status","doing")
     * @param {any} column e.g., name
     * @param {any} value e.g., lesley
     * @returns {array}
     */
    getByCondition(column, value) {
        return this.knex(this.TABLE_NAME)
            .select("*")
            .where(
                column, value
            )
            .then((eachRow) => {
                return eachRow;
            })
            .catch((error) => {
                console.log("error", error);
            });
    }


    /**
     * exists("notes", "hello")
     * @date 2021-12-01
     * @param {any} column
     * @param {any} value
     * @returns {boolean}
     */
    exists(column, value) {
        return this.knex(this.TABLE_NAME).count("id as n").where(column, value).then(count => {
            let num = parseInt(count[0].n)
            return num > 0
        })
    }


    safePost(object) {
        return this.knex(this.TABLE_NAME)
            .returning("id")
            .insert(object)
            .then((id) => {
                return this.getById(id[0])
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
    /**
     * post
     * @date 2021-12-01
     * checks if id exists- if it does, it will update. else, it will post. s
     * @param {object} object
     * @returns {object} object (will post if yes)
     */
    post(object) {
        if (object.id) {
            return this.exists("id", object.id).then(exists => {
                if (exists) {
                    return this.safeEdit(object.id, object)
                }
            })
        }
        return this.safePost(object)

    }

    /**
     * safeEdit (called by post) 
     * @param {integer} id
     * @param {object} object
     * @returns {object} edited object
     */
    safeEdit(id, object) {
        return this.knex(this.TABLE_NAME)
            .update(object)
            .where({
                id: id
            })
            .then(() => {
                return this.getById(id).then((object) => {
                    return object;
                });
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
    /**
     * Delete
     * @param {integer} id
     * @returns {integer} id
     */
    delete(id) {
        return this.knex(this.TABLE_NAME)
            .where({
                id: id
            })
            .del()
            .then(() => {
                return id
            })
            .catch((error) => {
                return id
            });
    }
}

module.exports = {
    Query
};
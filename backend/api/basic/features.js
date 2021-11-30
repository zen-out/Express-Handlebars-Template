const TABLE_NAME = "things";
// this should correspond to redux actions
const className = `${TABLE_NAME}Queries`

class className {
    constructor(knex) {
        this.knex = knex;
    }
    /**
     * get by most recent (created)
     * @date 2021-12-01
     * @param {id} id
     * @returns {array}
     */
    getByMostRecent(id) {
        return this.knex(TABLE_NAME).select("*").where(id, id).orderBy("created", "desc").then((array) => {
                return array
            })
            .catch((error) => {
                console.log(error)
            })
    }
    getDescData(id, condition) {
        return this.knex(TABLE_NAME)
            .select("*")
            .where({
                id: id
            })
            .then((eachRow) => {
                return eachRow;
            })
            .orderBy(condition, "desc")
            .catch((error) => {
                console.log("error", error);
            });
    }
    /**
     * getAscData
     * @date 2021-12-01
     * @param {any} id
     * @param {any} condition
     * @returns {any}
     */
    getAscData(id, condition) {
        return this.knex(TABLE_NAME)
            .select("*")
            .where({
                id: id
            })
            .then((eachRow) => {
                return eachRow;
            })
            .orderBy(condition, "asc")
            .catch((error) => {
                console.log("error", error);
            });
    }
    /**
     * getById
     * @date 2021-12-01
     * @param {integer} id
     * @returns {array}
     */
    getById(id) {
        return this.knex(TABLE_NAME)
            .select("*")
            .where({
                id: id
            }).then((eachRow) => {
                console.log(eachRow);
                return eachRow;
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
    /**
     * getAll
     * @returns {array}
     */
    getAll() {
        return this.knex(TABLE_NAME)
            .select("*")
            .then((eachRow) => {
                return eachRow;
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
    /**
     * get one by condition
     * @param {any} column e.g., name
     * @param {any} value e.g., lesley
     * @returns {array}
     */
    getByCondition(column, value) {
        return this.knex(TABLE_NAME)
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
    exists(column, value) {
        return this.knex(TABLE_NAME).count("id as n").where(column, value).then(count => {
            return count[0].n < 0
        })
    }
    /**
     * post
     * @date 2021-12-01
     * @param {object} object
     * @returns {object} object
     */
    post(object) {
        return exists("id", object.id).then(exists => {
            if (exists) {
                return Promise.reject(new Error("object exists"))
            }
        })
        else {
            return this.knex(TABLE_NAME)
                .returning("id")
                .insert(object)
                .then((id) => {
                    console.log(id);
                    object.id = id;
                    console.log(object)
                    return object;
                })
                .catch((error) => {
                    console.log("error", error);
                });
        }

    }
    /**
     * edit 
     * @param {integer} id
     * @param {object} object
     * @returns {object} edited object
     */
    edit(id, object) {
        return this.knex(TABLE_NAME)
            .where({
                id: id
            })
            .update(object)
            .then(() => {
                this.get(id).then((object) => {
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
        return this.knex(TABLE_NAME)
            .where({
                id: id
            })
            .del()
            .then(() => {
                return id
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
}

module.exports = {
    className
};
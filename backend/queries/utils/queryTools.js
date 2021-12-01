function readQuery(q) {
    return q.then((result) => {
        console.log(result)
    })
}

function testQuery(q) {
    return q.then((result) => {
        return result
    })
}
let random = Math.floor(Math.random() * 1000000);
/**
 * getFormattedColumns("projects")
 * @date 2021-12-01
 * @param {string} TABLE_NAME
 * @returns {array} of strings with each column
 */
async function getFormattedColumns(TABLE_NAME) {
    let columns = await connection(TABLE_NAME).columnInfo()
    let keys = Object.keys(columns)
    let arr = []
    let formatted = keys.forEach((key) => {
        let format = `${TABLE_NAME}.${key}`
        console.log(format)

        arr.push(format)
    })
    return arr;
}

module.exports = {
    getFormattedColumns,
    readQuery,
    testQuery,
    random
}
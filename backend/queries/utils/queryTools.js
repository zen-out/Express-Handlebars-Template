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
module.exports = {
    readQuery,
    testQuery,
    random
}
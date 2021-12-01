function readQuery(q) {
    return q.then((result) => {
        console.log(result)
    })
}
module.exports = {
    readQuery
}
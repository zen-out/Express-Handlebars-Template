function formatTableName(string) {
    if (string.endsWith("s")) {
        let final = string.slice(0, -1)
        return `${final}_id`
    } else {
        return `${string_id}`;
    }
}

function formatParentChildNames(parent, child) {
    let formatChildSuffix = formatTableName(parent)
    let formatParent = `${parent}.id`
    let formatChild = `${child}.${formatChildSuffix}`
    let formatChildId = `${child}.id`
    return [formatParent, formatChild, formatChildId]
}


module.exports = {
    formatTableName,
    formatParentChildNames
}
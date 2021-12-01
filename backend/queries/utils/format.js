function formatTableName(string) {
    if (string.endsWith("s")) {
        let final = string.slice(0, -1)

        return `${final}_id`
    }
    return `${string_id}`;
}

function formatParentChildNames(parent, child) {
    let formatParent = `${parent}.id`
    let formatChildSuffix = formatTableName(parent)
    let formatChild = `${child}.${formatChildSuffix}`

    return [formatParent, formatChild]
}


module.exports = {
    formatTableName,
    formatParentChildNames
}
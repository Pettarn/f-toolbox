function deepcopy(obj) {
    let result = {}
    for (let item in obj) {
        if (obj[item] instanceof Array) {
            result[item] = [].slice.call(obj[item])
        } else if (typeof obj[item] === 'function') {
            result[item] = obj[item].bind(result)
        } else if (typeof obj[item] === 'object') {
            result[item] = deepcopy(obj[item])
        } else {
            result[item] = obj[item]
        }
    }
    return result
}

export default deepcopy
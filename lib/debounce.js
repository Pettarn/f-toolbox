function debounce (__setting) {
    let timer = null
    return function () {
        let argList = [].slice.call(arguments)
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            __setting.func.apply(__setting.context, argList)
        }, __setting.timeout)
    }
}

export default debounce
function throttle (__setting) {
    let flag = 1
    return function () {
        let argList = [].slice.call(arguments)
        if (flag) {
            flag = 0
            setTimeout(() => {
                __setting.func.apply(__setting.context, argList)
            }, __setting.timeout)
        }
    }
}

export default throttle
function lazyLoad (__setting) {

    let imgList = document.querySelectorAll("img[data-origin]")
    
    // 节流函数
    function throttle(func, timeout) {
        let flag = 1
        return function () {
            if (flag) {
                flag = 0
                setTimeout(() => {
                    func()
                    flag = 1
                }, timeout)
            }
        }
    }
    
    let checkInView = () => {
        for (let i = 0; i < imgList.length; i++) {
            let elem = imgList[i]
            let Y = elem.offsetTop
            let limit = document.documentElement.scrollTop + document.documentElement.clientHeight
            let url = elem.getAttribute('data-origin')
            if (Y < limit) {
                elem.src = url
            }
        }
    }
    
    checkInView = throttle(checkInView, __setting.timeout)
    
    window.addEventListener('scroll', function () {
        lazyLoad()
    })

}

export default lazyLoad

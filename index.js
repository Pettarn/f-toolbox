import lazyload from './lib/lazyload'
import throttle from './lib/throttle'
import deepcopy from './lib/deepcopy'
import debounce from './lib/debounce'

function f () {}

f.lazyload = lazyload
f.throttle = throttle
f.debounce = debounce
f.deepcopy = deepcopy

export default f
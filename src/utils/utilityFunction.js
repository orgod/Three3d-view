
/**
 * 节流原理：在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
export function throttle(func, wait = 500, immediate = false) {
	let timer; let
		flag
	if (immediate) {
		if (!flag) {
			flag = true
			// 如果是立即执行，则在wait毫秒内开始时执行
			typeof func === 'function' && func()
			timer = setTimeout(() => {
				flag = false
			}, wait)
		}
	} else if (!flag) {
		flag = true
		// 如果是非立即执行，则在wait毫秒内的结束处执行
		timer = setTimeout(() => {
			flag = false
			typeof func === 'function' && func()
		}, wait)
	}
}



/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */

export function debounce(func, wait = 500, immediate = false) {
	let timeout = null
	// 清除定时器
	if (timeout !== null) clearTimeout(timeout)
	// 立即执行，此类情况一般用不到
	if (immediate) {
		const callNow = !timeout
		timeout = setTimeout(() => {
			timeout = null
		}, wait)
		if (callNow) typeof func === 'function' && func()
	} else {
		// 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
		timeout = setTimeout(() => {
			typeof func === 'function' && func()
		}, wait)
	}
}
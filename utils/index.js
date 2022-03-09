export function setLocal (key, value) {
	// #ifdef H5 
	sessionStorage.setItem(key, value)
	// #endif
	//#ifdef MP-WEIXIN
	uni.setStorageSync(key, value)
	// uni.setStorage({
	// 	key: 'user',
	// 	value: userInfo
	// })
	//#endif
}

export function getLocal (key) {
	let value = null
	// #ifdef H5 
	value = sessionStorage.getItem(key)
	// #endif
	//#ifdef MP-WEIXIN
	value = uni.getStorageSync(key)
	// uni.setStorage({
	// 	key: 'user',
	// 	value: userInfo
	// })
	//#endif
	
	return value
}


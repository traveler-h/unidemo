import {
	createStore
} from 'vuex'

const store = new createStore({
	state: {
		userInfo: {
			avatarUrl: "",
			city: "",
			country: "",
			gender: "",
			language: "",
			nickName: "",
			province: ""
		}
	},
	getters: {},
	actions: {},
	mutations: {
		setUserInfo(state, payload) {
			state.userInfo = payload
			return state
		},
		getUserInfo(state) {
			return state.userInfo
		}
	}
})

export default store

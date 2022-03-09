<script>
	import {useStore} from 'vuex'
	import {getLocal} from'./utils/index.js'
	export default {
		globalData: {
			text: '全局变量'
		},
		onLaunch: function() {
			const store = useStore()
			console.log('App Launch')
			if(getLocal('user')) {
				store.commit('setUserInfo', getLocal('user'))
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.uni-tabbar-bottom .uni-tabbar {
		height: 60px;
	}
</style>

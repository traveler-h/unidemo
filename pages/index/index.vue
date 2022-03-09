<template>
	<view class="start">
		<image class="bg-image" mode="aspectFill" src="../../static/imgs/index.jpg"></image>
		<view class="user-info" v-if="hasUserProfile">
			<view class="user-avatar row-flex">
				<image mode="aspectFill" :src="userInfo.avatarUrl"></image>
			</view>
			<text class="user-name">{{userInfo.nickName}}</text>
			<button class="primary-btn" @tap="goHome">进入应用</button>
		</view>
		<view class="login" v-else>
			<button class="primary-btn" @tap="getUserProfile"> 获取头像昵称 </button>
		</view>

	</view>
</template>

<script>
	import {
		useStore
	} from 'vuex'
	import {
		setLocal,
		getLocal
	} from '../../utils/index.js'
	export default {
		data() {
			return {
				canIUseGetUserProfile: false,
				hasUserProfile: false,
				userInfo: {},
			};
		},
		onLoad() {
			if (uni.getUserProfile) {
				this.canIUseGetUserProfile = true
			}
			const store = useStore()
			if (getLocal('user')) {
				store.commit('setUserInfo', getLocal('user'))
				this.userInfo = getLocal('user')
				this.hasUserProfile = true
				setLocal('hasUserProfile', this.hasUserProfile)
			} else {
				this.userInfo = this.$store.state.userInfo
			}
			console.log(this.userInfo)
		},
		methods: {
			getUserProfile(e) {
				if (this.canIUseGetUserProfile) {
					uni.getUserProfile({
						desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
						success: (res) => {
							console.log(res)
							this.getUserInfo({
								detail: res
							})
						}
					})
				}
			},
			getUserInfo(e) {
				console.log(e)
				this.userInfo = e.detail.userInfo
				this.$store.commit('setUserInfo', this.userInfo)
				setLocal('user', this.userInfo)
				setLocal('hasUserProfile', this.hasUserProfile)
				//后面原getUserInfo逻辑保持不变，e.detail.encryptedData传到后台去解密也好，直接传用户信息也行
				uni.switchTab({
					url: "/pages/home/home"
				})
			},
			goHome() {
				uni.switchTab({
					url: "/pages/home/home"
				})
			}
		}
	}
</script>

<style lang="less">
	@import url("../../style.less");
	page {
		padding: 0;
		margin: 0;
	}
	.start {
		width: @fullWidth;
		height: @fullHeight;
		position: relative;

		.bg-image {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: -1;
			height: 100%;
			width: 100%;
		}

		.user-info {
			.user-avatar {
				width: @fullWidth;
				height: 60vh;

				image {
					width: 100px;
					height: 100px;
					border-radius: 50%;
					object-fit: contain;
				}
			}

			.user-name {
				font-size: 20px;
				color: @primaryColor;
				width: @fullWidth;
				text-align: center;
				display: block;
				margin-bottom: 2vh;
			}
		}

		.login {
			width: 100%;
			height: 100%;
			position: relative;
			padding-top: 65vh;

		}

	}
</style>

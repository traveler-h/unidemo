<template>
	<view>
		<view class="center-top">
			<image class="avatar" :src="userInfo.avatarUrl" mode="aspectFill"></image>
			<view class="desc">
				<view class="name">{{userInfo.nickName}}</view>
				<view class="base">
					<text>{{userInfo.gender === 0 ? '女' : '男'}}</text>
					<text>{{userInfo.country || '北京'}}</text>
				</view>
				<view class="intro">
					简介： 来自XXX，从事XXXX，爱好XXXXXXX。
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		useStore
	} from 'vuex'
	import {

		getLocal
	} from '../../utils/index.js'
	const store = useStore()
	export default {
		data() {
			return {
				userInfo: {}
			};
		},
		onLoad() {
			this.userInfo = this.$store.state.userInfo
			console.log(this.userInfo)
		}
	}
</script>

<style lang="less">
	.center-top {
		display: flex;
		box-sizing: border-box;
		background-color: rgba(240, 240, 240, .7);
		border-radius: 10px;

		image {
			width: 100px;
			height: 100px;
			object-fit: contain;
			border-radius: 50%;
			margin: 10px;
			flex-shrink: 0;
			border: 1px solid #aaa;
		}

		.desc {
			font-size: 14px;
			width: 100%;
			padding: 10px 0 10px 10px;

			.name {
				font-size: 16px;
				font-weight: bold;
			}

			.base {
				font-size: 15px;
				font-weight: 500;
				margin: 10px 0;
				color: #aaa;

				text {
					&:first-child {
						margin-right: 40px;
					}
				}
			}

			.intro {
				font-size: 12px;
				font-weight: 500;
				color: #aaaaaa;
			}
		}
	}
</style>

<template>
	<view class="content">
		<Banner class="banner"></Banner>
		<view class="main">
			<view class="recommend-active row-flex">
				<view class="row-flex active-item " v-for="item in iconList" :key="item.id">
					<image :src="item.src"></image>
					<text> {{item.name}} </text>
				</view>
			</view>
			<view class="discount">
				<view class="float-btn">
					<image class="to-right" src="../../static/imgs/arrowright.png" mode="aspectFill"></image>
				</view>
				<image class="discount-item" src="../../static/imgs/webp(2).webp" mode="aspectFit"></image>
			</view>
			<view class="explosion">
				<view class="exp-title">
					<view class="title-desc">
						<view class="left-icon"></view>
						<view>
							Explosion today
						</view>
					</view>
					<view class="more">
						<image src="../../static/imgs/right.png"></image>
					</view>
				</view>
				<view class="exp-swiper">
					<view class="swiper-item" v-for="fu in fuList" :key="fu.id">
						<image :src="fu.src" mode="aspectFill"></image>
						<text>{{fu.name}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs,
	} from 'vue';
	import Banner from '../../components/Banner/Banner.vue'
	import icon1 from '../../static/imgs/ipzafk.svg'
	import icon2 from '../../static/imgs/z8uxz6.svg'
	import icon3 from '../../static/imgs/jyyc67.svg'
	import icon4 from '../../static/imgs/kpyvvj.svg'
	import icon5 from '../../static/imgs/lxd0u5.svg'
	import icon6 from '../../static/imgs/oe497p.svg'
	import icon7 from '../../static/imgs/vjha4h.svg'
	import icon8 from '../../static/imgs/vls0pj.svg'
	import icon9 from '../../static/imgs/w0xk1k.svg'
	import icon10 from '../../static/imgs/y0sx0n.svg'

	import fu1 from '../../static/imgs/fu(1).webp'
	import fu2 from '../../static/imgs/fu(2).webp'
	import fu3 from '../../static/imgs/fu(3).webp'
	import fu4 from '../../static/imgs/fu(4).webp'
	import fu5 from '../../static/imgs/fu(5).webp'
	import fu6 from '../../static/imgs/fu(6).webp'

	export default {
		setup(props, context) {},
		data() {
			const iconList = [{
				src: icon1,
				id: '001',
				name: '2022'
			}, {
				src: icon2,
				id: '002',
				name: '2022'
			}, {
				src: icon3,
				id: '003',
				name: '2022'
			}, {
				src: icon4,
				id: '004',
				name: '2022'
			}, {
				src: icon5,
				id: '005',
				name: '2022'
			}, {
				src: icon6,
				id: '006',
				name: '2022'
			}, {
				src: icon7,
				id: '007',
				name: '2022'
			}, {
				src: icon8,
				id: '008',
				name: '2022'
			}, {
				src: icon9,
				id: '009',
				name: '2022'
			}, {
				src: icon10,
				id: '0010',
				name: '2022'
			}, ]

			const fuList = [{
				src: fu1,
				id: '01',
				name: '怎么看待996'
			}, {
				src: fu2,
				id: '02',
				name: '年轻人要不要裸辞'
			}, {
				src: fu3,
				id: '03',
				name: '找工作是兴趣优先还是工资优先'
			}, {
				src: fu4,
				id: '04',
				name: '选择留在大城市还是回家发展'
			}, {
				src: fu5,
				id: '05',
				name: '下班后领导信息该不该回'
			}, {
				src: fu6,
				id: '06',
				name: '怎么避免被同事甩锅'
			}]
			return {
				iconList,
				fuList,
			}
		},
		components: {
			Banner
		},
		onLoad() {
			// 获取元素宽高
			const query = uni.createSelectorQuery().in(this);
			query.select('.swiper-item').boundingClientRect(data => {
				this.itemWidth = data.width
			}).exec();
		},
		methods: {

		}
	}
</script>

<style lang="less">
	@import url("../../style.less");

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.banner {
			width: 100vw;
		}

		.main {
			width: @fullWidth;
			height: auto;
			box-sizing: border-box;
			margin: -5px 0 0;
			padding: 10px;
			background-color: #fff;
			position: relative;
			z-index: 9;
			border-radius: 10px 10px 0 0;

			.recommend-active {
				flex-wrap: wrap;
				justify-content: space-between;

				.active-item {
					width: 20%;
					height: 80px;
					flex-direction: column;

					image {
						width: @fullWidth;
						height: @fullWidth;
					}

					text {
						color: @primaryBgColor;
						font-size: 12px;
					}
				}
			}
		}

		.discount {
			width: @fullWidth;
			position: relative;
			margin-top: 10px;

			.float-btn {
				width: 40px;
				height: 40px;
				position: absolute;
				top: 50%;
				right: 10%;
				transform: translateY(-50%);
				border-radius: 50%;
				background-color: rgb(255, 255, 255);

				.to-right {
					width: 67%;
					height: 37%;
					margin-top: 50%;
					margin-left: 50%;
					transform: translate(-50%, -50%);
				}
			}

			.discount-item {
				width: @fullWidth;
				height: calc(0.33 * 100vw);
				border-radius: 12px;
			}
		}

		.explosion {
			overflow: hidden;

			.exp-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 50px;
				color: #aaaaaa;

				.title-desc {
					display: flex;
					align-items: center;

					.left-icon {
						width: 6px;
						height: 20px;
						background: #ff0;
						margin-right: 10px;
						border-radius: 10px;
					}
				}

				.more {
					width: 20px;
					height: 20px;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}

			.exp-swiper {
				width: 100%;
				height: 150px;
				overflow: auto;
				display: flex;
				flex-wrap: nowrap;

				.swiper-item {
					width: 150px !important;
					height: 150px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					flex-shrink: 0;
					box-sizing: border-box;

					image {
						width: 88%;
						height: 88%;
						border-radius: 20%;
					}

					text {
						margin-top: 10px;
						font-size: 13px;
						color: rgba(0, 0, 0, .86);
						width: 60%;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						text-align: center;
					}
				}
			}
		}

	}
</style>

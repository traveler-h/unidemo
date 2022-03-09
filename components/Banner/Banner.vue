<template>
	<view class="page-section-spacing">
		<swiper class="swiper" 
			indicator-dots="true" 
			indicator-color="rgba(255,255,255,.4)"
			indicator-active-color="#fff"
			autoplay="true" 
			circular="true"
			interval="5000" 
			duration="1500"	>
			<swiper-item>
				<image src="../../static/banner/banner.webp" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/banner/banner(1).webp" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/banner/banner(2).webp" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/banner/banner(3).webp" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/banner/banner(4).webp" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"Banner",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
.swiper{
	height: 400upx;
}

swiper-item image{
	width: 100%;
	height: 400upx;
}
</style>

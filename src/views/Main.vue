<template>
	<el-container style="height: 100%">
		<el-aside width="auto">
			<CommonAside />
		</el-aside>

		<el-container>
			<el-header>
				<CommonHeader />
			</el-header>
			<el-main><router-view></router-view></el-main>
		</el-container>
	</el-container>
</template>

<script>
	import CommonAside from '../components/CommonAside.vue'
	import CommonHeader from '../components/CommonHeader.vue'
	export default {
		name: 'My-Main',
		components: {
			CommonAside,
			CommonHeader,
		},
	}
</script>

<style>
	.el-header {
		height: 80px;
		width: 100%;
		background-color: #333333;
	}
</style>

<template>
	<el-container style="height: 100%">
		<el-aside width="auto">
			<CommonAside />
		</el-aside>
		<div>
			<el-header>Header</el-header>
			<el-main><router-view></router-view></el-main>
		</div>
	</el-container>
</template>

<script>
	import CommonAside from '../components/CommonAside.vue'
	export default {
		name: 'My-Main',
		components: {
			CommonAside,
		},
	}
</script>

<style></style>

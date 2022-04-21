<template>
	<header>
		<div class="l-content">
			<el-button
				@click="handleMenu"
				:class="'el-icon' + isPud"
				plain
				size="mini"
			></el-button>
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item
					v-for="item in tabs"
					:key="item.path"
					:to="{ path: item.path }"
					>{{ item.label }}</el-breadcrumb-item
				>
			</el-breadcrumb>
		</div>
		<div class="r-content">
			<el-dropdown trigger="click" size="mini">
				<img class="user" :src="userImg" />
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>个人中心</el-dropdown-item>
					<el-dropdown-item>退出</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</header>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'My-Header',
		data() {
			return {
				userImg: require('../assets/images/user.png'),
			}
		},
		methods: {
			handleMenu() {
				this.$store.commit('collapseMenu')
			},
		},
		computed: {
			isPud() {
				return this.$store.state.tab.isCollapse ? '-s-unfold' : '-s-fold'
			},
			...mapState({
				tabs: (state) => state.tab.tabsList,
			}),
		},
	}
</script>

<style lang="less" scoped>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}

	.l-content {
		display: flex;
		align-items: center;
		span {
			margin-left: 20px;
		}
	}
	.r-content {
		cursor: pointer;
		.user {
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}
	}
</style>

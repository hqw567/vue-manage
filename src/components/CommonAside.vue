<template>
	<el-menu
		default-active="1-4-1"
		class="el-menu-vertical-demo"
		background-color="#545c65"
		text-color="#fff"
		@open="handleOpen"
		@close="handleClose"
		:collapse="isCollapse"
	>
		<h3>{{ isCollapse ? '菜单' : '通用后台管理菜单' }}</h3>
		<el-menu-item
			@click="clickMenu(item)"
			v-for="item in noChildren"
			:index="item.path"
			:key="item.path"
		>
			<i :class="'el-icon-' + item.icon"></i>
			<span slot="title">{{ item.label }}</span>
		</el-menu-item>
		<el-submenu
			v-for="item in hasChildren"
			:key="item.path"
			:index="item.label"
		>
			<template slot="title">
				<i :class="'el-icon-' + item.icon"></i>
				<span slot="title">{{ item.label }}</span>
			</template>
			<el-menu-item-group
				v-for="itemChildren in item.children"
				:key="itemChildren.path"
				:index="itemChildren.path"
			>
				<el-menu-item
					@click="clickMenu(itemChildren)"
					:index="itemChildren.path"
				>
					<i :class="'el-icon-' + itemChildren.icon"></i>
					<span slot="title"> {{ itemChildren.label }}</span>
				</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</el-menu>
</template>
<style lang="less" scoped>
	.el-menu {
		height: 100%;

		h3 {
			color: #fff;
			text-align: center;
			white-space: nowrap;
			margin: 20px 0;
		}
	}
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
	}
</style>

<script>
	export default {
		data() {
			return {
				menu: [
					{
						path: '/',
						name: 'home',
						label: '首页',
						icon: 's-home',
						url: 'Home/Home',
					},
					{
						path: '/mall',
						name: 'mall',
						label: '商品管理',
						icon: 'video-play',
						url: 'MallManage/MallManage',
					},
					{
						path: '/user',
						name: 'user',
						label: '用户管理',
						icon: 'user',
						url: 'UserManage/UserManage',
					},
					{
						label: '其他',
						icon: 'location',
						children: [
							{
								path: '/page1',
								name: 'page1',
								label: '页面1',
								icon: 'setting',
								url: 'Other/PageOne',
							},
							{
								path: '/page2',
								name: 'page2',
								label: '页面2',
								icon: 'setting',
								url: 'Other/PageTwo',
							},
						],
					},
				],
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath)
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath)
			},
			clickMenu(item) {
				this.$router.push({ name: item.name })
				this.$store.commit('selectMenu', item)
			},
		},
		computed: {
			noChildren() {
				return this.menu.filter((item) => !item.children)
			},
			hasChildren() {
				return this.menu.filter((item) => item.children)
			},
			isCollapse() {
				return this.$store.state.tab.isCollapse
			},
		},
	}
</script>

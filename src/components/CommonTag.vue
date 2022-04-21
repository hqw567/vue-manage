<template>
	<div>
		<el-tag
			:closable="item.label !== '首页'"
			v-for="(item, index) in tags"
			:key="index"
			size="small"
			:effect="$route.name === item.name ? 'dark' : 'plain'"
			@click="changeMenu(item)"
			@close="handleClose(item, index)"
		>
			{{ item.label }}
		</el-tag>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		name: 'CommonTag',
		computed: {
			...mapState({
				tags: (state) => state.tab.tabsList,
			}),
		},

		methods: {
			...mapMutations({ close: 'closeTag' }),
			changeMenu(item) {
				this.$router.push({ name: item.name })
			},
			handleClose(tag, index) {
				this.close(tag)
				const length = this.tags.length

				if (this.$route.name !== tag.name) {
					return
				}
				if (index === length) {
					this.$router.push({ name: this.tags[index - 1].name })
				} else {
					this.$router.push({ name: this.tags[index].name })
				}
			},
		},
	}
</script>

<style lang="less" scoped>
	.el-tag {
		display: inline-block;
		margin-right: 15px;
		margin-bottom: 20px;
		cursor: pointer;
	}
</style>

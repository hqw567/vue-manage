import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main'

import Home from '../views/Home'
import User from '../views/User'
import Mall from '../views/Mall'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'My-Main',
		component: Main,
		children: [
			{
				path: '/home',
				name: 'home',
				component: Home,
			},
			{
				path: '/user',
				name: 'user',
				component: User,
			},
			{
				path: '/mall',
				name: 'mall',
				component: Mall,
			},
		],
	},
]

//解决重复跳转同一路径，VueRouter报错问题
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
	return VueRouterPush.call(this, to).catch((err) => err)
}
export default new VueRouter({
	mode: 'history',
	routes,
})

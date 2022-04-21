import Vue from 'vue'
import VueRouter from 'vue-router'

// import Main from '../views/Main'

// import Home from '../views/Home'
// import User from '../views/User'
// import Mall from '../views/Mall'
// import Page1 from '../views/Other/PageOne'
// import Page2 from '../views/Other/PageTwo'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'My-Main',
		component: () => import('../views/Main'),
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('../views/Home'),
			},
			{
				path: '/user',
				name: 'user',
				component: () => import('../views/User'),
			},
			{
				path: '/mall',
				name: 'mall',
				component: () => import('../views/Mall'),
			},
			{
				path: '/page1',
				name: 'page1',
				component: () => import('../views/Other/PageOne'),
			},
			{
				path: '/page2',
				name: 'page2',
				component: () => import('../views/Other/PageTwo'),
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

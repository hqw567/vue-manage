import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main'

import Home from '../views/Home'
import User from '../views/User'

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
		],
	},
]

export default new VueRouter({
	mode: 'history',
	routes,
})

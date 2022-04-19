import Vue from 'vue'
import App from './App.vue'
import {
	container,
	aside,
	header,
	main,
	button,
	Submenu,
	Menu,
	MenuItem,
	MenuItemGroup,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

import './assets/less/index.less'

Vue.use(container)
Vue.use(aside)
Vue.use(header)
Vue.use(main)
Vue.use(button)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import {
	Container,
	Aside,
	Header,
	Main,
	Button,
	Submenu,
	Menu,
	MenuItem,
	MenuItemGroup,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	Row,
	Col,
	Card,
	Table,
	TableColumn,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import './assets/less/index.less'
import http from 'axios'
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Button)
Vue.use(Submenu)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)

Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount('#app')

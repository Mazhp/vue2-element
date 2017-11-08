import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/view/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/view/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/view/page/home')), 'home');
const data0 = r => require.ensure([], () => r(require('@/view/page/data0')), 'data0');
const data1 = r => require.ensure([], () => r(require('@/view/page/data1')), 'data1');


const routes = [
	{
    path: '/',
    component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
      path: '',
      component: home,
      meta: ["首页"],
    },{
			path: '/data0',
			component: data0,
			meta: ["数据详情","数据详情0"],
		},{
      path: '/data1',
      component: data1,
      meta: ["数据详情","数据详情1"],
    }]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})

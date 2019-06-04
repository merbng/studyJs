import Vue from 'vue';
/*导入vue-router包*/
import VueRouter from 'vue-router';
/*手动安装VueRouter*/
Vue.use(VueRouter);
//导入app组件
import app from './App.vue';
//导入Account组件
import account from './main/Account.vue';
import goodslist from './main/Goodslist.vue';
//创建路由对象
var router = new VueRouter({
    routes: [
        {path: '/account', component: account},
        {path: '/goodslist', component: goodslist}
    ]
});
var vm = new Vue({
    el: '#app',
    /*render 会把el指定的容器中，所有的内容都清空覆盖，所以不要把路由的router-view和router-link 直接写到el 所控制的元素中*/
    render: c => c(app),
    router//将路由对象挂载到vm上
});
//注意：App这个组件，是通过vm实例render函数  渲染出来的，render函数如果要渲染组件，渲染出来的组件只能放到el：'#app'所指定的元素中
//Account和Goodslist组件  是通过 路由匹配监听到的，所以，这两个组件，只能展示到  属于 路由的 <router-view></router-view> 中去
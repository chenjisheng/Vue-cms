// 这是入口文件
import Vue from 'vue';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import app from './App.vue'

// 按需导入 minui 组件
import { Swipe, SwipeItem ,Header,Button} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import router from './router.js'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'http://127.0.0.1:8080/';
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: router,
});
console.log("ok");
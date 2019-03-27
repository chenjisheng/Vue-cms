// 这是入口文件
import Vue from 'vue';
import app from './App.vue'

// 按需导入 minui 组件
import { Header } from 'mint-ui'
Vue.component(Header.name,Header);

import './lib/mui/css/mui.css'

var vm = new Vue({
   el: '#app',
   render: c=>c(app)
});
console.log("ok");
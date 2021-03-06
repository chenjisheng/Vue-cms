import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopCarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

var router = new VueRouter({
    routes:[
        {path: '',redirect:"/home"},
        {path: '/home',component: HomeContainer},
        {path: '/member',component: MemberContainer},
        {path: '/shopCar',component: ShopCarContainer},
        {path: '/search',component: SearchContainer},
        {path: '/home/newsList',component: NewsList},
        {path: '/home/newsInfo/:id',component: NewsInfo},
    ],
    linkActiveClass: 'mui-active', // 覆盖默认的路由高亮的类
});

export default router
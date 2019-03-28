<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipeList" :key="item.img_url">
            <img :src="item.img_url">
            </mt-swipe-item>
<!--            <mt-swipe-item>1</mt-swipe-item>-->
<!--            <mt-swipe-item>2</mt-swipe-item>-->
<!--            <mt-swipe-item>3</mt-swipe-item>-->
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newsList">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <span class="mui-icon mui-icon-chatbubble"></span>
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">联系我们</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">图片分享</div></a></li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        name: "HomeContainer",
        data(){
            return {
                swipeList: [], //这是保存轮播图的数组
            }
        },
        created(){
            this.getSwipe();
        },
        methods:{
            getSwipe(){
                this.$http.get('v1/swipe/').then(function (result) {
                    console.log(result);
                    if ( result.body.code===0){
                        this.swipeList = result.body.data;
                        Toast("加载轮播图成功");
                    }else{
                        Toast("加载轮播图失败");
                    }
                },function () {
                    Toast("服务器错误");
                });
            },
        },
    }
</script>

<style scoped lang="scss">
.mint-swipe {
    height: 400px;
    .mint-swipe-item:nth-child(1) {
        background-color: red;
    }
    .mint-swipe-item:nth-child(2) {
        background-color: yellow;
    }
    .mint-swipe-item:nth-child(3) {
        background-color: blue;
    }
    img {
        width: 100%;
        height: 100%;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
}
.mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
}
</style>
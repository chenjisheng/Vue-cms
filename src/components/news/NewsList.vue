<template>
    <div>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
            <router-link :to="'/home/newsInfo/' + item.id">
                <img class="mui-media-object mui-pull-left" :src="item.url">
                <div class="mui-media-body">
                    <h1>{{ item.title}}</h1>
                    <p class="mui-ellipsis">
                        <span>发表时间:{{ item.add_time }}</span>
                        <span>点击: {{ item.click }}次:</span>
                    </p>

                </div>
            </router-link>
        </li>
    </ul>


    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        name: "NewsList",
        data(){
            return {
                newsList: [],
            };
        },
        created(){
          this.getNewsList();
        },
        methods:{
          getNewsList(){
            this.$http.get('v1/news/').then(result=>{
                console.log(result);
                if (result.body.code === 0 ){
                    this.newsList = result.body.data;
                    Toast("获取新闻列表成功")
                }else {
                    Toast("获取新闻列表失败");
                }
            })
          },
        },
    }
</script>

<style scoped lang="scss">
    .mui-table-view{
        h1{
            font-size:14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color:#226aff;
            display: flex;
            justify-content: space-between ;
        }
    }
</style>
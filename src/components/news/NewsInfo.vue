<template>
    <div class="newsInfo">
<!--        大标题-->
        <h3 class="title">{{ newsinfo.title }}</h3>
<!--        小标题-->
        <p class="subtitle">
            <span>发表时间: {{ newsinfo.add_time }}</span>
            <span>点击: {{ newsinfo.click }} 次</span>
        </p>
        <hr>
        <div v-text="newsinfo.content.content" class="content">
        </div>
<!--        评论组件-->
        <comment-box :id="this.id"></comment-box>
    </div>

</template>

<script>
    import { Toast } from 'mint-ui'
    import comment from '../subcomponents/comment.vue'
    export default {
        name: "NewsInfo",
        data(){
            return {
                id: this.$route.params.id, // 将url 地址中传过来的地址的 id 值,挂载到data 上方便以后使用;
                newsinfo: {}, // 新闻对象
            }
        },
        created(){
            this.getNewsInfo();
        },
        methods:{
            getNewsInfo(){
                // 获取新闻详情
                this.$http.get('v1/news/info/'+this.id).then(result => {
                    if (result.body.code === 0 ){
                        // console.log(result);
                        this.newsinfo = result.body.data;
                        console.log(this.newsinfo)
                    }else {
                        Toast("获取新闻详情失败");
                    }
                })
            }
        },
        components: {
            'comment-box': comment,
        }
    }
</script>

<style lang="scss">
    .newsInfo{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
        .content {
            img {
                width: 100%;
            }
        }
    }

</style>
<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容(最多吐槽120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">

            <div class="cmt-item" v-for="(item,i) in comments" :key="item.id">
                <div class="cmt-title">第{{ i+1 }}楼:&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间: {{ item.add_time }}
                </div>
                <div class="cmt-body">
                    {{ item.comment }}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        name: "comment",
        data() {
            return {
                pageIndex: 1, // 默认展示第一页数据
                comments: [], // 所有的评论数据
            };
        },
        created() {
            this.getComments();
        },
        methods: {
            getComments() {
                this.$http.get('v1/news/comments/' + this.id + "?pageindex=" + this.pageIndex).then(result => {
                    if (result.body.code === 0) {
                        console.log(result.body);
                        this.comments = this.comments.concat(result.body.data);
                        Toast("获取评论成功");
                    } else {
                        console.log(result);
                        Toast("获取评论失败");
                    }
                })
            },
            getMore(){
                // 加载更多评论
                this.pageIndex ++ ;
                this.getComments();
            },
        },
        props: ["id"]
    }
</script>

<style scoped lang="scss">
    .cmt-container {
        h3 {
            font-size: 18px;
        }

        textarea {
            font-size: 14px;
            height: 100px;
            margin: 0;
        }

        .cmt-list {
            margin: 5px 0;

            .cmt-item {
                font-size: 13px;

                .cmt-title {
                    line-height: 35px;
                    background: #ccc;
                }

                .cmt-body {
                    text-indent: 2em;
                }
            }

        }
    }
</style>
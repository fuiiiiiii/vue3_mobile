<script lang="ts">
import { defineComponent, ref } from 'vue';
import Reply from './Reply.vue';
import Comment from './Comment.vue';
import { apiGetComment } from '@/model/comment';
import axios from "axios";

export default defineComponent({
    components: {
        Reply,
        Comment
    },
    props: {
        id: {
            type: String,
            defalut: ''
        }
    },
    setup(props) {
        const id = props.id || '';

        let hotList: any = ref([]);
        let allList: any = ref([]);

        let hotParams = {
            bbsContentId: id,
            essenceFlag: "1",
            isComment: "1",
            pageNum: 1,
            pageSize: 10,
            sortOrder: "desc",
            status: 1,
        };

        let allParams = {
            bbsContentId: id,
            isComment: "1",
            pageNum: 1,
            pageSize: 10,
            sortField: "praiseCount",
            sortOrder: "desc",
            status: 1,
        };

        let allMaxPage: number = 1;


        const initComment = async () => {
            axios.all([apiGetComment(hotParams), apiGetComment(allParams)]).then(([hotRes, allRes]) => {
                if (hotRes) {
                    hotList.value = hotRes.rows.slice(0, 3);

                    for (let item of hotList.value) {

                    };
                }
                if (allRes) {
                    allList.value = allRes.rows;
                    allParams.pageNum = Number(allRes.nextPage);
                    allMaxPage = Number(allRes.pages);

                };
            });
        };

        initComment();


        const getAllComment = async () => {

            if (allMaxPage < allParams.pageNum) return false;

            let allRes = await apiGetComment(allParams);

            if (allRes) {
                allList.value = allList.value.concat(allRes.rows);
                allParams.pageNum = Number(allRes.nextPage);
                allMaxPage = Number(allRes.pages);
            };
        };

        let subParams = {
            bbsContentId: id,
            isComment: "0",
            pageNum: 2,
            pageSize: 20,
            topId: "",
        }

        const getSubComment = async (commentId: string, pageNum: number) => {

            subParams.topId = commentId;
            subParams.pageNum = pageNum;

            return await apiGetComment(subParams);
        };

        const moreSubComment = async (commentId: string | number, commentType: string) => {

            let commentList = commentType === 'hot' ? hotList : allList;

            commentList.value.forEach(async (item: any, index: number) => {

                if (item && item.id === commentId) {

                    if (commentList.value[index]['subPageNum']) {
                        commentList.value[index]['hideMoreSub'] += 1;

                        let subRes = await getSubComment(commentList.value[index].id, commentList.value[index]['subPageNum']);
                        
                        if (subRes) {
                            if (subRes.rows && subRes.rows.length > 0) {
                                commentList.value[index].subComments = commentList.value[index].subComments.concat(commentList.value[index].subComments, subRes.rows);
                            };

                            if (subRes.nextPage == "0") {
                                commentList.value[index]['hideMoreSub'] = true;
                            };
                        }

                    } else {
                        if (item.subComments.length <= 5) {
                            commentList.value[index]['hideMoreSub'] = true;
                        } else {
                            commentList.value[index]['subPageNum'] = 2;
                        };
                    };

                };

            });
        };



        return {
            hotList,
            allList,
            getAllComment,
            moreSubComment
        };
    }

})
</script>

<template>
    <div class="comment-list">
        <div class="hot">
            <div class="title">精选评论</div>
            <div class="comment-item" v-for="item in hotList" :key="'hot' + item.id">
                <comment :comment="item"></comment>
                <div class="reply-bor" v-if="item.subComments">
                    <reply
                        v-for="subItem in item.subComments.slice(0, (item.subPageNum || 1) * (item.subPageNum ? 20 : 5))"
                        :key="'hotSub' + subItem.id"
                        :reply="subItem"
                    ></reply>

                    <div
                        class="sub-more"
                        v-if="item.subComments.length > 5 && !item.hideMoreSub"
                        @click="moreSubComment(item.id, 'hot')"
                    >查看更多</div>
                </div>
            </div>
        </div>

        <div class="all">
            <div class="title">所有评论</div>
            <div class="comment-item" v-for="item in allList" :key="'all' + item.id">
                <comment :comment="item"></comment>
                <div class="reply-bor" v-if="item.subComments">
                    <reply
                        v-for="subItem in item.subComments.slice(0, (item.subPageNum || 1) * (item.subPageNum ? 20 : 5))"
                        :key="'hotSub' + subItem.id"
                        :reply="subItem"
                    ></reply>

                    <div
                        class="sub-more"
                        v-if="item.subComments.length > 5 && !item.hideMoreSub"
                        @click="moreSubComment(item.id, 'all')"
                    >查看更多</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.comment-list {
    padding: 32px 0 32px 0;
}
.reply-bor {
    margin-left: 40px;
    margin-top: 15px;
    background: white;
}

.title {
    margin-bottom: 23px;
}

.comment-item {
    padding-bottom: 30px;
}

.sub-more {
    padding: 10px;
}
</style>
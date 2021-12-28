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
            bbsContentId: "372563",
            essenceFlag: "1",
            isComment: "1",
            pageNum: 1,
            pageSize: 10,
            sortOrder: "desc",
            status: 1,
        };

        let allParams = {
            bbsContentId: "372563",
            isComment: "1",
            pageNum: 1,
            pageSize: 10,
            sortField: "praiseCount",
            sortOrder: "desc",
            status: 1,
        };


        const getHot = async () => {
            axios.all([apiGetComment(hotParams), apiGetComment(allParams)]).then(([hotRes, allRes]) => {
                if (hotRes) hotList.value = hotRes.rows.slice(0, 3);
                if (allRes) {
                    allList.value = allRes.rows;

                };
            });
        };

        getHot();


        


        return {
            hotList,
            allList
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
                        v-for="subItem in item.subComments"
                        :key="'hotSub' + subItem.id"
                        :reply="subItem"
                    ></reply>
                </div>
            </div>
        </div>

        <div class="all">
            <div class="title">所有评论</div>
            <div class="comment-item" v-for="item in allList" :key="'all' + item.id">
                <comment :comment="item"></comment>
                <div class="reply-bor" v-if="item.subComments">
                    <reply
                        v-for="subItem in item.subComments"
                        :key="'allSub' + subItem.id"
                        :reply="subItem"
                    ></reply>
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
    padding-left: 40px;
    margin-top: 15px;
}

.title {
    margin-bottom: 23px;
}

.comment-item {
    padding-bottom: 30px;
}
</style>
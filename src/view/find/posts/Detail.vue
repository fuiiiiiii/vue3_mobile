
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { apiGetDetail } from '@/model/find';
import { useRoute } from "vue-router";
import User from "@components/User.vue";
import CommentList from '@components/comment/CommentList.vue';

export default defineComponent({
    components: {
        User,
        CommentList
    },
    setup() {
        const route = useRoute();

        let detail: any = ref({});
        let bbsImage = ref("");

        let id: string = route.query.id?.toString() || '';

        if (!route.params.id) {

        };
        const getDetail = async () => {
            const res = await apiGetDetail({ id });

            if (res) {
                detail.value = res;
                bbsImage.value = res.images[0].imgPath;

            };
        };

        getDetail();


        onMounted(() => {
            console.log('onMounted')
        })

        return {
            id,
            detail,
            bbsImage
        };
    }

})
</script>


<template>
    <div class="posts-detail" v-if="detail">
        <img class="detail-pic" :src="bbsImage" />

        <div class="title">{{ detail.title }}</div>
        <div class="flex-r time">
            <span v-html="detail.timespan"></span>
            <span>{{ detail.readCount }}人看过</span>
        </div>

        <User :user="detail.user"></User>

        <div class="rich-text" v-html="detail.detail"></div>

        <div class="comment">
            <comment-list :id="id"></comment-list>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.posts-detail {
    padding: $padding-defalut-left-right;
    .detail-pic {
        width: 375px;
        height: 375px;
        margin: 0 -20px 0 -20px;
    }
    .title {
        font-size: 20px;
        color: #000000;
        line-height: 30px;
        font-weight: 600;
        margin-top: 20px;
    }
    .time {
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        font-weight: 400;
        color: #666666;
        line-height: 20px;

        margin-bottom: 20px;
    }

    .comment {
        margin: $minus-padding-defalut-left-right;
        padding: $padding-defalut-left-right;
        background: linear-gradient(135deg, #ffffff, #dcdde2);
    }
}
</style>
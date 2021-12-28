<script lang="ts">
import { defineComponent, computed } from 'vue';
import LikeBtn from '../LikeBtn.vue';
export default defineComponent({
    components: {
        LikeBtn
    },
    props: {
        comment: {
            type: Object
        }
    },
    setup(props) {

        const commentInfo = computed(() => {
            return props.comment || {}
        });

        return {
            commentInfo
        }
    }
})
</script>

<template>
    <div class="comments">
        <div class="flex-r j-c-between">
            <div class="head flex-r">
                <img
                    v-if="commentInfo.user"
                    class="img"
                    :src="commentInfo.user.portraitImgUrl"
                />
                <span
                    v-if="commentInfo.user"
                    class="u-name"
                >{{ commentInfo.user.nickname }}</span>

                <img
                    v-if="commentInfo.user && commentInfo.user.extendField1 == 'LYRIQ'"
                    class="u-lab"
                    :src="commentInfo.user.subscriptionUrl"
                />
            </div>
            <div class="like-bor flex-r">
                <span>{{ commentInfo.praiseCount }}</span>
                <div class="like">
                    <like-btn :praisedFlag="commentInfo.praisedFlag"></like-btn>
                </div>
            </div>
        </div>
        <div class="comment-con">{{ commentInfo.commentContent }}</div>
        <div class="time" v-html="commentInfo.timespan"></div>
    </div>
</template>

<style lang="scss" scoped>
@import url("./comment.scss");

.comment-con {
    padding-left: 40px;
    box-sizing: border-box;
    text-align: justify;
    color: #000000;
    line-height: 24px;
    font-size: 16px;
}

.time {
    padding-left: 40px;
    font-size: 10px;
    color: #999999;
    line-height: 18px;
    margin-top: 5px;
}
</style>


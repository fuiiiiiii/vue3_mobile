<script lang="ts">
import { defineComponent, computed } from 'vue';
import LikeBtn from '../LikeBtn.vue';

export default defineComponent({
    components: {
        LikeBtn
    },
    props: {
        reply: {
            type: Object
        }
    },
    setup(props) {
        const replyInfo = computed(() => {
            return props.reply || {};
        });

        return {
            replyInfo
        };
    }
})
</script>

<template>
    <div class="reply-comment">
        <div class="flex-r j-c-between">
            <div class="con">
                <span v-if="replyInfo.user" class="u-name">{{ replyInfo.user.nickname }}</span>&nbsp;回复&nbsp;
                <span v-if="replyInfo.replyUser" class="u-name">{{ replyInfo.replyUser.nickname }}</span>
                &nbsp;{{ replyInfo.commentContent }}
            </div>
            <div class="like-bor flex-r ">
                <span>{{replyInfo.praiseCount}}</span>
                <div class="like">
                    <like-btn :praised-flag="replyInfo.praisedFlag"></like-btn>
                </div>
            </div>
        </div>
        <div class="time" v-html="replyInfo.timespan"></div>
    </div>
</template>

<style lang="scss" scoped>
@import url("./comment.scss");
.reply-comment {
    background: white;
    padding: 10px;
    .con {
        font-size: 14px;
        color: rgba(102, 102, 102, 1);
        line-height: 22px;
        .u-name {
            color: rgba(51, 51, 51, 1);
            margin-left: 0;
        }
    }
    .time {
        color: #999999;
        line-height: 20px;
        font-size: 12px;
    }
}
</style>


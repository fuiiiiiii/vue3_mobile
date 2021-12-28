<script lang="ts">
import { defineComponent } from 'vue';
import LikeBtn from '../LikeBtn.vue';
export default defineComponent({
    components: {
        LikeBtn
    }
})
</script>

<template>
    <div class="comments">
        <div class="flex-r j-c-between">
            <dvi class="head flex-r">
                <img
                    class="img"
                    src="https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK7lzKiadPtDv6PibJ9iblohUwp7nRPBlTF6Bu6RCvKtav23NVKDyOJTDJvmWTPiadFcPicxl0uK1yIPLg/132"
                />
                <span class="u-name">hahAS</span>

                <img
                    class="u-lab"
                    src="https://cms-oss.sgmlink.com/6142b893a990ded5af008249/618cd1e3ecacded5901771e4/tag_reserve.png"
                />
            </dvi>
            <div class="like-bor flex-r a-i-center">
                <span>100</span>
                <div class="like">
                    <like-btn></like-btn>
                </div>
            </div>
        </div>
        <div class="comment-con">哈哈哈哈快快快</div>
        <div class="time">10小时</div>
    </div>
</template>

<style lang="scss" scoped>
@import url("./commemt.scss");
.like-bor {
    font-size: 12px;
    color: #999999;
}
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


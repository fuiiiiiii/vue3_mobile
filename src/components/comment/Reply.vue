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
    <div class="reply-comment">
        <div class="flex-r j-c-between">
            <div>是是是：少时诵诗书所所所所撒大所大所多</div>
            <like-btn></like-btn>
        </div>
        <div>两小时前</div>
    </div>
</template>


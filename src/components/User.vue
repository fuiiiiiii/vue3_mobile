<template>
    <div class="u-info flex-r">
        <img :class="['head',size == 'small'? 'head-small':'']" :src="user.portraitImgUrl" />
        <span class="name">{{ user.nickname }}</span>
        <span class="authority" v-if="user.userFlag == 1">官方</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        user: {
            type: Object,
            default: {}
        },
        size: {
            type: String,
            default: 'large'
        }
    }
})
</script>

<style lang="scss" scoped>
.u-info {
    align-items: center;
    font-size: 14px;
    .head {
        width: 48px;
        height: 48px;
        border: 1px solid #f11434;
        border-radius: 50%;
        margin-right: 10px;
    }
    .head-small {
        width: 24px;
        height: 24px;
    }
    .name {
        margin-right: 5px;
    }
    .authority {
        color: #f11434;
        font-size: 9px;
        width: 26px;
        height: 14px;
        border: 1px solid #f11434;
        border-radius: 2px;
        text-align: center;
        line-height: 14px;
    }
}
</style>
<template>
    <div class="home">
        <van-tabs v-model="active" :animated="true" :swipeable="true">
            <van-tab title="推荐">
                <div class="banner">
                    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                        <van-swipe-item>1</van-swipe-item>
                    </van-swipe>
                </div>
            </van-tab>
            <van-tab title="LYRIQ"></van-tab>
            <van-tab title="同道之选"></van-tab>
        </van-tabs>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from "@components/Header.vue";
import { Tab, Tabs, Swipe, SwipeItem } from 'vant';

export default defineComponent({
    components: {
        Header,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem
    },
    setup() {
        const active = ref(0);
        return {
            active
        }
    }

})
</script>

<style lang="scss" scoped>
.home {
    :deep(.van-tabs__content) {
        padding: $padding-defalut-left-right;
        padding-top: 20px;
    }
}
</style>
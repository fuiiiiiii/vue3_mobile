<template>
    <div class="home">
        <van-tabs v-model="active" :animated="true" :swipeable="true">
            <van-tab title="推荐">
                <Banner></Banner>
            </van-tab>
            <van-tab title="LYRIQ"></van-tab>
            <van-tab title="同道之选"></van-tab>
        </van-tabs>
    </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import Header from "@components/Header.vue";
import { Tab, Tabs } from 'vant';
import Banner from "./components/Banner.vue"

export default defineComponent({
    components: {
        Header,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        Banner
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
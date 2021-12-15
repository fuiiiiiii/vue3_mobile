<template>
    <div class="banner">
        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white">
            <van-swipe-item v-for="item in bannerList" :key="item.id">
                <img class="banner-pic" :src="item.thumbnailUrl" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { apiGetBanner } from '@/model/find';

export default defineComponent({
    components: {
        [SwipeItem.name]: SwipeItem,
        [Swipe.name]: Swipe
    },
    setup() {

        let bannerList = ref<Array<any>>();

        const getBanner = async () => {
            const res = await apiGetBanner({ pageNum: 1, pageSize: 6, type: 0 });
            bannerList.value = res.rows;
        };

        getBanner();


        return {
            bannerList
        };
    }

})
</script>

<style lang="scss" scoped>
.banner-pic {
    width: 335px;
    height: 447px;
    vertical-align: bottom;
}
</style>
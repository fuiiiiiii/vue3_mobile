<template>
    <div class="header">
        <van-nav-bar title="标题" fixed placeholder left-arrow :border="false" @click-left="back">
            <template #title>{{ routerName }}</template>
            <template #right>
                <img class="search-icon" src="@/assets/icon_top_search@2x.png" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script lang="ts">
import { NavBar } from 'vant';
import { defineComponent } from 'vue';
import Route from '@/router/index';

export default defineComponent({
    props: ["routerName", "isHome"],
    components: {
        [NavBar.name]: NavBar
    },
    setup() {
        const back = (): void => {
            Route.back();
        };

        return {
            back
        }
    }
})
</script>

<style lang="scss" scoped>
.header {
    justify-content: space-between;
    align-items: center;
    // padding: 15px 0;
    .icon {
        width: 170px;
        height: 15px;
        vertical-align: bottom;
    }
    .search-icon {
        width: 20px;
        height: 20px;
        vertical-align: bottom;
    }
    :deep(.van-nav-bar) {
        padding: $padding-defalut-left-right;
    }
}
</style>
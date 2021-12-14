<template>
    <div class="header">
        <van-nav-bar title="标题" left-arrow :border="false">
            <template #title>
                {{routerName}}
            </template>
            <template #right>
                <img class="search-icon" src="@/assets/icon_top_search@2x.png" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script lang="ts">
import { NavBar } from 'vant';
import { defineComponent } from 'vue';

export default defineComponent({
    props: ["routerName", "isHome"],
    components: {
        [NavBar.name]: NavBar
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
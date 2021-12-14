<template>
    <div class="footer">
        <van-tabbar>
            <van-tabbar-item to="/home" icon="home-o">发现</van-tabbar-item>
            <van-tabbar-item icon="search">IQ</van-tabbar-item>
            <van-tabbar-item icon="friends-o">活动</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Tabbar, TabbarItem } from 'vant';
export default defineComponent({
    components: {
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    }

})
</script>
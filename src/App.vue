<script>

import { Tabbar, TabbarItem } from 'vant';

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<template>
  <RouterView />
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">发现</van-tabbar-item>
    <van-tabbar-item icon="search">IQ</van-tabbar-item>
    <van-tabbar-item icon="friends-o">活动</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style lang="less">
</style>

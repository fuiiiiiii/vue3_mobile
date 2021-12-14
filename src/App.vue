<script lang="ts">
import Router from './router/index';
import { computed, defineComponent } from 'vue';
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";


export default defineComponent({
  components: {
    Header,
    Footer
  },
  setup() {
    let routerInfo = computed(
      (): any => {
        return <any>Router.currentRoute.value;
      }
    );


    return {
      routerInfo
    }
  }
})
</script>

<template>
  <div>
    <Header :routerName="routerInfo.name"></Header>
    <RouterView />
    <Footer v-show="routerInfo.meta.tabBar"></Footer>
  </div>
</template>

<style lang="less">
.flex-c {
  display: flex;
  flex-direction: column;
}
.flex-r {
  display: flex;
  flex-direction: row;
}
.pad {
  padding: 0 20px;
}
</style>

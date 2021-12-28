<template>
    <div class="home">
        <van-tabs v-model="chooseTab" :animated="true" :swipeable="true">
            <van-tab title="推荐">
                <Banner></Banner>
                <div class="bbs" v-for="item in store.postsList" :key="item.id">
                    <BbsItem :bbs-info="item"></BbsItem>
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
import { Tab, Tabs } from 'vant';
import Banner from "./components/Banner.vue";
import BbsItem from "@components/BbsItem.vue";
import { apiGetBbs } from "@/model/find";
import { findStore } from "@/store/find";

export default defineComponent({
    components: {
        Header,
        [Tab.name]: Tab,
        [Tabs.name]: Tabs,
        Banner,
        BbsItem
    },
    setup() {
        const chooseTab = ref(0);
        const store = ref(findStore());

        console.log(store)

        let postsList = ref<Array<any>>([]);

        let postsParams = {
            pageNum: 1,
            pageSize: 20,
            maxPage: 1
        }

        const getPosts = async (): Promise<void | boolean> => {

            if (postsParams.pageNum > postsParams.maxPage) {
                return false;
            };

            const res: any = await apiGetBbs({
                bbsSectionId: "423",
                isOrderByEssenceFlag: 1,
                isOrderByTopFlag: 1,
                lastDate: "",
                pageNum: postsParams.pageNum,
                pageSize: postsParams.pageSize,
                sortField: "sortNo",
                sortOrder: "asc",
                types: [1]
            });

            if (!res) return false;

            let { rows, nextPage, pages } = res;
            postsParams.pageNum = nextPage;
            postsParams.maxPage = pages;

            store.value.postsList = postsList.value.concat(rows);
        }

        getPosts();

        return {
            chooseTab,
            store,
        }
    }

})
</script>

<style lang="scss" scoped>
.home {
    padding-bottom: 20px;
    :deep(.van-tabs__content) {
        padding: $padding-defalut-left-right;
        padding-top: 20px;
    }
    .bbs {
        margin-top: 50px;
    }
}
</style>
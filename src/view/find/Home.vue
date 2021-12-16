<template>
    <div class="home">
        <van-tabs v-model="chooseTab" :animated="true" :swipeable="true">
            <van-tab title="推荐">
                <Banner></Banner>
                <div class="bbs" v-for="item in postsList" :key="item.id">
                    <BbsItem  :bbs-info="item"></BbsItem>
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
        let postsList = ref<Array<any>>([]);

        let postsParams = {
            pageNum: 1,
            pageSize: 10,
            maxPage: 1
        }

        const getPosts = async (): Promise<void | boolean> => {

            if (postsParams.pageNum > postsParams.maxPage) {
                return false;
            };

            const res: any = await apiGetBbs({
                bbsSectionId: "11",
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

            postsList.value = postsList.value.concat(rows);
        }

        getPosts();

        return {
            chooseTab,
            postsList
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
<template>
    <div v-if="bbs.images" class="bbs-item">
        <User :user="bbs.user"></User>
        <div class="bbs-pic">
            <img class="thumbnail" :src="bbs.images[0].imgPath" />
            <div class="opt flex-r">
                <span v-html="bbs.timespan"></span>

                <div class="flex-r">
                    <div
                        class="opt-icon flex-r"
                        :data-params="JSON.stringify({ id: bbs.id, praise: bbs.praisedFlag })"
                        v-cadi-click:auth="like"
                    >
                        <like-btn :praisedFlag="bbs.praisedFlag"></like-btn>
                        <!-- <img :src="likePic" /> -->
                        <span>{{ bbs.praiseCount }}</span>
                    </div>
                    <div class="opt-icon flex-r">
                        <img src="@/assets/icon_comments_w@3x.png" />
                        <span>{{ bbs.commentCount }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="content" v-cadi-click="toDetail" :data-params="bbs.id">
            <div class="title">{{ bbs.title }}</div>
            <div class="desc">{{ bbs.content }}</div>

            <div class="cut"></div>

            <div class="hot-comment" v-for="item in bbs.commentList" :key="item.id">
                <User :user="item.user" size="small"></User>
                <div>{{ item.commentContent }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, computed } from 'vue';
import User from './User.vue';
import { useRouter } from "vue-router";
import { apiLike } from "@/model/find";
import { updateFiled } from "@/utils/index";
import LikeBtn from "./LikeBtn.vue";
import { findStore } from "@/store/find";

export default defineComponent({
    props: {
        bbsInfo: {
            type: Object
        }
    },
    components: {
        User,
        LikeBtn
    },
    setup(props) {
        const router = useRouter();

        let bbs = computed(() => {
            if (!props.bbsInfo) return {};

            return props.bbsInfo;
        });

        const like = async function (params: any): Promise<void> {

            let _data = JSON.parse(params);

            _data.praise = _data.praise === '1' ? '0' : '1';

            _data['type'] = '1';

            const res = await apiLike(_data);

            if (res) {

                const store = findStore();
                let postsList = store.postsList;

                let { praiseCount } = res;

                const bbsInfo = bbs.value;

                let { praisedFlag, id } = bbsInfo;

                postsList = updateFiled({
                    praiseCount: praiseCount,
                    praisedFlag: praisedFlag == '0' ? '1' : '0'
                }, postsList, { id });

            };
        };

        const toDetail = (id: string) => {
            if (id) {
                router.push({ name: "PostsDetail", query: { id } });
            };
        };

        return {
            like,
            toDetail,
            bbs
        }
    }
})
</script>

<style lang="scss" scoped>
.bbs-item {
    .bbs-pic {
        width: 335px;
        height: 335px;
        position: relative;
        margin-top: 10px;
        .opt {
            height: 60px;
            width: 100%;
            background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0),
                rgba(0, 0, 0, 1)
            );
            position: absolute;
            bottom: 0;
            left: 0;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 0 20px 0 20px;
            color: white;
            font-size: 10px;
            .opt-icon {
                align-items: center;
                &:nth-of-type(1) {
                    margin-right: 30px;
                }
                img {
                    width: 24px;
                    height: 24px;
                    margin-right: 8px;
                }
            }
        }
        img {
            width: 100%;
            height: 100%;
            vertical-align: bottom;
        }
    }
    .content {
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        background: linear-gradient(135deg, #ffffff, #cdcfd5);
        border: 1px solid rgba(151, 151, 151, 0.1);
        .title {
            font-weight: 700;
            color: #000000;
            line-height: 30px;
            font-size: 20px;
        }
        .desc {
            margin-top: 10px;
            font-size: 16px;
            color: #000000;
            line-height: 24px;
        }
        .title,
        .desc {
            text-overflow: -o-ellipsis-lastline;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .cut {
            width: 100%;
            height: 1px;
            background: #dddddd;
            margin: 15px 0;
        }
        .hot-comment {
            color: #666666;
            line-height: 22px;
            font-size: 14px;
            margin-top: 20px;
        }
    }
}
</style>
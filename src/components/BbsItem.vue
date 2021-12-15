<template>
    <div v-if="bbsInfo.images" class="bbs-item">
        <User :user="bbsInfo.user"></User>
        <div class="bbs-pic">
            <img class="thumbnail" :src="bbsInfo.images[0].imgPath" />
            <div class="opt flex-r">
                <span v-html="bbsInfo.timespan"></span>

                <div class="flex-r">
                    <div class="opt-icon flex-r">
                        <img src="@/assets/icon_like_w@3x.png" />
                        <span>22</span>
                    </div>
                    <div class="opt-icon flex-r">
                        <img src="@/assets/icon_comments_w@3x.png" />
                        <span>22</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="title">{{ bbsInfo.title }}</div>
            <div class="desc">{{ bbsInfo.content }}</div>

            <div class="cut"></div>

            <div class="hot-comment" v-for="item in bbsInfo.commentList" :key="item.id">
                <User :user="item.user" size="small"></User>
                <div>{{ item.commentContent }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import User from './User.vue';

export default defineComponent({
    props: {
        bbsInfo: {
            type: Object,
            default: {}
        }
    },
    components: {
        User
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
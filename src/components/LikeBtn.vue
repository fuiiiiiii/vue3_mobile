<template>
    <img class="like-btn" :src="likePic" />
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue'
export default defineComponent({
    props: {
        praisedFlag: {
            type: String
        }
    },
    setup(props) {
        const likePic = ref('');

        let getLikePic = async () => {
            let p = props.praisedFlag === '0' ? await import('@/assets/icon_like@3x.png') : await import('@/assets/dianzan_s.svg');

            likePic.value = p.default;
        };

        getLikePic();

        watch(() => props.praisedFlag, () => {
            console.log('watch')
            getLikePic();
        });

        return {
            likePic
        }
    }
})
</script>

<style lang="scss" scoped>
.like-btn {
    width: 100%;
    height: 100%;
    vertical-align: bottom;
}
</style>
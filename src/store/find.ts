import { defineStore } from "pinia";

interface findData {
    postsList: Array<any>
}

export const findStore = defineStore({
    id: 'find',
    state: (): findData => ({
        postsList: []
    }),
    actions: {
        SET_POSTS_LIST(list: Array<any>) {
            this.postsList = list;
        }
    }
})
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: "Home",
        meta: {
            tabBar: true,
            title: '凯迪拉克IQ'
        },
        component: () => import('../view/find/Home.vue')
    }
];

const router = createRouter({
    scrollBehavior: () => ({
        top: 0,
    }),
    history: createWebHashHistory(), //替代之前的mode，是必须的
    routes
});
export default router;
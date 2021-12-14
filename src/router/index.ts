import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
        name: "凯迪拉克IQ"
    },
    {
        path: '/home',
        name: "凯迪拉克IQ",
        meta: {
            tabBar: true
        },
        component: () => import('../view/Home.vue')
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
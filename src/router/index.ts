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
    },
    {
        path: '/login',
        name: "Login",
        meta: {
            tabBar: false,
            title: '登录'
        },
        component: () => import('../view/Login.vue')
    },
    {
        path: '/posts/detail',
        name: "PostsDetail",
        meta: {
            tabBar: false,
            title: '凯迪拉克IQ'
        },
        component: () => import('../view/find/posts/Detail.vue')
    }
];

const router = createRouter({
    // scrollBehavior: () => ({
    //     top: 0,
    // }),
    history: createWebHashHistory(), //替代之前的mode，是必须的
    routes
});
export default router;
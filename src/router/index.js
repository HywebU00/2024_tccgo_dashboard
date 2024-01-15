// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/Index.vue"),
    redirect: () => {
      return "ui/mp";
    },
    children: [
      {
        path: "/ui",

        component: () => import("@/views/main/mainPage.vue"),
        children: [
          {
            path: "/ui/index",

            component: () => import("@/views/admin/systemComponent.vue"),
          },
          {
            path: "/ui/album",
            component: () => import("@/views/admin/albumComponent.vue"),
          },
          {
            path: "/ui/form",
            component: () => import("@/views/admin/formComponent.vue"),
          },
          {
            path: "/ui/mp",
            name: "ui",
            component: () => import("@/views/admin/homeComponent.vue"),
          },
          {
            path: "/ui/tree",
            component: () => import("@/views/admin/treeComponent.vue"),
          },
          {
            path: "/ui/photo",
            component: () => import("@/views/admin/photoComponent.vue"),
          },
          {
            path: "/ui/finder",
            component: () => import("@/views/admin/peopleFinderComponent.vue"),
          },
        ],
      },
      {
        path: "/system",
        component: () => import("@/views/main/mainPage2.vue"),
        children: [
          {
            path: "/system/table",
            name: "system",
            component: () => import("@/views/admin/systemComponent.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/ui-index",
    component: () => import("@/views/indexPage.vue"),
  },
  {
    path: "/ui-login",
    component: () => import("@/views/layout/loginPage.vue"),
  },
];

export const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;

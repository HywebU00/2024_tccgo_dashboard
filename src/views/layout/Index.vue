<template>
  <v-app id="inspire" :class="['layout', { isSmallScreen: isSmallScreen }]">
    <v-app-bar class="elevation-3" height="72">
      <div class="logo">
        <img src="~@/assets/logo.png" alt="" />
      </div>
      <v-spacer></v-spacer>
      <v-tabs center-active centered show-arrows>
        <v-tab
          v-for="item in list"
          :key="item.name"
          :text="item.name"
          @click="goLink(item.link)"
        >
        </v-tab>
      </v-tabs>
      <!-- <div class="userName">Elle Wang /<span>企劃處</span></div> -->
      <div class="userName">
        Elle Wang /<span>企劃處</span>
        <v-select
          variant="outlined"
          density="compact"
          hide-details="none"
          color="export"
          :items="['Elle Wang', 'Long Li', 'Nyrie Lin']"
        >
        </v-select>
      </div>
      <v-btn class="loginBtn"> 登入 </v-btn>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
import axios from "axios";
import { ref, reactive } from "vue";
import { router } from "@/router/index.js";
import { pageStting } from "@/stores/storage.js";
const ps = pageStting();

export default {
  data: () => ({
    ps,
    camFunAry: ref([]),
    tab: null,
    drawer: true,
    value: 0,
    windowWidth: "",
    railWidth: "1",
    open: ["Users"],
    theme: "default",
    themeDark: "false",
    navList: {},
    opened: ["案件管理"],
    overlay: false,
    isSmallScreen: window.innerWidth < 768,
    list: [
      { name: "中央權限管理", link: "ui" },
      { name: "功能設定", link: "system" },
      { name: "公報管理", link: "ui" },
      { name: "書面質詢", link: "ui" },
      { name: "專案報告", link: "ui" },
      { name: "網站管理", link: "ui" },
      { name: "系統管理", link: "ui" },
    ],
  }),
  created() {
    axios.post("/api/cam/cam-menu.json").then((res) => {
      this.camFunAry = res.data;
      console.log(this.camFunAry);
    });
  },
  // components: {
  //   topNavigation,
  // },
  methods: {
    goHome() {
      router.push({ name: "my-index" });
    },
    goLink(item) {
      console.log(item);
      router.push({ name: item });
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowWidth < 991 ? (this.railWidth = 1) : (this.railWidth = 70);
      this.isSmallScreen = window.innerWidth < 991;
    },
    menuTarget(newOpened) {
      this.opened = newOpened.slice(-1);
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
};
</script>

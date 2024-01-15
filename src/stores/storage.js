import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const pageStting = defineStore("topNavInfo", {
  persist: true,
  state: () => ({
    //定義 state 初始值
    topNavPageTitle: ref(""),
    menuRail: ref(false),
  }),
  getters: {},
  actions: {
    //定義 actions
    setTopNavPageTiltle(tt) {
      this.topNavPageTitle = tt;
    },
    setMenuRail(tt) {
      this.menuRail = tt;
    },
    clickMenuRail() {
      this.menuRail = !this.menuRail;
    },
  },
});

export const maskStore = defineStore("mstatus", {
  persist: true,
  state: () => ({
    //定義 state 初始值
    maskStatus: ref(false),
  }),
  getters: {
    //定義 getters
  },
  actions: {
    //定義 actions
    doMask(tt) {
      this.maskStatus = tt;
    },
  },
});

export const dataFinder = defineStore("finderStatus", {
  state: () => ({
    setting: {
      title: "",
      finderID: "",
      showFinder: false,
      seleceted: [],
      isSingle: true,
    },
  }),
  getters: {
    //定義 getters
  },
  actions: {
    //定義 actions
    getPeopleFinder() {
      return "PEOPLE";
    },
    getDeptFinder() {
      return "DEPT";
    },
    getFinder() {
      return this.setting;
    },
    getFinderID() {
      return this.setting.finderID;
    },
    getStatus(fid) {
      return this.setting.showFinder && fid == this.setting.finderID;
    },
    setFinder(obj) {
      this.setting = obj;
      console.log(this.setting);
    },
    openFinder() {
      this.setting.showFinder = true;
    },
    closeFinder() {
      this.setting.showFinder = false;
    },
  },
});

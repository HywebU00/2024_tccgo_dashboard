<script>
import { maskStore, pageStting } from "@/stores/storage.js";
import ScoreData from "@/assets/Yahoo.png";
const ps = pageStting();
export default {
  data: () => ({
    mk: maskStore(),
    ps: pageStting(),
    tab: null,
    toggle: null,
    functionGroupToggle: null,
    page: 1,
    panel: 1,
    //table data
    items: [
      {
        id: 1,
        imageUrl: "",
        title: "我的領物單",
      },
      {
        id: 2,
        imageUrl: "",
        title: "我的派車單單",
      },
      {
        id: 3,
        imageUrl: ScoreData,
        title: "",
      },

      // 添加更多项目
    ],
    //table serve
  }),
  created() {
    ps.setTopNavPageTiltle("單一簽入系統暨會內入口網");
  },
  mounted() {},
  methods: {
    panelsHandle() {
      if (this.panel == 0) {
        this.panel = 1;
      } else {
        this.panel = 0;
      }
    },
    open() {
      this.panel = 1;
    },
  },
  components: {},
};
</script>

<template>
  <div class="page mpPage">
    <div class="pageContent">
      <!-- <h3>交辦案件管理－交辦清單</h3> -->
      <v-card class="scrollContent">
        <div class="">
          <!-- 常用功能 start -->
          <v-row class="commonToolSection">
            <v-col class="pb-2">
              <v-card class="d-flex align-center">
                <h3 class="title">
                  <span class="icon"></span>
                  常用功能
                </h3>
                <v-list class="d-flex">
                  <v-list-item v-for="item in items" :key="item.id">
                    <a href="#">
                      <v-img
                        v-if="item.imageUrl != ''"
                        :min-width="60"
                        :max-height="40"
                        cover
                        aspect-ratio="16/9"
                        :src="item.imageUrl"
                      ></v-img>
                      <p v-if="item.title != ''" href="#">{{ item.title }}</p>
                    </a>
                    <!-- 列表项的文本内容 -->
                  </v-list-item>
                </v-list>
                <v-btn class="moreBtn ml-auto" variant="text">
                  <span class="pb-1">more</span>
                  <span class="material-icons-round icon"> fast_forward </span>
                </v-btn>
                <!-- <v-btn variant="text" append-icon="mdi-plus-circle"
                  >新增
                </v-btn> -->
              </v-card>
            </v-col>
          </v-row>
          <!-- 常用功能 end -->

          <!-- 每日族語 start -->
          <v-row class="languageSection">
            <v-col class="pt-1 pb-2">
              <v-card>
                <h3 class="title">
                  <span class="icon"></span>
                  每日族語
                </h3>
                <v-list class="d-md-flex d-block justify-space-between">
                  <v-list-item>
                    <!-- 列表项的文本内容 -->
                    <v-list-item-title
                      >Ikor no pafilongan,o mamianip to ko
                      malingday.</v-list-item-title
                    >
                    <v-list-item-subtitle
                      >年假過後，農人準備插秧了。</v-list-item-subtitle
                    >
                  </v-list-item>
                  <v-list-item class="btnList">
                    <v-chip variant="elevated"> 阿美族 </v-chip>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
          <!-- 每日族語 end -->
          <!-- 經費填報系統 start -->
          <v-row class="systemSection mx-0">
            <v-col class="pt-1 pb-2" md="4">
              <v-card>
                <h3 class="title">
                  <span class="icon"></span>
                  公文系統
                </h3>
                <v-row class="cardList">
                  <template v-for="i in 1" :key="i">
                    <v-col cols="12" class="card">
                      <a href="javascript:;">
                        <v-card class="d-flex justify-space-between">
                          <h4>待辦</h4>
                          <div><span class="num">15</span><span>件</span></div>
                        </v-card>
                        <v-tooltip
                          class="systemSectionTooltip"
                          activator="parent"
                          location="bottom"
                        >
                          <v-row class="cardList">
                            <template v-for="i in 5" :key="i">
                              <v-col class="card">
                                <v-card class="d-flex justify-space-between">
                                  <h4>待辦</h4>
                                  <div>
                                    <span class="num">15</span><span>件</span>
                                  </div>
                                </v-card>
                              </v-col>
                            </template>
                          </v-row>
                        </v-tooltip>
                      </a>
                    </v-col>
                  </template>
                </v-row>
              </v-card>
            </v-col>
            <v-col class="pt-1 pb-2" md="4">
              <v-card>
                <h3 class="title">
                  <span class="icon"></span>
                  差勤系統
                </h3>
                <v-row class="cardList">
                  <template v-for="i in 1" :key="i">
                    <v-col cols="12" class="card">
                      <a href="javascript:;">
                        <v-card class="d-flex justify-space-between">
                          <h4>待辦</h4>
                          <div><span class="num">15</span><span>件</span></div>
                        </v-card>
                        <v-tooltip
                          class="systemSectionTooltip"
                          activator="parent"
                          location="bottom"
                        >
                          <v-row class="cardList">
                            <v-col class="card">
                              <v-card class="d-flex justify-space-between">
                                <h4>待辦</h4>
                                <div>
                                  <span class="num">15</span><span>件</span>
                                </div>
                              </v-card>
                            </v-col>
                            <v-col class="card">
                              <v-card class="d-flex justify-space-between">
                                <h4>待簽收</h4>
                                <div>
                                  <span class="num">220</span><span>件</span>
                                </div>
                              </v-card>
                            </v-col>
                            <v-col class="card">
                              <v-card class="d-flex justify-space-between">
                                <h4>待辦理</h4>
                                <div>
                                  <span class="num">320</span><span>件</span>
                                </div>
                              </v-card>
                            </v-col>
                            <v-col class="card">
                              <v-card class="d-flex justify-space-between">
                                <h4>問卷填報</h4>
                                <div>
                                  <span class="num">280</span><span>件</span>
                                </div>
                              </v-card>
                            </v-col>
                          </v-row>
                        </v-tooltip>
                      </a>
                    </v-col>
                  </template>
                </v-row>
              </v-card>
            </v-col>
            <v-col class="pt-1 pb-2" md="4">
              <v-card>
                <h3 class="title">
                  <span class="icon"></span>
                  經費填報系統
                </h3>
                <v-row class="cardList">
                  <template v-for="i in 1" :key="i">
                    <v-col cols="12" class="card">
                      <a href="javascript:;">
                        <v-card class="d-flex justify-space-between">
                          <h4>待辦</h4>
                          <div><span class="num">15</span><span>件</span></div>
                        </v-card>
                        <v-tooltip
                          class="systemSectionTooltip"
                          activator="parent"
                          location="bottom"
                        >
                          <v-row class="cardList">
                            <template v-for="i in 5" :key="i">
                              <v-col class="card">
                                <v-card class="d-flex justify-space-between">
                                  <h4>待辦</h4>
                                  <div>
                                    <span class="num">15</span><span>件</span>
                                  </div>
                                </v-card>
                              </v-col>
                            </template>
                          </v-row>
                        </v-tooltip>
                      </a>
                    </v-col>
                  </template>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <!-- 經費填報系統 end-->
          <!-- 案件填報 start -->
          <v-row class="caseSection">
            <v-col class="pt-1 pb-2" cols="12">
              <v-card>
                <h3 class="title">
                  <span class="icon"></span>
                  案件填報
                </h3>
                <v-row class="cardList">
                  <template v-for="i in 3" :key="i">
                    <v-col class="card" cols="6" md="4" lg="2">
                      <v-card class="d-flex justify-space-between">
                        <h4>電子表單</h4>
                        <div><span class="num">15</span><span>件</span></div>
                      </v-card>
                    </v-col>
                    <v-col class="card" cols="6" md="4" lg="2">
                      <v-card class="d-flex justify-space-between">
                        <h4>待簽收</h4>
                        <div><span class="num">30</span><span>件</span></div>
                      </v-card>
                    </v-col>
                    <v-col class="card" cols="6" md="4" lg="2">
                      <v-card class="d-flex justify-space-between">
                        <h4>領物單</h4>
                        <div><span class="num">6</span><span>件</span></div>
                      </v-card>
                    </v-col>
                  </template>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <!-- 案件填報 end -->
          <!-- 線上申請 start -->
          <v-row class="applySection">
            <v-col class="pt-1 pb-2" cols="12">
              <v-card>
                <h3 class="title">
                  <span class="icon"></span>
                  線上申請
                </h3>
                <v-row class="cardList">
                  <template v-for="i in 3" :key="i">
                    <v-col class="card" cols="6" md="4" lg="2">
                      <v-card class="d-flex justify-space-between">
                        <h4>電子表單</h4>
                        <div><span class="num">15</span><span>件</span></div>
                      </v-card>
                    </v-col>
                    <v-col class="card" cols="6" md="4" lg="2">
                      <v-card class="d-flex justify-space-between">
                        <h4>待簽收</h4>
                        <div><span class="num">30</span><span>件</span></div>
                      </v-card>
                    </v-col>
                    <v-col class="card" cols="6" md="4" lg="2">
                      <v-card class="d-flex justify-space-between">
                        <h4>領物單</h4>
                        <div><span class="num">6</span><span>件</span></div>
                      </v-card>
                    </v-col>
                  </template>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <!-- 線上申請 end -->
          <!-- 最新公告 start -->
          <v-row class="newsSection">
            <v-col class="pt-1 pb-2" cols="12">
              <v-card>
                <h3 class="title">
                  <span class="icon"></span>
                  最新公告
                </h3>
                <v-row class="cardList">
                  <v-col md="6">
                    <v-card class="newCard">
                      <h4>資訊科通報112年度ISMS 文件改版</h4>
                      <div class="d-flex info">
                        <span>人事公告</span>
                        <time>112/06/18</time>
                      </div>
                    </v-card>
                  </v-col>
                  <v-col md="6">
                    <v-card class="newCard">
                      <h4>
                        透過中文輸入軟體「嘸蝦米試用版 V7.0.8版本」可繞過Windows
                        Vista與Windows7密碼鎖定功能
                        透過中文輸入軟體「嘸蝦米試用版 V7.0.8版本」可繞過Windows
                        Vista與Windows7密碼鎖定功能
                      </h4>
                      <div class="d-flex info">
                        <span>人事公告</span>
                        <time>112/06/18</time>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <!-- 最新公告 end -->
          <!-- 會內網站連結 start -->
          <v-row class="linkSection">
            <v-col class="pt-1 pb-2" cols="12">
              <v-card class="">
                <h3 class="title">
                  <span class="icon"></span>
                  會內網站連結
                </h3>
                <v-list class="d-flex">
                  <template v-for="i in 5" :key="i">
                    <v-list-item>
                      <!-- 列表项的文本内容 -->
                      <v-list-item-title class="d-flex justify-space-between">
                        <a href="javascript:;">
                          <v-btn class="linkBtn"> 原住民人口資料庫 </v-btn>
                        </a>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title class="d-flex justify-space-between">
                        <a href="javascript:;">
                          <v-btn class="linkBtn"> 原住民人 </v-btn>
                        </a>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title class="d-flex justify-space-between">
                        <a href="javascript:;">
                          <v-btn class="linkBtn"> 原住民 </v-btn>
                        </a>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title class="d-flex justify-space-between">
                        <a href="javascript:;">
                          <v-btn class="linkBtn"> 原住民原住民 </v-btn>
                        </a>
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title class="d-flex justify-space-between">
                        <a href="javascript:;">
                          <v-btn class="linkBtn"> 原住民人口資料庫 </v-btn>
                        </a>
                      </v-list-item-title>
                    </v-list-item>
                  </template>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
          <!-- 會內網站連結 end -->
        </div>
      </v-card>
    </div>
    <v-footer class="footer">
      <v-row>
        <v-col class="text-center"> 2023 © 原住民委員會版權所有</v-col>
      </v-row>
    </v-footer>
  </div>
</template>

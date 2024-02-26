<template>
  <div class="page">
    <h2 class="title">新增標題</h2>
    <div class="d-flex pageLinkBtn">
      <v-card>
        <v-tabs show-arrows>
          <v-tab :ripple="false" key="1案件類別管理" value="1案件類別管理">
            帳號管理
          </v-tab>
          <v-tab :ripple="false" key="2案件管理" value="2案件管理">
            部門管理
          </v-tab>
          <v-tab :ripple="false" key="3案件填報" value="3案件填報">
            專案群組管理
          </v-tab>
          <v-tab :ripple="false" key="3案件填報" value="3案件填報">
            角色級職管理
          </v-tab>
          <v-tab :ripple="false" v-for="i in 5" :key="i" :value="'tab-' + i">
            案件管理{{ i }}
          </v-tab>
        </v-tabs>
      </v-card>
    </div>
    <div class="pageContent">
      <h3>交辦案件管理－交辦清單</h3>

      <v-card class="scrollContent">
        <div class="">
          <!-- tabsContent start -->
          <v-tabs v-model="tab" color="light" show-arrows>
            <v-tab value="one">基本資料</v-tab>
            <v-tab value="two">中央輪值</v-tab>
            <v-tab value="three">本會輪值</v-tab>
            <v-tab value="four">基本資料</v-tab>
            <v-tab value="five">中央輪值</v-tab>
            <v-tab value="six">本會輪值</v-tab>
          </v-tabs>
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="one">
                <!--這是 v-data-table-server -->
                <DataTable />
              </v-window-item>
              <v-window-item value="two">
                <v-row class="my-1">
                  <v-col cols="12" md="8">
                    <v-container class="inputGroup pb-0 ml-0">
                      <v-row class="formGrp">
                        <v-col cols="6" md="7" lg="4" class="py-0 d-flex">
                          <label class="text-primary" for="">列印區間</label>
                          <v-text-field
                            density="compact"
                            single-line
                            variant="solo"
                            hide-details="auto"
                            class="mr-0"
                          >
                            <template v-slot:append>
                              <v-icon> mdi-minus </v-icon>
                            </template>
                          </v-text-field>
                          <v-text-field
                            class="ml-1"
                            density="compact"
                            hide-details="auto"
                            single-line
                            variant="solo"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6" md="5" lg="3" class="py-0 d-flex">
                          <label class="text-primary" for="">開始序號</label>
                          <v-text-field
                            density="compact"
                            hide-details="auto"
                            single-line
                            variant="solo"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-col>
                  <v-col>
                    <div class="btnGroup right mb-0 mt-0">
                      <v-btn color="export" elevation="0">匯出報表</v-btn>
                      <v-btn color="import" elevation="0">匯入報表</v-btn>
                      <v-btn color="cancel" elevation="0">刪除</v-btn>
                      <v-btn color="submit" elevation="0">新增</v-btn>
                    </div>
                  </v-col>
                </v-row>
                <!-- <div class="btnGroup right mb-0 mt-4">
                  <v-btn color="export" elevation="0">匯出報表</v-btn>
                  <v-btn color="import" elevation="0">匯入報表</v-btn>
                  <v-btn color="cancel" elevation="0">刪除</v-btn>
                  <v-btn color="submit" elevation="0">新增</v-btn>
                </div> -->
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">帳號</th>
                      <th class="text-left">姓名</th>
                      <th class="text-left">單位</th>
                      <th class="text-left">職稱</th>
                      <th class="text-left">申請時密碼</th>
                      <th class="text-left">狀態</th>
                      <th class="text-left">動作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in data" :key="item.name">
                      <th>{{ item.id }}</th>
                      <td>{{ item.name }}</td>
                      <td>{{ item.class }}</td>
                      <td>{{ item.title }}</td>
                      <td>{{ item.password }}</td>
                      <td>{{ item.status }}</td>
                      <td>
                        <div class="btnGroup left">
                          <v-btn color="cancel" elevation="0" size="small"
                            >刪除</v-btn
                          >
                          <v-btn color="submit" elevation="0" size="small"
                            >新增</v-btn
                          >
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-window-item>
              <v-window-item value="three">
                <v-table class="cellTable">
                  <thead>
                    <tr>
                      <th class="text-center">選擇</th>
                      <th class="text-center">管制代號</th>
                      <th class="text-center">案件名稱</th>
                      <th class="text-center">填報期限</th>
                      <th class="text-center">交辦事項</th>
                      <th class="text-center">主辦單位</th>
                      <th class="text-center">預定完成日期</th>
                      <th class="text-center">辦理情形</th>
                      <th class="text-center">案件狀態</th>
                      <th class="text-center">審核狀態</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-for="i in 3" :key="i">
                      <tr class="text-center">
                        <td rowspan="2">
                          <v-checkbox></v-checkbox>
                        </td>
                        <td rowspan="2">666-01<br />(2023/08/14)</td>
                        <td rowspan="2">都市原住民發展 都市原住民發展</td>
                        <td rowspan="2">2023/08/14 <br />14:00</td>
                        <td rowspan="2">
                          <p class="mt-1">請回報</p>
                          <div class="btnGroup">
                            <v-btn
                              class="my-1"
                              color="submit"
                              elevation="0"
                              size="small"
                              >批次下載填報附件</v-btn
                            >
                          </div>
                        </td>
                        <td>
                          <p class="mt-1">教育文化處</p>
                          <div class="btnGroup ma-1">
                            <v-btn color="submit" elevation="0" size="small"
                              >批次下載填報附件</v-btn
                            >
                          </div>
                        </td>
                        <td>2023/08/14</td>
                        <td>
                          <ul>
                            <li>填報期限：2023/08/14</li>
                            <li>填報人：翁香珍</li>
                            <li>
                              本專案依XXX
                              辦理修正，並依規定送辦行政院公報，同時於本會網站更新資訊
                            </li>
                          </ul>
                        </td>
                        <td>
                          <p class="mt-1">持續追蹤</p>
                          <div class="btnGroup ma-1">
                            <v-btn color="submit" elevation="0" size="small"
                              >批次下載填報附件</v-btn
                            >
                          </div>
                        </td>
                        <td>
                          <p class="mt-1">持續追蹤</p>
                          <div class="btnGroup ma-1s">
                            <v-btn color="submit" elevation="0" size="small"
                              >審核歷程</v-btn
                            >
                            <v-btn color="cancel" elevation="0" size="small"
                              >管理者退回</v-btn
                            >
                          </div>
                        </td>
                      </tr>
                      <tr class="text-center">
                        <td>
                          <p class="mt-1">教育文化處</p>
                          <div class="btnGroup">
                            <v-btn
                              class="ma-1"
                              color="submit"
                              elevation="0"
                              size="small"
                              >批次下載填報附件</v-btn
                            >
                          </div>
                        </td>
                        <td>2023/08/14</td>
                        <td>填報期限：2023/08/14</td>
                        <td>
                          <p class="mt-1">持續追蹤</p>
                          <div class="btnGroup">
                            <v-btn
                              color="submit"
                              class="ma-1"
                              elevation="0"
                              size="small"
                              >批次下載填報附件</v-btn
                            >
                          </div>
                        </td>
                        <td><p class="mt-1">持續追蹤</p></td>
                      </tr>
                    </template>
                  </tbody>
                </v-table>
              </v-window-item>
              <v-window-item value="four"> 4 </v-window-item>
              <v-window-item value="five"> 5 </v-window-item>
            </v-window>
          </v-card-text>
          <!-- tabsContent end -->
          <!-- Pagination start -->
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="5"
              color="primary"
            ></v-pagination>
          </div>
          <!-- Pagination end -->
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import DataTable from "@/components/dataTableComponent.vue";
import { maskStore, pageStting } from "@/stores/storage.js";
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
    data: [
      {
        id: "varvar",
        name: "陳肉肉",
        class: "事務科",
        title: "事務員",
        password: "2wsx@@(OL>",
        status: "待審",
      },
      {
        id: "varvar",
        name: "陳肉肉",
        class: "事務科",
        title: "事務員",
        password: "2wsx@@(OL>",
        status: "待審",
      },
    ],
    //table serve
  }),
  created() {
    ps.setTopNavPageTiltle("帳號管理");
  },
  mounted() {
    this.removeIndexBg();
  },
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
    removeIndexBg() {
      const hasImg = document
        .querySelector(".content")
        .classList.contains("mpImg");
      if (hasImg) {
        document.querySelector(".content").classList.remove("mpImg");
      } else {
        return;
      }
    },
  },
  components: {
    DataTable,
  },
};
</script>

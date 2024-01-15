<script setup>
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import axios from "axios";
import { maskStore, pageStting } from "@/stores/storage.js";
import { VDataTableServer } from "vuetify/labs/VDataTable";
import DataTable from "@/components/dataTableComponent.vue";
import { router } from "@/router/index.js";
import { pageInfo } from "@/hyweb/pageInfo.js";
import common from "@/hyweb/common.js";
const mk = maskStore();
const ps = pageStting();

onBeforeMount(() => {
  //2-set pageInfo
  pageInfo.pageID = "account-list";
  pageInfo.pageTitle = { main: "帳號管理", sub: "帳號清單" };
  //topNavInfo setting
  ps.setTopNavPageTiltle(pageInfo.pageTitle.main);

  //3-search form info
  pageInfo.searchForm = { fkeyword: "", fstatus: null };
  //4-data table
  pageInfo.dataTable.sortBy = [{ key: "userID", order: "asc" }];
  pageInfo.dataTable["item-value"] = "userID";
  pageInfo.dataTable["show-select"] = true;
  pageInfo.dataTable.headers = [
    { title: "帳號", align: "start", key: "userID", sortable: true },
    { title: "姓名", align: "start", key: "userName", sortable: true },
    { title: "部門", align: "start", key: "userDept", sortable: true },
    { title: "Email", align: "start", key: "userEmail", sortable: true },
    { title: "狀態", align: "end", key: "userStatus", sortable: true },
    { title: "動作", align: "center", key: "action", sortable: false },
  ];
  pageInfo.actBtnList.length = 0;
  pageInfo.actBtnList.push({ name: "修改", to: "doModify", atype: "func" });
  pageInfo.actBtnList.push({ name: "停用", to: "doDel", atype: "func" });
  pageInfo.actBtnList.push({ name: "刪除", to: "doBan", atype: "func" });
  pageInfo.actFuncList = {
    doModify: () => {
      router.push({ name: "account-form", params: { userid: "luelue123" } });
    },
    doDel: () => {
      alert("delete");
    },
    doBan: () => {
      alert("doBan");
    },
  };

  //init page
  initPage();
  console.log("onBeforeMount:" + pageInfo.pageID);
});

onMounted(() => {
  console.log("onMounted:" + pageInfo.pageID);
});

//init page info(optionList or ....)
const initPage = () => {
  mk.doMask(true);
  let apiurl = "/account/init.json";
  getData.fetch(apiurl, {}).then((data) => {
    pageInfo.condition["statusList"] = data.statusList;
    mk.doMask(false);
    common.doLog("pageInfo.condition", pageInfo.condition);
  });
};

//dataTable change prop option={groupBy:[],itemsPerPage:10,page:1,search:,sortBy[]}
const loadItems = ({ page, itemsPerPage, sortBy }) => {
  pageInfo.dataTable.page = page;
  pageInfo.dataTable.sortBy = sortBy;
  pageInfo.dataTable["items-per-page"] = itemsPerPage;
  pageInfo.dataTable.loading = true;

  pageInfo.searchForm.currentPage = page;
  pageInfo.searchForm.pageSize = itemsPerPage;
  pageInfo.searchForm.sortBy = pageInfo.dataTable.sortBy;
  let apiurl = "/account/list.json";
  getData.fetch(apiurl, pageInfo.searchForm).then((data) => {
    pageInfo.dataTable.items = data.list;
    pageInfo.dataTable["items-length"] = data.totalItems;
    pageInfo.dataTable.loading = false;

    common.doLog("loadItems ", pageInfo);
  });
};

//search form submit
const searchHandler = () => {
  pageInfo.dataTable.loading = true;
  pageInfo.dataTable.page = 1;

  let apiurl = "/account/list.json";
  getData.fetch(apiurl, pageInfo.searchForm).then((data) => {
    pageInfo.dataTable.items = data.list;
    pageInfo.dataTable["items-length"] = data.totalItems;
    pageInfo.dataTable.loading = false;

    common.doLog("searchHandler", pageInfo.searchForm);
  });
};

//fetch axios data
const getData = {
  async fetch(apiurl, condForm) {
    return new Promise((resolve) => {
      setTimeout(() => {
        axios
          .post("/api" + apiurl, condForm)
          .then(function (response) {
            resolve(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, 500);
    });
  },
};

//dyanmic call method
const doFunc = (methodName) => {
  pageInfo.actFuncList[methodName]();
};
</script>

<!-- <template>
  <h1>{{ pageInfo.pageTitle }}</h1>
  <v-form @submit.prevent="searchHandler">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field v-model="pageInfo.searchForm.fkeyword" label="帳號、姓名或E-mail"></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-select label="狀態" v-model="pageInfo.searchForm.fstatus" :items="pageInfo.condition['statusList']"
            item-title="text" item-value="value"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn type="submit" color="success" size="default" location="center">
            查詢
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

  <pre>==>{{ pageInfo.dataTable.selected }}</pre>

  <v-data-table-server v-bind="pageInfo.dataTable" v-model="pageInfo.dataTable.selected" @update:options="loadItems">

    <template v-slot:item.action="{ item }">
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn density="compact" icon="smi-file-document-edit" size="small" color="success" v-bind="props" />
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in pageInfo.actBtnList" :key="index">
            <v-btn v-if="item.atype == 'link'" :to="item.to">{{ item.name }}</v-btn>
            <v-btn v-if="item.atype == 'func'" @click="doFunc(item.to)">{{ item.name }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>

    </template>
  </v-data-table-server>
</template> -->

<template>
  <div class="page">
    <h2 class="title">{{ pageInfo.pageTitle }}</h2>
    <div class="d-flex pageLinkBtn">
      <!-- <v-btn-toggle rounded="0" group>
        <v-btn :ripple="{ class: 'text-light' }">1案件類別管理</v-btn>
        <v-btn :ripple="{ class: 'text-light' }">2案件管理</v-btn>
        <v-btn :ripple="{ class: 'text-light' }">3案件填報</v-btn>
      </v-btn-toggle> -->
      <!-- <v-card>
        <v-tabs bg-color="#cccccc" show-arrows slider-color="orange-lighten-5">
          <v-tab key="1案件類別管理" value="1案件類別管理"> 帳號管理 </v-tab>
          <v-tab key="2案件管理" value="2案件管理"> 部門管理 </v-tab>
          <v-tab key="3案件填報" value="3案件填報"> 專案群組管理 </v-tab>
          <v-tab key="3案件填報" value="3案件填報"> 角色級職管理 </v-tab>
           <v-tab v-for="i in 12" :key="i" :value="'tab-' + i">
            案件管理{{ i }}
          </v-tab> 
        </v-tabs>
      </v-card> -->
    </div>

    <div class="pageContent">
      <!-- <h3>{{ pageInfo.subPageTitle }}</h3> -->
      <div class="functionGrp">
        <div class="searchGrp" style="width: 90%">
          <div class="searchList">
            <v-container>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="帳號、姓名或E-mail"
                    variant="outlined"
                    v-model="pageInfo.searchForm.fkeyword"
                  ></v-text-field>
                </v-col>
                <v-col cols="4">
                  <v-select
                    label="狀態"
                    variant="outlined"
                    v-model="pageInfo.searchForm.fstatus"
                    :items="pageInfo.condition['statusList']"
                    item-title="text"
                    item-value="value"
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <v-btn elevation="0">查詢</v-btn>
                  <v-btn
                    class="searchMoreBtn"
                    elevation="0"
                    @click="
                      pageInfo.searchForm.expand = !pageInfo.searchForm.expand
                    "
                    >進階搜尋</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </div>
          <!-- 進階搜尋視窗 start -->
          <div class="searchMoreContent">
            <v-expand-transition>
              <v-card v-show="pageInfo.searchForm.expand" class="">
                <v-form>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="6">
                        <div class="d-flex formGrp">
                          <label class="formTitle" for="">年度 : </label>
                          <v-autocomplete
                            variant="solo"
                            single-line
                            hide-details
                            density="compact"
                            :items="['1990', '1991', '1992']"
                          ></v-autocomplete>
                          <span class="tilde">~</span>
                          <v-autocomplete
                            variant="solo"
                            density="compact"
                            single-line
                            hide-details
                            :items="['1990', '1991', '1992']"
                          ></v-autocomplete>
                        </div>
                        <div class="d-flex formGrp">
                          <label class="formTitle" for="">類別 :</label>
                          <v-autocomplete
                            variant="solo"
                            single-line
                            density="compact"
                            hide-details
                            :items="['主管會報', '主管會報', '主管會報']"
                          ></v-autocomplete>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>

                <div class="d-flex btnList">
                  <v-btn elevation="0">查詢</v-btn>
                  <v-btn class="searchMoreBtn" elevation="0">進階搜尋</v-btn>
                </div>
                <v-btn
                  class="closeSearchMoreBtn"
                  elevation="0"
                  @click="
                    pageInfo.searchForm.expand = !pageInfo.searchForm.expand
                  "
                >
                  <span class="material-icons-round"> expand_less </span>
                </v-btn>
              </v-card>
            </v-expand-transition>
          </div>
        </div>
        <!-- 進階搜尋視窗 end -->
        <!-- 排序方式 start -->
        <!-- <div class="filterList">
          <div class="formGrp">
            <div class="formContent formInline">
              <div class="item">
                <span class="material-icons-round"> filter_alt </span>
                <select id="selectSample" name="">
                  <option value="">排序方式</option>
                  <option value="">視覺藝術</option>
                  <option value="">工藝</option>
                </select>
              </div>
              <div class="item">
                <span class="material-icons-round"> groups </span>
                <select id="selectSample" name="">
                  <option value="">排序方式</option>
                  <option value="">視覺藝術</option>
                  <option value="">工藝</option>
                </select>
              </div>
              <div class="functionBtnGrp">
                <span class="cardDirection">
                  <v-btn-toggle v-model="pageInfo.searchForm.listType" color="primary">
                    <v-btn elevation="G">
                      <span class="material-icons-round"> view_column </span>
                    </v-btn>
                    <v-btn elevation="T">
                      <span class="material-icons-round"> table_rows </span>
                    </v-btn>
                  </v-btn-toggle>
                </span>
                <v-btn elevation="0" density="comfortable" variant="text">
                  <span class="material-icons-round"> local_printshop </span>
                </v-btn>
              </div>
            </div>
          </div>
        </div> -->
        <!-- 排序方式 end-->
      </div>

      <v-card class="scrollContent">
        <div class="">
          <!-- tabsContent start -->
          <v-tabs v-model="pageInfo.curTab" color="light" show-arrows>
            <v-tab value="tb1">帳號清單</v-tab>
            <!-- <v-tab value="tb2">中央輪值</v-tab>
            <v-tab value="tb3">本會輪值</v-tab> -->
          </v-tabs>
          <v-card-text>
            <v-window v-model="pageInfo.curTab">
              <v-window-item value="tb1">
                <div class="btnGroup left">
                  <v-btn elevation="0">新增</v-btn>
                  <v-btn elevation="0">停用</v-btn>
                </div>

                <!-- <pre>{{ pageInfo.dataTable.selected }}</pre> -->

                <v-data-table-server
                  v-bind="pageInfo.dataTable"
                  v-model="pageInfo.dataTable.selected"
                  @update:options="loadItems"
                >
                  <template v-slot:item.action="{ item }">
                    <v-menu open-on-hover>
                      <template v-slot:activator="{ props }">
                        <v-btn
                          density="compact"
                          icon="smi-file-document-edit"
                          size="small"
                          color="success"
                          v-bind="props"
                        />
                      </template>
                      <v-list>
                        <v-list-item
                          v-for="(item, index) in pageInfo.actBtnList"
                          :key="index"
                        >
                          <v-btn v-if="item.atype == 'link'" :to="item.to">{{
                            item.name
                          }}</v-btn>
                          <v-btn
                            v-if="item.atype == 'func'"
                            @click="doFunc(item.to)"
                            >{{ item.name }}</v-btn
                          >
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </template>
                </v-data-table-server>
              </v-window-item>

              <v-window-item value="tb2">
                <h4>v-data-table-server</h4>
                <DataTable />
              </v-window-item>
              <v-window-item value="tb3"> Three </v-window-item>
            </v-window>
          </v-card-text>

          <!-- tabsContent end -->
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from "vue";
import api from "@/js/util/peopleFinder.js";
import common from "@/js/common.js";
import { maskStore, dataFinder } from "@/stores/storage.js";

const mk = maskStore();
const finder = dataFinder();
const FINDERID = finder.getPeopleFinder();
const formData = reactive({});

//check dialog open or close
const dialogIsShow = computed(() => finder.getStatus(FINDERID));
watch(dialogIsShow, (val) => {
  if (val) {
    mk.doMask(true);
    Object.assign(formData, {
      listType: "dept", //dept or group
      listValue: "", //dept or group id
      deptList: [],
      groupList: [],
      itemList: [], //所有待選項目LIST
      selectedList: [], //已選項目
      fromList: [], //當下點選"待選取"的選取項目
      toList: [], //當下點選"已選取"的選取項目
    });

    api.list({}).then((data) => {
      Object.assign(formData, data);
      Object.assign(formData.selectedList, finder.getFinder().seleceted);
      common.doLog("init finder", formData);
      mk.doMask(false);
    });
  }
});

const doCopySel = function () {
  //當下選取的項目 formData.selectList
  //console.log("current clikc item ---")
  //console.log(formData.fromList)

  //binding data
  let itemPos = -1;
  formData.itemList.forEach((item, index) => {
    if (formData.fromList.indexOf(item.id) >= 0) {
      if (
        finder.getFinder().seleceted.some((sitem) => sitem.id === item.id) == 0
      ) {
        formData.selectedList.push(item);
      }
      itemPos = index;
      return false;
    }
  });
  if (itemPos >= 0) {
    formData.itemList.splice(itemPos, 1); // 2nd parameter means remove one item only
  }
};

const doRemoveSel = function () {
  //console.log("current clikc seleceted item ---")
  //console.log(formData.toList)

  //binding data
  let itemPos = -1;
  formData.selectedList.forEach((item, index) => {
    if (formData.toList.indexOf(item.id) >= 0) {
      itemPos = index;
      return false;
    }
  });
  if (itemPos >= 0) {
    formData.selectedList.splice(itemPos, 1); // 2nd parameter means remove one item only
  }
};
const doSubmit = function () {
  finder.getFinder().seleceted.length = 0;
  Object.assign(finder.getFinder().seleceted, formData.selectedList);
  finder.closeFinder();
};
</script>

<template>
  <v-row class="finder">
    <v-dialog
      :modelValue="finder.getStatus(FINDERID)"
      scrollable
      class="peopleFinderCard"
      max-width="1200"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title>
          <v-container class="pb-0">
            <span class="text-primary">{{ finder.getFinder().title }}</span>
          </v-container>
        </v-card-title>
        <v-card-text>
          <v-container class="formContainer">
            <v-form class="formGrid">
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="formTitle">
                  <label for="type">人員/單位 </label>
                </v-col>
                <v-col>
                  <v-row class="d-flex align-center">
                    <v-col cols="12" class="d-flex align-start"
                      ><v-text-field
                        variant="solo"
                        single-line
                        class="w-100 mr-3"
                        density="compact"
                      ></v-text-field>
                      <v-btn class="mt-1">查詢</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="formTitle">
                  <label for="">單位/專案群組 </label>
                </v-col>
                <v-col>
                  <v-row>
                    <v-col cols="12" lg="3" md="4">
                      <v-radio-group
                        inline
                        color="secondary"
                        v-model="formData.listType"
                      >
                        <v-radio label="單位" value="dept"></v-radio>
                        <v-radio label="專案群組" value="group"></v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col>
                      <v-select
                        color="secondary"
                        variant="solo"
                        :model-value="formData.listValue"
                        :items="formData.deptList"
                        density="compact"
                        item-title="deptName"
                        item-value="deptID"
                      >
                      </v-select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="formTitle">
                  <label for="type">常用流程 </label>
                </v-col>
                <v-col>
                  <v-autocomplete
                    id="type"
                    color="secondary"
                    variant="solo"
                    single-line
                    density="compact"
                    :items="['流程一', '流程二', '流程三']"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="formTitle">
                  <label for="">交辦事項 </label>
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo"
                    single-line
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- 左右兩欄 start -->
              <v-row class="d-flex formGrp formGrp_2">
                <v-col cols="12" sm="" class="multipleContent">
                  <v-row>
                    <v-col class="bg-thead formGrpTitle mb-2 mx-3"
                      >所有人員列表</v-col
                    >
                  </v-row>
                  <v-row class="d-flex formGrp">
                    <v-col class="list multipleContent" cols="12">
                      <select
                        v-on:dblclick="doCopySel()"
                        v-model="formData.fromList"
                        multiple="multiple"
                        class="w-100 h-100"
                      >
                        <option
                          v-for="(item, index) in formData.itemList"
                          :key="index"
                          :value="item.id"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" sm="1" class="btnList">
                  <div
                    class="d-flex align-center justify-center flex-sm-column"
                  >
                    <v-btn
                      class="mb-2 mx-1"
                      icon="mdi-chevron-right"
                      color="import"
                      size="small"
                      v-on:click="doCopySel()"
                    ></v-btn>
                    <v-btn
                      class="mb-2 mx-1"
                      color="export"
                      icon="mdi-chevron-left"
                      size="small"
                      v-on:click="doRemoveSel()"
                    ></v-btn>
                    <v-btn
                      class="mb-2 mx-1"
                      icon="mdi-chevron-up"
                      color="import"
                      size="small"
                    ></v-btn>
                    <v-btn
                      color="export"
                      class="mb-2 mx-1"
                      icon="mdi-chevron-down"
                      size="small"
                    ></v-btn>
                  </div>
                </v-col>
                <v-col cols="12" sm="" class="multipleContent">
                  <v-row>
                    <v-col class="bg-thead formGrpTitle mb-2 mx-3"
                      >扣領數</v-col
                    >
                  </v-row>
                  <v-row class="d-flex formGrp">
                    <v-col class="list" cols="12">
                      <select
                        v-on:dblclick="doRemoveSel()"
                        v-model="formData.toList"
                        multiple="multiple"
                        class="w-100 h-100"
                      >
                        <option
                          v-for="(item, index) in formData.selectedList"
                          :key="index"
                          :value="item.id"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <!-- 左右兩欄 end -->
              <v-row class="d-flex formGrp formGrp_2">
                <v-col cols="12" sm="5" class="multipleContent">
                  <v-row>
                    <v-col class="bg-thead formGrpTitle mb-2 mx-3"
                      >單位決行人員</v-col
                    >
                  </v-row>
                  <v-row class="d-flex formGrp">
                    <v-col class="list multipleContent" cols="12">
                      <select multiple="multiple" class="w-100 h-100">
                        <option
                          v-for="(item, index) in 6"
                          :key="index"
                          :value="測試測試"
                        >
                          測試測試
                        </option>
                      </select>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col>
                  <v-row class="d-flex formGrp">
                    <v-col cols="12" md="4" class="">
                      <label for="type">資訊單位/審核人員 </label>
                    </v-col>
                    <v-col>
                      <v-radio-group inline color="secondary">
                        <v-radio label="許小傑" value="true"></v-radio>
                        <v-radio label="邱大發" value="false"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn
            class="submit"
            elevation="0"
            color="submit"
            variant="flat"
            rounded="lg"
            size="large"
            @click="doSubmit()"
          >
            送出
          </v-btn>
          <v-btn
            color="cancel"
            variant="flat"
            rounded="lg"
            size="large"
            class="cancel"
            @click="finder.closeFinder()"
          >
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

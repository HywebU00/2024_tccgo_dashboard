<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<template>
  <v-row class="finder">
    <v-container>
      <p class="text-light">
        PeopleFinder 元件放於 components/PeopleFinder_hasJs.vue
      </p>
    </v-container>
    <v-dialog
      class="peopleFinderCard"
      v-model="dialog"
      scrollable
      max-width="1200"
      transition="dialog-bottom-transition"
    >
      <!-- Demo 專用用按鈕 start -->

      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> peopleDemo範例元件 按鈕</v-btn>
      </template>
      <!-- Demo 專用用按鈕 end -->
      <v-card>
        <v-card-title>
          <v-container class="pb-0">
            <span class="text-primary">選擇知識樹擁有者</span>
          </v-container>
        </v-card-title>
        <v-card-text>
          <v-container class="formContainer">
            <v-form class="formGrid">
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
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
                <v-col cols="12" md="2" class="">
                  <label for="">單位/專案群組 </label>
                </v-col>
                <v-col>
                  <v-row>
                    <v-col cols="12" lg="3" md="4">
                      <v-radio-group inline color="secondary">
                        <v-radio label="單位" value="true"></v-radio>
                        <v-radio label="專案群組" value="false"></v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col>
                      <v-autocomplete
                        id="type"
                        color="secondary"
                        variant="solo"
                        single-line
                        density="compact"
                        :items="['布農族', '阿美族', '卑南族']"
                      ></v-autocomplete>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
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
                <v-col cols="12" md="2" class="">
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
                    <v-col class="bg-thead formGrpTitle mb-2 mx-2"
                      >應領數</v-col
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
                <v-col cols="12" sm="1" class="btnList">
                  <div
                    class="d-flex align-center justify-center flex-sm-column"
                  >
                    <v-btn
                      class="mb-2 mx-1"
                      icon="mdi-chevron-right"
                      color="import"
                      size="small"
                    ></v-btn>
                    <v-btn
                      class="mb-2 mx-1"
                      color="export"
                      icon="mdi-chevron-left"
                      size="small"
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
                    <v-col class="bg-thead formGrpTitle mb-2 mx-2"
                      >扣領數</v-col
                    >
                  </v-row>
                  <v-row class="d-flex formGrp">
                    <v-col class="list" cols="12">
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
              </v-row>
              <!-- 左右兩欄 end -->
              <v-row class="d-flex formGrp formGrp_2">
                <v-col cols="12" sm="" class="multipleContent">
                  <v-row>
                    <v-col class="bg-thead formGrpTitle mb-2 mx-2"
                      >單位決行人員</v-col
                    >
                  </v-row>
                  <v-row class="d-flex formGrp">
                    <v-col class="list multipleContent" cols="12" sm="">
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
                <v-col cols="12" sm="1" class="btnList">
                  <div
                    class="d-flex align-center justify-center flex-sm-column"
                  ></div>
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
            @click="dialog = !dialog"
          >
            送出
          </v-btn>
          <v-btn
            color="cancel"
            variant="flat"
            rounded="lg"
            size="large"
            class="cancel"
            @click="dialog = !dialog"
          >
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<template>
  <div class="page">
    <div class="pageContent">
      <h3>線上相片管理</h3>
      <!-- 搜尋列表 start -->
      <div class="functionGrp">
        <v-container>
          <v-row>
            <v-col class="searchGrp">
              <v-form class="searchList">
                <v-expansion-panels v-model="panel">
                  <v-expansion-panel>
                    <v-expansion-panel-title
                      @click.stop="panelsHandle"
                      hide-actions
                    >
                      <v-row>
                        <v-col>
                          <v-row class="d-flex formGrp">
                            <v-col cols="12" md="3">
                              <label for="">年度 :</label>
                            </v-col>
                            <v-col md="9" cols="12">
                              <v-row>
                                <v-col>
                                  <v-autocomplete
                                    color="secondary"
                                    variant="solo"
                                    single-line
                                    density="compact"
                                    hide-details="auto"
                                    :items="['1990', '1991', '1992']"
                                  ></v-autocomplete>
                                </v-col>
                                <v-col cols="auto tilde">
                                  <span>~</span>
                                </v-col>
                                <v-col>
                                  <v-autocomplete
                                    color="secondary"
                                    variant="solo"
                                    single-line
                                    density="compact"
                                    placeholder=""
                                    hide-details="auto"
                                    :items="['1990', '1991', '1992']"
                                  ></v-autocomplete>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col>
                          <v-row class="d-flex formGrp">
                            <v-col cols="12" md="3">
                              <label for="">控管編號:</label>
                            </v-col>
                            <v-col cols="12" md="9">
                              <v-row>
                                <v-col>
                                  <v-text-field
                                    variant="solo"
                                    single-line
                                    density="compact"
                                    hide-details="auto"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="auto tilde">
                                  <span>~</span>
                                </v-col>
                                <v-col>
                                  <v-text-field
                                    variant="solo"
                                    single-line
                                    hide-details="auto"
                                    density="compact"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col
                          cols="12"
                          lg="3"
                          class="d-flex justify-lg-end justify-center align-center btnList"
                        >
                          <v-btn class="submit">查詢</v-btn>
                          <v-btn
                            class="searchMoreBtn"
                            @click.stop="this.panel = 0"
                            >進階搜尋</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-row class="">
                        <!-- 類別start -->
                        <v-col md="6" cols="12">
                          <v-row class="d-flex formGrp">
                            <v-col cols="12" md="3" class="">
                              <label for="">類別:</label>
                            </v-col>
                            <v-col>
                              <v-row>
                                <v-col cols="12" md="12">
                                  <v-autocomplete
                                    color="secondary"
                                    variant="solo"
                                    single-line
                                    density="compact"
                                    placeholder="輸入地址"
                                    error-messages=""
                                    :items="['台北市', '新北市', '基隆市']"
                                  ></v-autocomplete>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                        <!-- 類別end -->
                        <!-- 控管編號start -->
                        <v-col md="6" cols="12">
                          <v-row class="d-flex formGrp">
                            <v-col cols="12" md="3" class="">
                              <label for="">控管編號:</label>
                            </v-col>
                            <v-col>
                              <v-row>
                                <v-col>
                                  <v-text-field
                                    variant="solo"
                                    error-messages="錯誤訊息 錯誤訊息"
                                    single-line
                                    density="compact"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="auto tilde">
                                  <span>~</span>
                                </v-col>
                                <v-col>
                                  <v-text-field
                                    variant="solo"
                                    error-messages="錯誤訊息 錯誤訊息"
                                    single-line
                                    density="compact"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                        <!-- 控管編號end -->
                        <!-- 案件狀態start -->
                        <v-col md="6" cols="12">
                          <v-row class="d-flex formGrp">
                            <v-col cols="12" md="3">
                              <label for="list">案件狀態</label>
                            </v-col>
                            <v-col>
                              <v-row>
                                <v-col class="checkGrp" id="list">
                                  <v-checkbox
                                    density="compact"
                                    hide-details
                                    label="繼續追蹤"
                                  ></v-checkbox>
                                  <v-checkbox
                                    density="compact"
                                    hide-details
                                    label="建議解除列管"
                                  ></v-checkbox>
                                  <v-checkbox
                                    density="compact"
                                    hide-details
                                    label="解除列管"
                                  ></v-checkbox>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                        <!-- 案件狀態end -->
                        <!-- 辦理單位start -->
                        <v-col md="6" cols="12">
                          <v-row class="d-flex formGrp">
                            <v-col cols="12" md="3" class="">
                              <label>辦理單位:</label>
                            </v-col>
                            <v-col>
                              <v-row>
                                <v-col>
                                  <v-text-field
                                    variant="solo"
                                    single-line
                                    error-messages=""
                                    density="compact"
                                  ></v-text-field
                                ></v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                        <!-- 辦理單位end -->
                        <!-- 交辦事項start -->
                        <v-col md="6" cols="12">
                          <v-row class="d-flex formGrp">
                            <v-col cols="12" md="3" class="">
                              <label>交辦事項:</label>
                            </v-col>
                            <v-col>
                              <v-row>
                                <v-text-field
                                  variant="solo"
                                  single-line
                                  error-messages=""
                                  density="compact"
                                ></v-text-field>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                        <!-- 交辦事項end -->
                        <!-- 管制代號start -->
                        <v-col md="6" cols="12">
                          <v-row class="d-flex formGrp">
                            <v-col cols="12" md="3" class="">
                              <label>管制代號:</label>
                            </v-col>
                            <v-col>
                              <v-row>
                                <v-col>
                                  <v-text-field
                                    variant="solo"
                                    single-line
                                    error-messages=""
                                    density="compact"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-col>
                        <!-- 管制代號end -->
                      </v-row>
                      <v-row>
                        <v-col cols="12" class="pt-0">
                          <div class="d-flex btnList justify-center">
                            <v-btn class="submit">查詢</v-btn>
                            <v-btn class="searchMoreBtn">進階搜尋</v-btn>
                          </div>
                        </v-col>
                        <v-col class="d-flex justify-center">
                          <v-btn
                            class="closeSearchMoreBtn"
                            elevation="0"
                            @click="open"
                          >
                            <span class="material-icons-round">
                              expand_less
                            </span>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- 搜尋列表 end -->
      <v-card class="scrollContent">
        <div class="">
          <v-container>
            <PeopleFinder />
          </v-container>
          <!-- Pagination start -->
          <v-row>
            <v-col class="">
              <v-pagination
                v-model="page"
                :length="5"
                rounded="circle"
                color="primary"
              ></v-pagination>
            </v-col>
          </v-row>
          <!-- Pagination end -->
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import PeopleFinder from "@/components/PeopleFinder.vue";
import { maskStore, pageStting } from "@/stores/storage.js";
const ps = pageStting();
export default {
  data: () => ({
    mk: maskStore(),
    ps: pageStting(),
    tab: null,
    toggle: null,
    functionGroupToggle: 0,
    page: 1,
    panel: 1,
    //  dialog data
    dialog: false,
    listStyle: false,
    //checkbox
    selected: ["John"],
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
    PeopleFinder,
  },
};
</script>

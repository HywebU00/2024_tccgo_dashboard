<template>
  <div class="page">
    <h2 class="title">新增申請標題</h2>
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
      <h3>新增申請</h3>
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
                                  <v-select
                                    color="secondary"
                                    variant="solo"
                                    single-line
                                    density="compact"
                                    hide-details="auto"
                                    :items="['1990', '1991', '1992']"
                                  ></v-select>
                                </v-col>
                                <v-col cols="auto tilde">
                                  <span>~</span>
                                </v-col>
                                <v-col>
                                  <v-select
                                    color="secondary"
                                    variant="solo"
                                    single-line
                                    density="compact"
                                    placeholder=""
                                    hide-details="auto"
                                    :items="['1990', '1991', '1992']"
                                  ></v-select>
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
                                  <v-select
                                    color="secondary"
                                    variant="solo"
                                    single-line
                                    density="compact"
                                    placeholder="輸入地址"
                                    error-messages=""
                                    :items="['台北市', '新北市', '基隆市']"
                                  ></v-select>
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
                        <!-- 屆會次別 start -->
                        <v-col class="col-12-item" md="12" cols="12">
                          <v-row class="d-flex formGrp">
                            <v-col md="3" cols="12">
                              <label>屆會次別:</label>
                            </v-col>
                            <v-col>
                              <v-radio-group color="secondary">
                                <v-row>
                                  <v-col cols="12" md="4">
                                    <v-select
                                      color="secondary"
                                      variant="solo"
                                      single-line
                                      density="compact"
                                      hide-details="auto"
                                      :items="['選項ㄧ', '選項二', '選項三']"
                                    >
                                      <template v-slot:prepend>
                                        <v-radio value="true"></v-radio>
                                        <span>第</span>
                                      </template>
                                      <template v-slot:append>
                                        <span>屆</span>
                                      </template>
                                    </v-select>
                                  </v-col>
                                  <v-col class="ml-3 ml-md-0">
                                    <v-select
                                      color="secondary"
                                      variant="solo"
                                      single-line
                                      density="compact"
                                      hide-details="auto"
                                      :items="['選項ㄧ', '選項二', '選項三']"
                                    >
                                      <template v-slot:prepend>
                                        <span>第</span>
                                      </template>
                                      <template v-slot:append>
                                        <span>次</span>
                                      </template>
                                    </v-select>
                                  </v-col>
                                  <v-col cols="2">
                                    <v-select
                                      color="secondary"
                                      variant="solo"
                                      single-line
                                      density="compact"
                                      hide-details="auto"
                                      :items="['選項ㄧ', '選項二', '選項三']"
                                    >
                                    </v-select>
                                  </v-col>
                                  <v-col>
                                    <v-text-field
                                      placeholder="886"
                                      density="compact"
                                      single-line
                                      variant="solo"
                                      hide-details="auto"
                                    >
                                      <template v-slot:prepend>
                                        <span>第</span>
                                      </template>
                                      <template v-slot:append>
                                        <span>次會議</span>
                                      </template>
                                    </v-text-field>
                                  </v-col>
                                </v-row>
                                <v-row>
                                  <v-col>
                                    <v-select
                                      color="secondary"
                                      variant="solo"
                                      single-line
                                      density="compact"
                                      hide-details="auto"
                                      :items="['選項ㄧ', '選項二', '選項三']"
                                    >
                                      <template v-slot:prepend>
                                        <v-radio value="false"></v-radio>
                                        <span>第</span>
                                      </template>
                                      <template v-slot:append>
                                        <span>屆休會</span>
                                      </template>
                                    </v-select>
                                  </v-col>
                                </v-row>
                              </v-radio-group>
                            </v-col>
                          </v-row>
                        </v-col>
                        <!-- 屆會次別 end -->
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
          <v-container class="formContainer">
            <v-form class="formGrid">
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2">
                  <label for="type"
                    >族名
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col>
                  <!-- -->
                  <v-text-field
                    error-messages="錯誤訊息 錯誤訊息"
                    variant="solo"
                    single-line
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="type"
                    >族別
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col>
                  <v-select
                    color="secondary"
                    variant="solo"
                    error-messages=""
                    single-line
                    density="compact"
                    :items="['布農族', '阿美族', '卑南族']"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="mail"
                    >Email
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo"
                    single-line
                    error-messages=""
                    id="mail"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="type"
                    >行動電話
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col>
                  <v-text-field
                    variant="solo"
                    single-line
                    error-messages=""
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="list"
                    >多選選單
                    <abbr class="necessary" title="為必填(選)欄位,不能為空白。"
                      >*</abbr
                    ></label
                  >
                </v-col>
                <v-col class="checkGrp" id="list">
                  <v-checkbox
                    density="compact"
                    error-messages=""
                    label="中文"
                  ></v-checkbox>
                  <v-checkbox
                    density="compact"
                    error-messages=""
                    label="英文"
                  ></v-checkbox>
                  <v-checkbox
                    density="compact"
                    error-messages=""
                    label="日文"
                  ></v-checkbox>
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
                    error-messages=""
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="">編號 </label>
                </v-col>
                <v-col cols="6" md="4" class="d-flex align-end">
                  <v-text-field variant="solo" density="compact" />
                  <span class="mb-3 ml-2 text-primary">字</span>
                </v-col>
                <v-col cols="6" md="4" class="d-flex align-end">
                  <span class="mb-3 mr-2 text-primary">第</span>
                  <v-text-field variant="solo" density="compact" />
                  <span class="mb-3 ml-2 text-primary">號</span>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="">文字輸入 </label>
                </v-col>
                <v-col>
                  <v-textarea
                    placeholder="請輸入文字"
                    variant="solo"
                    error-messages=""
                    hide-details="auto"
                    density="compact"
                    auto-grow
                    rows="6"
                    row-height="30"
                    floating
                    shaped
                    class="mb-2"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="">單選 </label>
                </v-col>
                <v-col>
                  <v-radio-group inline color="secondary" hide-details="auto">
                    <v-radio label="是" value="true"></v-radio>
                    <v-radio label="否" value="false"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="">住址</label>
                </v-col>
                <v-col>
                  <v-row>
                    <v-col cols="6" md="3">
                      <v-select
                        color="secondary"
                        variant="solo"
                        single-line
                        density="compact"
                        hide-details="auto"
                        placeholder="輸入地址"
                        error-messages=""
                        :items="['台北市', '新北市', '基隆市']"
                      ></v-select>
                    </v-col>
                    <v-col cols="6" md="3">
                      <v-select
                        variant="solo"
                        single-line
                        color="secondary"
                        density="compact"
                        placeholder="輸入地址"
                        hide-details="auto"
                        error-messages=""
                        :items="['台北市', '新北市', '基隆市']"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
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
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="">兩欄欄位</label>
                </v-col>
                <v-col>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-select
                        color="secondary"
                        variant="solo"
                        single-line
                        hide-details="auto"
                        density="compact"
                        placeholder="輸入地址"
                        :items="['台北市', '新北市', '基隆市']"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-select
                        variant="solo"
                        single-line
                        color="secondary"
                        hide-details="auto"
                        density="compact"
                        placeholder="輸入地址"
                        error-messages=""
                        :items="['台北市', '新北市', '基隆市']"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <!-- 屆會次別 start -->
              <v-row class="d-flex formGrp">
                <v-col md="2" cols="12">
                  <label>屆會次別:</label>
                </v-col>
                <v-col>
                  <v-radio-group color="secondary">
                    <v-row>
                      <v-col cols="12" md="4">
                        <v-select
                          color="secondary"
                          variant="solo"
                          single-line
                          density="compact"
                          hide-details="auto"
                          :items="['選項ㄧ', '選項二', '選項三']"
                        >
                          <template v-slot:prepend>
                            <v-radio value="true"></v-radio>
                            <span>第</span>
                          </template>
                          <template v-slot:append>
                            <span>屆</span>
                          </template>
                        </v-select>
                      </v-col>
                      <v-col class="ml-3 ml-md-0">
                        <v-select
                          color="secondary"
                          variant="solo"
                          single-line
                          density="compact"
                          hide-details="auto"
                          :items="['選項ㄧ', '選項二', '選項三']"
                        >
                          <template v-slot:prepend>
                            <span>第</span>
                          </template>
                          <template v-slot:append>
                            <span>次</span>
                          </template>
                        </v-select>
                      </v-col>
                      <v-col cols="2">
                        <v-select
                          color="secondary"
                          variant="solo"
                          single-line
                          density="compact"
                          hide-details="auto"
                          :items="['選項ㄧ', '選項二', '選項三']"
                        >
                        </v-select>
                      </v-col>
                      <v-col>
                        <v-text-field
                          placeholder="886"
                          density="compact"
                          single-line
                          variant="solo"
                          hide-details="auto"
                        >
                          <template v-slot:prepend>
                            <span>第</span>
                          </template>
                          <template v-slot:append>
                            <span>次會議</span>
                          </template>
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-select
                          color="secondary"
                          variant="solo"
                          single-line
                          density="compact"
                          hide-details="auto"
                          :items="['選項ㄧ', '選項二', '選項三']"
                        >
                          <template v-slot:prepend>
                            <v-radio value="false"></v-radio>
                            <span>第</span>
                          </template>
                          <template v-slot:append>
                            <span>屆休會</span>
                          </template>
                        </v-select>
                      </v-col>
                    </v-row>
                  </v-radio-group>
                </v-col>
              </v-row>
              <!-- 屆會次別 end -->
              <!-- 按鈕列 start -->
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="">按鈕欄位</label>
                </v-col>
                <v-col cols="12" md="10">
                  <div>
                    <v-btn
                      class="ma-1"
                      @click="doReport(1)"
                      elevation="0"
                      type="button"
                      text="車輛繳納燃料費及牌照稅明細表"
                      color="export"
                    />
                    <v-btn
                      class="ma-1"
                      @click="doReport(2)"
                      elevation="0"
                      type="button"
                      text="車輛繳納保險費明細表"
                      color="export"
                    />
                    <v-btn
                      @click="doReport(2)"
                      elevation="0"
                      type="button"
                      text="車輛消耗油料暨行駛里程統計表"
                      color="export"
                    />
                    <v-btn
                      class="ma-1"
                      @click="doReport(2)"
                      elevation="0"
                      type="button"
                      text="公務汽車加油情形統計表"
                      color="export"
                    />
                    <v-btn
                      class="ma-1"
                      @click="doReport(2)"
                      elevation="0"
                      type="button"
                      text="公務汽車每公升平均行駛里程數統計表"
                      color="export"
                    />
                    <v-btn
                      class="ma-1"
                      @click="doReport(2)"
                      elevation="0"
                      type="button"
                      text="車輛加油及里程數紀錄表"
                      color="export"
                    />
                    <v-btn
                      class="ma-1"
                      @click="doReport(2)"
                      elevation="0"
                      type="button"
                      text="高速公路電子收費表"
                      color="export"
                    />
                  </div>
                </v-col>
              </v-row>
              <!-- 按鈕列 end -->

              <!-- formGrp 資料列表 start -->
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="">資料欄位</label>
                </v-col>
                <v-col cols="12" md="10" class="mb-2">
                  112年公務人員特種考試原住民族考試各等別、類科及暫定需用名額表1份，請自行下載參閱。112年公務人員特種考試原住民族考試各等別、類科及暫定需用名額表1份，請自行下載參閱。112年公務人員特種考試原住民族考試各等別、類科及暫定需用名額表1份，請自行下載參閱。
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="">資料欄位</label>
                </v-col>
                <v-col cols="12" md="10">
                  112年公務人員特種考試原住民族考試各等別。
                </v-col>
              </v-row>
              <v-row class="d-flex formGrp">
                <v-col cols="12" md="2" class="">
                  <label for="">資料欄位</label>
                </v-col>
                <v-col cols="12" md="10">
                  112年公務人員特種考試原住民族考試各等別。
                </v-col>
              </v-row>
              <!-- formGrp 資料列表 end -->
              <!-- 左右兩欄 start -->
              <v-row class="d-flex formGrp formGrp_2">
                <v-col cols="12" md="6">
                  <v-row>
                    <v-col class="bg-thead formGrpTitle mb-5 mx-3"
                      >應領數</v-col
                    >
                  </v-row>
                  <v-row class="d-flex formGrp" v-for="i in 3" :key="i">
                    <v-col cols="12" md="3">
                      <label for="type"
                        >欄位一
                        <abbr
                          class="necessary"
                          title="為必填(選)欄位,不能為空白。"
                          >*</abbr
                        ></label
                      >
                    </v-col>
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
                <v-col cols="12" md="6">
                  <v-row>
                    <v-col class="bg-thead formGrpTitle mb-5 mx-3"
                      >扣領數</v-col
                    >
                  </v-row>
                  <v-row class="d-flex formGrp" v-for="i in 3" :key="i">
                    <v-col cols="12" md="3" class="">
                      <label for="type"
                        >欄位一
                        <abbr
                          class="necessary"
                          title="為必填(選)欄位,不能為空白。"
                          >*</abbr
                        ></label
                      >
                    </v-col>
                    <v-col>
                      <v-text-field
                        variant="solo"
                        single-line
                        density="compact"
                      ></v-text-field
                    ></v-col>
                  </v-row>
                </v-col>
              </v-row>
              <!-- 左右兩欄 end -->
            </v-form>
          </v-container>
          <v-row>
            <v-col class="btnGroup center mb-2">
              <v-btn elevation="0" class="submitBtn" color="submit">送出</v-btn>
              <v-btn elevation="0" class="cancelBtn" color="cancel">取消</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
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
    panel1: 1,
    radios: "",
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
    panelsHandle1() {
      if (this.panel1 == 0) {
        this.panel1 = 1;
      } else {
        this.panel1 = 0;
      }
    },
    open() {
      this.panel = 1;
    },
    open1() {
      this.panel1 = 1;
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
  components: {},
};
</script>

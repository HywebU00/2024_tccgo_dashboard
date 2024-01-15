<template>
  <div class="h-screen w-100 d-flex justify-center loginPage">
    <div class="">
      <!-- loginCard" -->
      <v-sheet elevation="5" class="mx-auto loginCard">
        <div class="logo mx-auto">
          <v-img class="mx-auto" cover="" src="~@/assets/logo.png"></v-img>
        </div>
        <h2 class="logoText">
          <v-img src="~@/assets/login_text.png"></v-img>
        </h2>

        <v-form>
          <v-text-field
            prepend-inner-icon="mdi-account"
            density="compact"
            hide-details="auto"
            variant="solo"
            label="請輸入帳號"
            class="idInput"
            single-line
          ></v-text-field>
          <v-text-field
            label="請輸入密碼"
            class="passwordInput"
            prepend-inner-icon="mdi-lock"
            type="password"
            variant="solo"
            density="compact"
            single-line
            hide-details="auto"
            @click:append-inner="visible = !visible"
          ></v-text-field>
          <div class="d-flex align-center">
            <v-text-field
              class="mb-0 mr-2"
              density="compact"
              hide-details
              variant="solo"
              label="請輸入驗證碼"
              single-line
            ></v-text-field>
            <v-img
              cover
              class="dynaImage"
              src="~@/assets/dynaimage.png"
            ></v-img>
          </div>
          <div class="d-flex align-center justify-center btnList">
            <v-btn block class="logInBtn">登入</v-btn>
            <!-- <v-dialog
              class="dialogCard"
              v-model="dialog"
              scrollable
              max-width="870"
            >
              <template v-slot:activator="{ props }">
                <v-btn class="signUpBtn" v-bind="props"> 申請帳號 </v-btn>
              </template>
              <v-card class="">
                <v-form>
                  <v-card-title>
                    <v-container>
                      <span class="text-primary">申請帳號</span>
                    </v-container>
                  </v-card-title>
                  <v-card-text>
                    <v-container class="formContainer">
                      <v-row class="d-flex formGrp">
                        <v-col cols="12" md="2" class="">
                          <label for=""
                            >使用者帳號
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
                            hide-details="auto"
                          ></v-text-field
                        ></v-col>
                      </v-row>
                      <v-row class="d-flex formGrp">
                        <v-col cols="12" md="2" class="">
                          <label for=""
                            >密碼
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
                            hide-details="auto"
                            type="password"
                            placeholder="8 個字元以上要包含數字英文大小寫特殊符號"
                            density="compact"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row class="d-flex formGrp">
                        <v-col cols="12" md="2" class="">
                          <label for=""
                            >再確認密碼
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
                            hide-details="auto"
                            type="password"
                            density="compact"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row class="d-flex formGrp">
                        <v-col cols="12" md="2" class="">
                          <label for=""
                            >中文姓名
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
                            hide-details="auto"
                            single-line
                            placeholder="請輸入中文姓名"
                            density="compact"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row class="d-flex formGrp">
                        <v-col cols="12" md="2" class="">
                          <label for="mail"
                            >Email
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
                            type="email"
                            hide-details="auto"
                            id="mail"
                            density="compact"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row class="d-flex formGrp">
                        <v-col cols="12" md="2" class="">
                          <label for=""
                            >行動電話
                            <abbr
                              class="necessary"
                              title="為必填(選)欄位,不能為空白。"
                              >*</abbr
                            ></label
                          >
                        </v-col>
                        <v-col>
                          <v-text-field
                            hide-details="auto"
                            variant="solo"
                            single-line
                            density="compact"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row class="d-flex formGrp">
                        <v-col cols="12" md="2" class="">
                          <label for="list"
                            >多選選單
                            <abbr
                              class="necessary"
                              title="為必填(選)欄位,不能為空白。"
                              >*</abbr
                            ></label
                          >
                        </v-col>
                        <v-col class="checkGrp" id="list">
                          <v-checkbox
                            density="compact"
                            label="中文"
                          ></v-checkbox>
                          <v-checkbox
                            density="compact"
                            label="英文"
                          ></v-checkbox>
                          <v-checkbox
                            density="compact"
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
                            hide-details="auto"
                            variant="solo"
                            single-line
                            density="compact"
                          ></v-text-field>
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
                            density="compact"
                            auto-grow
                            rows="6"
                            row-height="30"
                            shaped
                          ></v-textarea>
                        </v-col>
                      </v-row>
                      <v-row class="d-flex formGrp">
                        <v-col cols="12" md="2" class="">
                          <label for="">單選 </label>
                        </v-col>
                        <v-col>
                          <v-radio-group inline color="secondary">
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
                              <v-autocomplete
                                color="secondary"
                                variant="solo"
                                single-line
                                density="compact"
                                placeholder="輸入地址"
                                :items="['台北市', '新北市', '基隆市']"
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="6" md="3">
                              <v-autocomplete
                                variant="solo"
                                single-line
                                color="secondary"
                                density="compact"
                                placeholder="輸入地址"
                                :items="['台北市', '新北市', '基隆市']"
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-text-field
                                error-messages="錯誤錯誤錯誤訊息"
                                variant="solo"
                                single-line
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
                              <v-autocomplete
                                color="secondary"
                                variant="solo"
                                hide-details="auto"
                                single-line
                                density="compact"
                                placeholder="輸入地址"
                                :items="['台北市', '新北市', '基隆市']"
                              ></v-autocomplete>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-autocomplete
                                variant="solo"
                                single-line
                                color="secondary"
                                density="compact"
                                hide-details="auto"
                                placeholder="輸入地址"
                                :items="['台北市', '新北市', '基隆市']"
                              ></v-autocomplete>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions class="justify-center">
                    <v-btn
                      class="submit"
                      elevation="0"
                      variant="flat"
                      @click="dialog = false"
                      rounded="lg"
                      size="large"
                      >送出</v-btn
                    >
                    <v-btn
                      elevation="0"
                      rounded="lg"
                      variant="flat"
                      size="large"
                      color="cancel"
                      class="cancel"
                      @click="dialog = false"
                      >取消</v-btn
                    >
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog> -->
          </div>
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false,
    dialog: false,
  }),

  methods: {},
  mounted() {},
};
</script>

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
      <p class="text-light">lightBox 元件放於 components/lightBox.vue</p>
    </v-container>
    <v-dialog
      class=""
      v-model="dialog"
      scrollable
      max-width="1200"
      transition="dialog-bottom-transition"
    >
      <!-- Demo 專用用按鈕 start -->

      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> lightBox 範例元件 按鈕</v-btn>
      </template>
      <!-- Demo 專用用按鈕 end -->
      <v-card>
        <v-card-title>
          <v-container class="pb-0">
            <span class="text-primary">要目名稱取得原則</span>
          </v-container>
        </v-card-title>
        <v-card-text>
          <v-container class="lightBoxInfo">
            <div class="title">要目名稱取得原則</div>
            <ul>
              <li>以目錄最內層、有頁碼者為最小單位產出一則基本資料。</li>
            </ul>
            <div class="title">查詢結果要目標題</div>
            <ul>
              <li>
                為使查詢結果顯示更為清楚，需將部分要目則要目拆成兩筆，說明如下：
              </li>
            </ul>
            <ol>
              <li>
                若於要目目錄解析出要目分類為「會議紀錄」則其要目標題為「會議紀錄及速記錄時」，則需解析出會議紀錄及速記錄兩筆。如
                <ul>
                  <li>
                    <span class="block">
                      會議紀錄 <br />
                      第9屆第24次臨時大會第1次會議紀錄及速記錄
                    </span>
                    <p class="">
                      「第9屆第24次臨時大會第1次會議紀錄及速記錄」需解析為「第9屆第24次臨時大會第1次會議紀錄」、「第9屆第24次臨時大會第1次速記錄」。
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                若於要目目錄解析出要目分類為「會議程序」，則需解析出原訂議程及實際議程兩筆。如
                <ul>
                  <li>
                    <span class="block">
                      會議程序 <br />
                      第9屆第22次臨時大會
                    </span>
                    <p class="">
                      「第9屆第22次臨時大會」需解析為「第9屆第22次臨時大會原訂議程」、「第9屆第22次臨時大會實際議程」。
                    </p>
                  </li>
                </ul>
              </li>

              <li>
                若於要目目錄解析出要目分類後有括弧，需將括弧內的字置於要目名稱最前方；若類別有第二層(無頁碼)，則置於要目名稱前。如
                <ul>
                  <li>
                    <span class="block">
                      <span> 議決案(第9屆第3次定期大會)</span> <br />
                      市府提案-----------------2210 <br />
                      市法規-----------------2210
                      <br />
                      議員臨時提案-----2212
                      <br />
                      報告事項-----------------2220
                      <br />
                      <span> 議決案(第9屆第10次臨期大會)</span>
                      <br />
                      市府提案-----------------2350
                      <br />
                      市法規-----------------2350
                      <br />
                    </span>
                    <p class="">
                      第一個市府提案需解析為「第9屆第3次定期大會市府提案」<br />
                      第一個市法規需解析為「第9屆第3次定期大會市府提案：市法規」<br />
                    </p>
                  </li>
                </ul>
              </li>
            </ol>
            <div class="title">要目頁碼起訖決定原則</div>
            <ol>
              <li>
                以本行的頁碼為頁數的開始，以下一行的頁碼 - 1
                為頁數的結束，但類別為「質詢與答覆」、「會議程序」，結束頁碼不需-1。各要目分類需以系統參數設定，可於系統後端變更。
              </li>
              <li>
                但議決案較特別需特別注意，其有3層，其第2層要目結束頁碼為同層下一個要目頁碼-1，如市府提案、報告事項

                <ul>
                  <li>
                    <span class="block">
                      <span>議決案(第9屆第3次定期大會) 起始頁 結束頁</span>
                      <br />
                      市府提案-----------------------2210 2219<br />
                      市法規-----------------------2210 2211<br />
                      議員臨時提案-----------------2212 2219<br />
                      報告事項-----------------------------2220 2349<br />
                      <span> 議決案(第9屆第10次臨期大會)</span>
                      <br />
                      市府提案-----------------------2350 2358<br />
                      市法規-----------------------2350 2358<br />
                    </span>
                    <p class="">
                      「第9屆第24次臨時大會第1次會議紀錄及速記錄」需解析為「第9屆第24次臨時大會第1次會議紀錄」、「第9屆第24次臨時大會第1次速記錄」。
                    </p>
                  </li>
                </ul>
              </li>
              <br />
            </ol>
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
            確認
          </v-btn>
          <!-- <v-btn
            color="cancel"
            variant="flat"
            rounded="lg"
            size="large"
            class="cancel"
            @click="dialog = !dialog"
          >
            取消
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

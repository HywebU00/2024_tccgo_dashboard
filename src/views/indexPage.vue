<template>
  <div class="index_bg" width="100%">
    <div class="index_container">
      <div class="index_title">
        <h3 class="text-center">
          <img src="~@/assets/Logo.png" alt="" />
        </h3>
        <v-btn color="secondary"
          ><a href="https://github.com/HywebU00/2024_tccgo_dashboard"
            >檔案下載</a
          ></v-btn
        >
      </div>
      <div class="d-flex mb-5 justify-center">
        <div style="width: 75%" class="mt-3">
          <v-card>
            <v-table>
              <thead class="bg-tHeader">
                <tr>
                  <th class="text-left">編號</th>
                  <th class="text-left">頁面名稱</th>
                  <th class="text-left">連結</th>
                  <th class="text-left width">備註</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in desserts" :key="item.name">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>
                    <a :href="item.link">{{ item.link }}</a>
                  </td>
                  <td>{{ item.note }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "首頁",
          link: "https://hywebu00.github.io/2024_tccgo_dashboard/#/ui/mp",
          note: "",
          // https://hywebu00.github.io/2024_tccgo_dashboard/#/ui/mp
        },
        {
          name: "功能頁",
          link: "https://hywebu00.github.io/2024_tccgo_dashboard/#/ui/index",
          note: "",
        },
        {
          name: "新增頁",
          link: "https://hywebu00.github.io/2024_tccgo_dashboard/#/ui/form",
          note: "",
        },
        {
          name: "fancyBox頁",
          link: " https://hywebu00.github.io/2024_tccgo_dashboard/#/ui/finder",
          note: "PeopleFinder 元件放於 components/PeopleFinder_hasJs.vue",
        },
        {
          name: "相簿頁",
          link: " https://hywebu00.github.io/2024_tccgo_dashboard/#/ui/album",
          note: "",
          // https://hywebu00.github.io/2024_tccgo_dashboard/#/ui/album
        },
        {
          name: "相片頁",
          link: "https://hywebu00.github.io/2024_tccgo_dashboard/#/ui/photo",
          note: "",
          // https://hywebu00.github.io/2024_tccgo_dashboard/#/ui/photo
        },
        {
          name: "樹狀分類＋功能頁",
          link: "https://hywebu00.github.io/2024_tccgo_dashboard/#/ui/tree",
          note: "",
          // https://hywebu00.github.io/2024_tccgo_dashboard/#/ui/tree
        },
        // {
        //   name: "登入頁面",
        //   link: "https://hywebu00.github.io/2024_tccgo_dashboard/#/ui-login",
        //   note: "",
        //   // https://hywebu00.github.io/2024_tccgo_dashboard/#/ui/tree
        // },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.index_bg {
  background: #e9ecef;
  height: 100vh;
}
.index_container {
  padding-top: 5rem;
  padding-bottom: 10rem;
}
.index_title {
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    font-weight: 700;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    span {
      font-size: 2rem;
      margin-left: 1rem;
    }
  }
  button.v-btn {
    a {
      color: #fff;
      text-decoration: none;
    }
  }
}
.index_table {
  thead {
    background: #17214c;
    tr > th {
      font-size: 1rem !important;
      color: #fff !important;
      white-space: nowrap;
    }
    .width {
      width: 100px;
    }
  }
  tbody {
    tr > td {
      &:nth-child(2) {
        min-width: 250px;
      }
    }
  }
}
</style>

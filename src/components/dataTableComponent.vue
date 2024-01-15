<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="serverItems"
    :loading="loading"
    class=""
    item-value="name"
    :items-per-page-text="customItemsPerPageText"
    @update:options="loadItems"
    hide-default-footer
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="">{{ item.columns.id }}</td>
        <td class="">{{ item.columns.name }}</td>
        <td class="">{{ item.columns.class }}</td>
        <td class="">{{ item.columns.title }}</td>
        <td class="">{{ item.columns.password }}</td>
        <td>{{ item.columns.status }}</td>
        <td>
          <div class="btnGroup">
            <v-btn elevation="0" color="cancel" size="small">刪除</v-btn>
            <v-btn elevation="0" color="submit" size="small">新增</v-btn>
          </div>
        </td>
        <td class="d-flex justify-center align-center">
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                class="iconBtn"
                icon="mdi-cog"
                color="success"
                v-bind="props"
                size="small"
              />
            </template>
            <v-list class="btnListGroupContainer">
              <v-list-item>
                <v-btn block size="small" color="import">檢視</v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn block size="small" color="export">修改</v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn block size="small" color="submit">複製樹</v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn block size="small" color="cancel">刪除</v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- <div class="btnGroup">
            <v-btn icon="mdi-cog" color="success" v-bind="props" size="small" />
          </div> -->
        </td>
      </tr>
    </template>
  </v-data-table-server>
</template>
<script>
const desserts = [
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
];

const FakeAPI = {
  async fetch({ page, itemsPerPage, sortBy }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = desserts.slice();

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;
          items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];
            return sortOrder === "desc" ? bValue - aValue : aValue - bValue;
          });
        }

        const paginated = items.slice(start, end);

        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

export default {
  data: () => ({
    itemsPerPage: 5,
    headers: [
      {
        title: "帳號",
        align: "start",
        sortable: false,
        key: "id",
      },
      { title: "姓名", key: "name", align: "start", sortable: false },
      { title: "單位", key: "class", align: "start", sortable: false },
      { title: "職稱", key: "title", align: "start", sortable: false },
      { title: "申請時密碼", key: "password", align: "start", sortable: false },
      { title: "狀態", key: "status", align: "start", sortable: false },
      {
        title: "動作",
        key: "iron",
        align: "start",
        sortable: false,
        width: 100,
      },
      {
        title: "功能",
        key: "function",
        align: "center",
        sortable: false,
        width: 100,
      },
    ],
    customItemsPerPageText: "每頁顯示項目",
    serverItems: [],
    loading: true,
    totalItems: 0,
  }),
  methods: {
    loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      FakeAPI.fetch({ page, itemsPerPage, sortBy }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loading = false;
      });
    },
  },
};
</script>

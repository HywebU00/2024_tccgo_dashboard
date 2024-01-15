import { ref, reactive } from 'vue'

export const pageInfo = reactive({
    pageID: "", //hyweb-col: 'Account'    
    pageTitle: { main: "", sub: "" }, //hyweb-col: 'Accont Mang'
    subPageTitle: "",//hyweb-col: 'Accont List'
    actBtnList: [], //hyweb-col:{name:'modify',to:''}
    actFuncList: {}, //hyweb-col:actbtn func
    curTab: null,
    condition: {},   //page 相關optoin data
    searchForm: {
        expand: false,
        listType: "T", //T=table or G=grid
        pageSize: 10,
        currentPage: 1,
        sortBy: [] //will set as same as dataTable.sortyBy
    },
    dataTable: {
        sortBy: [], //[{ key: 'userID', order: 'asc' },{ key: 'userName', order: 'asc' }]   }   //page search form
        loading: false,
        "loading-text": "Loading... Please wait",
        hover: true,
        "show-select": false, //是否顯示勾選box
        "item-selectable": "selectable",
        "item-value": "", //select checkbox value col
        "select-strategy": "page", //單選single,多選page,ALL
        headers: [], //data header
        items: [],//data list
        selected: [], //selected item value
        "items-per-page": 10, //pageSize
        "items-length": 0, //recordount
        page: 1//current page
    }
})


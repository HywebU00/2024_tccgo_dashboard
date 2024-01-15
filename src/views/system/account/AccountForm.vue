<script setup>
import { ref, reactive, onMounted, onBeforeMount } from "vue"
import { VDatePicker } from 'vuetify/labs/VDatePicker'
import axios from "axios"
import { maskStore } from "@/stores/storage.js"
import { useRoute } from 'vue-router'
import common from "@/hyweb/common.js"
import validRules from "@/hyweb/validRules.js"

const route = useRoute()
const mk = maskStore()
const datett = reactive({ info: {} })

datett.info = {
    fromDateMenu: null,
    fromDateVal: null,
    minDate: "2019-07-04",
    maxDate: "2019-08-30",
}

const dataInfo = reactive({ valid: false, data: {}, fields: {} })
onBeforeMount(() => {
    dataInfo.fields = {
        account: {
            label: "使用者帳號",
            variant: "outlined",
            clearable: true,
            hint: "輸入3-15個字元",
            rules: [
                (v) => validRules.ruleRequired(v),
                (v) => validRules.ruleMinLength(v, 3),
                (v) => validRules.ruleMaxLength(v, 15)
            ]
        },
        name: {
            modelValue: "",
            label: "姓名",
            variant: "outlined",
            clearable: true,
            hint: "中文姓名",
            rules: [
                (v) => validRules.ruleRequired(v),
                (v) => validRules.ruleMinLength(v, 2),
                (v) => validRules.ruleMaxLength(v, 30)
            ]
        },
        email: {
            label: "Email",
            variant: "outlined",
            clearable: true,
            hint: "userid@hyweb.com.tw",
            rules: [
                (v) => validRules.ruleRequired(v),
                (v) => validRules.ruleEmail(v)
            ]
        },
        regDate: {
            label: "到職日",
            variant: "outlined",
            clearable: true,
            format: "yyyy/MM/dd",
            position: "left",
            hint: "填寫到職日",
            rules: [
                (v) => validRules.ruleRequired(v)
            ]
        }
    }

    //init page
    init();
    console.log("onBeforeMount")



})
onMounted(() => {

    common.doLog("route ", route)
})

const handleSubmit = () => {
    common.doLog("handleSubmit", dataObj)
}
const resetForm = () => {
    //dataForm.reset()
    //console.log(dataForm);
}

const openCalendar = (tt) => {
    console.log(1111)
    dataInfo.modal = false;
}

//init page info
const init = () => {
    mk.doMask(true)
    let apiurl = "/accountInfo.json"
    getData.fetch(apiurl, { "uid": route.params.userid }).then((data) => {
        common.doLog("init", data)
        dataInfo.data = data
        mk.doMask(false)
        common.doLog("init", data)
    })
}


//fetch axios data
const getData = {
    async fetch(apiurl, condForm) {
        return new Promise(resolve => {
            setTimeout(() => {
                axios.post(apiurl, condForm)
                    .then(function (response) {
                        resolve(response.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }, 500)
        })
    },
}

</script>

<template>
    <h1>帳號新增{{ $route.params.userid }}</h1>
    <v-form ref="dataForm" v-model="dataInfo.valid" validate-on="submit" @submit.prevent="handleSubmit">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-bind="dataInfo.fields.account" :modelValue="dataInfo.data.id" />

                </v-col>
                <v-col cols="12">
                    <v-text-field v-bind="dataInfo.fields.name" :modelValue="dataInfo.data.name" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field type="email" v-bind="dataInfo.fields.email" :modelValue="dataInfo.data.email" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field type="date" v-bind="dataInfo.fields.regDate" :modelValue="dataInfo.data.regDate" />
                </v-col>
            </v-row>


            <v-row>
                <v-col cols="12">
                    <v-btn type="submit" text="送出" color="success" size="default" location="center" />
                    <v-btn type="button" text="取消" color="info" @click="resetForm" size="default" location="center" />
                </v-col>
            </v-row>
        </v-container>




        <!-- "id": "admin",
    "name": "系統管理者",
    "nameEN": "Administrator",
    "email": "evayang@hyweb.com.tw",
    "address": "地址",
    "tel": "家用電話",
    "mobile": "0939123123",
    "ext": "分機",
    "idNumber": "A123456777",
    "workID": "94033",
    "dob": "20100101",
    "regDate": "20220101",
    "dept": "root,D0900",
    "role": "ADMIN,frm_admin,DrDispatch,caseMgr",
    "status": "1",
    "auth": "0",
    "cdc": "A12ESXXLLSLS" -->
    </v-form>
</template>
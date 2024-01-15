
export default {
    doLog: (info, obj) => {
        console.log(JSON.parse(JSON.stringify(obj)))
        console.log(info + " -------- end")
        console.log("")
    }
};

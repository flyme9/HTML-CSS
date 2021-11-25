// 封装
import { onMounted, reactive } from 'vue'
import axios from 'axios'
function getData1(){
    const obj1 = reactive({
        list:[]
    })

    onMounted(()=>{
        axios.get('/banner.json')
            .then(res=>{
            obj1.list=res.data.banner
        })
    })
    return obj1
}
function getData2(){
    let obj2=reactive({
        list:[]
    })
    onMounted(()=>{
        axios.get('/banner2.json')
            .then(res=>{
            obj2.list=res.data.banner
        })
    })
    return obj2
}

export {
    getData1,
    getData2
}
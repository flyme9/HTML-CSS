<template>
    <div>
        <input type="text" ref="myText">
        <button @click="handleAdd">Add</button>

        <ul>
            <li v-for="data in datalist" :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        const myText = ref()
        const datalist = ref([])
        const handleAdd=()=>{
            console.log(myText.value.value)
            datalist.value.push(myText.value.value)
        }
        return {
            myText,
            handleAdd,
            datalist
        }
    }
}
</script>
<template>
    <ul>
        <router-link to="/films/nowplay" custom v-slot="{ navigate, isActive }">
            <li @click="navigate">
                <span :class="isActive ? 'Gaoactive' : ''">正在热映</span>
            </li>
        </router-link>
        <router-link to="/films/nowplay" custom v-slot="{ navigate, isActive }">
            <li @click="navigate" >
                <span :class="isActive ? 'Gaoactive' : ''">即将上映</span>
            </li>
        </router-link>
    </ul>
</template>

<style lang="scss" scoped>
ul{
    display: flex;
    width: 100%;
    height: 0.49rem;
    line-height: 0.49rem;
    text-align: center;
    li{
        flex: 1;
        span{
            line-height: 0.49rem;
        }
    }
    .Gaoactive{
        color: red;
        border-bottom: 2px solid red;
        display: inline-block;
        width: 50%;
    }
}
</style>

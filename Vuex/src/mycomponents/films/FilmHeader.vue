<template>
    <ul>
        <router-link to="/films/NowPlay" custom v-slot="{ navigate, isActive }">
            <li @click="navigate">
                <span :class="isActive ? 'Gaoactive' : ''">正在热映</span>
            </li>
        </router-link>
        <router-link to="/films/ComingSoon" custom v-slot="{ navigate, isActive }">
            <li @click="navigate" >
                <span :class="isActive ? 'Gaoactive' : ''">即将上映</span>
            </li>
        </router-link>
    </ul>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
ul{
    display: flex;
    flex: 1;
    width: 100%;
    height: 0.49rem;
    line-height: 0.49rem;
    text-align: center;
    li{
        flex: 1;
        span{
            display: inline-block;
            height: 0.4rem;
            line-height: 0.4rem;
            font-size: 0.14rem;
        }
    }
    .Gaoactive{
        color: #ff5f16;
        border-bottom: 2px solid #ff5f16;

    }
}
</style>

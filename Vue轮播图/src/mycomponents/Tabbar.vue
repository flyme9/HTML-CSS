<template>
    <footer>
        <ul>
            <router-link to="/films" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'Gaoactive' : ''">
                    <i class="iconfont icon-all"></i>
                    <span>电影</span>
                </li>
            </router-link>

            <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'Gaoactive' : ''">
                    <i class="iconfont icon-store"></i>
                    <span>影院</span>
                </li>
            </router-link>

            <router-link to="/center" custom v-slot="{ navigate, isActive }">
                <li @click="navigate" :class="isActive ? 'Gaoactive' : ''">
                    <i class="iconfont icon-gerenzhongxin"></i>
                    <span>我的</span>
                </li>
            </router-link>
        </ul>
    </footer>
</template>

<style lang="scss" scoped>
    footer{
        position:fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.49rem;
        background: white;
        ul{
            list-style: none;
            display: flex;
            li{
                flex: 1;
                height: 0.49rem;
                // line-height: 0.20rem;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content:center;
                i{
                    font-size: 0.2rem;
                }
                span{
                    font-size: 0.16rem;
                }
            }
        }
        .Gaoactive{
            color: white;
            background: red;
        }
    }
</style>

<script>
import '../assets/iconfont/iconfont.css'
export default {

}
</script>

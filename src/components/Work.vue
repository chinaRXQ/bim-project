<!-- 工作首页 -->
<template>
    <div>
        <grid :cols="3" :show-lr-borders="false">
            <!-- <grid-item v-for="i in 6" :key="i">
                <span class="grid-center">{{i}}</span>
            </grid-item> -->
            <grid-item>
                <span class="grid-center">我的任务</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">签到</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">潇洒的</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">添加</span>
            </grid-item>
        </grid>
    </div>
</template>
<script>
import {
  Card,
  XHeader,
  Grid,
  GridItem,
  Group,
  Cell,
  Tabbar,
  TabbarItem
} from 'vux'
export default {
  components: {
    Card,
    XHeader,
    Grid,
    GridItem,
    Group,
    Cell,
    Tabbar,
    TabbarItem
  }
}
</script>
<style>

</style>

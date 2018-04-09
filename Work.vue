<!-- 工作首页 -->
<template>
    <!--<div>
        <grid :cols="3" :show-lr-borders="false">
             <grid-item v-for="i in 6" :key="i">
                <span class="grid-center">{{i}}</span>
            </grid-item> 
            <grid-item>
                <span class="grid-center">我的任务</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">签到</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">在线填表</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">添加</span>
            </grid-item>
        </grid>
    </div>--> 
     <group>
      <cell is-link title="我的任务" link="/Message"></cell>
      <cell is-link title="签到" link="/PlanManagement"></cell>
      <cell is-link title="在线填表" link="/TableOnline"></cell>
      <cell is-link title="添加" link="/ProgressManagement"></cell>
    </group>
    
    
</template>
<script>
import {Group, Cell } from 'vux'
export default {
  components:{
  	Group,
    Cell
  }
}
</script>
<style>

</style>

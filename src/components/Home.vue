<template>
  <div>
    <!-- <x-header :left-options="{showBack: false}">首页</x-header> -->
     <div class="vux-demo">
       <br/>
      <img class="logo" src="../assets/logo.svg">
      <br/>
      <h1> BIM管理平台</h1>
    </div>
    <card >
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>130</span>
          <br/>
          未读消息
        </div>
        <div class="vux-1px-r">
          <span>15</span>
          <br/>
          待完成
        </div>
        <div class="vux-1px-r">
          <span>0</span>
          <br/>
          已完成
        </div>
        <div>
          <span>88</span>
          <br/>
          匿名信
        </div>
      </div>
    </card>
    <group>
      <cell is-link title="信息" link="/Message"></cell>
      <cell is-link title="计划管理" link="/PlanManagement"></cell>
      <cell is-link title="生产管理" link="/ProductionManagement"></cell>
      <cell is-link title="进度管理" link="/ProgressManagement"></cell>
    </group>
    <group>
      <cell is-link title="设置" ></cell>
    </group>
     <group>
      <cell style="color:red;" is-link title="登出" ></cell>
    </group>

    <tabbar>
      <tabbar-item link="/">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_button.png"> -->
        <span slot="label">首页</span>
      </tabbar-item>
      
      <tabbar-item link="/PlanManagement">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_article.png"> -->
        <span slot="label">计划管理</span>
      </tabbar-item>
      <tabbar-item link="/ProductionManagement">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_cell.png"> -->
        <span slot="label">生产管理</span>
      </tabbar-item>
      <tabbar-item  link="/ProgressManagement">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_cell.png"> -->
        <span slot="label">进度管理</span>
      </tabbar-item>
      <tabbar-item link="/Message">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
        <span slot="label">消息</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
// import { XHeader } from 'vux'
import { Card, Group, Cell, Tabbar, TabbarItem, XHeader } from 'vux'
export default {
  components: {
    Card,
    XHeader,
    Group,
    Cell,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>

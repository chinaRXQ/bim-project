<template>
    <div>
        <!-- <x-header>计划管理</x-header> -->
        <group title="项目列表" label-width="5em">
            <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
        </group>
        </br/>
         <x-table >
          <thead>
            <tr>
              <th>梁名称</th>
              <th>起始日期</th>
              <th>终止日期</th>
              <th>工作台号</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                HGH-1-1-Y1
              </td>
              <td>
                2015-5-5
              </td>
              <td>
                2015-5-10
              </td>
              <td>
                Y1-20
              </td>
            </tr>

            <tr>
              <td>
                HGH-1-1-Y2
              </td>
              <td>
                2015-5-5
              </td>
              <td>
                2015-5-10
              </td>
              <td>
                Y1-20
              </td>
            </tr>

            <tr>
              <td>
                HGH-1-1-Y5
              </td>
              <td>
                2015-5-5
              </td>
              <td>
                2015-5-10
              </td>
              <td>
                Y1-20
              </td>
            </tr>

            <tr>
              <td>
                HGH-1-1-Y3
              </td>
              <td>
                2015-5-5
              </td>
              <td>
                2015-5-10
              </td>
              <td>
                Y1-20
              </td>
            </tr>

            <tr>
              <td>
                HGH-1-1-Y5
              </td>
              <td>
                2015-5-5
              </td>
              <td>
                2015-5-10
              </td>
              <td>
                Y1-20
              </td>
            </tr>

            <tr>
              <td>
                HGH-1-1-Y4
              </td>
              <td>
                2015-5-5
              </td>
              <td>
                2015-5-10
              </td>
              <td>
                Y1-20
              </td>
            </tr>

            <tr>
              <td>
                HGH-1-1-Y3
              </td>
              <td>
                2015-5-5
              </td>
              <td>
                2015-5-10
              </td>
              <td>
                Y1-20
              </td>
            </tr>

          </tbody>
        </x-table> 

        <!-- <grid>
            <grid-item>
                <span class="grid-center">梁名称</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">起始日期</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">终止日期</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">工作台号</span>
            </grid-item>
        </grid>
        <grid>
            <grid-item>
                <span class="grid-center">HGH-1-1-Y1</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">2015-05-05</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">2015-05-10</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">工作台 Y1-20 </span>
            </grid-item>
        </grid>
        <grid>
            <grid-item>
                <span class="grid-center">HGH-1-1-Y1</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">2015-05-05</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">2015-05-10</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">工作台 Y1-20 </span>
            </grid-item>
        </grid>
        <grid>
            <grid-item>
                <span class="grid-center">HGH-1-1-Y1</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">2015-05-05</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">2015-05-10</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">工作台 Y1-20 </span>
            </grid-item>
        </grid>
        <grid>
            <grid-item>
                <span class="grid-center">HGH-1-1-Y1</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">2015-05-05</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">2015-05-10</span>
            </grid-item>
            <grid-item>
                <span class="grid-center">工作台 Y1-20 </span>
            </grid-item>
        </grid> -->

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
            <tabbar-item link="/ProgressManagement">
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
/**
 * 计划管理
 */

// import { XHeader } from 'vux'
import {
  PopupPicker,
  Group,
  Cell,
  Tabbar,
  TabbarItem,
  XHeader,
  Grid,
  GridItem,
  XTable,
  GroupTitle
} from 'vux'
import axios from 'axios'
const apidomain = 'https://www.x.intl.moe/api/O6ECe33T/planmanagement'
export default {
  components: {
    PopupPicker,
    XTable,
    Grid,
    GridItem,
    GroupTitle,
    XHeader,
    Group,
    Cell,
    Tabbar,
    TabbarItem
  },
  methods: {
    onChange (val) {
      console.log('val change', val)
    },
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    },
    send () {
      axios.get(apidomain).then(function (response) {
        this.message = response[0]
        console.log(response[0])
      }).bind(this)
    }
  },
  data () {
    return {
      title1: '选择项目',
      message: [],
      list1: [['子项目1', '子项目2', '子项目3', '子项目4']],
      value1: ['子项目1'],
      formatDemoValue: ['01', '12'],
      format: function (value, name) {
        return `${value[0]}:${value[1]}`
      }
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
</style>

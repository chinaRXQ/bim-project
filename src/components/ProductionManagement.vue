
<template>
	<div>
		<!-- <x-header>生产管理</x-header> -->

		<group title="项目列表" label-width="5em">
			<popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
		</group>

		<div>
			<tab :line-width=2 active-color='#fc378c' v-model="index">
				<tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
			</tab>
			<swiper v-model="index" :show-dots="false">
				<swiper-item v-for="(item, index) in list2" :key="index">
					<checklist title="进行中" :label-position="labelPosition" required :options="commonList" v-model="checklist001" @on-change="change"></checklist>
					
				</swiper-item>
			</swiper>
			<x-button type="primary">添加</x-button>
		<x-button type="warn">删除</x-button>
		</div>

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
 * 生产管理
 */
/* eslint-disable */

// import { XHeader } from 'vux'
import {
  Tab,
  TabItem,
  Swiper,
  SwiperItem,
  XButton,
  PopupPicker,
  Group,
  Checklist,
  Cell,
  Tabbar,
  TabbarItem,
  XHeader
} from 'vux'
const list = () => ['已完成', '进行中', '延期梁']
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    XButton,
    SwiperItem,
    Checklist,
    PopupPicker,
    XHeader,
    Group,
    Cell,
    Tabbar,
    TabbarItem
  },
  methods: {
    onChange(val) {
      console.log('val change', val)
    },
    onShow() {
      console.log('on show')
    },
    onHide(type) {
      console.log('on hide', type)
    },
    change(val, label) {
      console.log('change', val, label)
    }
  },
  data() {
    return {
      title1: '项目',
      list1: [['子项目1', '子项目2', '子项目3', '子项目4']],
      list2: list(),
      index: 0,
      demo2: '未完成',
      value1: ['子项目1'],
      formatDemoValue: ['01', '12'],
      format: function(value, name) {
        return `${value[0]}:${value[1]}`
      },
      labelPosition: '',
      commonList: ['HGH-1-2-Y2', 'HGH-1-2-Y3', 'HGH-1-2-Y4'],
      checklist001: []
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

<template>
	<div>
		<!-- <x-header>进度管理</x-header> -->
		<group title="项目列表" label-width="5em">
			<popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
		</group>
		<br/>

		<x-table>
			<thead>
				<tr>
					<th>梁名称</th>
					<th>终止日期</th>
				</tr>
			</thead>
			<!-- <tfoot>
              <tr>
                <th>Name</th>
                <th>Default value</th>
              </tr>
            </tfoot> -->
			<tbody>

				<tr>
					<td>
						HGH-1-1-Y1
					</td>
					<td>
						2015-5-5
					</td>
				</tr>

				<tr>
					<td>
						HGH-1-1-Y2
					</td>
					<td>
						2015-5-5
					</td>
				</tr>

				<tr>
					<td>
						HGH-1-1-Y5
					</td>
					<td>
						2015-5-5
					</td>
				</tr>

				<tr>
					<td>
						HGH-1-1-Y3
					</td>
					<td>
						2015-5-5
					</td>
				</tr>

				<tr>
					<td>
						HGH-1-1-Y5
					</td>
					<td>
						2015-5-5
					</td>
				</tr>

				<tr>
					<td>
						HGH-1-1-Y4
					</td>
					<td>
						2015-5-5
					</td>
				</tr>

				<tr>
					<td>
						HGH-1-1-Y3
					</td>
					<td>
						2015-5-5
					</td>
				</tr>

			</tbody>
		</x-table>

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
 * 进度管理
 */

/* eslint-disable */
// import { XHeader } from 'vux'
import {
  PopupPicker,
  XTable,
  Group,
  Cell,
  Tabbar,
  TabbarItem,
  XHeader,
  Grid,
  Swiper,
  GridItem,
  GroupTitle
} from 'vux'
export default {
  components: {
    PopupPicker,
    Grid,
    GridItem,
    GroupTitle,
    XTable,
    XHeader,
    Group,
    Cell,
    Swiper,
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
    }
  },
  data() {
    return {
      title1: '选择项目',
      list1: [['子项目1', '子项目2', '子项目3', '子项目4']],
      value1: ['子项目1'],
      formatDemoValue: ['01', '12'],
      format: function(value, name) {
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

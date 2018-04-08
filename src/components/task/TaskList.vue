<template>
    <div>
        <header></header>
        <div id="task">
            <group title="项目列表" label-width="5em">
			    <popup-picker :title="title" :data="projects" v-model="value" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
		    </group>
            <div>
                <tab :line-width=2 active-color='#fc378c' v-model="index">
				<tab-item class="vux-center" :selected="ifStatus === item" v-for="(item, index) in statusList"  :key="index"><div @click="ifStatus = item">{{item}}</div></tab-item>
			    </tab>
            </div>
            <x-table class="taskTb">
                <tbody v-for="task in tasks">
                    <template v-if="task.prj === ifProject">
                    <tr v-show="task.status === ifStatus">
                        <td>{{task.name}}</td>
                    </tr>
                    </template>
                </tbody>
            </x-table>
        </div>
        <footer></footer>
    </div>
</template>
<script>
/* eslint-disable */
import {
  PopupPicker,
  XTable,
  Group,
  Cell,
  Tab,
  TabItem,
  XHeader,
  Grid,
  GridItem,
  GroupTitle
} from 'vux';
export default {
  components:{
       PopupPicker,
        XTable,
        Group,
        Cell,
        Tab,
        TabItem,
        XHeader,
        Grid,
        GridItem,
        GroupTitle
  },
  props: {
        // postUsers:{
        //     type:Array,
        //     required:true
        // }
    },
  data() {
      return {
          ifStatus: '未完成',
          title: '选择项目',
          ifProject: '项目1',
          value: ['子项目1'],
          index:0,
          projects: [['项目1','项目2','项目3']],
          statusList:['未完成','进行中','已完成'],
          tasks: [
            { name: '任务1', status: '已完成', prj: '项目1'},
            { name: '任务2', status: '已完成', prj: '项目1'},
            { name: '任务3', status: '已完成', prj: '项目1'},
            { name: '任务1', status: '未完成', prj: '项目1'},
            { name: '任务2', status: '未完成', prj: '项目1'},
            { name: '任务1', status: '进行中', prj: '项目1'},
            { name: '任务3', status: '进行中', prj: '项目1'},

            { name: '任务1', status: '已完成', prj: '项目2'},
            { name: '任务2', status:'已完成', prj: '项目2'},
            { name: '任务3', status: '已完成', prj: '项目3'},
            { name: '任务1', status: '未完成', prj: '项目3'},
            { name: '任务2', status: '未完成', prj: '项目3'},
            { name: '任务1', status: '进行中', prj: '项目2'},
            { name: '任务3', status: '进行中', prj: '项目2'},
            ]
      }
  },
  methods:{
        onChange(val) {
            this.ifProject = val[0];
            console.log(val[0]);
        },
        onShow() {
        console.log('on show')
        },
        onHide(type) {
        console.log('on hide', type)
        }
    }
}
</script>

<style scoped>
#task{
    padding: 0;
    margin: 0;
    font-size: 18px;
}
.statusBt{
    float: left;
    width: 33.3%;
    height: 46px;
    border-style: none;
    border-right: 1px solid #EFEFEF; 
    background-color:#F9fAfA;
}
.taskTb{
    padding: 16px 24px;
}
</style>





<template>
<div>
    
        <div id="task">
            <group title="xxx任务列表" label-width="5em">
          <popup-picker :title="title" :data="types" v-model="value" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
        </group>
            <div>
                <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="ifStatus === item" v-for="(item, index) in statusList"  :key="index"><div @click="ifStatus = item">{{item}}</div></tab-item>
          </tab>
            </div>
            <x-table class="typeTb">
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
  XButton,
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
          ifStatus: '未开始',
          title: '选择类别',
          ifProject: '类别1',
          value: ['类别1'],
          index:0,
          types: [['类别1','类别2','类别3']],
          statusList:['未开始','进行中','已完成'],
          tasks: [
            { name: 'HGH-1Y-Z05', status: '已完成', prj: '类别1'},
            { name: 'HGH-1Y-Z06', status: '已完成', prj: '类别1'},
            { name: 'HGH-1Y-Z07', status: '已完成', prj: '类别1'},
            { name: 'HGH-1Y-Z01', status: '未开始', prj: '类别1'},
            { name: 'HGH-1Y-Z062', status: '未开始', prj: '类别1'},
            { name: 'HGH-1Y-Z03', status: '进行中', prj: '类别1'},
            { name: 'HGH-1Y-Z04', status: '进行中', prj: '类别1'},

            { name: 'HGH-1Y-Z05', status: '已完成', prj: '类别2'},
            { name: 'HGH-1Y-Z06', status: '已完成', prj: '类别2'},
            { name: 'HGH-1Y-Z07', status: '已完成', prj: '类别2'},
            { name: 'HGH-1Y-Z01', status: '未开始', prj: '类别2'},
            { name: 'HGH-1Y-Z062', status: '未开始', prj: '类别2'},
            { name: 'HGH-1Y-Z03', status: '进行中', prj: '类别2'},
            { name: 'HGH-1Y-Z04', status: '进行中', prj: '类别2'},
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
#task {
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
.typeTb{
    padding: 16px 24px;
}
</style>





<template>
  <div>
   <!-- <x-header>消息</x-header> -->

    <group title="联系人" label-width="5em">
      <popup-picker :title="title1" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange" ></popup-picker>
    </group>


     <div class="msg_box">
          <div class="msg_wrap" style="display: block;">
            <div class="msg_body">
              <!--<div class="msg_a">明天做balabalablabla</div>
              <div class="msg_a">B项目部要一吨钢材</div>
              <div class="msg_b">明天调货</div>
              <div class="msg_a">B项目部需要一部塔吊</div>
              <div class="msg_b">协调C项目部的塔吊运来</div>
              <div class="msg_a">C项目部还要用塔吊</div>
              <div class="msg_a">D项目部有空闲的塔吊</div>
              <div class="msg_push"></div>-->
              <div :class="[{msg_a:index%2==0},{msg_b:(index+1)%2==0}]"   v-for="(message,index) in messages" :key="index">
              	{{message}}
              </div>
            </div>
            <div class="msg_footer">
              <textarea class="msg_input" rows="4" v-model="textvalue"></textarea>
            </div>
          </div>
        </div>
        <button  @click="add" class="btn">发送</button>
        <!-- <button class="button is-link is-outlined is-fullwidth">
          发送
        </button> -->

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
/**
 * 消息
 */

// import { XHeader } from 'vux'
import { PopupPicker, XButton, Group, Cell, Tabbar, TabbarItem, XHeader } from 'vux'
export default {
  components: {
    PopupPicker,
    XButton,
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
    add(){ 
			    	if(this.textvalue.length==0){
			    		alert("请输入！");
			    	}else{
						    	var data= this.textvalue;
			            this.messages.push(data);
						    	this.textvalue="";
			    	}
			   					 
				}
    
  },
  data () {
    return {
      title1: '联系人',
      list1: [['项目组B', '项目组D', '项目组C', '项目组A', '老张', '小李', '刘老板']],
      value1: ['项目组D'],
      formatDemoValue: ['01', '12'],
      format: function (value, name) {
        return `${value[0]}:${value[1]}`
    },
      messages:[ "明天做balabalablabl" ,
					       "B项目部要一吨钢材,明天调货" ,
					       "B项目部需要一部塔吊" ,
					       "协调C项目部的塔吊运来" ,
					       "C项目部还要用塔吊" ,
					       "D项目部有空闲的塔吊" ,
                 "明天调货"],
      textvalue:""
    }
  }
}
</script>

<style>
.btn{
		touch-action: none;
		width:80%;
		height: 35px;
		margin-left: 30px;
	}
.vux-demo {
  text-align: center;
}
.msg_box {
  /* position: fixed; */
  bottom: -5px;
  width: 100%;
  background: white;
  border-radius: 5px 5px 0px 0px;
}

.msg_head {
  background: #dddddd;
  height: 50px;
}

.msg_body {
  background: white;
  /* height: 250px; */
  font-size: 12px;
  padding: 15px;
  overflow: auto;
  overflow-x: hidden;
  height:350px;
}
.msg_input {
  width: 100%;
  border: 1px solid white;
  border-top: 1px solid #dddddd;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
}
.msg_a {
  position: relative;
  background: #fde4ce;
  padding: 10px;
  min-height: 10px;
  margin-bottom: 5px;
  margin-right: 10px;
  border-radius: 5px;
}
.msg_a:before {
  content: '';
  position: absolute;
  width: 0px;
  height: 0px;
  border: 10px solid;
  border-color: transparent #fde4ce transparent transparent;
  left: -20px;
  top: 7px;
}

.msg_b {
  background: #eef2e7;
  padding: 10px;
  min-height: 15px;
  margin-bottom: 5px;
  position: relative;
  margin-left: 10px;
  border-radius: 5px;
  word-wrap: break-word;
}
.msg_b:after {
  content: '';
  position: absolute;
  width: 0px;
  height: 0px;
  border: 10px solid;
  border-color: transparent transparent transparent #eef2e7;
  right: -20px;
  top: 7px;
}
</style>

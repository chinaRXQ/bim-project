<template>
  <div id="add_task">
          <group>
              <x-input :title="titleTitle" :placeholder="inputTitle" @on-change = "getTitle"></x-input>
              <datetime :title="titleDate" :placeholder="selectDate" :min-year=2018 format="YYYY-MM-DD HH:mm" @on-change="getDate"></datetime>
              <selector :title="titleType"  :options="types" direction="rtl" @on-change="getType"></selector>
              <selector :title="titlePerson"  :options="colleagues" @on-change="addPerson"></selector>
          </group>
          <template v-if = "taskObj.persons.length != 0">
            <group :title="selectedPerson">
                <template  v-for="person in taskObj.persons">
                    <flexbox class="selected-person">
                        <flexbox-item>
                            <span >{{person}}</span>
                        </flexbox-item>
                        <flexbox-item>
                            <span class="cancel-btn" v-on:click="removePerson(person)">
                                <icon type="cancel" ></icon>
                            </span>
                        </flexbox-item>
                    </flexbox>
                </template>
            </group>
          </template>
          <group :title="remark">
              <x-textarea :max="200" name="description" :placeholder="inputTitle" @on-change="getRemark"></x-textarea>
          </group>
      <flexbox>
        <flexbox-item>
          <x-button type="primary" class="submit">Save</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="primary" class="submit" @click="submitTask">Submit</x-button>
        </flexbox-item>
      </flexbox>
  </div>
</template>

<script>
/* eslint-disable */
let [titleTitle,titleDate,titleType,titlePerson,selectedPerson,remark,inputTitle,selectDate] = ['任务名称','截止时间','任务类型','执行人','已选：','备注：','请输入……','选择时间'];
window.onload=function(){
    console.log("taskObj");
}
import {
    Group,
    XInput,
    Icon,
    Datetime,
    Flexbox,
    FlexboxItem,
    XTextarea,
    XButton,
    Selector
}from 'vux'

export default {
    components:{
        Group,
        XInput,
        Icon,
        Datetime,
        Flexbox,
        FlexboxItem,
        XTextarea,
        XButton,
        Selector
    },
    props: {
        // colleagues:['张三','李四','王五'],    
        // types:['type1','type2','type3'],
    },
    data(){
        return{
            taskObj:{ title:'',lastDate:'',type:'', persons:[] },
            colleagues:['张三','李四','王五'],
            types:['type1','type2','type3'],
            titleTitle,titleDate,titleType,titlePerson,
            selectedPerson,remark,inputTitle,selectDate
        }
    },
    methods:{
        
        getTitle:function(val){
            this.taskObj.title = val;
        },
        getType:function(val){
            this.taskObj.type = val;
        },
        getDate:function(val){
            this.taskObj.lastDate = val;
        },
        addPerson: function(val){
            if(val != false && val != null){
                this.taskObj.persons.push(val);
                for(let i=0;i < this.colleagues.length;i++)
                    if(this.colleagues[i] == val)
                        this.colleagues.splice(i,1);
            }
        },
        removePerson: function(val){
            this.colleagues.push(val)
            for(let i=0;i < this.taskObj.persons.length;i++)
                    if(this.taskObj.persons[i] == val)
                        this.taskObj.persons.splice(i,1);
        },
        getRemark:function(val){
            this.taskObj.remark = val;
        },
        submitTask:function(val){
            
        }
    }
}
</script>

<style scoped>
.cancel-btn{
    display: inline-block;
    background-color: white;
    border:0;
}
.selected-person{
    height:38px;
    line-height: 38px;
    text-align: center;
}
.submit{
    margin:  20px auto;
    width: 80%;
}
</style>
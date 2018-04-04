<!-- 工作首页 -->
<template>
    <div>
        <grid :cols="3" :show-lr-borders="false">
            <grid-item v-for="i in Grouplist" :key="i.id" :link="{ path: i.pathrouter }">
                <img slot="icon" :src="i.icon">
                <span slot="label">{{i.name}}</span>
                <!-- <span class="grid-center">{{i.name}}</span> -->
            </grid-item>
        </grid>
    </div>
</template>
<script>
/* eslint-disable */
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
import axios from 'axios'
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
  },
  data () {
      return {
          Grouplist: []
      }
  },
  created() {
    axios.get('static/worklist.json').then((res) => {
      this.Grouplist = res.data
    })
  },
}
</script>
<style>

</style>

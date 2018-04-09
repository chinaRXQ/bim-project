<template>
	<div id="table-online">
		<router-link  to='/TableOne'>
			<div class="single-table" v-for="table in tables">
			     <img src="../../build/logo.png"/>
			     <p>{{table}}</p>
			     <hr />
			</div>
		</router-link>
		<group>
           <cell is-link title=" 混凝土浇筑  报审、报验表" link="/TableTwo"></cell>
      
       </group>
	</div>	
</template>

<script>
	import {Group, Cell } from 'vux'
//  import TableOne from './components/TableOne.vue'
	export default{
		name:"table-online",
		components:{Group,Cell},
		data(){
			return{
				tables:["预制箱梁混泥土浇筑报审表","预制箱梁混泥土浇筑记录表","预制箱梁模板安装报审表","预制箱梁模板安装记录表","预制箱梁钢筋加工报审表"]
				
			}
		}
	}
</script>
<style>
	.single-table img{
		width:40px;
		height:40px;
		display: inline-block;
		vertical-align:middle;
		padding-right: 10px;
		/*padding-right: 10px;
		position: relative;
		top:10px;
		*/
	}
	.single-table p{
		display: inline-block;
		padding-bottom: 15px;		
		 
	}
	.single-table{
		padding: 15px 15px 0 15px;
	}
	
</style>
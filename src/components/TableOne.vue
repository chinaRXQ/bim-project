<template>
	<div id="table-one">
		<h3>混凝土浇注记录</h3>
		<form>
			<label>
				施工单位：
				<input type="text" name="" id="" value="" v-model="forms.builder"/>
			</label>
			<label>
				工程名称：
				<input type="text" name="" id="" value="" v-model="forms.projectname"/>
			</label>
			<label>
				浇注部位：
				<input type="text" name="" id="" value="" v-model="forms.pouringpart"/>
			</label>
			<label>
				浇注日期：
				<input type="text" name="" id="" value="" v-model="forms.pouringdate"/>
			</label>
			<label>
				天气情况：
				<input type="text" name="" id="" value="" v-model="forms.weather"/>
			</label>
			<label>
				室外温度：
				<input type="text" name="" id="" value="" v-model="forms.template"/>
			</label>
			<label>
				设计强度等级：
				<input type="text" name="" id="" value="" v-model="forms.grade"/>
			</label>
			 <input type="submit" name="" id="btn" value="提交" v-on:click="post"/>
		</form>
	</div>
</template>

<script>
	export default{
		name:"table-one",
		 
		data(){
			return {
				forms:{
					builder:"",
					projectname:"",
					pouringpart:"",
					pouringdate:"",
					weather:"",
					template:"",
					grade:""
				}
			}
		},
		methods:{
			post:function(){
				this.$http.post("http://jsonplaceholder.typicode.com/posts",{title:this.forms.builder,body:this.forms.template})
				.then(function(data){
					console.log(data);
				})
			}
		}
	}
</script>

<style>
	h3{
		padding: 15px;
		text-align: center;
	}
	form {
		margin: 0;
		padding: 0;
	}
	label{
		display:block;
		font-size: 20px;
		padding: 10px;
		margin-left: 5px;
	}
	label input[type="text"] {
		height:25px;
		width: 90%;
		display: block;
		margin-top: 5px;
	}
	 #btn {
		margin-left: 50px;
		width: 50%;
		height: 25px;
	}
</style>
<template>
	<div id="table-two">
		<h3>混凝土浇注 报审 报验表</h3>
		<form>
			<label>
				工程名称：
				<input type="text" name="" id="" value="" v-model="forms.projectname" />
			</label>
			<label>
				编号：
				<input type="text" name="" id="" value="" v-model="forms.number" />
			</label>
			<label>
				致：
				<input type="text" name="" id="" value="" v-model="forms.to" />
			</label>
			<label>
				我方已完成：
				<input type="text" name="" id="" value="" v-model="forms.done" />
			        工作，经自检合格，请予以审查或验收。
			</label>
			<label>
				附件：隐蔽工程质量检验资料
				<span><input type="checkbox" value="检验批质量检验资料"v-model="forms.attachment" /> 检验批质量检验资料</span>
				<span></span><input type="checkbox" value="分项工程质量检验资料"v-model="forms.attachment" /> 分项工程质量检验资料</span>
				<span><input type="checkbox" value="施工试验室证明资料"v-model="forms.attachment" /> 施工试验室证明资料 </span>
				<span><input type="checkbox" value="其他：混凝土浇筑记录"v-model="forms.attachment" /> 其他：混凝土浇筑记录 </span>
			</label>
			 <input type="submit" name="" id="btn" value="提交"  v-on:click="post" />
		</form>
	</div>
</template>

<script>
	export default{
		name:"table-two",
		data(){
			return {
				forms:{
					projectname:"",
					number:"",
					to:"",
					done:"",
					attachment:[]
				}
			}
		},
		methods:{
			post:function(){
				this.$http.post("http://jsonplaceholder.typicode.com/posts",{title:this.forms.number,body:this.forms.attachment})
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
	label span{
		display: block;
	}
	label input[type="checkbox"]{
		width: 25px;
		height: 25px;
		 vertical-align: middle;
		 
	} 
</style>
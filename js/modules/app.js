define(['modules/home/home','modules/list/list','modules/product/product',"tools/util"],
	function(HomeComponent,ListComponent,ProductComponent,Util){

	Vue.component('home',HomeComponent);
	Vue.component('list',ListComponent);
	Vue.component('product',ProductComponent);
	var app = new Vue({
		el:'#app',
		data:{
			view:"home",
			query :[],
			searchKey:'',
			myKey:''

		},
		methods:{
			goSearch:function(){
				this.myKey = this.searchKey;
				console.log(this.myKey)
			},
			goBack:function(){
				history.go(-1)
			}
		}
	})
	//home banner静态动效
	//new Util.swipe("banner");

	return app
})
define(["tools/util"],function(Util){
	var ProductComponent = Vue.extend({
		template :Util.tpl('tpl_product'),
		data:function(){
			return {

				img:[],
				info:{},

				// 广告数据

				info_pro:[

					{	"id":1,
						"img":"01.jpg",
						"brand":"MeeJoan",
						"slogan":"随性而衣",
						"price":200
					}
				],
				finnal_pro:[

				{
					"id":0,
					"img":"01.jpg",
					"brand":"MeeJoan",
					"slogan":"随性而衣",
					"price":200,
					"color":'',
					"size":'',
					"num":0
				}
				],
				list_num:{
					'num':0
				}
			}
		},
		//created阶段，拉取
		created:function(){
			var me = this;
			Util.ajax('data/product.json',function(res){
				if(res && res.errno === 0){
					me.img = res.data.src;
					me.info = res.data.info;
					console.log(res.data)
					console.log(me.img)
				}
			})
		},
		methods:{

			pannelShow:function(){
				document.querySelector('#pannel').style.display = 'block';
	
			},
			chooseColor:function(e){
				var me = this;
				var curelement = $(e.target);
				me.finnal_pro[0].color = curelement.html();
				curelement.css({
					"background":"#ddd",
				}).siblings().css({"background":"white"});
				$(e.currentTarget).css("background","white")

			},
			chooseSize:function(e){
				var me = this;
				var curelement = $(e.target);
				me.finnal_pro[0].size = curelement.html();
				curelement.css({
					"background":"#ddd",
				}).siblings().css({"background":"white"});
				$(e.currentTarget).css("background","white")
			},
			Reduce:function(){
				var me = this;
				//变成一个变量
				var num = parseInt(me.finnal_pro[0].num)
				num = --num < 0 ? 0 : num;
				me.finnal_pro[0].num = num;
				console.log(me.finnal_pro[0].num);
			},
			Add:function(){
				var me = this;
				var num = parseInt(me.finnal_pro[0].num)
			    num = ++num > 5 ? 5 : num;
				me.finnal_pro[0].num = num;
				console.log(me.finnal_pro[0].num);
			},
			addToCart:function(){
				var me = this;
				me.list_num.num  = me.finnal_pro[0].num
				document.querySelector('#pannel').style.display = 'none';

			},
			close:function(){
				document.querySelector('#pannel').style.display = 'none';

			},
			myboxShow:function(){
				document.querySelector('#product').style.display = 'none';
				document.querySelector('#mybox').style.display = 'block';
			},
			pay:function(){

				document.querySelector('.tip').style.display = 'block';
			},
			goBack:function(){
				history.go(0) 
			}
		}
	})
	return ProductComponent
})
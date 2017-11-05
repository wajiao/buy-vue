define(['tools/util','filter/filter'],function(Util){
	var HomeComponent = Vue.extend({
		template : Util.tpl('home'),
		data: function () {
			// 返回值是输出的数据
			return  {

				banner: [
					{id: 1, url: '01.jpg'},
					{id: 2, url: '02.jpg'},
					{id: 3, url: '03.jpg'},
					{id: 4, url: '04.jpg'},
				],
				type: [
					{id: 1, title: '长款下装', url: '01.png'},
					{id: 2, title: '短款下装', url: '02.png'},
					{id: 3, title: '长款上装', url: '03.png'},
					{id: 4, title: '短款上装', url: '04.png'},
					{id: 5, title: '鞋包', url: '05.png'},
					{id: 6, title: '配饰', url: '06.png'}
				],
				// 广告数据
				topic: [],
				// 列表数据
				like: []
			}
		},
		created:function(){
			var me = this;
			Util.ajax('data/home.json',function(res){
				if(res && res.errno === 0){
					me.topic = res.data.topic;
					me.like = res.data.like
				}
			})
		}
	})
	//home banner 静态动效

	//Util.swipe("banner");
	return HomeComponent
})
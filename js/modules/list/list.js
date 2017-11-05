define(['tools/util'],function(Util){
	var ListComponent = Vue.extend({
		props: ['key'],
		template : Util.tpl('list'),
		data: function () {
			return {
				list: [],
				other: []
			}
		},
		created: function () {
			var me = this;
			Util.ajax('data/list.json', function (res) {
				// 保存请求返回的数据
				if (res && res.errno === 0) {
					// 缓存数据
					
					me.list = res.data.slice(0, 4);
					me.other = res.data.slice(4);
					console.log(me.list);
				}
			})
		},
		methods:{
			loadMore: function () {
				// 将other内容追加给list，并清空other
				this.list = [].concat(this.list, this.other);
				// 清空other
				this.other = [];
			},
			changeType:function(key){
		
				this.list = this.list.sort(function(a,b){
					return result = b[key] - a[key]	

				})
				
			}
		}

	})
	return ListComponent
})
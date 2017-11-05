define([],function(){
	var Util = {
		ajax:function(url,fn){
			var xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function(){
				if(xhr.readyState === 4){
					if(xhr.status ===200){
						var data = JSON.parse(xhr.responseText);
						fn && fn(data)
					}
				}
			}
			xhr.open('GET',url,true);
			xhr.send(null)
		},
		tpl:function(id){
			return document.getElementById(id).innerHTML;
		},
		// drag : function(id,unit){
		// 	// console.log(123)
		// var box = document.getElementById(id);
		// 	// console.log(box)

		// var unit = document.getElementById(unit);
		

		// //最后一个点的位置
		// var lastpoint = 0;
		// //最后两个点的距离
		// var d = 0;
		// //开始触摸的坐标
		// var startX;
		// //信号量，当前的translateX的值
		// var nowtranslateX = 0;
		// //临时周边用的变量
		// var temp;

		// var w = document.documentElement.clientWidth;

		// //开始触摸
		// box.addEventListener("touchstart",function(event){
		// 	// console.log(1)
		// 	event.preventDefault();
		// 	var finger = event.touches[0];
		// 	//记录开始坐标
		// 	startX = finger.clientX;
		// },true);

		// box.addEventListener("touchmove", function(event){
		// 	// console.log(2)
		// 	var finger = event.touches[0];
		// 	//去掉过渡
		// 	unit.style.transition = "none";
		// 	//记录最后两个点的距离
		// 	d = finger.clientX - lastpoint;
		// 	lastpoint = finger.clientX;
		// 	//变形
		// 	var dX = finger.clientX - startX;
		// 	//临时变量，此时是信号量加上dX：
		// 	temp = nowtranslateX + dX;
		// 	//设置火车的位置
		// 	unit.style.transform = "translateX(" + temp + "px)";
		// }, true);

		// //结束触摸
		// box.addEventListener("touchend",function(event){
		// 	// console.log(3)

		// 	var finger = event.touches[0];
		// 	//设置信号量
		// 	nowtranslateX = temp;
		// 	//设置一个目标值
		// 	var target = nowtranslateX + 5 * d;

		// 	// console.log("我到了" + nowtranslateX + "但是我不满意，我还要运动到" + target);

		// 	//根据情况设置transition，增加回弹效果
		// 	if(target > 0){
		// 		unit.style.transition = "all 0.6s cubic-bezier(.34,1.81,.51,1.68) 0s";
		// 		target = 0;
		// 	}else if(target < -100 * 16 + 10 + w){
		// 		unit.style.transition = "all 0.6s cubic-bezier(.34,1.81,.51,1.68) 0s";
		// 		target = -100 * 16 + 10 + w;
		// 	}else{
		// 		//设置过渡，然后让元素往目标冲锋即可
		// 		unit.style.transition = "all 0.6s cubic-bezier(0.2, 1.05, 0.58, 1.01) 0s";
		// 	}
		// 	//移动
		// 	unit.style.transform = "translateX(" + target + "px)";

		// 	nowtranslateX = target;
		// },true);
		// }

		// },
		// swipe:function TouchCarousel (id){
		// 	this.dom = document.getElementById(id);
		// 	//this.imageList = this.dom.querySelector("#"+id+" li");
		// 	this.lis = this.dom.querySelectorAll("#"+id+" li");
		// 	this.lislength = this.lis.length;
		// 	//this.circlesLis = this.dom.querySelectorAll(".circlelist li");
		// 	//this.images = this.dom.querySelectorAll("img");

		// 	var me = this;
		// 	this.nowidx = 0;
		// 	this.next = this.nowidx + 1 <= this.lislength - 1 ? this.nowidx + 1 : 0; 
		// 	this.prev = this.nowidx - 1 >= 0 ? this.nowidx - 1 : this.lislength - 1; 

		// 	//this.width = parseInt(window.getComputedStyle(this.dom)["width"];
		// 	this.width =parseInt( window.getComputedStyle(this.dom).width)
		// 	for(var i = 0; i < this.lislength; i++){
				

		// 		this.lis[i].style.transform = "translateX(" + (this.width) + "px)";

		// 	}
		// 	this.lis[0].style.transform = "translateX(" + 0 + "px)";

		// 	setTimeout(function(){
		// 	for(var i = 0; i < this.lislength; i++){
		// 		this.lis[i].style.transition = "all 1s ease 0s";
		// 	}
		// 	},1000)
			
			

		// 	this.dom.addEventListener("touchstart",function(event){
		// 		me.touchStarthandler(event);
		// 	},false)
		// 	this.dom.addEventListener("touchmove",function(event){
		// 		me.touchMovehandler(event);
		// 	},false)
		// 	this.dom.addEventListener("touchend",function(event){
		// 		me.touchEndhandler(event);
		// 	},false)
		// 	TouchCarousel.prototype.touchStarthandler = function(event){
		// 		//console.log(event);
		// 		var finger = event.touches;
		// 		this.startX = finger[0].clientX;
		// 		this.startT = event.timeStamp;
		// 	}

		// 	TouchCarousel.prototype.touchMovehandler = function(event){
				
		// 		var finger = event.touches;
		// 		this.dx = finger[0].clientX - this.startX;
		// 		// this.lis[this.nowidx].style.transition = "none";
		// 		// this.lis[this.prev].style.transition = "none";
		// 		// this.lis[this.next].style.transition = "none";

		// 		// this.lis[this.nowidx].style.transform = "translateX(none)";
		// 		// this.lis[this.next].style.transform = "translateX(none)";
		// 		// this.lis[this.prev].style.transform = "translateX(none)";
		// 		//this.lis[this.nowidx].style.transition = "none";
		// 		//1.效果点 触摸点可控界面
		// 		this.lis[this.nowidx].style.transform = "translateX(" + this.dx + "px)";
		// 		this.lis[this.next].style.transform = "translateX(" + (this.width + this.dx) + "px)";
		// 		this.lis[this.prev].style.transform = "translateX(" + (-this.width + this.dx) + "px)";
		// 		//2.效果点 优化触摸操作(time,distance)
				

		// 	}

		// 	TouchCarousel.prototype.touchEndhandler = function(event){
		// 		//console.log(event);
		// 		var dt = event.timeStamp - this.startT;
		// 		console.log(this.prev,this.nowidx,this.next)
		// 		// this.lis[this.nowidx].style.transition = "all 1s ease 0s";
		// 		// this.lis[this.prev].style.transition = "all 1s ease 0s";
		// 		// this.lis[this.next].style.transition = "all 1s ease 0s";
		// 		if(this.dx < -140 || this.dx < -30 && dt < 300){
		// 			this.lis[this.nowidx].style.transform = "translateX(" + (-this.width) + "px)";
		// 			this.lis[this.next].style.transform = "translateX(" + 0 + "px)";
		// 			this.nowidx = ++this.index > this.lislength ? this.lislength : ++this.nowidx;
		// 			console.log('ok');
		// 		}else if(this.dx > 140 || this.dx > 30 && dt < 300){
		// 			this.lis[this.nowidx].style.transform = "translateX(" + this.width + "px)";
		// 			this.lis[this.prev].style.transform = "translateX(" + 0 + "px)";
		// 			this.nowidx = --this.index < 0 ? 0 : --this.nowidx;
		// 		}else{
		// 			this.lis[this.nowidx].style.transform = "translateX(" + 0+ "px)";
		// 			this.lis[this.next].style.transform = "translateX(" + this.width + "px)";
		// 			this.lis[this.prev].style.transform = "translateX(" + (-this.width) + "px)";
		// 		}

		// 	}
		 //}
	}
	
	return Util
})
define(['route/route'],function(route){
	route()
	window.onhashchange = route
});
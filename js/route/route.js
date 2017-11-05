define(['modules/app'],function(app){
	function route(){
		var hash = location.hash;
		hash= hash.slice(1).replace(/^\//,'').split('/');
		console.log(hash);

		var map = {
			'home':true,
			'list':true,
			'product':true,
		}
		if(map[hash[0]]){
			app.view = hash[0];
		}else{
			app.view = 'home';
		}
		app.query = hash.slice(1);
	}
	return route
})
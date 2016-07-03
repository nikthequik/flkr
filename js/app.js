var app = angular.module("flkr", ['ngAnimate']);

app.controller("mainCtrl", function($http, $scope, $q, $timeout){
	var vm = this;
	vm.exeSearch = function(){
		vm.notify = true;
		vm.currentTag = vm.searchTag;
		getQuery();
	};
	function getQuery() {
		var url = "https://api.flickr.com/services/rest";
		var params = {
		    method: 'flickr.photos.search',
		    api_key: "eca4a39f4530784cab19d49b88b65d45",
		    tags: vm.searchTag,
		    format: 'json',
		    nojsoncallback: 1
		};
		$http({
			url: url,
			method: 'GET',
			params: params
		})
		.then(function(res){
			vm.results = res.data.photos.photo;
			vm.success = true;
			console.log(vm.results);
		}, function(res){
			console.log(res.error);
		});
	};


	vm.results = [];
	vm.searchTag = "";
	vm.notify = false;
	vm.success = false;
		
});
/*getRecentEndpoint  https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=74585bd94ec3f63f8ce89fc71b7e6a66&format=json&nojsoncallback=1&auth_token=72157670536367065-969c56630cf9e302&api_sig=e0e658b58b7e98130496c7c4dbeb8275*/

/*		oAuth Setup
		var oauth = new OAuth.OAuth(
	      'https://www.flickr.com/services/oauth/request_token',
	      'https://www.flickr.com/services/oauth/access_token',
	      'eca4a39f4530784cab19d49b88b65d45',
	      '55227b9cd02fdf12',
	      '1.0A',
	      null,
	      'HMAC-SHA1'
    	);
   		oauth.get(
	      'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent',
	      'eca4a39f4530784cab19d49b88b65d45', //test user token 
	      '55227b9cd02fdf12', //test user secret             
	      function (data){      
	        console.log(data);   
	    });   */

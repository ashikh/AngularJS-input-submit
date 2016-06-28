var app=angular.module('myapp', []);
	app.controller('mycontroller', function($scope)
		{
	$scope.submitAll=function(){
		var name1=document.getElementById('name').value;
		var place1=document.getElementById('place').value;
		document.getElementById('names').innerHTML=name1;
		document.getElementById('places').innerHTML=place1;
	}
	});

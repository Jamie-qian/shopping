angular.module("myApp",[])
.controller("demo",["$scope",function($scope){
	$scope.counter = 0;
	$scope.price = 99;
	$scope.add = function(){
		this.counter++;
		this.price = this.price+99;
	}
	$scope.remove = function(){
		this.counter--;
		this.price = this.price-99;
	}

}])
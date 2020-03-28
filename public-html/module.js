var app = angular.module ('shop', []);

app.controller('ctr', function($scope) {
	
     $scope.list=[
             {name:"blackberry", price:900, active:false},
             {name:"samsung", price:800, active:false},
             {name:"Iphone", price:700, active:false},
             {name:"Nokia", price:600, active:false},
             {name:"Lenovo", price:400, active:false}
     ];


$scope.addToList = function(p){
	p.active = !p.active;

}
     
     $scope.total = function(){

     	var total = 0;

     	angular.forEach($scope.list , function(p){
     		if (p.active==true)
     		{
     			total = total + p.price;
     		}
     	});

     	return total;
     }

});
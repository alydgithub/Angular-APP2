angular.module('app2.templates',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
   
  $routeProvider.
  when('/templates',
  {
      templateUrl:'templates/templates.html',
      controller:'TemplatesCtrl'
  }).
   when('/templates/:id',
  {
      templateUrl:'templates/template-details.html',
      controller:'TemplatesDetailsCtrl'
  });

}])

.controller('TemplatesCtrl',['$scope','$http',function($scope,$http){
  $http.get("/templates/templates.json")
  .success(function(response){
    console.log(response);
    $scope.templates= response;
  })
  .error(function(err){
      console.log(err);
  });

}])


.controller('TemplatesDetailsCtrl',['$scope','$http','$routeParams','$filter',function($scope,$http,$routeParams,$filter){
  var id= $routeParams.id;
  $http.get("/templates/templates.json")
  .success(function(response){
    
  $scope.template = $filter('filter')(response, function(d){
			return d.id == id;
		})[0];
	$scope.mainImage = $scope.template.images[0].name;




  })
  .error(function(err){
      console.log(err);
  });

  $scope.showLargeImg = function(image)
  {
    $scope.mainImage = image.name;
  } 


}]);



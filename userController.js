/**
 * http://usejsdoc.org/
 */
var app = angular.module('userApp',[]);
function userController($scope,$http,$location){
	$scope.formData={};
	$scope.createUser=function(){
		/*$http.post('/api/createUser',$scope.formData).error(function(data){
			console.log('Problem in creating user '+JSON.stringify(data));
		});*/
		$http.post('/api/createUser',$scope.formData).error(function(data){
			
			console.log('Problem in creating user '+JSON.stringify(data));
		}).success(function(data){
			console.log('User successfully created'+JSON.stringify(data));
			//$window.location.href = '/profile';
			//$http.get('/profile',data.userData);
			//$location.url('/profile',data.userData);
			$location.path('/profile');
		});
	}
}

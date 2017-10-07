/*
 * UserController
 */
app.controller('UserController',function(UserService,$scope,$rootScope,$location,$cookieStore){
	$scope.user={}
	if($rootScope.currentUser!=undefined){
	UserService.getUser().then(function(response){
		$scope.user=response.data;
	},function(response){
		console.log(response.status)
		$location.path('/home')
		
	})
	}
	
	$scope.registerUser=function(){
		UserService.registerUser($scope.user).then(function(response){
			$rootScope.message="Registered successfully.. please login again"
				/*console.log($rootScope.message)*/
			$location.path('/login')
		},function(response){
			console.log(response.status)
			console.log(response.data)
			$scope.error=response.data
			$location.path('/register')
		})
	}
	
$scope.validateUser=function(){
		
		
		UserService.validateUser($scope.user).then(function(response){
			console.log(response.data)
			$rootScope.currentUser=response.data
			$cookieStore.put("currentUser",response.data)
			$location.path('/home')
		},function(response){
			$scope.error=response.data
			console.log($scope.error)
			console.log(response.status)
			$location.path('/login')
		})
	}
	/*$rootScope.logout=function(){
        UserService.logout().then(function(response){
        	$rootScope.logoutSuccess="Loggedout Successfully.."
        		delete $rootScope.currentUser
        		$cookieStore.remove("currentUser")
        		$location.path('/login');
        },function(response){
        	$scope.error=response.data
        	$location.path('/login')
        })		
	}*/
	
	$scope.updateUser=function(){
		UserService.updateUser($scope.user).then(function(response){
			alert("updated successfully")
			$location.path('/home')
		},function(response){
			console.log(response.data)
			if(response.status==401)
				$location.path('/login')
			$location.path('/editprofile')
		})
	}
	
})


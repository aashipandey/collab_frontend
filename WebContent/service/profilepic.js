/*
*//**
 * BlogPostService
 *//*

app.factory('ProfilePicService',function($http){
	
	var profilePicService={};
	
	profilePicService.uploadProfilePic=function(profilePicture){
		
		return $http.post("http://localhost:8080/collab_backend/uploadprofilepic",profilePicture)
		
	}
	
	profilePicService.getProfilePic=function(username){
		
		return $http.get("http://localhost:8080/collab_backend/getimage/{username}"+username)
		
	}
	
	
})*/

/**
 * FriendService
 */

app.factory('FriendService',function($http){
	
	var friendService={};
	
	friendService.listOfSuggestedUsers=function(){
		return $http.get("http://localhost:8080/collab_backend/getsuggestedusers")		
	}
	
	friendService.friendRequest=function(toId){
		return $http.post("http://localhost:8080/collab_backend/friendrequest/"+toId)
	}
	
	friendService.listOfPendingRequests=function(){
		return $http.get("http://localhost:8080/collab_backend/getpendingrequests/")
	}

	friendService.getUserDetails=function(fromId){
		return $http.get("http://localhost:8080/collab_backend/getuserdetails/"+fromId)
	}
	
	friendService.updatePendingRequest=function(pendingRequest){
		return $http.put("http://localhost:8080/collab_backend/updatependingrequest/",pendingRequest)
	}
	
	friendService.listOfFriends=function(){
		return $http.get("http://localhost:8080/collab_backend/listoffriends")
	}
	
	return friendService;
})
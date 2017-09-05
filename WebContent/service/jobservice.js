app.factory('JobService',function($http){
	
	var jobService={}
	
	jobService.saveJob=function(job){
		
		console.log(job)
	  return  $http.post("http://localhost:8080/collab_backend/savejob",job)
	  
	}
	
	jobService.getAllJobs=function(){
		
		 return  $http.get("http://localhost:8080/collab_backend/getalljobs")
	}
	
	jobService.getJobDetails=function(id){
		
		 return  $http.get("http://localhost:8080/collab_backend/getjobbyid/"+id)
	}
	
	return jobService;
})
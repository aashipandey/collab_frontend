
/**
 * BlogPostService
 */

app.factory('BlogPostService',function($http){
	
	var blogPostService={};
	
	blogPostService.addBlogPost=function(blogPost){
		
		return $http.post("http://localhost:8080/collab_backend/saveblogpost",blogPost)
	}
	
	blogPostService.getBlogPostsWaitingForApproval=function(){
		return $http.get("http://localhost:8080/collab_backend/getblogposts/"+0)
	}
	
	blogPostService.getBlogPostsApproved=function(){
		return $http.get("http://localhost:8080/collab_backend/getblogposts/"+1)
	}
	
	blogPostService.getBlogPostById=function(id){
		return $http.get("http://localhost:8080/collab_backend/getblogpostbyid/"+id)
	}
	
	blogPostService.updateBlogPost=function(blogPost){
		return $http.put("http://localhost:8080/collab_backend/updateblogpost",blogPost)
	}
	blogPostService.addComment=function(blogComment){
	/*	console.log(blogComment)*/
		return $http.post("http://localhost:8080/collab_backend/addblogcomment",blogComment)
	}
	blogPostService.getBlogComments=function(blogPostId){
		return $http.get("http://localhost:8080/collab_backend/getblogcomments/"+blogPostId)
	}
	return blogPostService;
})
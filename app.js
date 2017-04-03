var Twitter=angular.module('Twitter',['ngResource']);
Twitter.controller('TwitterCtrl',function($scope,$http){
   
       $scope.fetch=function(){
    $http.get("https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full&apikey=45f7b55b/")
  .success(function(result){ $scope.details = result;
                             console.log(result);
                             });

  $http.get("https://www.omdbapi.com/?s=" + $scope.search+'&apikey=45f7b55b/')
  .success(function(result){ $scope.related = result;
                            
                           });
          
}
      var sideBar=localStorage.getItem('val');
  if(typeof sideBar !== 'undefined' && sideBar !== null) 
      {
          console.log('Hello');
           $scope.search=localStorage.getItem('val');
         
        $scope.fetch();
          
      }
    $scope.$watch('search',function()
                    {
        if($scope.search != undefined && $scope.search!="" ){
           localStorage.setItem('val',$scope.search);
            $scope.fetch();
        }
        
       });
    
   $scope.fetchById=function(movie)
   {
       localStorage.setItem('val',movie.Title);
       localStorage.setItem('imdb',movie.imdbID);
       
     $http.get("https://www.omdbapi.com/?i=" +movie.imdbID+'&apikey=45f7b55b/')
    .success(function(result){ $scope.details = result;
                             console.log(result);
                             });
    
  $http.get("https://www.omdbapi.com/?s=" + $scope.search+'&apikey=45f7b55b/')
  .success(function(result){ $scope.related = result;
                            
                           });  
        
   }
 
     $scope.changebox=function()
    {
        var input = $('input[type="text"]');
        input.css({width:'400px'});
         
        $('#blurme').css("filter","blur(2px)");

    }
    
    $scope.update=function(movie)
    {
        $scope.search=movie.Title;
       
    }
    
    $scope.clear=function()
    {
        localStorage.clear();
    }
   
    $scope.change=function(){
    $('.modal').modal({
                    show:true
                });
     }
    $scope.check=function()
    {
        if(typeof sideBar !== 'undefined' && sideBar !== null)
            {
                return true;
            }
        return false;
    }
    
    
});
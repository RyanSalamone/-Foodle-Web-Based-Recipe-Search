
function searchFood(){
  
  var search = $("#search").val().trim();
  var queryURL = "https://api.edamam.com/search?q=" + search + "&app_id=$c4810d21&app_key=$e19d9501e0d8f713b5e6f1eb31af4ee2";
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response){ 
    console.log(response);
    
    var results = response.hits;
    
    for (var i = 0; i < results.length; i++) {
      var aLink = $("<a>");
      
      var imageEl = $("<img>");
      
      imageEl.attr("src", results[i].recipe.image);
      
      $("#img").append(imageEl);
      
      $("#recipeName").text(results[0].recipe.label);
      
      $("#healthLabels").text(results[0].recipe.healthLabels);
      
      $("#recipeInfo").text(results[0].recipe.ingredientLines);
      
      $("#infoLink").attr("href", results[0].recipe.url);
      
      $("#infoLink").append(aLink);
      
      
      
    }
    console.log(results)
  }); 
}
  // the visibility function in our click button
  (function($) {
    $.fn.invisible = function() {
      return this.each(function() {
        $(this).css("visibility", "hidden");
      });
    };
    $.fn.visible = function() {
      return this.each(function() {
        $(this).css("visibility", "visible");
      });
    };
  }(jQuery));
  
  $(document).ready(function(){
    // sets recipe div to invisible till search is clicked
    $("#cardEl").invisible();
    $("#img").invisible();


  });
  
  $("#searchBtn").on('click', function(event) {

    
    event.preventDefault();
    
    searchFood();
    
    // visible recipe info after 'click'
    $("#cardEl").visible();
    
    $("#img").visible();
    
    // creates the 'more details' link for recipe info
  
  });

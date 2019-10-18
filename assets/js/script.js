

object = {
    searchTerms: String,
    numberOfPages: Number,
    sortBy: Boolean, 
}

function executeFunction(data) {
    var pagesCount = data.numberOfPages;
    var searchList = data.searchTerms;
    var sortedBy = data.sortBy;
    var apiKey = c746a1cb0d80b9ef3f8ab026e25ff5b4;
}


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {

    for (var i = 0; i <pagesCount; i++){
        console.log(response.response);
        title = response.response.title;
        sourceUrl = response.response.source_url;
        console.log(heading);
         console.log(webUrl);
    }

});

$(document).ready(function() {
    $(document).on('click','button', function(event) {
    //  $(".dailyPlan").submit( function(event) {
      event.preventDefault();
      var searchTerms = $('#');
      // need to make select box
      var numRecord = $('#');
      // input validation
    
      // validation here
      var queryParamObj = {
        searchTerm: searchTerm.val(),
        numberOfRecords: numRecord.val(),
        startYr: startYr.val(),
        startYr: endYr.val(),
      }
      var resultData = executeQuery(queryParamObj);
      // draw_results(resultData);
    });
   }
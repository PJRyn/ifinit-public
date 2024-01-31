/*
-add date in light grey
*/
$.getJSON('metadata/index.json', function(data) {
  data.sort(function(a, b){
  return a.id - b.id;
  }).reverse();
  for (var i = 0; i <= data.length; i++){
    if (data[i] !== undefined && data[i] !== null) {
      $('#posts').append($("<br />"))
      .append("<div> <a href="+data[i].link+">"+">"+data[i].title+"</a> </div>" )
      .append("<br />"+"+======================+"+"<p>"+`  ${data[i].abstract}`+"</p>");
    }
  }
});

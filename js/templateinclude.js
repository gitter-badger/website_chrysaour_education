$(document).ready(function(){ 
  $.get("template/topbar.html", function(data) {
    $("#topbar").html(data);
  });
}); 

$(document).ready(function(){ 
  $.get("template/navbar.html", function(data) {
    $("#navbar").html(data);
  });
}); 

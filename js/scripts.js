
var gender, hobby, shoe, other, sarah, shia;

var calculate = function(gender, hobby, shoe){
  if (gender === "male" && hobby === "eating" && shoe === "small") {
    sarah();
  }
  else if (gender === "female" && hobby === "pokemon" && shoe === "big") {
    shia();
  }
  else {
    other();
  };
};

$(document).ready(function() {

  sarah = function() {
      $("#shia, #sad").hide();
      $("#sarah").show();
  };
  shia = function() {
    $("#sarah, #sad").hide();
    $("#shia").show();
  };
  other = function() {
    $("#shia, #sarah").hide();
    $("#sad").show();
  };
  $("#submit").click(function() {
    gender = $("#sex").val();
    hobby = $("#hobby").val();
    shoe = $("#shoe").val();
    calculate(gender, hobby, shoe);
  });
});

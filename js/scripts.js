$(document).ready(function() {
  var gender, hobby, shoe;
  $("#submit").click(function() {
    gender = $("#sex").val();
    hobby = $("#hobby").val();
    shoe = $("#shoe").val();

    if (gender === "male" && hobby === "eating" && shoe === "small") {
      $("#shia, #sad").hide();
      $("#sarah").show();
    }
    else if (gender === "female" && hobby === "pokemon" && shoe === "big") {
      $("#sarah, #sad").hide();
      $("#shia").show();
    }
    else {
      $("#shia, #sarah").hide();
      $("#sad").show();
    };
  });
});

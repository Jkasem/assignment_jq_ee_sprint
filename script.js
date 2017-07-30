$(document).ready(function() {

//display remaining characters in text field
  $(".form-control").keyup(function(){
    if(this.value.length > $(this).prop("maxlength")) {
      return false;
    }
    if(this.value.length <= 0) {
      $(this).next("span").addClass("hidden")
    }
    if(this.value.length > 0) {
      $(this).next("span").removeClass("hidden red")
      $(this).next("span").html("Characters Remaining: " + ($(this).prop("maxlength") - this.value.length));
    }
    $(this).focusout(function(){
      $(this).next("span").addClass("hidden")
    });
  });

//password matching
  $("#pwMatch").keyup(function() {
   if ($("#pw").val().length > 0) {
      if ($("#pw").val() === $("#pwMatch").val() || $("#pwMatch").val().length <= 0) {
        $("#pwMatchText").addClass("hidden");
      } else {
        $("#pwMatchText").removeClass("hidden red");
      }
    }
  });

//submit form validation
  $("#formSubmit").click(function(e) {
    if ($("#pw").val().length < 6) {
      e.preventDefault();
      $("#pw").next("span").addClass("red")
      $("#pw").next("span").removeClass("hidden")
      $("#pw").next("span").html("Enter at least 6 characters")
    };
    if ($("#pwMatch").val().length < 6) {
      e.preventDefault();
      $("#pwMatch").next("span").addClass("red")
      $("#pwMatch").next("span").removeClass("hidden")
      $("#pwMatch").next("span").html("Enter at least 6 characters")
    };
    if ($("#inputUser").val().length < 4) {
      e.preventDefault();
      $("#inputUser").next("span").addClass("red")
      $("#inputUser").next("span").removeClass("hidden")
      $("#inputUser").next("span").html("Enter at least 4 characters")
    };
    if ($("#comment").val().length < 4) {
      e.preventDefault();
      $("#comment").next("span").addClass("red")
      $("#comment").next("span").removeClass("hidden")
      $("#comment").next("span").html("Enter at least 4 characters")
    };
    if ($("#pw").val() != $("#pwMatch").val()) {
      e.preventDefault();
      $("#pwMatchText").removeClass("hidden");
      $("#pwMatchText").addClass("red")
    };
  });

//drop down menu
  $("li").click(function(){
    $("#selected").html($(this).text())
  });
});

$(document).ready(function() {
  
  /*
  $(".page-btn").click(function() {
    $(".section").css("padding-top", "70px");
  });
  */
  
  //
  // scroll animation start --- //
  var $root = $("html, body");
  var nav = $("nav"),
      nav_height = nav.outerHeight();

  $(".page-btn").click(function() {
    $root.animate({
      scrollTop: $($.attr(this, 'href')).offset().top - nav_height
    },700);
    return false
  });

  // Scroll animation #Home
  
  $("#brand").click(function() {
    $root.animate({
      scrollTop: 0
    },700);
    return false
  });
  
  // scrollspy for highlighting current section on navbar //
    
  $('body').scrollspy({
      target: '#navbar-1',
      offset: 100
  });
  
});
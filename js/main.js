




  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("nav").style.padding = "14px 10px";
      document.getElementById("nav").style.background = "whitesmoke";
      document.getElementById("nav").style.color = "#333";
      document.getElementById("robbins").style.color = "#333";
      document.getElementById("mel").style.color = "#333";

      var navLink = document.getElementsByClassName("nav-link")

      for(var i =0 ; i<navLink.length;i++){
          navLink[i].style.color="#333"
      }

  
    } else {
      document.getElementById("nav").style.padding = "20px 10px";
      document.getElementById("nav").style.background = "black";
      document.getElementById("robbins").style.color = "whitesmoke";
      document.getElementById("mel").style.color = "whitesmoke";

      var navLink = document.getElementsByClassName("nav-link")

      for(var i =0 ; i<navLink.length;i++){
          navLink[i].style.color="whitesmoke"
      }
    }
  }
 

 
     // WOW ANIMATION
     new WOW({ mobile: false }).init();



$(window).on("scroll", function () {
    if (document.body.scrollTop+200 >=  $(".enough-hover").offset().top || document.documentElement.scrollTop+200 >= $(".enough-hover").offset().top) {
      $(".enough-hover").css({width: "100%"},100);
     $(".enough-hover-header").css("visibility","hidden")

    }
    else{
        $(".enough-hover").css({width:"0"},700);
        $(".enough-hover-header").css("visibility","visible")
    }
    console.log("hello fatma")
  });






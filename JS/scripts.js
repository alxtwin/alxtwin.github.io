$(".terminal").click(function () {
    $('window[class^="window"]').css("z-index", "0");
    $(this).css("z-index", "2");
  });
  $(".overlay").click(function () {
    // make div 2 front of the screen
    $('window[class^="window"]').css("z-index", "0");
    $(this).css("z-index", "0");
  });
  $(".projects").click(function () {
    // make div 3 front of the screen
    $('window[class^="window"]').css("z-index", "0");
    $(this).css("z-index", "1");
  });

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  $(function () {
    $("#box1").draggable({ containment: "#containment-wrapper", scroll: false });
    $("#box2").draggable({ containment: "#containment-wrapper", scroll: false });
    $("#box3").draggable({ containment: "#containment-wrapper", scroll: false });
    $("#tux").draggable({ containment: "#containment-wrapper", scroll: false });
  });

  $(function () {
    $("#box1").resizable();
    $("#box2").resizable();
    $("overlay1").resizable();
    $("#box3").resizable();
  });
  

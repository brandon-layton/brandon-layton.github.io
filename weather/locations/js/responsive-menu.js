/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function responsiveMenu() {
    var x = document.getElementById("navbar");
    var y = document.getElementById("footer");
    if (x.className === "hidden") {
      x.className = "shown";
      y.className = "large-footer";
    } else {
      x.className = "hidden";
      y.className = "small-footer";
    }
  } 
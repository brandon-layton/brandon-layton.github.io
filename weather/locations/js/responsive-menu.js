/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function responsiveMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "hidden") {
      x.className = "shown";
    } else {
      x.className = "hidden";
    }
  } 
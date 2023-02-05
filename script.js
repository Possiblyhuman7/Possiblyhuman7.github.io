/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
function hamburger() {
  var x = document.getElementById("myNavleft");
  if (x.className === "navleft") {
    x.className += " responsive";
  } else {
    x.className = "navleft";
  }
}

function active() {
  var header = document.getElementById("myNavleft");
  var btns = header.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}